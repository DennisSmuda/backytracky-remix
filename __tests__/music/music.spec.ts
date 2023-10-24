import Music from "../../app/music/Music";
import { expect } from 'vitest'

describe("Music Class", () => {
  it("can construct a new MusicInstance from JSON or String", () => {
    const music = new Music({ sheet: sampleSheet.sheet });

    expect(music).toBeTruthy();
    const { chords, groove } = music.generateMusic('asdf');
    expect(chords).toBeTruthy();
    expect(groove).toBeTruthy();

    const stringMusic = new Music({ sheet: JSON.stringify(sampleSheet.sheet) });
    expect(stringMusic).toBeTruthy();
  });
});

const sampleSheet = {
  id: "8bcf4da1-20c1-4a0c-a6e2-a0b71274da53",
  createdAt: "2022-08-03T23:47:26.659Z",
  updatedAt: "2022-08-03T23:47:26.660Z",
  name: "Major-F",
  sheet: [
    {
      bar: 0,
      beat: 0,
      note: ["F3", "A3", "C4", "E4", "G4"],
      root: "F",
      type: "maj",
      duration: "2n",
      extension: "9",
      sixteenth: 0,
    },
    {
      bar: 0,
      beat: 2,
      note: ["E3", "G3", "B3", "D4"],
      root: "E",
      type: "min",
      duration: "2n",
      extension: "7",
      sixteenth: 0,
    },
    {
      bar: 1,
      beat: 0,
      note: ["D3", "F3", "A3", "C4"],
      root: "D",
      type: "min",
      duration: "2n.",
      extension: "7",
      sixteenth: 0,
    },
    {
      bar: 1,
      beat: 3,
      note: ["E3", "G3", "B3", "D4"],
      root: "E",
      type: "min",
      duration: "4n",
      extension: "7",
      sixteenth: 0,
    },
  ],
  userId: "e4e34936-c4c6-4f70-83bd-217183f39e38",
  upvotes: 0,
};
