import React from "react";
import { render } from "@testing-library/react";

import Sequencer from "../app/components/sequencer/Sequencer.client";

jest.mock("tone", () => ({
  start: jest.fn(),
  Sampler: jest.fn(() => ({
    toDestination: jest.fn(),
  })),
  // "Transport.scheduleRepeat": {},
  // Transport: jest.fn(() => ({
  Transport: jest.fn().mockImplementation(() => ({
    scheduleRepeat: jest.fn(),
    start: jest.fn(),
    stop: jest.fn(),
    loop: jest.fn(),
    dispose: jest.fn(),
  })),
  Part: jest.fn().mockImplementation(() => ({
    start: jest.fn(),
    stop: jest.fn(),
    dispose: jest.fn(),
  })),
}));

describe("Sequencer Component", () => {
  it("renders correctly and can press controls to play/stop/control", () => {
    const sequencer = render(<Sequencer />);

    const playButton = sequencer.getByRole("button", { name: /play/i });
    expect(playButton).toBeTruthy();
    playButton.click();
    const stopButton = sequencer.getByRole("button", { name: /stop/i });
    stopButton.click();
  });
});
