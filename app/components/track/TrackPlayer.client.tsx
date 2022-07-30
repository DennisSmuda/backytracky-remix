import { useEffect, useRef, useState } from "react";
import { Part, Transport, start, now } from "tone";
import type { Sampler } from "tone";
import { loadInstruments } from "./utils";
import type { IChordBeat } from "./Music";
import Music from "./Music";

export default function TrackPlayer() {
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);
  const [, setIsReady] = useState<Boolean>(false);

  const piano = useRef<Sampler | null>(null);
  const drums = useRef<Sampler | null>(null);
  const music = new Music({ numBars: 2 });

  let chordsPart = useRef<Part | null>(null);
  let chordsPartChords = useRef<Array<IChordBeat> | null>(null);
  let drumPart = useRef<Part | null>(null);

  useEffect(() => {
    const { pianoSampler, drumSampler } = loadInstruments();
    piano.current = pianoSampler;
    drums.current = drumSampler;

    setupMusic();
  }, []);

  useEffect(() => {
    return () => {
      stop();
      disposeParts();
    };
  }, []);

  useEffect(() => {
    console.log("Use Effect", chordsPart);
    setIsReady(true);
  }, [chordsPart, drumPart]);

  function setupMusic(): void {
    const { chords, groove } = music.makeMusic();
    console.log("Setup Music", chords);

    chordsPart.current = new Part(function (time, note) {
      piano?.current?.triggerAttackRelease(
        note.note,
        note.duration,
        time,
        0.35
      );
    }, chords);

    chordsPart.current.start(0);
    chordsPart.current.loop = true;
    chordsPart.current.loopEnd = 4;
    chordsPartChords.current = chords;

    drumPart.current = new Part(function (time, note) {
      drums?.current?.triggerAttackRelease(
        note.note,
        note.duration,
        time,
        0.25
      );
    }, groove);
    drumPart.current.start(0);
    drumPart.current.loop = true;
    drumPart.current.loopEnd = 4;
    console.log("Done setting up music", chordsPart.current);
  }

  function disposeParts() {
    chordsPart?.current?.dispose();
    drumPart?.current?.dispose();
  }

  function play(): void {
    Transport.swing = 1;
    setIsPlaying(true);
    if (typeof Transport.start !== "undefined") Transport.start();
    start();
  }

  function stop(): void {
    setIsPlaying(false);
    if (typeof Transport.stop !== "undefined") Transport.stop();
  }

  function clickChord(chord: IChordBeat): void {
    piano?.current?.triggerAttackRelease(chord.note, "8n", now(), 0.35);
  }

  console.log("Render", chordsPart.current);

  if (!chordsPartChords.current) {
    return <div>Generating Chords</div>;
  }

  const getChordTime = (chord: IChordBeat) => {
    return `${chord.bar}:${chord.beat}:${chord.sixteenth || 0}`;
  };

  return (
    <div className="">
      <p className="my-2">Basic 2-5-1 to get started 🎺</p>
      <div className="sheet-grid my-4">
        {chordsPartChords.current.map((chord: IChordBeat) => (
          <button
            onClick={() => clickChord(chord)}
            key={getChordTime(chord)}
            className={`interactive-bg sheet-grid__chord bar-${chord.bar} beat-${chord.beat} sixteenth-${chord.sixteenth} duration-${chord.duration}`}
          >
            <span className="opacity-50 text-xs">{getChordTime(chord)}</span>
            <div className="chord">
              <span className="chord-root font-black">{chord.root}</span>
              <span className="chord-type opacity-50 ml-px">{chord.type}</span>
              <span className="chord-extension relative text-xs ml-px -top-1">
                {chord.extension}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-flow-col place-items-end::TODO gap-4">
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
