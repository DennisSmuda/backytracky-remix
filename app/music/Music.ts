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
      const bars = convertDurationToBeats(chord.duration);
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
    const loopEnd = getChordEndTime(chords[chords.length - 1]);
    console.log("Total bar count", loopEnd);

    return {
      chords,
      groove,
      loopEnd: `${loopEnd.bar}:${loopEnd.beat}:0`,
    };
  }
}
