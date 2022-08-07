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
  beat: 1,
  sixteenth: 0,
  ghostTime: "0:0:0",
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
  it("renders correctly and can press controls to play/stop/control the track", () => {
    const player = render(<TrackPayer sheet={[sampleChord]} bpm={120} />);

    const playButton = player.getByRole("button", { name: /play/i });
    expect(playButton).toBeInTheDocument();

    fireEvent.click(playButton);

    const stopButton = player.getByRole("button", { name: /stop/i });
    fireEvent.click(stopButton);

    const fourFloorButton = player.getByRole("button", { name: /4 floor/i });
    fireEvent.click(fourFloorButton);

    const hihatButton = player.getByRole("button", { name: /hihat/i });
    fireEvent.click(hihatButton);

    const bpmSlider = player.getByRole("slider", { name: /bpm/i });
    fireEvent.change(bpmSlider, { target: { value: 220 } });
    expect(bpmSlider).toHaveValue("220");

    const bpmRange = player.getByRole("slider", { name: /bpm:/i });
    fireEvent.click(bpmRange);
  });

  it("can click on chords", () => {
    const player = render(<TrackPayer sheet={[sampleChord]} bpm={120} />);
    const chords = player.getAllByRole("button", { name: /c maj 7/i });

    fireEvent.click(chords[0]);
  });
});
