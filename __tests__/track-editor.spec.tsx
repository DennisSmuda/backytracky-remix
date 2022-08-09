import React from "react";
import { fireEvent, render } from "@testing-library/react";
import type { Subdivision } from "tone/build/esm/core/type/Units";

import TrackEditor from "../app/components/track/TrackEditor.client";

jest.mock("tone", () => ({
  start: jest.fn(),
  now: jest.fn(),
  Sampler: jest.fn(() => ({
    triggerAttackRelease: jest.fn(),
    toDestination: jest.fn(),
  })),
  Transport: jest.fn(() => ({
    start: jest.fn(),
    stop: jest.fn(),
    loop: jest.fn(),
    dispose: jest.fn(),
  })),
  Synth: jest.fn(() => ({
    toDestination: jest.fn(),
  })),
  Part: jest.fn().mockImplementation(() => ({
    start: jest.fn(),
    stop: jest.fn(),
    dispose: jest.fn(),
  })),
}));

jest.mock("../app/music/loader", () => ({
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
    const clickChord = jest.fn();

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
    const clickChord = jest.fn();

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
