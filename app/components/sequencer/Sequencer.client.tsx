import { useRef, useState } from "react";
import { now, Part, start, Transport } from "tone";
import { useInstruments } from "~/hooks/useInstruments";
import PlayButton from "../PlayButton";
import DrumSequence from "./DrumSequence";

const timeBeats = [
  "0:0:0",
  "0:0:1",
  "0:0:2",
  "0:0:3",
  "0:1:0",
  "0:1:1",
  "0:1:2",
  "0:1:3",
  "0:2:0",
  "0:2:1",
  "0:2:2",
  "0:2:3",
  "0:3:0",
  "0:3:1",
  "0:3:2",
  "0:3:3",
  // "1:0:0",
  // "1:0:1",
  // "1:0:2",
  // "1:0:3",
  // "1:1:0",
  // "1:1:1",
  // "1:1:2",
  // "1:1:3",
  // "1:2:0",
  // "1:2:1",
  // "1:2:2",
  // "1:2:3",
  // "1:3:0",
  // "1:3:1",
  // "1:3:2",
  // "1:3:3",
];

export default function Sequencer() {
  const [instruments] = useInstruments();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [kicks, setKicks] = useState<{ [key: string]: boolean }>({});
  const [snares, setSnares] = useState<{ [key: string]: boolean }>({});
  const [hihats, setHihats] = useState<{ [key: string]: boolean }>({});
  let drumPart = useRef<Part | null>(null);

  const clickKick = (time: string) => {
    kicks[time] = !kicks[time];
    setKicks({ ...kicks });
    instruments?.drumSampler.triggerAttackRelease("C1", "1n", now(), 0.3);
    stopSequence();
  };

  const clickSnare = (time: string) => {
    snares[time] = !snares[time];
    setSnares({ ...snares });
    instruments?.drumSampler.triggerAttackRelease("E1", "1n", now(), 0.3);
    stopSequence();
  };

  const clickHihat = (time: string) => {
    hihats[time] = !hihats[time];
    setHihats({ ...hihats });
    instruments?.drumSampler.triggerAttackRelease("D1", "1n", now(), 0.3);
    stopSequence();
  };

  const changeDrumBeat = () => {
    console.log("Change Beat!");
  };

  const playSequence = (): void => {
    const groove: Array<{ note: string; duration: string; time: string }> = [];
    timeBeats.forEach((beatTime) => {
      if (kicks[beatTime]) {
        groove.push({
          note: "C1",
          duration: "4n",
          time: beatTime,
        });
      }
      if (snares[beatTime]) {
        groove.push({
          note: "E1",
          duration: "4n",
          time: beatTime,
        });
      }
      if (hihats[beatTime]) {
        groove.push({
          note: "D1",
          duration: "4n",
          time: beatTime,
        });
      }
    });
    console.log("Groove", groove);
    if (!groove.length) return;
    drumPart.current = new Part(function (time, note) {
      console.log("Drum part note", note);
      instruments?.drumSampler?.triggerAttackRelease(
        note?.note,
        note?.duration,
        time,
        0.15
      );
    }, groove);
    drumPart.current.start(0);
    drumPart.current.loop = true;
    drumPart.current.loopEnd = 2;
    // Transport.swing = 1;
    setIsPlaying(true);
    if (typeof Transport.start !== "undefined") Transport.start();
    start();
  };

  function stopSequence(): void {
    setIsPlaying(false);
    if (typeof Transport.stop !== "undefined") Transport.stop();
    disposeParts();
  }

  function disposeParts() {
    // chordsPart?.current?.dispose();
    drumPart?.current?.dispose();
    // bassLinePart?.current?.dispose();
  }

  return (
    <div>
      <h2>Sequencer</h2>
      {instruments?.drumSampler && (
        <DrumSequence
          drumSampler={instruments?.drumSampler}
          onChange={changeDrumBeat}
        />
      )}

      {/* {JSON.stringify(kicks)} */}
      <div className="sequencer-row">
        {timeBeats.map((hihatTime) => (
          <button
            className={`button button--hihat ${
              hihats[hihatTime] === true ? "button--active" : ""
            }`}
            key={`kick-${hihatTime}`}
            onClick={() => clickHihat(hihatTime)}
          >
            <span className="sr-only">hihat</span>
          </button>
        ))}
      </div>
      <div className="sequencer-row">
        {timeBeats.map((snareTime) => (
          <button
            className={`button button--snare ${
              snares[snareTime] === true ? "button--active" : ""
            }`}
            key={`kick-${snareTime}`}
            onClick={() => clickSnare(snareTime)}
          >
            <span className="sr-only">snare drum</span>
          </button>
        ))}
      </div>
      <div className="sequencer-row">
        {timeBeats.map((kickTime) => (
          <button
            className={`button button--kick ${
              kicks[kickTime] === true ? "button--active" : ""
            }`}
            key={`kick-${kickTime}`}
            onClick={() => clickKick(kickTime)}
          >
            <span className="sr-only">kick drum</span>
          </button>
        ))}
      </div>

      <PlayButton
        isPlaying={isPlaying}
        play={playSequence}
        stop={stopSequence}
      />
    </div>
  );
}
