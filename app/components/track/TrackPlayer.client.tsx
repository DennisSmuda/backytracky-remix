import type { Sampler } from "tone";
import type ChordBeat from "../../music/ChordBeat";

import { useEffect, useRef, useState } from "react";
import { Part, Transport, start, now } from "tone";
import { loadInstruments } from "../../music/loader";
import Music from "../../music/Music";
import PlayChord from "./PlayChord";

export default function TrackPlayer({ sheet, bpm = 120 }: any) {
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);
  const [, setIsReady] = useState<Boolean>(false);
  const [currentBpm, setCurrentBpm] = useState<number>();
  const [currentGroove, setCurrentGroove] = useState<string>("hihat");

  const piano = useRef<Sampler | null>(null);
  const drums = useRef<Sampler | null>(null);

  let chordsPart = useRef<Part | null>(null);
  let chordsPartChords = useRef<Array<ChordBeat> | null>(null);
  let drumPart = useRef<Part | null>(null);

  useEffect(() => {
    const { pianoSampler, drumSampler } = loadInstruments();

    setCurrentBpm(bpm);

    piano.current = pianoSampler;
    drums.current = drumSampler;
  }, []);

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
    console.log("Set Groove!", currentGroove);
    // if (Transport.bpm && typeof currentBpm !== "undefined") {
    //   Transport.bpm.value = currentBpm;
    // }
    function setupMusic(): void {
      const music = new Music({ sheet });
      const { chords, groove, loopEndTime } =
        music.generateMusic(currentGroove);

      console.log("Groove Generated", groove);

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
      chordsPart.current.loopEnd = loopEndTime;
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
      // drumPart.current.loopEnd = loopEndTime;
    }
    stop();
    disposeParts();
    setupMusic();
  }, [currentGroove, sheet]);

  // useEffect(() => {
  //   setIsReady(true);
  // }, [chordsPart, drumPart]);

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
      <div className="mb-32">
        <div className="sheet-grid sheet-grid--player my-4">
          {chordsPartChords.current.map((chord: ChordBeat) => (
            <PlayChord key={chord.time} chord={chord} clickChord={clickChord} />
          ))}
        </div>
      </div>

      <div className="form fixed bottom-0 md:bottom-8 left-0 right-0">
        <div className="max-w-2xl mx-auto grid grid-cols-6 gap-4 p-4 bg-zinc-100 dark:bg-gray-1000 rounded-t-lg md:rounded-b-lg">
          <button onClick={() => setCurrentGroove("hihat")}>hihat</button>
          <button onClick={() => setCurrentGroove("fourOnTheFloor")}>
            4 on the Floor
          </button>
          <button onClick={() => setCurrentGroove("bossa")}>Bossa</button>
          <label htmlFor="bpm-slider" className="flex flex-col col-span-4">
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
          {isPlaying ? (
            <button className="button button--delete col-span-2" onClick={stop}>
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
            <button className="button button--submit col-span-2" onClick={play}>
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
