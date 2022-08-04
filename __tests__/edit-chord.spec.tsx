import React from "react";

import { fireEvent, render } from "@testing-library/react";
import EditChord from "../app/components/track/EditChord";
import type { Subdivision } from "tone/build/esm/core/type/Units";

const sampleChord = {
  note: ["C3", "E3", "G3", "B3"],
  duration: "4n" as Subdivision,
  time: "0:0:0",
  root: "C",
  type: "maj",
  extension: "7",
  bar: 0,
  beat: 2,
  sixteenth: 0,
  ghostTime: "0:2:0",
};

describe("Play Chord Component", () => {
  it("Can show a chord", () => {
    const clickChord = jest.fn();
    const { getByText } = render(
      <EditChord
        key={sampleChord.time}
        chord={sampleChord}
        shortenChord={clickChord}
        lengthenChord={clickChord}
        deleteChord={clickChord}
        editChord={clickChord}
        playChord={clickChord}
      />
    );
    const lengthen = getByText(/chord longer/i);

    fireEvent.click(lengthen);
    expect(clickChord).toHaveBeenCalled();
  });
});
