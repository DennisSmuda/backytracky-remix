import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Suspense } from "react";
import Footer from "~/components/Footer";
import GuitarTuner from "~/components/GuitarTuner.client";
import PageHeader from "~/components/PageHeader";

export const meta: MetaFunction = () => [
  {
    title: "Guitar Tuner | BackyTracky",
  },
  {
    description:
      "Practice tuning your guitar by ear! Supports multiple tunings!",
  },
];

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
          <Suspense fallback={<div>Loading...</div>}>
            <GuitarTuner />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
}
