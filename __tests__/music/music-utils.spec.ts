import type { Subdivision } from "tone/build/esm/core/type/Units";
import {
  convertDurationToBeats,
  decreaseDuration,
  getSplitDurations,
  hasOverflow,
  increaseChordTimeByBeats,
  increaseDuration,
} from "../../app/music/utils";

const sampleChord = {
  note: ["C3", "E3", "G3", "B3"],
  duration: "2n." as Subdivision,
  time: "0:0:0",
  root: "C",
  type: "maj",
  extension: "7",
  bar: 0,
  beat: 3,
  sixteenth: 0,
  ghostTime: "0:0:0",
};

describe("Music Utils", () => {
  it("can calculate split-durations for displaying a chord and it's ghost", () => {
    const splitDuration = getSplitDurations(sampleChord);

    expect(splitDuration).toMatchObject({ base: 1, ghost: 2 });
  });

  it("can calculate if a ChordBeat has overflow on the sheet", () => {
    const isOverflowing = hasOverflow(sampleChord);

    expect(isOverflowing).toBeTruthy();
  });

  it("can increase the chord-time by beat-number", () => {
    let next = increaseChordTimeByBeats(sampleChord, 4);
    expect(next).toMatchObject({ bar: 1, beat: 3, sixteenth: 0 });
    next = increaseChordTimeByBeats(sampleChord, 3);
    expect(next).toMatchObject({ bar: 1, beat: 2, sixteenth: 0 });
    next = increaseChordTimeByBeats(sampleChord, 2);
    expect(next).toMatchObject({ bar: 1, beat: 1, sixteenth: 0 });
    next = increaseChordTimeByBeats(sampleChord, 1);
    expect(next).toMatchObject({ bar: 1, beat: 0, sixteenth: 0 });
  });

  it("can increase duration by subdivision steps", () => {
    expect(increaseDuration("4n")).toEqual("2n");
    expect(increaseDuration("2n")).toEqual("2n.");
    expect(increaseDuration("2n.")).toEqual("1n");
    expect(increaseDuration("1n")).toEqual("1n");
    // @ts-expect-error
    expect(increaseDuration("")).toEqual("1n");
  });

  it("can decrease duration by subdivision steps", () => {
    expect(decreaseDuration("4n")).toEqual("4n");
    expect(decreaseDuration("2n")).toEqual("4n");
    expect(decreaseDuration("2n.")).toEqual("2n");
    expect(decreaseDuration("1n")).toEqual("2n.");
    // @ts-expect-error
    expect(decreaseDuration("")).toEqual("4n");
  });

  it("can convert a duration to a number of bars", () => {
    expect(convertDurationToBeats("4n")).toEqual(1);
    expect(convertDurationToBeats("2n")).toEqual(2);
    expect(convertDurationToBeats("2n.")).toEqual(3);
    expect(convertDurationToBeats("1n")).toEqual(4);
    // @ts-expect-error
    expect(convertDurationToBeats("")).toEqual(1);
  });
});
