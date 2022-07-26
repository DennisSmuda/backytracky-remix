import type ChordBeat from "../../music/ChordBeat";
import { getSplitDurations, hasOverflow } from "../../music/utils";

export default function PlayChord({
  chord,
  clickChord,
}: {
  chord: ChordBeat;
  clickChord: Function;
}) {
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
        <div className="flex items-center text-xs sm:text-sm md:text-base">
          <span className="chord-root font-black">{chord.root}</span>
          <span className="chord-type opacity-50 ml-px">{chord.type}</span>
          <span className="chord-extension relative text-xs ml-px -top-1">
            {chord.extension}
          </span>
          <div className="duration-line" />
        </div>
      </button>
      <button
        onClick={() => clickChord(chord)}
        className={`interactive-bg sheet-grid__chord sheet-grid__chord--ghost
        ${!hasOverflow(chord) && "hidden"}
        base-duration-${getSplitDurations(chord)?.ghost}
        `}
      >
        <div className="new-sheet__chord opacity-40">
          {/* <span className="opacity-50 text-xs">...</span> */}
          <div className="flex items-center">
            <span className="chord-root font-black">{chord.root}</span>
            <span className="chord-type opacity-50 ml-px">{chord.type}</span>
            <span className="chord-extension relative text-xs ml-px -top-1">
              {chord.extension}
            </span>
            <div className="duration-line" />
          </div>
        </div>
      </button>
    </>
  );
}
