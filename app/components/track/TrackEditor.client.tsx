import { useEffect, useRef } from "react";
import { now } from "tone";

import type { Sampler } from "tone";
import type ChordBeat from "../../music/ChordBeat";

import EditChord from "./EditChord";
import { useInstruments } from "../../hooks/useInstruments";

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
  const [instruments] = useInstruments();
  const piano = useRef<Sampler>();
  const drums = useRef<Sampler>();

  useEffect(() => {
    piano.current = instruments?.pianoSampler;
    drums.current = instruments?.drumSampler;
  }, [instruments]);

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
