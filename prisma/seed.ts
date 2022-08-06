import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getTracks().map((track) => {
      const data = {
        ...track,
        userId: "123-321-123",
        upvotes: 0,
      };

      return db.track.create({ data });
    })
  );
}

seed();

function getTracks() {
  return [
    {
      name: "two five one",
      description: "two five one",
      authorName: "testuser",
      bpm: 69,
      sheet: {},
    },
  ];
}
