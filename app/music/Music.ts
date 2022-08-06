import type { Subdivision } from "tone/build/esm/core/type/Units";
import ChordBeat from "./ChordBeat";
import {
  convertDurationToBeats,
  increaseChordTimeByBeats,
  getChordEndTime,
} from "./utils";

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

  generateMusic(currentGroove: string) {
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
        const nextGrooveBeats = this.getNextGrooveBeats(next, currentGroove);
        // groove.push({
        //   time: `${next.bar}:${next.beat}`,
        //   // note: next.beat === 0 ? ["C1", "D1"] : "D1",
        //   note: this.getDrumBeatNotes(currentGroove, next.bar, next.beat),
        //   duration: "8n",
        // });
        console.log("Groove", nextGrooveBeats);
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
    groove: string = "hihat"
  ) {
    return [
      {
        time: `${next.bar}:${next.beat}:0`,
        note: this.getDrumBeatNotes(groove, next.bar, next.beat),
        duration: "16n" as Subdivision,
      },
      // In Betweeners
      groove === "bossa"
        ? {
            time: `${next.bar}:${next.beat}:1`,
            note: (next.beat + 4) % 4 === 0 ? "C1" : "D1",
            duration: "16n" as Subdivision,
          }
        : {
            // 16nth hihat
            time: `${next.bar}:${next.beat}:1`,
            note: "D1",
            duration: "16n" as Subdivision,
          },
    ];
  }

  getDrumBeatNotes(groove: string = "hihat", bar: number, beat: number) {
    if (groove === "hihat") {
      return "D1";
    }

    if (groove === "fourOnTheFloor") {
      return beat % 2 === 1 ? ["C1", "D1", "E1"] : ["C1", "D1"];
    }

    if (groove === "bossa") {
      if (bar === 0 && beat === 0) {
        return ["C1", "D1"];
      }
      if (bar === 0 && beat === 1) {
        return ["D1", "E1"];
      }
      if (bar === 0 && beat === 2) {
        return ["D1"];
      }
    }

    return "D1";
  }
}
