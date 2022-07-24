import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { logout } from "~/utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  console.log("Logout Action!");
  return await logout(request);
};

export const loader: LoaderFunction = async () => {
  console.log("Logout Louader Redirect");
  return redirect("/auth/login");
};
