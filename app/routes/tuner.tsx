import { ClientOnly } from "remix-utils";
import BackgroundNotes from "~/components/BackgroundNotes";
import Footer from "~/components/Footer";
import GuitarTuner from "~/components/GuitarTuner.client";

export default function Tuner() {
  return (
    <main className="main">
      <section className="">
        {/* <div className="max-w-4xl mx-auto pt-8"> */}
        <div className="container max-w-4xl mx-auto pt-8 relative">
          <h1>Tune by ear 👂</h1>
          <ClientOnly fallback={<p>Loading...</p>}>
            {() => <GuitarTuner />}
          </ClientOnly>
        </div>
      </section>
      <div className="fixed bottom-24 right-0 md:right-16">
        <BackgroundNotes />
      </div>

      <Footer />
    </main>
  );
}
