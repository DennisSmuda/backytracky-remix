import type { Subdivision } from "tone/build/esm/core/type/Units";
import { hihatOnlyGroove } from "./grooves";
// import { turnaroundChords } from "./track-demos";

interface MusicConfig {
  sheet: string | object;
}

export type ChordNotes = Array<string>;
export type Chords = Array<ChordBeat>;

export interface IChordBeat {
  note: ChordNotes;
  duration: Subdivision;
  root: string;
  type?: string;
  extension?: string;
  bar: number;
  beat: number;
  sixteenth?: number;
}

export class ChordBeat implements IChordBeat {
  public note: ChordNotes;
  public duration: Subdivision;
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

  get ghostTime() {
    return "";
  }
}

export default class Music {
  private sheet;

  constructor(music: MusicConfig) {
    if (typeof music.sheet === "string") {
      this.sheet = JSON.parse(music.sheet);
    } else {
      this.sheet = music.sheet;
    }
    // console.log("Music Constructor", this.sheet);
  }

  generateMusic() {
    // turnaroundChords;
    // const sheetChords = JSON.parse(this.sheet);
    const chords = this.sheet.map((chord: ChordBeat) => {
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

export const increaseDuration = (duration: Subdivision) => {
  if (duration === "1n") return "1n";
  if (duration === "2n.") return "1n";
  if (duration === "2n") return "2n.";
  if (duration === "4n") return "2n";
  return "1n";
};

export const decreaseDuration = (duration: Subdivision) => {
  if (duration === "1n") return "2n.";
  if (duration === "2n.") return "2n";
  if (duration === "2n") return "4n";
  if (duration === "4n") return "4n";
  return "4n";
};
