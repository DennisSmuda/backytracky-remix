import { ClientOnly } from "remix-utils";
import Footer from "~/components/Footer";
import GuitarTuner from "~/components/GuitarTuner.client";

export default function Tuner() {
  return (
    <main className="main">
      <div className="color-change -z-10 absolute -top-48 -left-16 -right-16 h-[320px] pointer-events-none rotate-3" />
      <section className="">
        <div className="container max-w-4xl mx-auto pt-8 relative">
          <h1 className="mb-0 bg-zinc-50 rounded-md relative -ml-2 inline-block px-1 font-black">
            Tune by ear 👂
          </h1>
          <ClientOnly fallback={<p>Loading...</p>}>
            {() => <GuitarTuner />}
          </ClientOnly>
        </div>
      </section>

      <Footer />
    </main>
  );
}
