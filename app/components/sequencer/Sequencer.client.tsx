import { useEffect, useRef, useState } from "react";
import { Part, start, Transport } from "tone";
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

type BeatTime = {
  [time: string]: boolean;
};

export default function Sequencer() {
  const [instruments] = useInstruments();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [kicks, setKicks] = useState<BeatTime>({});
  const [snares, setSnares] = useState<BeatTime>({});
  const [hihats, setHihats] = useState<BeatTime>({});
  let drumPart = useRef<Part | null>(null);

  useEffect(() => {
    // setCurrentBpm(bpm);
    console.log("Is playing", isPlaying);

    return () => {
      stop();
      disposeParts();
    };
  }, []);

  const changeDrumBeat = ({
    hihats,
    snares,
    kicks,
  }: {
    hihats: BeatTime;
    snares: BeatTime;
    kicks: BeatTime;
  }) => {
    console.log("Change Beat!", hihats, snares);
    setHihats({ ...hihats });
    setSnares({ ...snares });
    setKicks({ ...kicks });
    stopSequence();
  };

  const playSequence = (): void => {
    const groove: Array<{ note: string; duration: string; time: string }> = [];
    console.log("hihats", hihats);
    timeBeats.forEach((beatTime) => {
      const base = {
        duration: "4n",
        time: beatTime,
      };
      if (kicks[beatTime]) {
        groove.push({
          note: "C1",
          ...base,
        });
      }
      if (snares[beatTime]) {
        groove.push({
          note: "E1",
          ...base,
        });
      }
      if (hihats[beatTime]) {
        groove.push({
          note: "D1",
          ...base,
        });
      }
    });

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

      <PlayButton
        isPlaying={isPlaying}
        play={playSequence}
        stop={stopSequence}
      />
    </div>
  );
}
