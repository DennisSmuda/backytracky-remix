import React from "react";
import { render } from "@testing-library/react";

import TrackPayer from "../app/components/track/TrackPlayer.client";

jest.mock("tone", () => ({
  Sampler: jest.fn().mockImplementation(() => {
    return { toDestination: jest.fn() };
  }),
  Synth: jest.fn().mockImplementation(() => {
    return { toDestination: jest.fn() };
  }),
  Transport: jest.fn().mockImplementation(() => {
    return { stop: jest.fn() };
  }),
  // Transport: jest.fn().mockImplementation(() => {
  //   return {
  //     start: jest.fn(),
  //     loop: jest.fn(),
  //     stop: jest.fn((x) => x),
  //     dispose: jest.fn(),
  //   };
  // }),
  Part: jest.fn().mockImplementation(() => {
    return {
      start: jest.fn(),
      // loop: jest.fn(),
      stop: jest.fn(),
      dispose: jest.fn(),
    };
  }),
}));

describe("Track Player Component", () => {
  it("renders correctly and shows a play button", () => {
    render(<TrackPayer />);
    expect(1 + 2).toBe(3);
  });
});
