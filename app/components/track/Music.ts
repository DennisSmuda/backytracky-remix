import { hihatOnlyGroove } from "./grooves";

interface MusicConfig {
  numBars: number;
}

export type ChordNotes = Array<string>;
export type Chords = Array<ChordBeat>;

export interface IChordBeat {
  note: ChordNotes;
  duration: string;
  root: string;
  type?: string;
  extension?: string;
  bar: number;
  beat: number;
  sixteenth?: number;
}

export class ChordBeat implements IChordBeat {
  public note: ChordNotes;
  public duration: string;
  public root: string;
  public type?: string;
  public extension?: string;
  public bar: number;
  public beat: number;
  public sixteenth?: number;

  constructor(config: IChordBeat) {
    this.note = config.note;
    this.duration = config.duration;
    this.root = config.root;
    this.type = config.type;
    this.extension = config.extension;
    this.bar = config.bar;
    this.beat = config.beat;
    this.sixteenth = config.sixteenth;
  }

  get time() {
    return `${this.bar}:${this.beat}:${this.sixteenth || 0}`;
  }
}

export default class Music {
  private numBars;

  constructor(music: MusicConfig) {
    this.numBars = music.numBars;
  }

  makeMusic() {
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

    return {
      chords: turnaroundChords,
      groove: hihatOnlyGroove,
    };
  }
}
