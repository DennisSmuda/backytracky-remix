import type { ChordBeat } from "~/music/Music";

interface EditChordProps {
  chord: ChordBeat;
  shortenChord: Function;
  lengthenChord: Function;
  editChord: Function;
  deleteChord: Function;
}

export function EditChord({
  chord,
  shortenChord,
  lengthenChord,
  editChord,
  deleteChord,
}: EditChordProps) {
  const hasOverflow = () => {
    return (
      (chord.beat >= 1 && chord.duration === "1n") ||
      (chord.beat >= 2 && chord.duration === "2n.") ||
      (chord.beat >= 3 && chord.duration === "2n")
    );
  };

  const getSplitDurations = () => {
    if (chord.duration === "1n") {
      switch (chord.beat) {
        case 1:
          return {
            base: 3,
            ghost: 1,
          };
        case 2:
          return {
            base: 2,
            ghost: 2,
          };
        case 3:
          return {
            base: 1,
            ghost: 3,
          };
      }
    } else if (chord.duration === "2n.") {
      switch (chord.beat) {
        case 2:
          return {
            base: 2,
            ghost: 1,
          };
        case 3:
          return {
            base: 1,
            ghost: 2,
          };
      }
    } else if (chord.duration === "2n") {
      switch (chord.beat) {
        case 3:
          return {
            base: 1,
            ghost: 1,
          };
      }
    }
  };

  const chordDurationClass = (): string => {
    if (hasOverflow()) {
      return `duration-${chord.duration}`;
    }
    return `duration-${chord.duration}`;
  };

  return (
    <>
      <div
        className={`sheet-grid__chord bar-${chord.bar} beat-${
          chord.beat
        } sixteenth-${chord.sixteenth} ${chordDurationClass()} base-duration-${
          getSplitDurations()?.base
        }`}
      >
        <div className="text-left text-xs opacity-50">
          {chord.time} | 1 / {chord.duration} | beat: {chord.beat}
          <br />
          {/* {hasOverflow() && <div>has overflow madafack</div>} */}
          {/* {chord.beat >= 2 && chord.duration === "1n" && (
            <div>has overflow madafack</div>
          )}
          {chord.beat >= 2 && chord.duration === "1n" && (
            <div>has overflow madafack</div>
          )} */}
        </div>
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
        <div className="grid grid-flow-col gap-2 mt-2">
          <button
            disabled={chord.duration === "4n"}
            className="icon-button"
            onClick={(e) => shortenChord(e, chord)}
          >
            <span>make chord shorter</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="icon-button" onClick={(e) => editChord(e, chord)}>
            <span>edit</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
          <button
            className="icon-button"
            onClick={(e) => deleteChord(e, chord)}
          >
            <span>delete</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            disabled={chord.duration === "1n"}
            className="icon-button"
            onClick={(e) => lengthenChord(e, chord)}
          >
            <span>make chord longer</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`sheet-grid__chord sheet-grid__chord--ghost
        ${!hasOverflow() && "hidden"}
        base-duration-${getSplitDurations()?.ghost}
        `}
      >
        {/* {chord.root} */}
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
