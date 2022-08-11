import { useState } from "react";
import type { Sampler } from "tone";
import { now } from "tone";

const timeBeats = [
  "0:0:0",
  "0:0:1",
  "0:0:2",
  "0:0:3",
  "0:1:0",
  "0:1:1",
  "0:1:2",
  "0:1:3",
  "0:2:0",
  "0:2:1",
  "0:2:2",
  "0:2:3",
  "0:3:0",
  "0:3:1",
  "0:3:2",
  "0:3:3",
];

export default function DrumSequence({
  drumSampler,
  onChange,
}: {
  drumSampler: Sampler;
  onChange: Function;
}) {
  const [hihats, setHihats] = useState<{ [key: string]: boolean }>({});

  const clickHihat = (time: string) => {
    hihats[time] = !hihats[time];
    setHihats({ ...hihats });
    drumSampler.triggerAttackRelease("D1", "1n", now(), 0.3);
    // stopSequence();
    onChange();
  };

  return (
    <>
      <div className="sequencer-row">
        {timeBeats.map((hihatTime) => (
          <button
            className={`button button--hihat ${
              hihats[hihatTime] === true ? "button--active" : ""
            }`}
            key={`kick-${hihatTime}`}
            onClick={() => clickHihat(hihatTime)}
          >
            <span className="sr-only">hihat</span>
          </button>
        ))}
      </div>
    </>
  );
}
