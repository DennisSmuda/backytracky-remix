import type { Sampler } from "tone";
import { now } from "tone";
import { useEffect, useRef, useState } from "react";
import { useInstruments } from "~/hooks/useInstruments";

const standardTuning = ["E2", "A2", "D3", "G3", "B3", "E4"];
const standardFlatTuning = ["Eb2", "B2", "Db3", "Gb3", "Bb3", "Eb4"];
const dropDTuning = ["D2", "A2", "D3", "G3", "B3", "E4"];
const openGTuning = ["D2", "G2", "D3", "G3", "B3", "D4"];
const openDTuning = ["D2", "A2", "D3", "Gb3", "A3", "D4"];

export default function GuitarTuner() {
  const [instruments] = useInstruments();
  const piano = useRef<Sampler>();
  const drums = useRef<Sampler>();

  const [selectedTuning, setSelectedTuning] =
    useState<Array<string>>(standardTuning);

  useEffect(() => {
    piano.current = instruments?.pianoSampler;
    drums.current = instruments?.drumSampler;
  }, [instruments]);

  const playNote = (note: string) => {
    piano?.current?.triggerAttackRelease(note, "1n.", now(), 0.35);
  };

  const changeTuning = (tuning: string) => {
    switch (tuning) {
      case "dropDTuning":
        return setSelectedTuning(dropDTuning);
      case "standardFlatTuning":
        return setSelectedTuning(standardFlatTuning);
      case "openDTuning":
        return setSelectedTuning(openDTuning);
      case "openGTuning":
        return setSelectedTuning(openGTuning);
      case "standardTuning":
      default:
        return setSelectedTuning(standardTuning);
    }
  };

  return (
    <div className="my-4">
      <div className="form">
        <label htmlFor="tuning-select">
          <span>Tuning:</span>

          <select
            onChange={(e) => changeTuning(e.target.value)}
            name="tuning-select"
            id="tuning-select"
          >
            <optgroup label="Standard Tunings">
              <option value="standardTuning">E Standard</option>
              <option value="standardFlatTuning">E Flat</option>
            </optgroup>
            <optgroup label="Drop Tunings">
              <option value="dropDTuning">Drop D</option>
            </optgroup>
            <optgroup label="Open Tunings">
              <option value="openDTuning">Open D</option>
              <option value="openGTuning">Open G</option>
            </optgroup>
          </select>
        </label>
      </div>
      <div className="grid grid-flow-col gap-2 md:gap-8 mt-8 h-[342px]">
        {selectedTuning.map((note) => (
          <button
            onClick={() => playNote(note)}
            className="button text-xs h-full px-0.5 sm:p-4"
            key={note}
          >
            {note}
          </button>
        ))}
      </div>
    </div>
  );
}
