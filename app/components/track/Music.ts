import { hihatOnlyGroove } from "./grooves";

interface MusicConfig {
  numBars: number;
}

export type Chord = Array<string>;
export type Chords = Array<ChordBeat>;

export interface ChordBeat {
  time: string;
  note: Chord;
  duration: string;
  root: string;
  type?: string;
  extension?: string;
  bar: number;
  beat: number;
  sixteenth?: number;
}

export default class Music {
  private numBars;

  constructor(music: MusicConfig) {
    this.numBars = music.numBars;
  }

  makeMusic() {
    const IChord: Chord = ["C3", "E3", "G3", "B3"];
    const IIChord: Chord = ["D3", "F3", "A3", "C4"];
    const VChord: Chord = ["G3", "B3", "D3", "F3"];
    const VIChord: Chord = ["A3", "C#3", "E3", "G3"];

    const turnaroundChords: Chords = [
      {
        root: "C",
        type: "maj",
        extension: "7",
        time: "0:0",
        note: IChord,
        duration: "2n",
        bar: 0,
        beat: 0,
        sixteenth: 0,
      },
      {
        root: "A",
        extension: "7",
        time: "0:2",
        note: VIChord,
        duration: "2n",
        bar: 1,
        beat: 3,
      },
      {
        root: "D",
        type: "m",
        extension: "7",
        time: "1:0",
        note: IIChord,
        duration: "2n",
        bar: 0,
        beat: 0,
        sixteenth: 0,
      },
      {
        root: "G",
        extension: "7",
        time: "1:2",
        note: VChord,
        duration: "2n",
        bar: 0,
        beat: 2,
      },
    ];

    const twoFiveOneChords: Chords = [
      {
        root: "D",
        type: "m",
        extension: "7",
        time: "0:0",
        note: IIChord,
        duration: "2n",
        bar: 0,
        beat: 0,
        sixteenth: 0,
      },
      {
        root: "G",
        extension: "7",
        time: "0:2",
        note: VChord,
        duration: "2n",
        bar: 0,
        beat: 2,
      },
      {
        root: "C",
        type: "maj",
        extension: "7",
        time: "1:0",
        note: IChord,
        duration: "2n",
        bar: 1,
        beat: 0,
      },
      {
        root: "C",
        type: "maj",
        extension: "7",
        time: "1:2",
        note: IChord,
        duration: "4n",
        bar: 1,
        beat: 2,
      },
      {
        root: "A",
        extension: "7",
        time: "1:3",
        note: VIChord,
        duration: "4n",
        bar: 1,
        beat: 3,
      },
    ];

    return {
      chords: turnaroundChords,
      groove: hihatOnlyGroove,
    };
  }
}
