import React from "react";

import { fireEvent, render } from "@testing-library/react";
import EditChord from "../app/components/track/EditChord";
import type { Subdivision } from "tone/build/esm/core/type/Units";
import { vi, expect } from "vitest";

const sampleChord = {
  note: ["C3", "E3", "G3", "B3"],
  duration: "2n" as Subdivision,
  time: "0:0:0",
  root: "C",
  type: "maj",
  extension: "7",
  bar: 0,
  beat: 0,
  sixteenth: 0,
  ghostTime: "0:0:0",
};

const overflowChord = {
  note: ["C3", "E3", "G3", "B3"],
  duration: "1n" as Subdivision,
  time: "0:0:0",
  root: "C",
  type: "maj",
  extension: "7",
  bar: 0,
  beat: 2,
  sixteenth: 0,
  ghostTime: "0:0:0",
};

describe("Play Chord Component", () => {
  const shortenChord = vi.fn();
  const lengthenChord = vi.fn();
  const clickChord = vi.fn();
  const deleteChord = vi.fn();
  const editChord = vi.fn();

  it("Can show a chord", async () => {
    const { getByRole } = render(
      <EditChord
        chord={sampleChord}
        shortenChord={shortenChord}
        lengthenChord={lengthenChord}
        deleteChord={deleteChord}
        editChord={editChord}
        playChord={clickChord}
      />
    );
    const shortenButton = getByRole("button", { name: /chord shorter/i });
    const lengthenButton = getByRole("button", { name: /chord longer/i });
    const editButton = getByRole("button", { name: /edit/i });
    const deleteButton = getByRole("button", { name: /delete/i });

    fireEvent.click(lengthenButton);
    expect(lengthenChord).toHaveBeenCalled();

    fireEvent.click(editButton);
    expect(editChord).toHaveBeenCalled();

    fireEvent.click(deleteButton);
    expect(deleteChord).toHaveBeenCalled();

    fireEvent.click(shortenButton);
    expect(shortenChord).toHaveBeenCalled();
  });

  it("Can show an overflowing chord", async () => {
    const { getByRole } = render(
      <EditChord
        chord={overflowChord}
        shortenChord={shortenChord}
        lengthenChord={lengthenChord}
        deleteChord={clickChord}
        editChord={clickChord}
        playChord={clickChord}
      />
    );
    const shorten = getByRole("button", { name: /chord shorter/i });
    const lengthenButton = getByRole("button", { name: /chord longer/i });

    expect(lengthenButton).toBeDisabled();

    fireEvent.click(shorten);
    expect(shortenChord).toHaveBeenCalled();
  });
});
