import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Suspense } from "react";
import PageHeader from "~/components/PageHeader";
import Sequencer from "~/components/sequencer/Sequencer.client";

export const meta: MetaFunction = () => [
  {
    title: "Drum-Sequencer and Chord Progression Generator | BackyTracky",
  },
  {
    description: "Generate chord progressions and drum beats!",
  },
];

export default function GeneratorRoute() {
  return (
    <main>
      <PageHeader title="Make your own 🦋">
        <Link to="/">Home</Link>
        <span>{" / "}</span>
        <Link to="/generator">Sequencer</Link>
      </PageHeader>
      <section>
        <div className="container max-w-4xl mx-auto">
          {/* <h1>Make your own 🦋</h1> */}
          <Suspense fallback={<p>Loading...</p>}>
            <Sequencer />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
