import type { Chord as ChordType } from "@tonaljs/chord";
import type { Sampler } from "tone";
import { useEffect, useState } from "react";
import { Chord, Key, Range } from "@tonaljs/tonal";
import { now } from "tone";

export default function ChordsSequence({
  pianoSampler,
  onChange,
  mute,
  timeBeats,
}: {
  pianoSampler?: Sampler;
  onChange: Function;
  mute: boolean;
  timeBeats: string[];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [chords, setChords] = useState<{ [key: string]: ChordType }>({});
  const [root, setRoot] = useState<string>("C");
  const [type, setType] = useState<string>("major");

  const [diatonicChords, setDiatonicChords] = useState<ChordType[]>();

  useEffect(() => {
    let newChords: ChordType[] = [];
    let sampleChords: readonly string[] = [];

    if (type === "major") {
      sampleChords = Key.majorKey(root).chords;
    } else if (type === "minor") {
      sampleChords = Key.minorKey(root).natural.chords;
    } else if (type === "melodic minor") {
      sampleChords = Key.minorKey(root).melodic.chords;
    } else if (type === "harmonic minor") {
      sampleChords = Key.minorKey(root).harmonic.chords;
    }

    sampleChords.forEach((chord) => {
      const usableChord = Chord.get(chord);
      const newChord = Chord.getChord(
        usableChord.aliases[0],
        `${usableChord.tonic || "C"}3`
      );

      newChords.unshift(newChord);
    });

    setDiatonicChords([...newChords]);
  }, [root, type]);

  const clickChord = (time: string, chord: any) => {
    if (chords[time] === chord) {
      delete chords[time];
    } else {
      chords[time] = chord;
    }

    setChords({ ...chords });
    if (!mute)
      pianoSampler?.triggerAttackRelease(chord.notes, "8n", now(), 0.3);
    onChange({ chords });
  };

  return (
    <div
      className={`sequencer-section relative ${
        isOpen ? "sequencer-section--open" : ""
      }`}
    >
      <div className="flex items-baseline">
        <h4>Chords: </h4>
        <label htmlFor="root-note-select" className="sr-only">
          root note select
        </label>
        <select
          className="mb-2 mx-4 py-1"
          onChange={(e) => setRoot(e.target.value)}
          name="root-note-select"
          id="root-note-select"
        >
          {Range.chromatic(["C3", "B3"], { sharps: true }).map((note) => (
            <option key={note}>{note}</option>
          ))}
        </select>

        <label htmlFor="chord-mode-select" className="sr-only">
          Chord Mode Select
        </label>
        <select
          className="mb-2 py-1"
          onChange={(e) => setType(e.target.value)}
          name="chord-mode-select"
          id="chord-mode-select"
        >
          <option value="major">Major</option>
          <option value="minor">Minor</option>
          <option value="melodic minor">Melodic Minor</option>
          <option value="harmonic minor">Harmonic Minor</option>
        </select>
      </div>

      <button
        className="absolute top-2 right-0 text-xs opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "shrink" : "expand"}
      </button>

      {diatonicChords?.map((chord) => (
        <div key={chord.name} className="chord-row relative">
          <span className="sequencer__chord-name">{chord.name}</span>
          <div className="sequencer-row">
            {timeBeats.map((hihatTime) => (
              <button
                className={`button button--chord ${
                  chords[hihatTime] === chord ? "button--active" : ""
                }`}
                key={`kick-${hihatTime}`}
                onClick={() => clickChord(hihatTime, chord)}
              >
                <span className="sr-only">{chord.name}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
