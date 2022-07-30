import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import TextInput from "~/components/TextInput";
import type { ChordBeat } from "~/components/track/Music";
import { getUser, requireUserId } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  console.log("Loader USER", user);
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
    setChords([sampleChord]);
  }, []);

  const editChord = (e: MouseEvent, chord: ChordBeat) => {
    e.preventDefault();
    console.log("Editing Chord", chord);
  };

  const getTimeForNewChord = () => {
    if (!chords.length) return "0:0:0";
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

    return `${nextBar}:${nextBeat}:${c.sixteenth}`;
  };

  const addChord = (e: MouseEvent) => {
    e.preventDefault();
    const newTime = getTimeForNewChord();
    const newChord = { ...sampleChord, time: newTime }; // TODO: Generate new chord instead of taking smaple chord!
    if (chords?.length) {
      setChords([...chords, newChord]);
    }
  };

  const sampleChord: ChordBeat = {
    root: "C",
    type: "maj",
    extension: "7",
    time: "0:0:0",
    note: ["C3", "E3", "G3", "B3"],
    duration: "1n",
    bar: 0,
    beat: 0,
    sixteenth: 0,
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

            <div className="grid grid-cols-4">
              <fieldset>
                {chords.map((chord) => (
                  <div key={chord.time}>
                    {/* <legend>Chord 1:0?</legend> */}
                    {chord.time}
                    <div className="chord">
                      <span className="chord-root font-black">
                        {chord.root}
                      </span>
                      <span className="chord-type opacity-50 ml-px">
                        {chord.type}
                      </span>
                      <span className="chord-extension relative text-xs ml-px -top-1">
                        {chord.extension}
                      </span>
                    </div>
                    <button
                      className="button"
                      onClick={(e) => editChord(e, chord)}
                    >
                      edit
                    </button>
                  </div>
                ))}
              </fieldset>

              <button className="button" onClick={addChord}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
