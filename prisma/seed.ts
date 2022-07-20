import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getTracks().map((track) => {
      const data = {
        ...track,
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
