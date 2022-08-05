import type { LoaderFunction, MetaFunction } from "@remix-run/node";
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

export const meta: MetaFunction = ({ data }) => ({
  title: `${data.track.name} Backing Track | BackyTracky`,
  description: data.track.description,
});

export default function TrackDetailRoute() {
  const { track } = useLoaderData();
  return (
    <main className="main">
      <section>
        <div className="max-w-4xl mx-auto pt-8">
          <div className="opacity-50 text-xs flex items-center gap-4">
            <span>{track.bpm} bpm</span>
            <span className="">
              {new Date(track.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </span>
            <span> by {track.authorName}</span>
          </div>
          <h1>{track.name}</h1>

          <ClientOnly fallback={<p>Loading...</p>}>
            {() => <TrackPlayer sheet={track.sheet} bpm={track.bpm} />}
          </ClientOnly>
        </div>
      </section>
    </main>
  );
}
