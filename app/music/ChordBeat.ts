import type { Subdivision } from "tone/build/esm/core/type/Units";

export type ChordNotes = Array<string>;

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

export default class ChordBeat implements IChordBeat {
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
