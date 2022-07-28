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
      { time: "0:0", note: IIChord, duration: "8n." },
      { time: "0:0:3", note: IIChord, duration: "16n" },
      { time: "0:2", note: VChord, duration: "8n" },
      { time: "0:3", note: VChord, duration: "8n" },
      { time: "1:0", note: IChord, duration: "16n" },
      { time: "1:2", note: IChord, duration: "16n" },
      { time: "1:2:2", note: IChord, duration: "16n" },
      { time: "1:3", note: VChord, duration: "16n" },
      { time: "1:4", note: IIChord, duration: "16n" },
    ];

    return {
      chords: mainChords,
      groove: hihatOnlyGroove,
    };
  }
}
