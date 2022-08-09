import { useEffect, useState } from "react";
import type { Sampler } from "tone";
import { loadInstruments } from "../music/loader";

export function useInstruments() {
  const [instruments, setInstruments] = useState<{
    pianoSampler: Sampler;
    drumSampler: Sampler;
    bassSampler: Sampler;
  }>();

  useEffect(() => {
    const { pianoSampler, drumSampler, bassSampler } = loadInstruments();

    setInstruments({ pianoSampler, bassSampler, drumSampler });
  }, []);

  return [instruments];
}
