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

describe("ChordSequencer Component", () => {
  it("renders correctly and can buttons to enable chords", () => {
    const change = jest.fn();
    const sequencer = render(
      <ChordSequencer onChange={change} timeBeats={timeBeats} mute={false} />
    );

    const chordButtons = sequencer.getAllByRole("button", { name: /a minor/i });
    chordButtons[0].click();
  });

  it("renders correctly and can buttons to change tonic + modes", () => {
    const change = jest.fn();
    const sequencer = render(
      <ChordSequencer onChange={change} timeBeats={timeBeats} mute={false} />
    );

    const noteOption = sequencer.getByRole("option", { name: /D3/i });
    sequencer.getByRole("combobox", {
      name: /root note select/i,
    });
    // select[0].click();
    fireEvent.select(noteOption);

    const modeOption = sequencer.getByRole("option", {
      name: /melodic minor/i,
    });
    const modeSelect = sequencer.getByRole("combobox", {
      name: /chord mode select/i,
    });
    fireEvent.select(modeOption);
    fireEvent.click(modeSelect);
  });
});
