import React from "react";
import { fireEvent, render } from "@testing-library/react";
import ChordEditorModal from "../app/components/track/ChordEditorModal";

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

describe("Chord Editor Modal Component", () => {
  it("renders correctly and has clickable buttons to change a chord", () => {
    const { getByText } = render(
      <ChordEditorModal isOpen={true} currentChord={null} onClose={jest.fn()} />
    );

    getByText(/change chord/i);
    const saveButton = getByText(/save/i);
    const rootButton = getByText(/Bb/i);
    const octaveButton = getByText(/1/i);
    const typeButton = getByText(/maj/i);

    fireEvent.click(rootButton);
    fireEvent.click(octaveButton);
    fireEvent.click(typeButton);

    fireEvent.click(saveButton);

    getByText(/change chord/i);
  });
});
