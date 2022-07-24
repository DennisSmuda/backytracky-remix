import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  const user = await db.user.create({
    data: {
      username: "dennis",
      // this is a hashed version of "twixrox"
      passwordHash:
        "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
    },
  });
  await Promise.all(
    getTracks().map((track) => {
      const data = {
        ...track,
        userId: user.id,
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
      sheet: "empty sheet",
    },
    {
      name: "turnaround",
      sheet: "empty sheet",
    },
  ];
}
