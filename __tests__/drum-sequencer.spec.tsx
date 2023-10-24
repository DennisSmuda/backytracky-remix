import React from "react";
import { act, render } from "@testing-library/react";

import DrumSequencer from "../app/components/sequencer/DrumSequence";
import { timeBeats } from "../app/components/sequencer/timeBeats";
import { vi } from "vitest";

vi.mock("tone", () => ({
  start: vi.fn(),
  now: vi.fn(),
  Sampler: vi.fn(() => ({
    triggerAttackRelease: vi.fn(),
    toDestination: vi.fn(),
  })),
  // "Transport.scheduleRepeat": {},
  // Transport: vi.fn(() => ({
  Transport: vi.fn().mockImplementation(() => ({
    scheduleRepeat: vi.fn(),
    start: vi.fn(),
    stop: vi.fn(),
    loop: vi.fn(),
    dispose: vi.fn(),
  })),
  Part: vi.fn().mockImplementation(() => ({
    start: vi.fn(),
    stop: vi.fn(),
    dispose: vi.fn(),
  })),
}));

describe("DrumSequencer Component", () => {
  it("renders correctly and has buttons to control kick/snare/hihat sounds", () => {
    const change = vi.fn();
    const sequencer = render(
      <DrumSequencer onChange={change} timeBeats={timeBeats} mute={false} />
    );

    const hihatButtons = sequencer.getAllByRole("button", { name: /hihat/i });
    act(() => {
      hihatButtons[0].click();
    });
    const snareButtons = sequencer.getAllByRole("button", { name: /snare/i });
    act(() => {
      snareButtons[0].click();
    });
    const kickButtons = sequencer.getAllByRole("button", { name: /kick/i });
    act(() => {
      kickButtons[0].click();
    });
  });
});
