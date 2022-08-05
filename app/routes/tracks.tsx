import type { Track } from "@prisma/client";
import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useLoaderData, useTransition } from "@remix-run/react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import BackgroundNotes from "~/components/BackgroundNotes";
import Footer from "~/components/Footer";
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
  const transition = useTransition();

  useEffect(() => {
    switch (transition.type) {
      case "actionSubmission":
        if (transition.submission.action === "/tracks") {
          notifyDeleting();
        }
        break;
      case "actionRedirect":
        break;
      case "actionReload":
        if (actionData.error) {
          notifyErrorDeleting();
        } else {
          notifySuccessDeleting();
        }
        break;
    }
  }, [transition, actionData]);

  return (
    <main className="main">
      <div className="fixed bottom-24 md:bottom-32 right-0 md:right-20">
        <BackgroundNotes />
      </div>
      <section>
        <div className="container max-w-4xl mx-auto pt-8 relative">
          <div className="bt-prose mx-auto my-12">
            <h1 className="font-black">All Tracks 🎺</h1>
            <div className="grid gap-12 my-12">
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
