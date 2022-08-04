import React from "react";
import { fireEvent, render } from "@testing-library/react";

import TrackPayer from "../app/components/track/TrackPlayer.client";
import type { Subdivision } from "tone/build/esm/core/type/Units";

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

jest.mock("tone", () => ({
  start: jest.fn(),
  Sampler: jest.fn(() => ({
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

describe("Track Player Component", () => {
  it("renders correctly and can press play/stop buttons to control the track", () => {
    const player = render(<TrackPayer sheet={[sampleChord]} bpm={120} />);

    const playButton = player.getByRole("button", { name: /play/i });
    expect(playButton).toBeInTheDocument();

    fireEvent.click(playButton);

    const stopButton = player.getByRole("button", { name: /stop/i });
    fireEvent.click(stopButton);
  });
});
