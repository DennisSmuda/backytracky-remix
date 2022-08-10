import { useState } from "react";
import { now, start, Transport } from "tone";
import { useInstruments } from "~/hooks/useInstruments";

export default function Sequencer() {
  const [instruments] = useInstruments();
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);

  const playKick = () => {
    instruments?.drumSampler.triggerAttackRelease("C1", "1n", now(), 0.3);
  };

  const playSequence = (): void => {
    // Transport.swing = 1;
    setIsPlaying(true);
    if (typeof Transport.start !== "undefined") Transport.start();
    start();
  };

  return (
    <div>
      <h2>Sequencer</h2>
      <button onClick={() => playKick()}>Kick</button>
      <button onClick={() => setIsPlaying(true)}>Play</button>
    </div>
  );
}
