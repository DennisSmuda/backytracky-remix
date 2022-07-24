import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUser, requireUserId } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  console.log("Loader USER", user);
  return json({ user });
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  console.log("User", userId);
};

export default function NewTrackRoute() {
  const { user } = useLoaderData();
  return (
    <main>
      <section>
        <h1>New Track dies das </h1>
        <p>
          authoring as: <strong>{user?.username || "not logged in!"}</strong>
        </p>
      </section>
    </main>
  );
}
