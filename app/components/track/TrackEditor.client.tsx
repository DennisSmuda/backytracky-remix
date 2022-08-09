import { now } from "tone";

import type ChordBeat from "../../music/ChordBeat";
import { useInstruments } from "../../hooks/useInstruments";
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
  const [instruments] = useInstruments();

  const playChord = (e: MouseEvent, chord: ChordBeat) => {
    e.preventDefault();
    if (!instruments?.pianoSampler?.loaded) return;

    instruments?.pianoSampler?.triggerAttackRelease(
      chord.note,
      "4n",
      now(),
      0.35
    );
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
