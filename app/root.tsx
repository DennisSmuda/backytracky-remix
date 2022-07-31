import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import clsx from "clsx";

import { ThemeProvider, ThemeScript, useTheme } from "./utils/ThemeProvider";
import Navbar from "./components/Navbar";

import styles from "./styles/app.css";
import { getUser } from "./utils/session.server";
import { getThemeSession } from "./utils/theme.server";
import toast, { Toaster } from "react-hot-toast";
import { ClientOnly } from "remix-utils";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "BackyTracky | Home",
  description:
    "Practice your scales and solos! Create, share and discover Backing Tracks",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  const themeSession = await getThemeSession(request);
  return json({ user, theme: themeSession.getTheme() });
};

function App() {
  const { user, theme: ssrTheme } = useLoaderData();
  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
        <ThemeScript ssrTheme={Boolean(ssrTheme)} />
      </head>
      <body>
        <Navbar user={user} />

        <ClientOnly>{() => <Toaster />}</ClientOnly>

        <Outlet />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const { theme } = useLoaderData();
  return (
    <ThemeProvider specifiedTheme={theme}>
      <App />
    </ThemeProvider>
  );
}

const notify = () => toast("Here is your toast");
