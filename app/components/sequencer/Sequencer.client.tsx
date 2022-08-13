import type { Chord as ChordType } from "@tonaljs/chord";
import { useEffect, useRef, useState } from "react";
import { Transport } from "tone";
import { useInstruments } from "~/hooks/useInstruments";
import PlayButton from "../PlayButton";
import BeatTimeIndicator from "./BeatTimeIndicator";
import ChordsSequence from "./ChordsSequence";
import DrumSequence from "./DrumSequence";
import { timeBeats } from "./timeBeats";

type BeatTime = {
  [time: string]: boolean;
};

export default function Sequencer() {
  const [instruments] = useInstruments();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const drumBeatTimes = useRef<{
    hihats: BeatTime;
    snares: BeatTime;
    kicks: BeatTime;
  }>();
  const chordBeatTimes = useRef<{ chords: { [key: string]: ChordType } }>();
  const [currentBeatTime, setCurrentBeatTime] = useState<string>("0:0:0");

  let currentSixteenth = 0;
  let currentBeat = 0;
  let currentBar = 0;

  const playInstruments = (beatTime: string, musicTime: number) => {
    const drumBase: [string, number, number] = ["8n", musicTime, 0.15];
    const chordBase: [string, number, number] = ["4n", musicTime, 0.2];
    if (drumBeatTimes.current) {
      if (drumBeatTimes.current.kicks[beatTime]) {
        instruments?.drumSampler?.triggerAttackRelease("C1", ...drumBase);
      }
      if (drumBeatTimes.current.snares[beatTime]) {
        instruments?.drumSampler?.triggerAttackRelease("E1", ...drumBase);
      }
      if (drumBeatTimes.current.hihats[beatTime]) {
        instruments?.drumSampler?.triggerAttackRelease("D1", ...drumBase);
      }
    }

    if (
      chordBeatTimes.current &&
      chordBeatTimes.current.chords &&
      chordBeatTimes.current.chords[beatTime]
    ) {
      instruments?.pianoSampler?.triggerAttackRelease(
        chordBeatTimes.current.chords[beatTime].notes,
        ...chordBase
      );
    }
  };

  useEffect(() => {
    // drumBeatTimes.current?.kicks = {};
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
      if (currentBar >= 2) {
        currentBar = 0;
        currentBeat = 0;
        currentSixteenth = 0;
      }

      // currentTime.current = beatTime;
      setCurrentBeatTime(beatTime);
    }, "16n");

    Transport.loop = true;
    Transport.bpm.value = 100;
    Transport.setLoopPoints(0, "1m");
    // Transport.setLoopPoints(0, "2m");
  }, [instruments]);

  const changeChords = ({ chords }: any) => {
    chordBeatTimes.current = {
      chords,
    };
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
    drumBeatTimes.current = {
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
    <div className="py-4">
      {instruments?.pianoSampler && (
        <ChordsSequence
          mute={isPlaying}
          pianoSampler={instruments?.pianoSampler}
          onChange={changeChords}
          timeBeats={timeBeats}
        />
      )}

      <BeatTimeIndicator
        timeBeats={timeBeats}
        currentBeatTime={currentBeatTime}
      />

      {instruments?.drumSampler && (
        <DrumSequence
          mute={isPlaying}
          drumSampler={instruments?.drumSampler}
          onChange={changeDrumBeat}
          timeBeats={timeBeats}
        />
      )}
      <BeatTimeIndicator
        timeBeats={timeBeats}
        currentBeatTime={currentBeatTime}
      />

      {/* {JSON.stringify(kicks)} */}
      <div className="grid mt-8">
        <PlayButton
          isPlaying={isPlaying}
          play={playSequence}
          stop={stopSequence}
        />
      </div>
    </div>
  );
}
