import type { LinksFunction, LoaderFunction } from "@remix-run/node";
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
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  const themeSession = await getThemeSession(request);
  return json({ user, theme: themeSession.getTheme() });
};

function App() {
  const { user, theme: ssrTheme } = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
        <ThemeScript ssrTheme={Boolean(ssrTheme)} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <meta name="theme-color" content="#18181b" />
        <meta
          property="og:title"
          content="Free Backing Tracks for Musicians | BackyTracky"
        />
        <meta
          property="og:description"
          content="Create and play-along Lead-Sheets to level up your chops! Practice scales, licks or solos. Discover chord progressions others are using or make your own!"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="BackyTracky" />
        <meta property="og:image" content="/og-image.png" />
      </head>
      <body>
        <Navbar user={user} />

        <Suspense fallback={<div>Loading...</div>}>
          <Toaster />
        </Suspense>

        <Outlet />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const { theme } = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={theme}>
      <App />
    </ThemeProvider>
  );
}
