import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";

import TrackPayer from "../app/components/track/TrackPlayer.client";

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
    const player = render(<TrackPayer />);
    // const loadingText = player.getByText(/generating/i)
    // expect(loadingText).toBeInTheDocument();
    const playButton = player.getByRole("button", { name: /play/i });
    expect(playButton).toBeInTheDocument();
    fireEvent.click(playButton);
    const stopButton = player.getByRole("button", { name: /stop/i });
    fireEvent.click(stopButton);
  });
});
