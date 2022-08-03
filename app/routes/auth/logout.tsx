import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { logout } from "~/utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  return await logout(request);
};

export const loader: LoaderFunction = async () => {
  return redirect("/auth/login");
};
