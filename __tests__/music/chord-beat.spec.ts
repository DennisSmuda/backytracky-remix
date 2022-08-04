import type { Subdivision } from "tone/build/esm/core/type/Units";
import ChordBeat from "../../app/music/ChordBeat";

const sampleChord = {
  note: ["C3", "E3", "G3", "B3"],
  duration: "4n" as Subdivision,
  time: "0:0:0",
  root: "C",
  type: "maj",
  extension: "7",
  bar: 0,
  beat: 2,
  sixteenth: 0,
  ghostTime: "0:2:0",
};

describe("Chord Beat Class", () => {
  it("can construct a new ChordBeat Instance", () => {
    const chordBeat = new ChordBeat(sampleChord);

    expect(chordBeat).toBeTruthy();
    expect(chordBeat.time).toBe(`${chordBeat.bar}:${chordBeat.beat}:0`);
    expect(chordBeat.ghostTime).toBe(``);
  });
});
