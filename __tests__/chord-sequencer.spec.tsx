import React from "react";
import { fireEvent, render } from "@testing-library/react";

import ChordSequencer from "../app/components/sequencer/ChordsSequence";
import { timeBeats } from "../app/components/sequencer/timeBeats";

jest.mock("tone", () => ({
  start: jest.fn(),
  now: jest.fn(),
  Sampler: jest.fn(() => ({
    triggerAttackRelease: jest.fn(),
    toDestination: jest.fn(),
  })),
  Transport: jest.fn(() => ({
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

describe("ChordSequencer Component", () => {
  it("renders correctly and can buttons to enable chords", () => {
    const change = jest.fn();
    const sequencer = render(
      <ChordSequencer onChange={change} timeBeats={timeBeats} mute={false} />
    );

    const chordButtons = sequencer.getAllByRole("button", { name: /a minor/i });
    chordButtons[0].click();
    chordButtons[0].click();

    const shrinkButton = sequencer.getByRole("button", { name: /shrink/i });
    fireEvent.click(shrinkButton);
  });

  it("renders correctly and can buttons to change tonic + modes", () => {
    const change = jest.fn();
    const sequencer = render(
      <ChordSequencer onChange={change} timeBeats={timeBeats} mute={false} />
    );

    const noteSelect = sequencer.getByRole("combobox", {
      name: /root note select/i,
    });
    fireEvent.change(noteSelect, { target: { value: "E3" } });

    const modeSelect = sequencer.getByRole("combobox", {
      name: /chord mode select/i,
    });
    fireEvent.click(modeSelect);
    fireEvent.change(modeSelect, { target: { value: "melodic minor" } });
    fireEvent.change(modeSelect, { target: { value: "harmonic minor" } });
    fireEvent.change(modeSelect, { target: { value: "minor" } });
  });
});
