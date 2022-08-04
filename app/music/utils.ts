import type { Subdivision } from "tone/build/esm/core/type/Units";
import type ChordBeat from "./ChordBeat";

export const increaseChordTimeByBeats = (chord: ChordBeat, beats: number) => {
  let nextBeat = chord.beat as number;
  let nextBar = chord.bar as number;

  nextBeat += beats;
  while (nextBeat >= 4) {
    nextBar += 1;
    nextBeat -= 4;
  }

  return {
    beat: nextBeat,
    bar: nextBar,
    sixteenth: 0,
  };
};

export const hasOverflow = (chord: ChordBeat) => {
  return (
    (chord.beat >= 1 && chord.duration === "1n") ||
    (chord.beat >= 2 && chord.duration === "2n.") ||
    (chord.beat >= 3 && chord.duration === "2n")
  );
};

export const getSplitDurations = (
  chord: ChordBeat
): { base: number; ghost: number } => {
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
  return {
    base: 0,
    ghost: 0,
  };
};

export const increaseDuration = (duration: Subdivision) => {
  if (duration === "1n") return "1n";
  if (duration === "2n.") return "1n";
  if (duration === "2n") return "2n.";
  if (duration === "4n") return "2n";
  return "1n";
};

export const decreaseDuration = (duration: Subdivision) => {
  if (duration === "1n") return "2n.";
  if (duration === "2n.") return "2n";
  if (duration === "2n") return "4n";
  if (duration === "4n") return "4n";
  return "4n";
};

export const convertDurationToBeats = (duration: Subdivision) => {
  switch (duration) {
    case "1n":
      return 4;
    case "2n.":
      return 3;
    case "2n":
      return 2;
    case "4n":
      return 1;
    default:
      return 1;
  }
};

export const getNextChordTime = (previousChord: ChordBeat) => {
  const c = previousChord;
  const beats = convertDurationToBeats(c.duration);

  let nextBeat = (c.beat as number) + beats;
  let nextBar = c.bar as number;
  if (nextBeat >= 4) {
    nextBar += 1;
    nextBeat -= 4;
  }

  let nextSixteenth = 0;

  return {
    bar: nextBar,
    beat: nextBeat,
    sixteenth: nextSixteenth,
  };
};

export const getChordEndTime = (chord: ChordBeat) => {
  const beats = convertDurationToBeats(chord.duration);

  let nextBeat = (chord.beat as number) + beats;
  let nextBar = chord.bar as number;
  let nextSixteenth = 0;

  return {
    bar: nextBar,
    beat: nextBeat,
    sixteenth: nextSixteenth,
  };
};
