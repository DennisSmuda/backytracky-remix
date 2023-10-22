import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import PageHeader from "~/components/PageHeader";
import TrackPlayer from "~/components/track/TrackPlayer.client";
import { getTrack } from "~/utils/tracks.server";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.trackId) return redirect("/tracks");
  const track = await getTrack(params.trackId);

  return json({ track });
};

export const meta: V2_MetaFunction = ({ data }) => {
  return [
    {
      title: `${data.track.name} Backing Track | BackyTracky`,
    },
    {
      name: "description",
      content: data.track.description,
    },
  ];
};

export default function TrackDetailRoute() {
  const { track } = useLoaderData();
  return (
    <main className="main">
      <PageHeader title={track.name}>
        <Link to="/">Home</Link>
        <span>{" / "}</span>
        <Link to="/tracks">Tracks</Link>
        <span>{" / "}</span>
        <Link to={`/track/${track.id}`}>{track.name}</Link>
      </PageHeader>
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="opacity-50 text-xs flex justify-between">
            <span>
              Suggested time: <strong>{track.bpm}</strong> bpm
            </span>
            <div>
              <span>
                Created by <strong>{track.authorName}</strong>, in{" "}
                {new Date(track.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
            </div>
          </div>

          <ClientOnly fallback={<p>Loading...</p>}>
            {() => <TrackPlayer sheet={track.sheet} bpm={track.bpm} />}
          </ClientOnly>
        </div>
      </section>
    </main>
  );
}
