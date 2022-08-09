import type { Sampler } from "tone";
import type ChordBeat from "../../music/ChordBeat";

import { useEffect, useRef, useState } from "react";
import { Part, Transport, start, now } from "tone";
import Music from "../../music/Music";
import PlayChord from "./PlayChord";
import { useInstruments } from "../../hooks/useInstruments";

export default function TrackPlayer({ sheet, bpm = 120 }: any) {
  const [instruments] = useInstruments();
  const piano = useRef<Sampler>();
  const drums = useRef<Sampler>();
  const bass = useRef<Sampler>();

  const [isPlaying, setIsPlaying] = useState<Boolean>(false);
  const [currentBpm, setCurrentBpm] = useState<number>();
  const [currentSwing] = useState<number>(1.0);
  const [currentGroove, setCurrentGroove] = useState<string>("hihat");
  const [sixteenthHit, setSixteenthHit] = useState<boolean>(false);

  let chordsPart = useRef<Part | null>(null);
  let chordsPartChords = useRef<Array<ChordBeat> | null>(null);
  let bassLinePart = useRef<Part>();
  let drumPart = useRef<Part | null>(null);

  useEffect(() => {
    piano.current = instruments?.pianoSampler;
    drums.current = instruments?.drumSampler;
    bass.current = instruments?.bassSampler;
  }, [instruments]);

  useEffect(() => {
    return () => {
      stop();
      disposeParts();
    };
  }, []);

  useEffect(() => {
    if (Transport.bpm && typeof currentBpm !== "undefined") {
      Transport.bpm.value = currentBpm;
    }
  }, [currentBpm]);

  useEffect(() => {
    function setupMusic(): void {
      const music = new Music({ sheet });
      const { chords, groove, bassLine, loopEndTime } = music.generateMusic(
        currentGroove,
        sixteenthHit
      );

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
          0.3
        );
      }, chords);

      chordsPart.current.start(0);
      chordsPart.current.loop = true;
      chordsPart.current.loopEnd = loopEndTime;
      chordsPartChords.current = chords;

      bassLinePart.current = new Part(function (time, bassNote) {
        bass.current?.triggerAttackRelease(
          bassNote.note,
          bassNote.duration,
          time,
          0.25
        );
      }, bassLine);
      bassLinePart.current.start(0);
      bassLinePart.current.loop = true;
      bassLinePart.current.loopEnd = loopEndTime;

      drumPart.current = new Part(function (time, note) {
        drums?.current?.triggerAttackRelease(
          note?.note,
          note?.duration,
          time,
          0.15
        );
      }, groove);
      drumPart.current.start(0);
      drumPart.current.loop = true;
      drumPart.current.loopEnd = loopEndTime;
    }

    stop();
    disposeParts();
    setupMusic();
  }, [currentGroove, sheet, currentSwing, sixteenthHit]);

  function disposeParts() {
    chordsPart?.current?.dispose();
    drumPart?.current?.dispose();
    bassLinePart?.current?.dispose();
  }

  function play(): void {
    Transport.swing = currentSwing;
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
      <div className="mb-32">
        <div className="sheet-grid sheet-grid--player my-4">
          {chordsPartChords.current.map((chord: ChordBeat) => (
            <PlayChord key={chord.time} chord={chord} clickChord={clickChord} />
          ))}
        </div>
      </div>

      <div className="form track-player-form fixed bottom-0 md:bottom-8 left-0 right-0">
        <div className="max-w-2xl mx-auto grid grid-cols-9 gap-4 p-4 bg-zinc-100 dark:bg-gray-1000 rounded-t-lg md:rounded-b-lg">
          <label
            htmlFor="sixteenthHitCheckBox"
            className="flex flex-col col-span-1"
          >
            <span>16nth</span>
            <input
              onChange={() => setSixteenthHit(!sixteenthHit)}
              defaultChecked={sixteenthHit}
              type="checkbox"
              name="sixteenthHitCheckBox"
              id="sixteenthHitCheckBox"
              className="form-range bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none w-full h-6 p-0 focus:outline-none focus:ring-2 focus:shadow-none"
            />
          </label>
          {/* Sounds kinda bad tbh.. */}
          {/* <label htmlFor="swing-slider" className="flex flex-col col-span-3">
            <span>Swing: {currentSwing}</span>
            <input
              onChange={(e) => setCurrentSwing(parseFloat(e.target.value))}
              defaultValue={currentBpm}
              min="0"
              max="1"
              step="0.05"
              type="range"
              name="bpm-slider"
              id="bpm-slider"
              className="form-range bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none w-full h-6 p-0 focus:outline-none focus:ring-2 focus:shadow-none"
            />
          </label> */}
          <label htmlFor="bpm-slider" className="flex flex-col col-span-8">
            <span>bpm: {currentBpm}</span>
            <input
              onChange={(e) => setCurrentBpm(parseInt(e.target.value))}
              defaultValue={currentBpm}
              min="50"
              max="240"
              type="range"
              name="bpm-slider"
              id="bpm-slider"
              className="form-range bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none w-full h-6 p-0 focus:outline-none focus:ring-2 focus:shadow-none"
            />
          </label>
          <button
            className={`button col-span-1 ${
              currentGroove === "hihat" ? "active" : ""
            }`}
            onClick={() => setCurrentGroove("hihat")}
          >
            hihat
          </button>
          <button
            className={`button col-span-1 ${
              currentGroove === "fourToTheFloor" ? "active" : ""
            }`}
            onClick={() => setCurrentGroove("fourToTheFloor")}
          >
            4 Floor
          </button>
          {isPlaying ? (
            <button className="button button--delete col-span-7" onClick={stop}>
              <span>Stop</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button className="button button--submit col-span-7" onClick={play}>
              <span>Play</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
