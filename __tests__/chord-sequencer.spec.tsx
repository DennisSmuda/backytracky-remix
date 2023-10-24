import React from "react";
import { act, fireEvent, render } from "@testing-library/react";

import ChordSequencer from "../app/components/sequencer/ChordsSequence";
import { timeBeats } from "../app/components/sequencer/timeBeats";
import { vi } from "vitest";

vi.mock("tone", () => ({
  start: vi.fn(),
  now: vi.fn(),
  Sampler: vi.fn(() => ({
    triggerAttackRelease: vi.fn(),
    toDestination: vi.fn(),
  })),
  Transport: vi.fn(() => ({
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

describe("ChordSequencer Component", () => {
  it("renders correctly and has buttons to enable chords", () => {
    const change = vi.fn();
    const sequencer = render(
      <ChordSequencer onChange={change} timeBeats={timeBeats} mute={false} />
    );

    const chordButtons = sequencer.getAllByRole("button", { name: /a minor/i });
    act(() => {
      chordButtons[0].click();
      chordButtons[0].click();
    });

    const shrinkButton = sequencer.getByRole("button", { name: /shrink/i });
    fireEvent.click(shrinkButton);
  });

  it("renders correctly and can buttons to change tonic + modes", () => {
    const change = vi.fn();
    const sequencer = render(
      <ChordSequencer onChange={change} timeBeats={timeBeats} mute={false} />
    );

    const noteSelect = sequencer.getByRole("combobox", {
      name: /root note select/i,
    });
    act(() => {
      fireEvent.change(noteSelect, { target: { value: "E3" } });
    });

    const modeSelect = sequencer.getByRole("combobox", {
      name: /chord mode select/i,
    });
    act(() => {
      fireEvent.click(modeSelect);
      fireEvent.change(modeSelect, { target: { value: "melodic minor" } });
      fireEvent.change(modeSelect, { target: { value: "harmonic minor" } });
      fireEvent.change(modeSelect, { target: { value: "minor" } });
    });
  });
});
