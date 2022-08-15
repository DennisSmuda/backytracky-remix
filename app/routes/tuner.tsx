import { Link } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import Footer from "~/components/Footer";
import GuitarTuner from "~/components/GuitarTuner.client";
import PageHeader from "~/components/PageHeader";

export default function Tuner() {
  return (
    <main className="main">
      <PageHeader title="Tune by ear 👂">
        <Link to="/">Home</Link>
        <span>{" / "}</span>
        <Link to="/tuner">Tuner</Link>
      </PageHeader>

      <section>
        <div className="max-w-4xl mx-auto relative">
          <ClientOnly fallback={<p>Loading...</p>}>
            {() => <GuitarTuner />}
          </ClientOnly>
        </div>
      </section>

      <Footer />
    </main>
  );
}
