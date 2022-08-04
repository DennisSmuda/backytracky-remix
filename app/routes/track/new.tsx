import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import type { MouseEvent } from "react";
import { useRef } from "react";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useEffect, useState } from "react";
import TextInput from "~/components/TextInput";
import {
  increaseDuration,
  decreaseDuration,
  converDurationToBars,
} from "~/music/utils";
import ChordBeat from "~/music/ChordBeat";
import { getUser, requireUserId } from "~/utils/session.server";
import { createTrack } from "~/utils/tracks.server";
import ChordEditor from "~/components/track/ChordEditorModal";
import TrackEditor from "~/components/track/TrackEditor.client";
import { ClientOnly } from "remix-utils";

type Duration = "1n" | "2n" | "4n";
const sampleChordConfig = {
  root: "C",
  type: "maj",
  extension: "7",
  note: ["C3", "E3", "G3", "B3"],
  duration: "4n" as Duration,
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
  const chords = form.get("chords");

  if (typeof trackname !== "string" || typeof chords !== "string") {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const newTrack = await createTrack(trackname, chords, userId);
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
  const actionData = useActionData();

  const [isChordEditorOpen, setIsChordEditorOpen] = useState(false);
  const [chords, setChords] = useState<Array<ChordBeat>>([]);
  const selectedChord = useRef<ChordBeat | null>(null);

  useEffect(() => {
    setChords([new ChordBeat(sampleChordConfig)]);
  }, []);

  const editChord = (e: MouseEvent, chord: ChordBeat) => {
    e.preventDefault();
    selectedChord.current = chord;
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

  const getNextChordTime = (previousChord: ChordBeat) => {
    const c = previousChord;
    const duration = converDurationToBars(c.duration);

    let nextBeat = (c.beat as number) + duration;
    let nextBar = c.bar as number;
    if (nextBeat >= 4) {
      nextBar += 1;
      nextBeat -= 4;
    }

    let nextSixteenth = 0;

    return {
      bar: nextBar,
      beat: nextBeat,
      sixteenth: nextSixteenth,
    };
  };

  const addChord = (e: MouseEvent) => {
    e.preventDefault();

    const newTime =
      chords.length > 0
        ? getNextChordTime(chords[chords.length - 1])
        : { bar: 0, beat: 0, sixteenth: 0 };

    const newChord = new ChordBeat({
      root: "C",
      type: "maj",
      extension: "7",
      note: ["C3", "E3", "G3", "B3"],
      duration: "4n",
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
            <TextInput
              name="trackname"
              label="New Trackname"
              placeholder="My awesome backing track"
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

            <div className="overflow-x-scroll">
              <fieldset className="sheet-grid overflow-x-auto">
                <legend>Sheet - one full row = count to 4</legend>
                <ClientOnly fallback={<p>Loading...</p>}>
                  {() => (
                    <TrackEditor
                      chords={chords}
                      shortenChord={shortenChord}
                      lengthenChord={lengthenChord}
                      editChord={editChord}
                      deleteChord={deleteChord}
                    />
                  )}
                </ClientOnly>
              </fieldset>
            </div>
            <button className="button" onClick={addChord}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>add chord</span>
            </button>

            <input
              disabled={chords.length === 0}
              type="submit"
              className="button col-span-4"
              value="save track"
            />
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
