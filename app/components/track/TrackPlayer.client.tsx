import { useEffect, useRef, useState } from "react";
import { Part, Transport, start } from "tone";
import type { Sampler } from "tone";
import { loadInstruments } from "./utils";

export default function TrackPlayer() {
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);

  const piano = useRef<Sampler | null>(null);
  const drums = useRef<Sampler | null>(null);

  let chordsPart: Part | null = null;

  useEffect(() => {
    const { pianoSampler, drumSampler } = loadInstruments();
    piano.current = pianoSampler;
    drums.current = drumSampler;

    makeMusic();
  }, []);

  useEffect(() => {
    return () => {
      if (typeof Transport.stop !== "undefined") stop();
      chordsPart?.dispose();
    };
  }, []);

  function makeMusic(): void {
    const IChord = ["C3", "E3", "G3", "B3"];
    const IIChord = ["D3", "F3", "A3", "C4"];
    const VChord = ["G3", "B3", "D3", "F3"];

    const mainChords = [
      { time: "0:0", note: IIChord, duration: "2n" },
      { time: "0:2", note: VChord, duration: "2n" },
      { time: "1:0", note: IChord, duration: "1n" },
    ];

    chordsPart = new Part(function (time, note) {
      piano?.current?.triggerAttackRelease(note.note, note.duration, time);
    }, mainChords);
    chordsPart.start(0);
    chordsPart.loop = true;
    chordsPart.loopEnd = 4;
  }

  function play(): void {
    setIsPlaying(true);
    if (typeof Transport.start !== "undefined") Transport.start();
    start();
  }

  function stop(): void {
    setIsPlaying(false);
    if (typeof Transport.stop !== "undefined") stop();
  }

  return (
    <div className="">
      <p className="my-2">Basic 2-5-1 to get started 🎺</p>
      <div className="grid grid-flow-col gap-4 max-w-sm">
        {isPlaying ? (
          <button className="button" onClick={stop}>
            Stop
          </button>
        ) : (
          <button className="button button--submit" onClick={play}>
            Play
          </button>
        )}
      </div>
    </div>
  );
}
