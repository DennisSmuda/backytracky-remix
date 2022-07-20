import { useEffect } from "react";
import * as Tone from "tone";

export default function TrackPlayer() {
  // const synth = new Tone.Synth().toDestination();
  let sampler = null;

  // function loadTone() {
  //   tone = import("tone");
  // }

  useEffect(() => {
    console.log("Player Use Effect", Tone);
    sampler = new Tone.Sampler({
      urls: {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();
  });

  function playNote() {
    console.log("Play Note", Tone);
    //play a middle 'C' for the duration of an 8th note
    // const synth = new Tone.Synth().toDestination();
    // console.log("Synth", synth);
    // synth.triggerAttackRelease("C4", "8n");
    sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 4);
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
