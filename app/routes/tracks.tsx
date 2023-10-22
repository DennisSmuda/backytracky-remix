import type { Track } from "@prisma/client";
import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import BackgroundNotes from "~/components/BackgroundNotes";
import Footer from "~/components/Footer";
import PageHeader from "~/components/PageHeader";
import TrackListing from "~/components/track/TrackListing";

import { db } from "~/utils/db.server";
import { getUser } from "~/utils/session.server";
import { deleteTrack } from "~/utils/tracks.server";

export const loader: LoaderFunction = async ({ request }) => {
  const data = {
    tracks: await db.track.findMany(),
    user: await getUser(request),
  };

  return json(data);
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const trackId = form.get("trackId");
  console.log("Delete a track", trackId);
  return badRequest({ error: "error deleting track" });
  const response = await deleteTrack(trackId as string);

  if (response.status === 400) {
    return badRequest({
      error: `Error deleting track`,
    });
  }

  return json({ response });
};

const badRequest = (data: any) => json(data, { status: 400 });

const notifyDeleting = () =>
  toast.loading("Deleting...", { id: `track-delete-toast` });

const notifyErrorDeleting = () =>
  toast.error("Couldn't delete track...", {
    id: `track-delete-toast`,
  });

const notifySuccessDeleting = () =>
  toast.success("Deleted track!", { id: `track-delete-toast` });

export const meta: MetaFunction = () => ({
  title: "All Tracks | BackyTracky",
  description:
    "Explore all published backing tracks. Grab your instrument and practice some chord changes!",
});

export default function TracksRoute() {
  const actionData = useActionData();
  const loaderData = useLoaderData();
  const navigation = useNavigation();

  useEffect(() => {
    console.log("Track Route UseEffect", actionData, navigation);
    // switch (navigation.state) {
    // case "submitting":
    //   notifyDeleting();
    //   break;
    // }
  }, [navigation, actionData]);

  return (
    <main className="main">
      <div className="absolute bottom-24 md:bottom-32 right-0 md:right-20">
        <BackgroundNotes />
      </div>
      <PageHeader title="All Tracks 🎺">
        <Link to="/">Home</Link>
        <span>{" / "}</span>
        <Link to="/tracks">Tracks</Link>
      </PageHeader>
      <section>
        <div className="container max-w-4xl mx-auto relative">
          <div className="grid gap-12 mb-12 mt-4">
            {loaderData.tracks.length === 0 ? <div>no Tracks yet</div> : ""}
            {loaderData.tracks.map((track: Track) => (
              <TrackListing
                key={track.id}
                track={track}
                showDescription={true}
                currentUserId={loaderData.user?.id}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
