import { vi, expect } from "vitest";
import { loadInstruments } from "../../app/music/loader";

vi.mock("tone", () => ({
  start: vi.fn(),
  Sampler: vi.fn(() => ({
    toDestination: vi.fn(),
  })),
  Transport: vi.fn(() => ({
    start: vi.fn(),
    stop: vi.fn(),
    loop: vi.fn(),
    dispose: vi.fn(),
  })),
  Synth: vi.fn(() => ({
    toDestination: vi.fn(),
  })),
  Part: vi.fn().mockImplementation(() => ({
    start: vi.fn(),
    stop: vi.fn(),
    dispose: vi.fn(),
  })),
}));

describe("Instrument Loader", () => {
  it("can load instruments", () => {
    loadInstruments((result: any) => {
      expect(result).toBeTruthy();
    });
  });
});
