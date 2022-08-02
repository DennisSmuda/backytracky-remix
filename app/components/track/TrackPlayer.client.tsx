import type { Sampler } from "tone";
import { TransportTime } from "tone";
import { Time } from "tone";
import type { ChordBeat } from "../../music/Music";

import { useEffect, useRef, useState } from "react";
import { Part, Transport, start, now } from "tone";
import { loadInstruments } from "../../music/loader";
import Music from "../../music/Music";
import { PlayChord } from "./PlayChord";

export default function TrackPlayer({ sheet }: any) {
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);
  const [, setIsReady] = useState<Boolean>(false);

  const piano = useRef<Sampler | null>(null);
  const drums = useRef<Sampler | null>(null);
  const music = new Music({ sheet });
  const currentChordTime = useRef<string>("0:0:0");

  let chordsPart = useRef<Part | null>(null);
  let chordsPartChords = useRef<Array<ChordBeat> | null>(null);
  let drumPart = useRef<Part | null>(null);

  useEffect(() => {
    const { pianoSampler, drumSampler } = loadInstruments();
    piano.current = pianoSampler;
    drums.current = drumSampler;
    // console.log("sheet prop", sheet);
    setupMusic();
  }, []);

  useEffect(() => {
    return () => {
      stop();
      disposeParts();
    };
  }, []);

  useEffect(() => {
    setIsReady(true);
  }, [chordsPart, drumPart]);

  function setupMusic(): void {
    const { chords, groove, numBars } = music.generateMusic();

    chordsPart.current = new Part(function (time, note) {
      document
        .querySelector(`button.sheet-grid__chord.active`)
        ?.classList.remove("active");

      const activeElement = document.querySelector(
        `button.sheet-grid__chord.bar-${note.bar}.beat-${note.beat}`
      );

      activeElement?.classList.add("active");
      piano?.current?.triggerAttackRelease(
        note.note,
        note.duration,
        time,
        0.35
      );
    }, chords);

    chordsPart.current.start(0);
    chordsPart.current.loop = true;
    chordsPart.current.loopEnd = numBars;
    chordsPartChords.current = chords;

    drumPart.current = new Part(function (time, note) {
      drums?.current?.triggerAttackRelease(
        note?.note,
        note?.duration,
        time,
        0.2
      );
    }, groove);
    drumPart.current.start(0);
    drumPart.current.loop = true;
    drumPart.current.loopEnd = numBars;
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
    document
      .querySelector(`button.sheet-grid__chord.active`)
      ?.classList.remove("active");
    if (typeof Transport.stop !== "undefined") Transport.stop();
  }

  function clickChord(chord: ChordBeat): void {
    piano?.current?.triggerAttackRelease(chord.note, "8n", now(), 0.35);
  }

  if (!chordsPartChords.current) {
    return <div>Generating Chords</div>;
  }

  return (
    <div>
      <div className="">
        <div className="sheet-grid my-4 overflow-x-scroll">
          {chordsPartChords.current.map((chord: ChordBeat) => (
            <PlayChord key={chord.time} chord={chord} clickChord={clickChord} />
          ))}
        </div>
      </div>

      <div className="grid grid-flow-col gap-4">
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
