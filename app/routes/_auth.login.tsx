import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import BackgroundNotes from "../components/BackgroundNotes";
import TextInput from "../components/TextInput";
import { createUserSession, login } from "~/utils/session.server";
import { validatePassword, validateUsername } from "./auth/utils";

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    username: string;
    password: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");

  if (typeof username !== "string" || typeof password !== "string") {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const fields = { username, password };
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password),
  };

  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  const user = await login({ username, password });

  if (!user) {
    return badRequest({
      fields,
      formError: "Username/Password combination is incorrect",
    });
  }

  return createUserSession(user.id);
};

export default function LoginRoute() {
  const actionData = useActionData();
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "submitting" && navigation.formMethod === "post") {
      toast.loading("Logging in...", { id: "auth-toast" });
    }
    if (navigation.state === "idle" && actionData?.formError) {
      toast.error("There was an error...", { id: "auth-toast" });
    }
    if (navigation.state === "loading") {
      toast.success("You are logged in!", { id: "auth-toast" });
    }
  }, [navigation, actionData]);

  return (
    <main>
      <section>
        <div className="max-w-sm mx-auto pt-8 relative z-10">
          <h1 className="">Login 🔑</h1>
          <Form className="grid gap-4 mt-4" method="post">
            <TextInput
              name="username"
              label="Username"
              actionData={actionData}
            />
            <TextInput
              name="password"
              label="Password"
              type="password"
              actionData={actionData}
            />

            <button type="submit" className="button">
              login
            </button>
            <div id="form-error-message">
              {actionData?.formError ? (
                <p className="form-validation-error text-center" role="alert">
                  {actionData.formError}
                </p>
              ) : null}
            </div>
          </Form>

          <p className="text-xs text-center mt-4 text-opacity-50 bg-white dark:bg-zinc-900 p-2 rounded-md">
            <a href="https://dennissmuda.com/" className="underline">
              Contact me
            </a>{" "}
            if you want to know more, <br /> or if you have song requests 🤘
          </p>
        </div>
      </section>
      <div className="relative pt-32">
        <BackgroundNotes />
      </div>
    </main>
  );
}
