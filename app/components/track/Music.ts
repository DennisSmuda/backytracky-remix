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

    const mainChords: Chords = [
      {
        root: "D",
        type: "m",
        extension: "7",
        time: "0:0",
        note: IIChord,
        duration: "8n.",
        bar: 0,
        beat: 0,
        sixteenth: 0,
      },
      {
        root: "D",
        type: "m",
        extension: "7",
        time: "0:0:3",
        note: IIChord,
        duration: "16n",
        bar: 0,
        beat: 0,
        sixteenth: 3,
      },
      {
        root: "G",
        extension: "7",
        time: "0:2",
        note: VChord,
        duration: "8n",
        bar: 0,
        beat: 2,
      },
      {
        root: "G",
        extension: "7",
        time: "0:3",
        note: VChord,
        duration: "8n",
        bar: 0,
        beat: 3,
      },
      {
        root: "C",
        type: "maj",
        extension: "7",
        time: "1:0",
        note: IChord,
        duration: "16n",
        bar: 1,
        beat: 0,
      },
      {
        root: "C",
        type: "maj",
        extension: "7",
        time: "1:2",
        note: IChord,
        duration: "16n",
        bar: 1,
        beat: 2,
      },
      {
        root: "C",
        type: "maj",
        extension: "7",
        time: "1:2:2",
        note: IChord,
        duration: "16n",
        bar: 1,
        beat: 2,
        sixteenth: 2,
      },
      {
        root: "G",
        extension: "7",
        time: "1:3",
        note: VChord,
        duration: "16n",
        bar: 1,
        beat: 3,
      },
    ];

    return {
      chords: mainChords,
      groove: hihatOnlyGroove,
    };
  }
}
