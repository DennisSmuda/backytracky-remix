import { ClientOnly } from "remix-utils";
import TrackPlayer from "~/components/track/TrackPlayer.client";

export default function TrackDetailRoute() {
  return (
    <main className="main">
      <section>
        <div className="max-w-4xl mx-auto pt-8">
          <h1>Sample Track</h1>
          <ClientOnly fallback={<p>Loading...</p>}>
            {() => <TrackPlayer />}
          </ClientOnly>
        </div>
      </section>
    </main>
  );
}
