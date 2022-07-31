import type { ChordBeat } from "~/music/Music";
import { getSplitDurations, hasOverflow } from "../../music/utils";

interface PlayChordProps {
  chord: ChordBeat;
  clickChord: Function;
}
export function PlayChord({ chord, clickChord }: PlayChordProps) {
  return (
    <>
      <button
        onClick={() => clickChord(chord)}
        key={chord.time}
        className={`interactive-bg sheet-grid__chord bar-${chord.bar} beat-${
          chord.beat
        } sixteenth-${chord.sixteenth} duration-${
          chord.duration
        } base-duration-${getSplitDurations(chord)?.base}`}
      >
        <span className="opacity-50 text-xs">{chord.time}</span>
        <div className="flex items-center">
          <span className="chord-root font-black">{chord.root}</span>
          <span className="chord-type opacity-50 ml-px">{chord.type}</span>
          <span className="chord-extension relative text-xs ml-px -top-1">
            {chord.extension}
          </span>
          <div className="duration-line" />
        </div>
      </button>
      <div
        onClick={() => clickChord(chord)}
        className={`interactive-bg sheet-grid__chord sheet-grid__chord--ghost
        ${!hasOverflow(chord) && "hidden"}
        base-duration-${getSplitDurations(chord)?.ghost}
        `}
      >
        <div className="new-sheet__chord">
          <div>
            <span className="chord-root font-black">{chord.root}</span>
            <span className="chord-type opacity-50 ml-px">{chord.type}</span>
            <span className="chord-extension relative text-xs ml-px -top-1">
              {chord.extension}
            </span>
          </div>
          <div className="duration-line" />
        </div>
      </div>
    </>
  );
}
