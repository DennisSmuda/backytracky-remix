import { useEffect, useRef, useState } from "react";
import { Part, Transport, start } from "tone";
import type { Sampler } from "tone";
import { loadInstruments } from "./utils";
import type { ChordBeat } from "./Music";
import Music, { Chord, Chords } from "./Music";

export default function TrackPlayer() {
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);

  const piano = useRef<Sampler | null>(null);
  const drums = useRef<Sampler | null>(null);
  const music = new Music({ numBars: 1 });

  let [isMusicReady, setIsMusicReady] = useState<Boolean>(false);
  let chordsPart = useRef<Part | null>(null);
  let chordsPartChords = useRef<Array<ChordBeat> | null>(null);
  let drumPart = useRef<Part | null>(null);

  useEffect(() => {
    const { pianoSampler, drumSampler } = loadInstruments();
    piano.current = pianoSampler;
    drums.current = drumSampler;

    setupMusic();
  }, []);

  useEffect(() => {
    return () => {
      if (typeof Transport.stop !== "undefined") stop();
      chordsPart?.current?.dispose();
    };
  }, []);

  useEffect(() => {
    if (chordsPart && drumPart) {
      setIsMusicReady(true);
      console.log(
        "Check Readay use effect",
        chordsPart,
        drumPart,
        isMusicReady
      );
    }
  }, [chordsPart, drumPart, isMusicReady]);

  function setupMusic(): void {
    const { chords, groove } = music.makeMusic();

    chordsPart.current = new Part(function (time, note) {
      piano?.current?.triggerAttackRelease(note.note, note.duration, time);
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
    setIsMusicReady(true);
  }

  function disposeParts() {
    chordsPart?.current?.dispose();
    drumPart?.current?.dispose();
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

  if (!chordsPartChords.current) {
    return <div>Generating Chords</div>;
  }

  return (
    <div className="">
      <p className="my-2">Basic 2-5-1 to get started 🎺</p>
      {JSON.stringify(chordsPartChords.current)}
      {chordsPartChords.current.map((chord: ChordBeat) => (
        <div key={chord.time}>{chord.time}</div>
      ))}

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
