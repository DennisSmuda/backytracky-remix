import { useEffect, useRef, useState } from "react";
import { now, Part } from "tone";
import { Time, Transport } from "tone";
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
  const groove = useRef<BeatTime>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [beatTimes, setBeatTimes] = useState<{
    hihats: BeatTime;
    snares: BeatTime;
    kicks: BeatTime;
  }>();

  const playInstruments = (beatTime: string, musicTime: number) => {
    // console.log("Play Notes", beatTimes?.kicks);
    // console.log("Play Notes", groove?.current);
    // console.log("Play Notes", groove?.current && groove.current[beatTime]);
    if (groove?.current && groove.current[beatTime]) {
      console.log("PLAY THIS NOTE", instruments?.drumSampler);
      instruments?.drumSampler?.triggerAttackRelease("C1", "4n", musicTime);
      //   note: "C1",
      // duration: "4n",
      // time: beatTime,
    }
    // console.log("Time Event", Time(time).toNotation());
    // instruments?.drumSampler?.triggerAttackRelease(
    //   note?.note,
    //   note?.duration,
    //   time,
    //   0.15
    // );
  };

  useEffect(() => {
    // setCurrentBpm(bpm);
    console.log("Is playing", isPlaying);
    let currentSixteenth = 0;
    let currentBeat = 0;
    let currentBar = 0;
    Transport.scheduleRepeat((time) => {
      console.log(
        "Time Event",
        `${currentBar}:${currentBeat}:${currentSixteenth}`
      );
      const beatTime = `${currentBar}:${currentBeat}:${currentSixteenth}`;
      playInstruments(beatTime, time);

      currentSixteenth += 1;
      if (currentSixteenth >= 4) {
        currentSixteenth = 0;
        currentBeat += 1;
      }
      if (currentBeat >= 4) {
        currentBeat = 0;
        currentBar += 1;
      }
      if (currentBar >= 2) {
        currentBar = 0;
        currentBeat = 0;
        currentSixteenth = 0;
      }
    }, "16n");
    Transport.loop = true;
    Transport.setLoopPoints(0, "1m");
    // Transport.loopEnd = 1;
    // Transport.loopStart = 0;

    return () => {
      stopSequence();
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
    setBeatTimes({
      hihats,
      snares,
      kicks,
    });
    groove.current = kicks;
    // playInstruments("0:0:0");
    // stopSequence();
    // updateSequence();
  };

  const playSequence = (): void => {
    // Transport.swing = 1;
    setIsPlaying(true);
    if (typeof Transport.start !== "undefined") Transport.start(0);
  };

  function stopSequence(): void {
    setIsPlaying(false);
    if (typeof Transport.stop !== "undefined") Transport.stop(0);
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
