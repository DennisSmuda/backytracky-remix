import { hihatOnlyGroove } from "./grooves";

interface MusicConfig {
  numBars: number;
}

type Chord = Array<string>;
type Chords = Array<ChordBeat>;

interface ChordBeat {
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
      { time: "0:0", note: IIChord, duration: "2n" },
      { time: "0:2", note: VChord, duration: "2n" },
      { time: "1:0", note: IChord, duration: "1n" },
    ];

    return {
      chords: mainChords,
      groove: hihatOnlyGroove,
    };
  }
}
