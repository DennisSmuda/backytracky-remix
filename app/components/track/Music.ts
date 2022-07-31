import { hihatOnlyGroove } from "./grooves";
// import { turnaroundChords } from "./track-demos";

interface MusicConfig {
  sheet: [];
}

export type ChordNotes = Array<string>;
export type Chords = Array<ChordBeat>;

export interface IChordBeat {
  note: ChordNotes;
  duration: "1n" | "2n" | "4n";
  root: string;
  type?: string;
  extension?: string;
  bar: number;
  beat: number;
  sixteenth?: number;
}

export class ChordBeat implements IChordBeat {
  public note: ChordNotes;
  public duration: "1n" | "2n" | "4n";
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
  private sheet;

  constructor(music: MusicConfig) {
    this.sheet = music.sheet;
    // console.log("Music Constructor", this.sheet);
  }

  generateMusic() {
    // turnaroundChords;
    // const sheetChords = JSON.parse(this.sheet);
    const chords = this.sheet.map((chord) => {
      return new ChordBeat(chord);
    });
    console.log("Make Music", chords);

    return {
      chords,
      // chords: turnaroundChords,
      groove: hihatOnlyGroove,
    };
  }
}

export const increaseDuration = (duration: "1n" | "2n" | "4n") => {
  if (duration === "1n") return "1n";
  if (duration === "2n") return "1n";
  if (duration === "4n") return "2n";
  return "4n";
};

export const decreaseDuration = (duration: "1n" | "2n" | "4n") => {
  if (duration === "1n") return "2n";
  if (duration === "2n") return "4n";
  if (duration === "4n") return "4n";
  return "4n";
};
