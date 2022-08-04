import type { Track } from "@prisma/client";
import { json } from "@remix-run/node";
import { db } from "./db.server";

export async function createTrack(
  trackname: string,
  description: string,
  chords: string,
  userId: string,
  authorName: string,
  bpm: string
) {
  const track = await db.track.create({
    data: {
      name: trackname,
      sheet: JSON.parse(chords),
      upvotes: 0,
      userId: userId,
    },
  });
  return track;
}

export async function getTrack(trackId: string) {
  const track = await db.track.findUnique({
    where: { id: trackId },
  });
  return track as Track;
}

export async function deleteTrack(trackId: string) {
  try {
    const deletedTrack = await db.track.delete({
      where: { id: trackId },
    });

    return json({ message: "Delete Success", track: deletedTrack });
  } catch {
    return json({ message: "Delete Error" }, { status: 400 });
  }
}
