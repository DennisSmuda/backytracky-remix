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
