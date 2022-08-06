import type { Track } from "@prisma/client";
import { Form, Link } from "@remix-run/react";

export default function TrackListing({
  track,
  showDescription,
  currentUserId,
}: {
  track: Track;
  showDescription: boolean;
  currentUserId: string | null;
}) {
  return (
    <div
      key={track.id}
      className="flex items-center rounded-lg"
      data-testid="track-listing"
    >
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs opacity-50">
          <span>{track.bpm} bpm</span>
        </div>
        <Link
          to={`/track/${track.id}`}
          className={`${
            showDescription ? "text-2xl" : "text-lg"
          } font-black no-underline hover:underline`}
        >
          {track.name}
        </Link>
        <div className="text-xs opacity-50">
          <span className="">
            created{" "}
            {new Date(track.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </span>
          <span>, by {track.authorName}</span>
        </div>

        {/* {showDescription ? (
          <p className="opacity-50 mt-4">{track.description}</p>
        ) : (
          ""
        )} */}
      </div>
      {track.userId === currentUserId ? (
        <Form method="delete">
          <input type="hidden" name="trackId" value={track.id} />
          <button className="icon-button button--delete">
            <span>delete</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Form>
      ) : (
        ""
      )}
    </div>
  );
}
