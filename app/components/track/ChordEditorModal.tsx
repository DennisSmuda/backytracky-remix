import { Dialog, Transition } from "@headlessui/react";
import { Chord } from "@tonaljs/tonal";
import { Fragment, useEffect, useRef, useState } from "react";
import type { Sampler } from "tone";
import { now } from "tone";
import { loadInstruments } from "../../music/loader";
import type { ChordBeat } from "../../music/Music";

const roots: Array<string> = ["C", "D", "E", "F", "G", "A", "B"];
const flatRoots: Array<string> = ["Db", "Eb", "Gb", "Ab", "Bb"];
const octaves: Array<string> = ["2", "3", "4", "5", "6"];
const chordTypes: Array<string> = ["", "maj", "min", "dim"];
const extensions: Array<string> = ["", "7", "9", "13"];

export default function ChordEditor({
  isOpen = false,
  currentChord,
  onClose,
}: {
  isOpen: boolean;
  currentChord: ChordBeat | null;
  onClose: Function;
}) {
  const piano = useRef<Sampler | null>(null);
  const drums = useRef<Sampler | null>(null);

  const [newRoot, setNewRoot] = useState<string>("C");
  const [newType, setNewType] = useState<string>("maj");
  const [newExtension, setNewExtension] = useState<string>("7");
  const [newOctave, setNewOctave] = useState<string>("3");

  useEffect(() => {
    // on-mount effect-hook to load instruments
    const { pianoSampler, drumSampler } = loadInstruments();
    piano.current = pianoSampler;
    drums.current = drumSampler;
  }, []);

  useEffect(() => {
    // Effect hook to generate new chord based on user input
    if (!currentChord) return;
    const newChord = Chord.getChord(
      `${newType}${newExtension}`,
      `${newRoot}${newOctave}`
    );
    console.log("New Chord", newChord);

    currentChord.note = newChord.notes;
    currentChord.root = newRoot;
    currentChord.type = newType;
    currentChord.extension = newExtension;

    piano?.current?.triggerAttackRelease(currentChord.note, "8n", now(), 0.35);
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
          <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4 dark:bg-black">
            <Dialog.Title>Change Chord</Dialog.Title>
            {/* <Dialog.Description>Bla blub</Dialog.Description> */}

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
            <div className="grid grid-flow-col gap-2 mb-2">
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
