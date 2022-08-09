import { ClientOnly } from "remix-utils";
import Footer from "~/components/Footer";
import GuitarTuner from "~/components/GuitarTuner.client";

export default function Tuner() {
  return (
    <main className="main">
      <section className="">
        <div className="container max-w-4xl mx-auto pt-8 relative">
          <h1>Tune by ear 👂</h1>
          <ClientOnly fallback={<p>Loading...</p>}>
            {() => <GuitarTuner />}
          </ClientOnly>
        </div>
      </section>

      <Footer />
    </main>
  );
}
