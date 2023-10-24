import React from "react";
import { fireEvent, render } from "@testing-library/react";
import type { Subdivision } from "tone/build/esm/core/type/Units";

import TrackEditor from "../app/components/track/TrackEditor.client";
import { vi, expect } from "vitest";

vi.mock("tone", () => ({
  start: vi.fn(),
  now: vi.fn(),
  Sampler: vi.fn(() => ({
    triggerAttackRelease: vi.fn(),
    toDestination: vi.fn(),
  })),
  Transport: vi.fn(() => ({
    start: vi.fn(),
    stop: vi.fn(),
    loop: vi.fn(),
    dispose: vi.fn(),
  })),
  Synth: vi.fn(() => ({
    toDestination: vi.fn(),
  })),
  Part: vi.fn().mockImplementation(() => ({
    start: vi.fn(),
    stop: vi.fn(),
    dispose: vi.fn(),
  })),
}));

vi.mock("../app/music/loader", () => ({
  loadInstruments: () => ({
    pianoSampler: {},
    drumSampler: {},
  }),
}));

const sampleChord = {
  note: ["C3", "E3", "G3", "B3"],
  duration: "4n" as Subdivision,
  time: "0:0:0",
  root: "C",
  type: "maj",
  extension: "7",
  bar: 0,
  beat: 2,
  sixteenth: 0,
  ghostTime: "0:2:0",
};

describe("Track Editor Component", () => {
  it("Renders a component to edit tracks", () => {
    const clickChord = vi.fn();

    const { getAllByText, getByRole } = render(
      <TrackEditor
        chords={[sampleChord]}
        shortenChord={clickChord}
        lengthenChord={clickChord}
        deleteChord={clickChord}
        editChord={clickChord}
      />
    );

    expect(getAllByText(/maj/)).toHaveLength(2);

    const playButton = getByRole("button", { name: /play/ });
    const editButton = getByRole("button", { name: /edit/ });
    fireEvent.click(editButton);
    expect(clickChord).toHaveBeenCalled();
    fireEvent.click(playButton);
  });

  it("shows appropriate message if there are no chords", () => {
    const clickChord = vi.fn();

    const { getByText } = render(
      <TrackEditor
        chords={[]}
        shortenChord={clickChord}
        lengthenChord={clickChord}
        deleteChord={clickChord}
        editChord={clickChord}
      />
    );

    expect(getByText(/add some chords/i));
  });
});
