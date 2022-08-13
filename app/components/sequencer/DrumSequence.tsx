import { useState } from "react";
import type { Sampler } from "tone";
import { now } from "tone";

export default function DrumSequence({
  drumSampler,
  onChange,
  mute,
  timeBeats,
}: {
  drumSampler: Sampler;
  onChange: Function;
  mute: boolean;
  timeBeats: string[];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [hihats, setHihats] = useState<{ [key: string]: boolean }>({});
  const [snares, setSnares] = useState<{ [key: string]: boolean }>({});
  const [kicks, setKicks] = useState<{ [key: string]: boolean }>({});

  const clickHihat = (time: string) => {
    hihats[time] = !hihats[time];
    setHihats({ ...hihats });
    if (!mute) drumSampler.triggerAttackRelease("D1", "1n", now(), 0.2);
    onChange({ hihats, snares, kicks });
  };

  const clickSnare = (time: string) => {
    snares[time] = !snares[time];
    setSnares({ ...snares });
    if (!mute) drumSampler.triggerAttackRelease("E1", "1n", now(), 0.2);
    onChange({ hihats, snares, kicks });
  };

  const clickKick = (time: string) => {
    kicks[time] = !kicks[time];
    setKicks({ ...kicks });
    if (!mute) drumSampler.triggerAttackRelease("C1", "1n", now(), 0.2);
    onChange({ hihats, snares, kicks });
  };

  return (
    <div
      className={`sequencer-section relative ${
        isOpen ? "sequencer-section--open" : ""
      }`}
    >
      <h4>Drums</h4>
      <button
        className="absolute top-2 right-0 text-xs opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "shrink" : "expand"}
      </button>
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
      <div className="sequencer-row">
        {timeBeats.map((snareTime) => (
          <button
            className={`button button--snare ${
              snares[snareTime] === true ? "button--active" : ""
            }`}
            key={`kick-${snareTime}`}
            onClick={() => clickSnare(snareTime)}
          >
            <span className="sr-only">snare drum</span>
          </button>
        ))}
      </div>
      <div className="sequencer-row">
        {timeBeats.map((kickTime) => (
          <button
            className={`button button--kick ${
              kicks[kickTime] === true ? "button--active" : ""
            }`}
            key={`kick-${kickTime}`}
            onClick={() => clickKick(kickTime)}
          >
            <span className="sr-only">kick drum</span>
          </button>
        ))}
      </div>
    </div>
  );
}
