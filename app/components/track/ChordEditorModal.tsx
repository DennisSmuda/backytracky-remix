import { Dialog, Transition } from "@headlessui/react";
import { Chord } from "@tonaljs/tonal";
import { Fragment, useEffect, useRef } from "react";
import type { Sampler } from "tone";
import { now } from "tone";
import { loadInstruments } from "~/music/loader";
import type { ChordBeat } from "~/music/Music";

const roots: Array<string> = ["C", "D", "E", "F", "G", "A", "B"];
const octaves: Array<string> = ["2", "3", "4", "5", "6"];
const chordTypes: Array<string> = ["", "maj", "min", "dim"];
const extensions: Array<string> = ["", "7", "9", "13"];

export function ChordEditor({
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

  const newRoot = useRef<string>("C");
  const newType = useRef<string>("maj");
  const newExtension = useRef<string>("7");
  const newOctave = useRef<string>("3");

  useEffect(() => {
    const { pianoSampler, drumSampler } = loadInstruments();
    piano.current = pianoSampler;
    drums.current = drumSampler;
  }, []);

  const changeRoot = (root: string) => {
    if (!currentChord) return;
    newRoot.current = root;
    changeChord();
  };

  const changeType = (type: string) => {
    if (!currentChord) return;
    newType.current = type;
    changeChord();
  };

  const changeExtension = (ext: string) => {
    if (!currentChord) return;
    newExtension.current = ext;
    changeChord();
  };

  const changeOctave = (octave: string) => {
    if (!currentChord) return;
    newOctave.current = octave;
    changeChord();
  };

  const changeChord = () => {
    if (!currentChord) return;
    const newChord = Chord.getChord(
      `${newType.current}${newExtension.current}`,
      `${newRoot.current}${newOctave.current}`
    );

    currentChord.note = newChord.notes;
    currentChord.root = newRoot.current;
    currentChord.type = newType.current;
    currentChord.extension = newExtension.current;

    playChord();
  };
  const playChord = () => {
    if (!currentChord) return;
    piano?.current?.triggerAttackRelease(currentChord.note, "8n", now(), 0.35);
  };

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
      <Dialog onClose={() => onClose()} className="fixed inset-0 z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-2">
          <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4 dark:bg-black">
            <Dialog.Title>Change Chord</Dialog.Title>
            <Dialog.Description>Bla blub</Dialog.Description>

            <div className="grid grid-flow-col">
              {roots.map((root) => (
                <button
                  key={root}
                  onClick={() => changeRoot(root)}
                  className="button"
                >
                  {root}
                </button>
              ))}
            </div>
            <div className="grid grid-flow-col">
              {chordTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => changeType(type)}
                  className="button"
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="grid grid-flow-col">
              {extensions.map((ext) => (
                <button
                  key={ext}
                  onClick={() => changeExtension(ext)}
                  className="button"
                >
                  {ext}
                </button>
              ))}
            </div>
            <div className="grid grid-flow-col">
              {octaves.map((octave) => (
                <button
                  key={octave}
                  onClick={() => changeOctave(octave)}
                  className="button"
                >
                  {octave}
                </button>
              ))}
            </div>

            <button className="button button--submit" onClick={() => onClose()}>
              Save
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
