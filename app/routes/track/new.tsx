import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import TextInput from "~/components/TextInput";
import { getUser, requireUserId } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  console.log("Loader USER", user);
  return json({ user });
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const form = await request.formData();
  // const username = form.get("userId");
  // const password = form.get("password");
  console.log("New Track Action", userId, form);
};

export default function NewTrackRoute() {
  const { user } = useLoaderData();
  let actionData = useActionData();

  // actionData.fields["userId"] = user.id;
  if (!actionData) {
    actionData = {
      fields: {
        userId: user.id,
      },
    };
  }
  console.log("Action Datat", actionData);

  return (
    <main>
      <section>
        <div className="container max-w-4xl mx-auto pt-8">
          <div className="bt-prose">
            <h1 className="mb-0">New Track dies das </h1>
            <p className="opacity-50 text-xs mt-1">
              authoring as:{" "}
              <strong>{user?.username || "not logged in!"}</strong>
              <strong> id : {user?.id}</strong>
            </p>

            <Form method="post">
              <TextInput
                name="userId"
                label="user-id"
                actionData={actionData}
              />
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
}
