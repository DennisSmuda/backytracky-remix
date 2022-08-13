import { useEffect, useRef, useState } from "react";
import { Transport } from "tone";
import { useInstruments } from "~/hooks/useInstruments";
import PlayButton from "../PlayButton";
import ChordsSequence from "./ChordsSequence";
import DrumSequence from "./DrumSequence";
import { timeBeats } from "./timeBeats";

type BeatTime = {
  [time: string]: boolean;
};

export default function Sequencer() {
  const [instruments] = useInstruments();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const beatTimes = useRef<{
    hihats: BeatTime;
    snares: BeatTime;
    kicks: BeatTime;
  }>();

  let currentSixteenth = 0;
  let currentBeat = 0;
  let currentBar = 0;

  const playInstruments = (beatTime: string, musicTime: number) => {
    if (!beatTimes.current) return;
    const base: [string, number, number] = ["4n", musicTime, 0.2];
    if (beatTimes.current.kicks[beatTime]) {
      instruments?.drumSampler?.triggerAttackRelease("C1", ...base);
    }
    if (beatTimes.current.snares[beatTime]) {
      instruments?.drumSampler?.triggerAttackRelease("E1", ...base);
    }
    if (beatTimes.current.hihats[beatTime]) {
      instruments?.drumSampler?.triggerAttackRelease("D1", ...base);
    }
  };

  useEffect(() => {
    // setCurrentBpm(bpm);
    // Transport.loopEnd = 1;
    // Transport.loopStart = 0;

    return () => {
      stopSequence();
    };
  }, []);

  useEffect(() => {
    console.log("Is playing", isPlaying);
    Transport.scheduleRepeat((time) => {
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
      if (currentBar >= 1) {
        currentBar = 0;
        currentBeat = 0;
        currentSixteenth = 0;
      }
    }, "16n");

    Transport.loop = true;
    Transport.setLoopPoints(0, "1m");
  }, [instruments]);

  const changeChords = ({ chords }: any) => {
    console.log("Change Chords!", chords);
  };

  const changeDrumBeat = ({
    hihats,
    snares,
    kicks,
  }: {
    hihats: BeatTime;
    snares: BeatTime;
    kicks: BeatTime;
  }) => {
    beatTimes.current = {
      hihats,
      snares,
      kicks,
    };
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
      {/* <h2>Sequencer</h2> */}
      {instruments?.pianoSampler && (
        <ChordsSequence
          mute={isPlaying}
          pianoSampler={instruments?.pianoSampler}
          onChange={changeChords}
          timeBeats={timeBeats}
        />
      )}
      {instruments?.drumSampler && (
        <DrumSequence
          mute={isPlaying}
          drumSampler={instruments?.drumSampler}
          onChange={changeDrumBeat}
          timeBeats={timeBeats}
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
