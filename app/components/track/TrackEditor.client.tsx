import { useEffect, useRef } from "react";
import { now } from "tone";

import type { Sampler } from "tone";
import type ChordBeat from "../../music/ChordBeat";

import { loadInstruments } from "../../music/loader";
import EditChord from "./EditChord";

export default function TrackEditor({
  chords,
  shortenChord,
  lengthenChord,
  editChord,
  deleteChord,
}: {
  chords: Array<ChordBeat>;
  shortenChord: Function;
  lengthenChord: Function;
  editChord: Function;
  deleteChord: Function;
}) {
  const piano = useRef<Sampler | null>(null);
  const drums = useRef<Sampler | null>(null);

  useEffect(() => {
    const { pianoSampler, drumSampler } = loadInstruments();
    piano.current = pianoSampler;
    drums.current = drumSampler;
  }, []);

  const playChord = (e: MouseEvent, chord: ChordBeat) => {
    e.preventDefault();
    if (piano?.current?.loaded) {
      piano?.current?.triggerAttackRelease(chord.note, "4n", now(), 0.35);
    }
  };
  return (
    <>
      {chords.map((chord) => (
        <EditChord
          key={chord.time}
          chord={chord}
          shortenChord={shortenChord}
          lengthenChord={lengthenChord}
          editChord={editChord}
          deleteChord={deleteChord}
          playChord={playChord}
        />
      ))}

      {chords.length === 0 && (
        <p className="opacity-50 p-2">Add some chords!</p>
      )}
    </>
  );
}
