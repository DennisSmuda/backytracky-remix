import { useEffect } from "react";
import * as Tone from "tone";
import type { Sampler } from "tone";
import { loadInstruments } from "./utils";

export default function TrackPlayer() {
  // const synth = new Tone.Synth().toDestination();
  let sampler: Sampler | null = null;

  // function loadTone() {
  //   tone = import("tone");
  // }

  useEffect(() => {
    console.log("Player Use Effect", Tone);
    const { pianoSampler, drumSampler } = loadInstruments();
    sampler = pianoSampler;
    // sampler = new Tone.Sampler({
    //   urls: {
    //     C4: "C4.mp3",
    //     "D#4": "Ds4.mp3",
    //     "F#4": "Fs4.mp3",
    //     A4: "A4.mp3",
    //   },
    //   release: 1,
    //   baseUrl: "https://tonejs.github.io/audio/salamander/",
    // }).toDestination();
  });

  function makeMusic() {}

  function play() {
    Tone.Transport.stop(0);
    Tone.Transport.start();
  }
  function stop() {
    Tone.Transport.stop();
  }

  function playNote() {
    const IChord = ["C3", "E3", "G3", "B3"];
    const IIChord = ["D3", "F3", "A3", "C4"];
    const VChord = ["G3", "B3", "D3", "F3"];

    const synth = new Tone.PolySynth(Tone.FMSynth).toDestination();

    const mainChords = [
      { time: "0:0", note: IIChord, duration: "2n" },
      { time: "0:2", note: VChord, duration: "2n" },
      { time: "1:0", note: IChord, duration: "1n" },
    ];

    const chordsPart = new Tone.Part(function (time, note) {
      sampler?.triggerAttackRelease(note.note, note.duration, time);
    }, mainChords).start(0);
    play();

    // const synth = new Tone.Synth().toDestination();
    // AMinorScaleWithOctave.forEach((note, index) => {
    //   const now = Tone.now();
    //   synth.triggerAttackRelease(note, "16n", now + index * 0.1);
    // });

    // play();
  }
  return (
    <div>
      <div>
        <h3>Tonejs loaded?!</h3>
        <button onClick={() => playNote()}>Play</button>
      </div>
    </div>
  );
}
