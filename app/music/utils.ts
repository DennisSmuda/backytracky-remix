import type { ChordBeat } from "./Music";

export const hasOverflow = (chord: ChordBeat) => {
  return (
    (chord.beat >= 1 && chord.duration === "1n") ||
    (chord.beat >= 2 && chord.duration === "2n.") ||
    (chord.beat >= 3 && chord.duration === "2n")
  );
};

export const getSplitDurations = (chord: ChordBeat) => {
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
