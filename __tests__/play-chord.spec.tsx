import React from "react";

import { fireEvent, render } from "@testing-library/react";
import PlayChord from "../app/components/track/PlayChord";
import type { Subdivision } from "tone/build/esm/core/type/Units";

const sampleChord = {
  note: ["C3", "E3", "G3", "B3"],
  duration: "4n" as Subdivision,
  time: "0:0:0",
  root: "C",
  type: "maj",
  extension: "7",
  bar: 0,
  beat: 0,
  sixteenth: 0,
  ghostTime: "0:0:0",
};

describe("Play Chord Component", () => {
  it("Can show a chord", () => {
    const clickChord = jest.fn();
    const { getAllByText, baseElement } = render(
      <PlayChord
        key={sampleChord.time}
        chord={sampleChord}
        clickChord={clickChord}
      />
    );
    const roots = getAllByText("C");
    expect(roots).toHaveLength(2);

    fireEvent.click(roots[0]);
    expect(clickChord).toHaveBeenCalled();
  });
});
