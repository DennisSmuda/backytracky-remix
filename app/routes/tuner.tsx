import { ClientOnly } from "remix-utils";
import BackgroundNotes from "~/components/BackgroundNotes";
import GuitarTuner from "~/components/GuitarTuner.client";

export default function Tuner() {
  return (
    <main className="main">
      <section>
        <div className="max-w-4xl mx-auto pt-8">
          <h1>Tune by ear 👂</h1>
          <ClientOnly fallback={<p>Loading...</p>}>
            {() => <GuitarTuner />}
          </ClientOnly>
        </div>
      </section>
      <div className="fixed bottom-24 right-0 md:right-16">
        <BackgroundNotes />
      </div>
    </main>
  );
}
