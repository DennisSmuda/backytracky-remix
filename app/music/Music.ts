import type { Subdivision } from "tone/build/esm/core/type/Units";
import ChordBeat from "./ChordBeat";
import {
  convertDurationToBeats,
  increaseChordTimeByBeats,
  getChordEndTime,
} from "./utils";

enum grooves {
  hihat = "hihat",
  fourToTheFloor = "fourToTheFloor",
  bossa = "bossa",
}

interface MusicConfig {
  sheet: string | object;
}

export type ChordNotes = Array<string>;
export type Chords = Array<ChordBeat>;

export default class Music {
  private sheet;

  constructor(music: MusicConfig) {
    if (typeof music.sheet === "string") {
      this.sheet = JSON.parse(music.sheet);
    } else {
      this.sheet = music.sheet;
    }
  }

  generateMusic(currentGroove: string, sixteenthHit: boolean = false) {
    const groove: Array<{
      time: string;
      note: string | Array<string>;
      duration: Subdivision;
    }> = [];

    const chords = this.sheet.map((chord: ChordBeat) => {
      return new ChordBeat(chord);
    });

    chords.forEach((chord: ChordBeat) => {
      const bars = convertDurationToBeats(chord.duration);
      for (let i = 0; i < bars; i++) {
        const next = increaseChordTimeByBeats(chord, i);
        const nextGrooveBeats = this.getNextGrooveBeats(
          next,
          currentGroove,
          sixteenthHit
        );

        groove.push(...nextGrooveBeats);
      }
    });

    const loopEnd = getChordEndTime(chords[chords.length - 1]);
    const loopEndTime = `${loopEnd.bar}:${loopEnd.beat}:0`;

    return {
      chords,
      groove,
      loopEndTime,
    };
  }

  getNextGrooveBeats(
    next: { bar: number; beat: number },
    groove: string = grooves.hihat,
    sixteenthHit: boolean
  ) {
    const beats = [
      {
        time: `${next.bar}:${next.beat}:0`,
        note: this.getDrumBeatNotes(groove, next.bar, next.beat),
        duration: "4n" as Subdivision,
      },
    ];

    if (sixteenthHit) {
      beats.push({
        time: `${next.bar}:${next.beat}:1`,
        note: "D1", // 16nth note hihat
        duration: "4n" as Subdivision,
      });
    }

    return beats;
  }

  getDrumBeatNotes(groove: string = grooves.hihat, bar: number, beat: number) {
    if (groove === grooves.hihat) {
      return "D1";
    }

    if (groove === grooves.fourToTheFloor) {
      return beat % 2 === 1 ? ["C1", "D1", "E1"] : ["C1", "D1"];
    }

    return "D1";
  }
}
