import type { Subdivision } from "tone/build/esm/core/type/Units";
import { getSplitDurations } from "../../app/music/utils";

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
});
