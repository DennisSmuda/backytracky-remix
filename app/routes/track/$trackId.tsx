import { ClientOnly } from "remix-utils";
import TrackPlayer from "~/components/TrackPlayer.client";

export default function TrackDetailRoute() {
  return (
    <main>
      <section>
        <h1>Track dies das</h1>
        <ClientOnly fallback={<p>Loading...</p>}>
          {() => <TrackPlayer />}
        </ClientOnly>
      </section>
    </main>
  );
}
