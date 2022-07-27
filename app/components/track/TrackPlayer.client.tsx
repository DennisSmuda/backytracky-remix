import { useEffect, useRef, useState } from "react";
import { Part, Transport, start } from "tone";
import type { Sampler } from "tone";
import { loadInstruments } from "./utils";
import Music from "./Music";

export default function TrackPlayer() {
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);

  const piano = useRef<Sampler | null>(null);
  const drums = useRef<Sampler | null>(null);
  const music = new Music({ numBars: 1 });

  let chordsPart: Part | null = null;
  let drumPart: Part | null = null;

  useEffect(() => {
    const { pianoSampler, drumSampler } = loadInstruments();
    piano.current = pianoSampler;
    drums.current = drumSampler;

    setupMusic();
  }, []);

  useEffect(() => {
    return () => {
      if (typeof Transport.stop !== "undefined") stop();
      chordsPart?.dispose();
    };
  }, []);

  function setupMusic(): void {
    const { chords, groove } = music.makeMusic();
    chordsPart = new Part(function (time, note) {
      piano?.current?.triggerAttackRelease(note.note, note.duration, time);
    }, chords);
    chordsPart.start(0);
    chordsPart.loop = true;
    chordsPart.loopEnd = 4;

    drumPart = new Part(function (time, note) {
      drums?.current?.triggerAttackRelease(note.note, note.duration, time);
    }, groove);
    drumPart.start(0);
    drumPart.loop = true;
    drumPart.loopEnd = 4;
  }

  function play(): void {
    setIsPlaying(true);
    if (typeof Transport.start !== "undefined") Transport.start();
    start();
  }

  function stop(): void {
    setIsPlaying(false);
    if (typeof Transport.stop !== "undefined") Transport.stop();
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
