import type { Sampler } from "tone";
import type ChordBeat from "../../music/ChordBeat";

import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Chord } from "@tonaljs/tonal";
import { now } from "tone";

import { useInstruments } from "../../hooks/useInstruments";

const roots: Array<string> = ["C", "D", "E", "F", "G", "A", "B"];
const flatRoots: Array<string> = ["Db", "Eb", "Gb", "Ab", "Bb"];
const octaves: Array<string> = ["2", "3", "4", "5", "6"];
const chordTypes: Array<string> = ["", "M", "maj", "min", "dim", "aug"];
const extensions: Array<string> = [
  "",
  "7",
  "7sus4",
  "7b9",
  "6",
  "9",
  "7#9",
  "11",
  "7#11",
  "13",
  "13#11",
  "7#9#11",
];

export default function ChordEditor({
  isOpen,
  currentChord,
  onClose,
}: {
  isOpen: boolean;
  currentChord: ChordBeat | null;
  onClose: Function;
}) {
  const [instruments] = useInstruments();
  const piano = useRef<Sampler>();
  const drums = useRef<Sampler>();
  const [newChordName, setNewChordName] = useState<string>("");

  const [newRoot, setNewRoot] = useState<string>("C");
  const [newType, setNewType] = useState<string>("maj");
  const [newExtension, setNewExtension] = useState<string>("7");
  const [newOctave, setNewOctave] = useState<string>("3");

  // on-mount effect-hook to load instruments
  useEffect(() => {
    piano.current = instruments?.pianoSampler;
    drums.current = instruments?.drumSampler;
  }, [instruments]);

  // Effect hook to generate new chord based on user input
  useEffect(() => {
    if (!currentChord) return;

    const newChord = Chord.getChord(
      `${newType}${newExtension}`,
      `${newRoot}${newOctave}`
    );

    // Sometimes tonal.js CAN'T generate notes that tone.js agrees with
    let isChordBroken = newChord.empty;
    newChord.notes.forEach((note) => {
      if (note.includes("##")) isChordBroken = true;
    });

    if (isChordBroken) return setNewChordName("Try something else..");

    currentChord.note = newChord.notes;
    currentChord.root = newRoot;
    currentChord.type = newType;
    currentChord.extension = newExtension;
    setNewChordName(newChord.symbol);

    piano?.current?.triggerAttackRelease(currentChord.note, "4n", now(), 0.35);
  }, [newRoot, newType, newExtension, newOctave, currentChord]);

  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        onClose={() => onClose()}
        className="fixed inset-0 z-50 chord-editor-modal"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-2">
          <Dialog.Panel className="w-full max-w-md rounded bg-white p-4 dark:bg-black">
            <Dialog.Title>{newChordName || "Change chord"}</Dialog.Title>
            <Dialog.Description className="text-xs opacity-50">
              Listen to know what works! Not every combination is possible.
            </Dialog.Description>

            <span className="opacity-50 text-xs">root</span>
            <div className="grid grid-flow-col gap-2 mb-2">
              {roots.map((root) => (
                <button
                  key={root}
                  onClick={() => setNewRoot(root)}
                  className={`button ${root === newRoot ? "active" : ""}`}
                >
                  {root}
                </button>
              ))}
            </div>
            <div className="grid grid-flow-col gap-2">
              {flatRoots.map((root) => (
                <button
                  key={root}
                  onClick={() => setNewRoot(root)}
                  className={`button ${root === newRoot ? "active" : ""}`}
                >
                  {root}
                </button>
              ))}
            </div>

            <span className="opacity-50 text-xs">type</span>
            <div className="grid grid-flow-col gap-2 mb-2">
              {chordTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setNewType(type)}
                  className={`button ${type === newType ? "active" : ""}`}
                >
                  {type}
                </button>
              ))}
            </div>

            <span className="opacity-50 text-xs">extension</span>
            <div className="grid grid-rows-2 grid-cols-6 gap-2 mb-2">
              {extensions.map((ext) => (
                <button
                  key={ext}
                  onClick={() => setNewExtension(ext)}
                  className={`button ${ext === newExtension ? "active" : ""}`}
                >
                  {ext}
                </button>
              ))}
            </div>

            <span className="opacity-50 text-xs">octave</span>
            <div className="grid grid-flow-col gap-2 mb-4">
              {octaves.map((octave) => (
                <button
                  key={octave}
                  onClick={() => setNewOctave(octave)}
                  className={`button ${octave === newOctave ? "active" : ""}`}
                >
                  {octave}
                </button>
              ))}
            </div>

            <button
              className="button button--submit w-full"
              onClick={() => onClose()}
            >
              save chord
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
