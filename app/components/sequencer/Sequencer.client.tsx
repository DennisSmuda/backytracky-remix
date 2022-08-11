import { useRef, useState } from "react";
import { now, Part, start, Transport } from "tone";
import { useInstruments } from "~/hooks/useInstruments";
import PlayButton from "../PlayButton";

const timeBeats = [
  "0:0:0",
  "0:0:2",
  "0:1:0",
  "0:1:2",
  "0:2:0",
  "0:2:2",
  "0:3:0",
  "0:3:2",
  "1:0:0",
  "1:0:2",
  "1:1:0",
  "1:1:2",
  "1:2:0",
  "1:2:2",
  "1:3:0",
  "1:3:2",
];

export default function Sequencer() {
  const [instruments] = useInstruments();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [kicks, setKicks] = useState<{ [key: string]: boolean }>({});
  let drumPart = useRef<Part | null>(null);

  const clickKick = (time: string) => {
    kicks[time] = !kicks[time];
    // console.log("Time", kickTimes);
    setKicks({ ...kicks });
    instruments?.drumSampler.triggerAttackRelease("C1", "1n", now(), 0.3);
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
    drumPart.current.loopEnd = 4;
    // Transport.swing = 1;
    setIsPlaying(true);
    if (typeof Transport.start !== "undefined") Transport.start();
    start();
  };

  function stopSequence(): void {
    setIsPlaying(false);
    if (typeof Transport.stop !== "undefined") Transport.stop();
  }

  return (
    <div>
      <h2>Sequencer</h2>
      {JSON.stringify(kicks)}
      <div className="sequencer-row">
        {timeBeats.map((kickTime) => (
          <button
            className={`button ${
              kicks[kickTime] === true ? "button--active" : ""
            }`}
            key={`kick-${kickTime}`}
            onClick={() => clickKick(kickTime)}
          >
            K
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
