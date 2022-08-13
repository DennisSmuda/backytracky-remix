import { useState } from "react";
import type { Sampler } from "tone";
import { now } from "tone";

export default function ChordsSequence({
  pianoSampler,
  onChange,
  mute,
  timeBeats,
}: {
  pianoSampler: Sampler;
  onChange: Function;
  mute: boolean;
  timeBeats: string[];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [chords, setChords] = useState<{ [key: string]: boolean }>({});

  const clickChord = (time: string, chord: string[]) => {
    chords[time] = !chords[time];
    setChords({ ...chords });
    if (!mute) pianoSampler.triggerAttackRelease(chord, "1n", now(), 0.3);
    onChange({ chords });
  };

  return (
    <div
      className={`sequencer-section relative ${
        isOpen ? "sequencer-section--open" : ""
      }`}
    >
      <h4>Chords</h4>
      <button
        className="absolute top-0 right-0 text-xs opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "shrink" : "expand"}
      </button>
      <div className="sequencer-row">
        {timeBeats.map((hihatTime) => (
          <button
            className={`button button--hihat ${
              chords[hihatTime] === true ? "button--active" : ""
            }`}
            key={`kick-${hihatTime}`}
            onClick={() => clickChord(hihatTime, ["C2", "E4", "G3"])}
          >
            <span className="sr-only">hihat</span>
          </button>
        ))}
      </div>
    </div>
  );
}
