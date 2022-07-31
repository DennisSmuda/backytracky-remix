import { ChordBeat } from "./Music";

export type ChordNotes = Array<string>;
export type Chords = Array<ChordBeat>;

const IChord: ChordNotes = ["C3", "E3", "G3", "B3"];
const IIChord: ChordNotes = ["D3", "F3", "A3", "C4"];
const VChord: ChordNotes = ["G3", "B3", "D3", "F3"];
const VIChord: ChordNotes = ["A3", "C#3", "E3", "G3"];

const turnaroundChords: Chords = [
  new ChordBeat({
    root: "C",
    type: "maj",
    extension: "7",
    note: IChord,
    duration: "2n",
    bar: 0,
    beat: 0,
  }),
  new ChordBeat({
    root: "A",
    extension: "7",
    note: VIChord,
    duration: "2n",
    bar: 0,
    beat: 2,
  }),
  new ChordBeat({
    root: "D",
    type: "m",
    extension: "7",
    note: IIChord,
    duration: "2n",
    bar: 1,
    beat: 0,
    sixteenth: 0,
  }),
  new ChordBeat({
    root: "G",
    extension: "7",
    note: VChord,
    duration: "2n",
    bar: 1,
    beat: 2,
  }),
];

const twoFiveOneChords: Chords = [
  new ChordBeat({
    root: "D",
    type: "m",
    extension: "7",
    note: IIChord,
    duration: "2n",
    bar: 0,
    beat: 0,
    sixteenth: 0,
  }),
  new ChordBeat({
    root: "G",
    extension: "7",
    note: VChord,
    duration: "2n",
    bar: 0,
    beat: 2,
  }),
  new ChordBeat({
    root: "C",
    type: "maj",
    extension: "7",
    note: IChord,
    duration: "2n",
    bar: 1,
    beat: 0,
  }),
  new ChordBeat({
    root: "C",
    type: "maj",
    extension: "7",
    note: IChord,
    duration: "4n",
    bar: 1,
    beat: 2,
  }),
  new ChordBeat({
    root: "A",
    extension: "7",
    note: VIChord,
    duration: "4n",
    bar: 1,
    beat: 3,
  }),
];

export { turnaroundChords, twoFiveOneChords };
