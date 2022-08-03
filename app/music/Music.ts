import type { Subdivision } from "tone/build/esm/core/type/Units";
import { converDurationToBars, increaseChordTimeByBeats } from "./utils";

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
  }

  generateMusic() {
    const groove: Array<{
      time: string;
      note: string | Array<string>;
      duration: Subdivision;
    }> = [];
    let totalBeatCount = 0;

    const chords = this.sheet.map((chord: ChordBeat) => {
      return new ChordBeat(chord);
    });

    chords.forEach((chord: ChordBeat) => {
      const bars = converDurationToBars(chord.duration);
      totalBeatCount += bars;
      for (let i = 0; i < bars; i++) {
        const next = increaseChordTimeByBeats(chord, i);
        groove.push({
          time: `${next.bar}:${next.beat}`,
          note: next.beat === 0 ? ["C1", "D1"] : "D1",
          duration: "8n",
        });
      }
    });

    return {
      chords,
      groove,
      numBars: totalBeatCount / 2,
    };
  }
}
