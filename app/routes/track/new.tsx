import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import TextInput from "~/components/TextInput";
import type { IChordBeat } from "~/components/track/Music";
import { increaseDuration } from "~/components/track/Music";
import { decreaseDuration } from "~/components/track/Music";
import { ChordBeat } from "~/components/track/Music";
import { getUser, requireUserId } from "~/utils/session.server";

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
  const values = Object.fromEntries(form);
  // const password = form.get("password");
  console.log("=== === ===", values);
  console.log("New Track Name", trackname);
  console.log("New Track User", userId);
  console.log("New Track Chords", chords);

  return badRequest({
    formError: `not implemented`,
  });
};
const badRequest = (data: any) => json(data, { status: 400 });

export default function NewTrackRoute() {
  const { user } = useLoaderData();
  let actionData = useActionData();
  const [chords, setChords] = useState<Array<ChordBeat>>([]);

  useEffect(() => {
    setChords([new ChordBeat(sampleChordConfig)]);
  }, []);

  const editChord = (e: MouseEvent, chord: IChordBeat) => {
    e.preventDefault();
    // chord.duration = "2n";
    console.log("Editing Chord", chords);
    setChords([...chords]);
  };

  const shortenChord = (e: MouseEvent, chord: ChordBeat) => {
    e.preventDefault();
    chord.duration = decreaseDuration(chord.duration);
    console.log("Editing Chord", chords);
    setChords([...chords]);
  };
  const lengthenChord = (e: MouseEvent, chord: ChordBeat) => {
    e.preventDefault();
    chord.duration = increaseDuration(chord.duration);
    console.log("Editing Chord", chords);
    setChords([...chords]);
  };
  const deleteChord = (e: MouseEvent, chord: ChordBeat) => {
    e.preventDefault();
    console.log("Deleting Chord", chords);
    const chordIndex = chords.indexOf(chord);
    console.log("Find that shit: ", chordIndex);
    chords.splice(chordIndex, 1);
    setChords([...chords]);
  };

  const getTimeForNewChord = () => {
    // if (!chords.length) return "0:0:0";
    const c = chords[chords.length - 1];
    console.log("Adding new Chord", c);
    let duration = 4;
    if (c.duration === "1n") duration = 4;
    if (c.duration === "2n") duration = 2;
    if (c.duration === "4n") duration = 1;

    let nextBeat = (c.beat as number) + duration;
    let nextBar = c.bar as number;
    console.log("next beat", nextBar);
    if (nextBeat >= 4) {
      nextBar += 1;
      nextBeat -= 4;
    }

    let nextSixteenth = 0;

    // return `${nextBar}:${nextBeat}:${c.sixteenth}`;
    return {
      bar: nextBar,
      beat: nextBeat,
      sixteenth: nextSixteenth,
    };
  };

  const addChord = (e: MouseEvent) => {
    e.preventDefault();
    const newTime = getTimeForNewChord();
    console.log("New Time", newTime);
    // const newChord = { ...sampleChord, time: newTime }; // TODO: Generate new chord instead of taking smaple chord!
    const newChord = new ChordBeat({
      root: "C",
      type: "maj",
      extension: "7",
      note: ["C3", "E3", "G3", "B3"],
      duration: "4n",
      bar: newTime.bar,
      beat: newTime.beat,
      sixteenth: newTime.sixteenth,
    });
    if (chords?.length) {
      setChords([...chords, newChord]);
    }
  };

  return (
    <main>
      <section>
        <div className="container max-w-4xl mx-auto pt-8">
          {/* <div className="bt-prose">
            <h1 className="mb-0">New Track</h1> */}
          {/* <p className="opacity-50 text-xs mt-1">
            authoring as: <strong>{user?.username || "not logged in!"}</strong>
            <strong> id : {user?.id}</strong>
          </p> */}

          <Form className="flex flex-col gap-4" method="post">
            <TextInput
              name="trackname"
              label="Trackname"
              placeholder="My new awesome backing track"
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

            <fieldset className="sheet-grid grid-cols-4">
              {chords.map((chord) => (
                <div
                  key={chord.time}
                  className={`sheet-grid__chord bar-${chord.bar} beat-${chord.beat} sixteenth-${chord.sixteenth} duration-${chord.duration}`}
                >
                  {/* <legend>Chord 1:0?</legend> */}
                  {chord.time} - {chord.duration}
                  <div className="chord">
                    <span className="chord-root font-black">{chord.root}</span>
                    <span className="chord-type opacity-50 ml-px">
                      {chord.type}
                    </span>
                    <span className="chord-extension relative text-xs ml-px -top-1">
                      {chord.extension}
                    </span>
                  </div>
                  <div className="grid gap-2 grid-flow-col">
                    <button
                      disabled={chord.duration === "4n"}
                      className="icon-button"
                      onClick={(e) => shortenChord(e, chord)}
                    >
                      <span>make chord shorter</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      className="icon-button"
                      onClick={(e) => editChord(e, chord)}
                    >
                      <span>edit</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button
                      className="icon-button"
                      onClick={(e) => deleteChord(e, chord)}
                    >
                      <span>delete</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      disabled={chord.duration === "1n"}
                      className="icon-button"
                      onClick={(e) => lengthenChord(e, chord)}
                    >
                      <span>make chord longer</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </fieldset>
            <button className="button" onClick={addChord}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>add chord</span>
            </button>

            <input type="submit" className="button col-span-4" value="save" />
            <div id="form-error-message">
              {actionData?.formError ? (
                <p className="form-validation-error text-center" role="alert">
                  {actionData.formError}
                </p>
              ) : null}
            </div>
          </Form>
        </div>
        {/* </div> */}
      </section>
    </main>
  );
}
