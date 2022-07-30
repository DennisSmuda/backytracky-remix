import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import TextInput from "~/components/TextInput";
import { createUserSession, login } from "~/utils/session.server";
import { validatePassword, validateUsername } from "./utils";

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

const notifyLoggingIn = () =>
  toast.loading("Logging in...", { id: "auth-toast" });
const notifyErrorLoggingIn = () =>
  toast.error("There was an error...", { id: "auth-toast" });
const notifySuccessLoggingIn = () =>
  toast.success("You are logged in!", { id: "auth-toast" });

export default function LoginRoute() {
  const actionData = useActionData();
  const transition = useTransition();

  useEffect(() => {
    switch (transition.type) {
      case "actionSubmission":
        notifyLoggingIn();
        break;
      case "actionRedirect":
        notifySuccessLoggingIn();
        break;
      case "actionReload":
        notifyErrorLoggingIn();
        break;
    }
  }, [transition]);

  return (
    <main>
      <section>
        <div className="max-w-sm mx-auto pt-8">
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

          <p className="text-xs text-center mt-4 opacity-50">
            <a href="https://dennissmuda.com/" className="underline">
              Contact me
            </a>{" "}
            if you want to be part of the beta 🌋
          </p>
        </div>
      </section>
    </main>
  );
}
