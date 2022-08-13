import { ClientOnly } from "remix-utils";
import Sequencer from "~/components/sequencer/Sequencer.client";

export default function GeneratorRoute() {
  return (
    <main>
      <section>
        <div className="container max-w-4xl mx-auto pt-8">
          <h1>Make your own 🦋</h1>
          <ClientOnly fallback={<p>Loading...</p>}>
            {() => <Sequencer />}
          </ClientOnly>
        </div>
      </section>
    </main>
  );
}
