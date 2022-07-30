import type { Track } from "@prisma/client";
import { json } from "@remix-run/node";
import { db } from "./db.server";

export async function createTrack(
  trackname: string,
  chords: string,
  userId: string
) {
  const track = await db.track.create({
    data: { name: trackname, sheet: chords, upvotes: 0, userId: userId },
  });
  return track;
}

export async function testTrackFunction() {
  return true;
}

export async function deleteTrack(trackId: string) {
  console.log("Delete Track Server!!");
  try {
    const deletedTrack = await db.track.delete({
      where: { id: trackId },
    });
    console.log("Deleted Track Server", deleteTrack);
    return json({ message: "Delete Success", track: deletedTrack });
  } catch {
    return json({ message: "Delete Error" }, { status: 400 });
  }
}
