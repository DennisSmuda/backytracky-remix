import React from "react";
import { render } from "@testing-library/react";

import DrumSequencer from "../app/components/sequencer/DrumSequence";
import { timeBeats } from "../app/components/sequencer/timeBeats";

jest.mock("tone", () => ({
  start: jest.fn(),
  now: jest.fn(),
  Sampler: jest.fn(() => ({
    triggerAttackRelease: jest.fn(),
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

describe("DrumSequencer Component", () => {
  it("renders correctly and has buttons to control kick/snare/hihat sounds", () => {
    const change = jest.fn();
    const sequencer = render(
      <DrumSequencer onChange={change} timeBeats={timeBeats} mute={false} />
    );

    const hihatButtons = sequencer.getAllByRole("button", { name: /hihat/i });
    hihatButtons[0].click();
    const snareButtons = sequencer.getAllByRole("button", { name: /snare/i });
    snareButtons[0].click();
    const kickButtons = sequencer.getAllByRole("button", { name: /kick/i });
    kickButtons[0].click();
  });
});
