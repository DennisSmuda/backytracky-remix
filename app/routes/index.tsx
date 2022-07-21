import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

type LoaderData = {
  tracks: Array<{ id: string; name: string; sheet: string }>;
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    tracks: await db.track.findMany(),
  };

  return json(data);
};

export default function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <main
      className="main"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <section>
        <div className="container mx-auto">
          <h1 className="">Welcome to BackyTracky</h1>
          <p>Some samples:</p>
          {/* {JSON.stringify(data)} */}
          <div className="grid gap-4 my-8 bg-slate-100 rounded-md p-4">
            {data.tracks.map((track) => (
              <Link to={`/track/${track.id}`} key={track.id}>
                {track.name}
              </Link>
            ))}
          </div>

          <Link className="button" to="/track/new">
            New Track
          </Link>
        </div>
      </section>
    </main>
  );
}
