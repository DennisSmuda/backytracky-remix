import { Link } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import PageHeader from "~/components/PageHeader";
import Sequencer from "~/components/sequencer/Sequencer.client";

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
          <ClientOnly fallback={<p>Loading...</p>}>
            {() => <Sequencer />}
          </ClientOnly>
        </div>
      </section>
    </main>
  );
}
