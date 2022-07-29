import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, useTransition } from "@remix-run/react";

import { db } from "~/utils/db.server";

type LoaderData = {
  tracks: Array<{ id: string; name: string; sheet: string; upvotes: number }>;
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    tracks: await db.track.findMany(),
  };

  return json(data);
};

export default function TracksRoute() {
  // const data = useLoaderData<LoaderData>();
  const data = useLoaderData<LoaderData>();
  const transition = useTransition();
  console.log("Tracks: Transition", transition);

  return (
    <main className="main">
      <section>
        <div className="container max-w-4xl mx-auto pt-8">
          <h1>Tracks 🎺</h1>
          <div className="grid gap-4 my-8">
            {data.tracks.map((track) => (
              <Link
                to={`/track/${track.id}`}
                key={track.id}
                className="flex items-center rounded-lg py-4 interactive-bg"
              >
                <span className="bg-orange-400 dark:bg-orange-600 rounded-full p-1 text-xs w-6 h-6 text-center mx-4">
                  {track.upvotes}
                </span>
                <h3>{track.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
