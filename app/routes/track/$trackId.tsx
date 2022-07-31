import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import TrackPlayer from "~/components/track/TrackPlayer.client";
import { getTrack } from "~/utils/tracks.server";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.trackId) return redirect("/tracks");
  const track = await getTrack(params.trackId);

  return json({ track });
};

export default function TrackDetailRoute() {
  const { track } = useLoaderData();
  return (
    <main className="main">
      <section>
        <div className="max-w-4xl mx-auto pt-8">
          <h1>{track.name}</h1>

          <ClientOnly fallback={<p>Loading...</p>}>
            {() => <TrackPlayer sheet={track.sheet} />}
          </ClientOnly>
        </div>
      </section>
    </main>
  );
}
