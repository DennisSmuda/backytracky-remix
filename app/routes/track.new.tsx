import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import type { MouseEvent } from "react";
import { useRef, useEffect, useState, Suspense } from "react";
import { redirect, json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import TextInput from "~/components/TextInput";
import {
  increaseDuration,
  decreaseDuration,
  getNextChordTime,
} from "~/music/utils";
import ChordBeat from "~/music/ChordBeat";
import { getUser, requireUserId } from "~/utils/session.server";
import { createTrack } from "~/utils/tracks.server";
import ChordEditor from "~/components/track/ChordEditorModal";
import TrackEditor from "~/components/track/TrackEditor.client";

type Duration = "1n" | "2n" | "4n";
const sampleChordConfig = {
  root: "C",
  type: "maj",
  extension: "7",
  note: ["C3", "E3", "G3", "B3"],
  duration: "1n" as Duration,
  bar: 0,
  beat: 0,
  sixteenth: 0,
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  return json({ user });
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const form = await request.formData();
  const trackname = form.get("trackname");
  const description = form.get("description");
  const authorName = form.get("author-name");
  const bpm = form.get("bpm");
  const chords = form.get("chords");

  if (
    typeof trackname !== "string" ||
    typeof chords !== "string" ||
    typeof description !== "string" ||
    typeof authorName !== "string" ||
    typeof bpm !== "string"
  ) {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const newTrack = await createTrack(
    trackname,
    description,
    chords,
    userId,
    authorName,
    bpm
  );
  if (!newTrack) {
    return badRequest({
      formError: `couldn't create track!`,
    });
  }

  return redirect(`/track/${newTrack.id}`);
};
const badRequest = (data: any) => json(data, { status: 400 });

/**
 * New Track Route
 *
 * @returns React.Component
 */
export default function NewTrackRoute() {
  const actionData = useActionData<typeof action>();
  const loaderData = useLoaderData<typeof loader>();

  const [isChordEditorOpen, setIsChordEditorOpen] = useState(false);
  const [chords, setChords] = useState<Array<ChordBeat>>([]);
  const selectedChord = useRef<ChordBeat | null>(null);
  const lastChord = useRef<ChordBeat | null>(null);

  useEffect(() => {
    setChords([new ChordBeat(sampleChordConfig)]);
  }, []);

  const editChord = (e: MouseEvent, chord: ChordBeat) => {
    e.preventDefault();
    selectedChord.current = chord;
    lastChord.current = chord;
    setIsChordEditorOpen(true);
  };

  const finishEditingChord = () => {
    selectedChord.current = null;
    setIsChordEditorOpen(false);
    setChords([...chords]);
  };

  const shortenChord = (e: MouseEvent, chord: ChordBeat) => {
    e.preventDefault();
    chord.duration = decreaseDuration(chord.duration);
    const chordIndex = chords.indexOf(chord);
    updateFollowingChords(chordIndex + 1);

    setChords([...chords]);
  };

  const lengthenChord = (e: MouseEvent, chord: ChordBeat) => {
    e.preventDefault();
    chord.duration = increaseDuration(chord.duration);
    const chordIndex = chords.indexOf(chord);
    updateFollowingChords(chordIndex + 1);

    setChords([...chords]);
  };

  const updateFollowingChords = (index: number) => {
    for (let i = index; i < chords.length; i++) {
      let previousChord = chords[i - 1];
      chords[i] = new ChordBeat({
        ...chords[i],
        ...getNextChordTime(previousChord),
      });
    }
  };

  const updateChordTimes = () => {
    chords[0] = new ChordBeat({
      ...chords[0],
      bar: 0,
      beat: 0,
      sixteenth: 0,
    });
    updateFollowingChords(1);
  };

  const deleteChord = (e: MouseEvent, chord: ChordBeat) => {
    e.preventDefault();
    const chordIndex = chords.indexOf(chord);
    chords.splice(chordIndex, 1);
    if (chords.length) updateChordTimes();

    setChords([...chords]);
  };

  const addChord = (e: MouseEvent) => {
    e.preventDefault();

    const newTime =
      chords.length > 0
        ? getNextChordTime(chords[chords.length - 1])
        : { bar: 0, beat: 0, sixteenth: 0 };

    const newChord = new ChordBeat({
      root: lastChord?.current?.root || "C",
      type: lastChord?.current?.type || "maj",
      extension: lastChord?.current?.extension || "7",
      note: lastChord?.current?.note || ["C3", "E3", "G3", "B3"],
      duration: lastChord?.current?.duration || "1n",
      ...newTime,
    });

    if (chords?.length) {
      setChords([...chords, newChord]);
    } else {
      setChords([newChord]);
    }
  };

  return (
    <main>
      <section>
        <div className="container max-w-4xl mx-auto pt-8">
          <Form className="flex flex-col gap-4" method="post">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-5">
                <TextInput
                  name="trackname"
                  label="New Trackname"
                  placeholder="My awesome backing track"
                  required
                  actionData={actionData}
                />
              </div>

              <div className="col-span-1">
                <TextInput
                  type="number"
                  name="bpm"
                  label="BPM"
                  placeholder="120"
                  required
                  actionData={actionData}
                />
              </div>
            </div>

            <TextInput
              name="description"
              label="Description"
              placeholder="Short but sweet progression in C major"
              required
              actionData={actionData}
            />
            <input
              name="chords"
              type="text"
              value={JSON.stringify(chords)}
              className="hidden"
              readOnly
            />
            <input
              name="author-name"
              type="text"
              value={loaderData.user.username}
              className="hidden"
              readOnly
            />

            <div className="overflow-x-scroll">
              <fieldset className="sheet-grid sheet-grid--editor overflow-x-auto">
                <legend>Sheet - one full row = count to 4</legend>
                <Suspense fallback={<p>Loading...</p>}>
                  <TrackEditor
                    chords={chords}
                    shortenChord={shortenChord}
                    lengthenChord={lengthenChord}
                    editChord={editChord}
                    deleteChord={deleteChord}
                  />
                </Suspense>
              </fieldset>
            </div>

            <button className="button" onClick={addChord}>
              <span>add chord</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <label className="form-row" htmlFor="newChord">
              <input
                name="newChord"
                disabled={chords.length === 0}
                type="submit"
                className="button col-span-4"
                value="save track"
              />
            </label>
            <div id="form-error-message">
              {actionData?.formError ? (
                <p className="form-validation-error text-center" role="alert">
                  {actionData.formError}
                </p>
              ) : null}
            </div>
          </Form>
        </div>
      </section>

      <ChordEditor
        isOpen={isChordEditorOpen}
        currentChord={selectedChord.current}
        onClose={() => finishEditingChord()}
      />
    </main>
  );
}
