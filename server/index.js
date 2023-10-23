var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// empty-module:~/components/track/TrackPlayer.client
var require_TrackPlayer = __commonJS({
  "empty-module:~/components/track/TrackPlayer.client"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/components/sequencer/Sequencer.client
var require_Sequencer = __commonJS({
  "empty-module:~/components/sequencer/Sequencer.client"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/components/track/TrackEditor.client
var require_TrackEditor = __commonJS({
  "empty-module:~/components/track/TrackEditor.client"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/components/GuitarTuner.client
var require_GuitarTuner = __commonJS({
  "empty-module:~/components/GuitarTuner.client"(exports, module) {
    module.exports = {};
  }
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = renderToString(
    /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => AppWithProviders,
  links: () => links,
  loader: () => loader
});
import { json as json2 } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import clsx from "clsx";

// app/utils/ThemeProvider.tsx
import { useFetcher } from "@remix-run/react";
import { useEffect, useRef, useContext, useState, createContext } from "react";
import { Fragment, jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var Theme = /* @__PURE__ */ ((Theme2) => (Theme2.DARK = "dark", Theme2.LIGHT = "light", Theme2))(Theme || {}), ThemeContext = createContext(void 0), prefersDarkMQ = "(prefers-color-scheme: dark)", getPreferredTheme = () => window.matchMedia(prefersDarkMQ).matches ? "dark" /* DARK */ : "light" /* LIGHT */, clientThemeCode = `
;(() => {
const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';
  const cl = document.documentElement.classList;
  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (!themeAlreadyApplied) cl.add(theme);
})();
`;
function ThemeScript({ ssrTheme }) {
  let [theme] = useTheme();
  return /* @__PURE__ */ jsxDEV2(Fragment, { children: [
    /* @__PURE__ */ jsxDEV2(
      "meta",
      {
        name: "color-scheme",
        content: theme === "light" ? "light dark" : "dark light"
      },
      void 0,
      !1,
      {
        fileName: "app/utils/ThemeProvider.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    ),
    ssrTheme ? null : /* @__PURE__ */ jsxDEV2("script", { dangerouslySetInnerHTML: { __html: clientThemeCode } }, void 0, !1, {
      fileName: "app/utils/ThemeProvider.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/utils/ThemeProvider.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
var themes = Object.values(Theme);
function isTheme(value) {
  return typeof value == "string" && themes.includes(value);
}
function ThemeProvider({
  children,
  specifiedTheme
}) {
  let [theme, setTheme] = useState(() => specifiedTheme ? themes.includes(specifiedTheme) ? specifiedTheme : null : typeof window != "object" ? null : getPreferredTheme()), persistTheme = useFetcher(), persistThemeRef = useRef(persistTheme);
  useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);
  let mountRun = useRef(!1);
  return useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = !0;
      return;
    }
    theme && persistThemeRef.current.submit(
      { theme },
      { action: "/set-theme", method: "post" }
    );
  }, [theme]), /* @__PURE__ */ jsxDEV2(ThemeContext.Provider, { value: [theme, setTheme], children }, void 0, !1, {
    fileName: "app/utils/ThemeProvider.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}
function useTheme() {
  let context2 = useContext(ThemeContext);
  if (context2 === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context2;
}

// app/components/Navbar.tsx
import { Form, Link, NavLink } from "@remix-run/react";
import toast from "react-hot-toast";
import { Fragment as Fragment2, jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var notifyLogout = () => {
  toast.success("Logged out", { id: "auth-toast" });
};
function Navbar({ user }) {
  let [currentTheme, setTheme] = useTheme(), toggleTheme = () => {
    setTheme(
      (prevTheme) => prevTheme === "light" /* LIGHT */ ? "dark" /* DARK */ : "light" /* LIGHT */
    );
  };
  return /* @__PURE__ */ jsxDEV3("header", { className: "flex justify-between items-center px-1 sm:px-4 pb-2 pt-3", children: [
    /* @__PURE__ */ jsxDEV3("nav", { className: "grid gap-4 grid-flow-col items-baseline", children: [
      /* @__PURE__ */ jsxDEV3(Link, { className: "font-black tracking-tighter text-xl", to: "/", children: [
        /* @__PURE__ */ jsxDEV3("span", { className: "hidden sm:inline", children: "BackyTracky" }, void 0, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("span", { className: "sm:hidden", children: "BT" }, void 0, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(NavLink, { to: "/tracks", children: "Tracks" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(NavLink, { to: "/generator", children: "Generate" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(NavLink, { to: "/tuner", children: "Tuner" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("nav", { className: "grid gap-4 grid-flow-col items-center", children: [
      user?.username && /* @__PURE__ */ jsxDEV3(NavLink, { className: "button--cta", to: "/track/new", children: /* @__PURE__ */ jsxDEV3(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-5 w-5",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          children: /* @__PURE__ */ jsxDEV3(
            "path",
            {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
              clipRule: "evenodd"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 43,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 37,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      user ? /* @__PURE__ */ jsxDEV3(Form, { className: "hidden sm:block", method: "post", action: "/logout", children: /* @__PURE__ */ jsxDEV3("button", { onClick: notifyLogout, type: "submit", children: "Logout" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV3(Fragment2, { children: /* @__PURE__ */ jsxDEV3(NavLink, { className: "hidden sm:block", to: "/login", children: "Login" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("button", { className: "text-xl", onClick: toggleTheme, children: currentTheme === "light" /* LIGHT */ ? "\u{1F31A}" : "\u{1F60E}" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/styles/app.css
var app_default = "/build/_assets/app-YMI66DRH.css";

// app/utils/session.server.ts
import { createCookieSessionStorage, redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";

// app/utils/db.server.ts
import { PrismaClient } from "@prisma/client";
var db;
global.__db || (global.__db = new PrismaClient()), db = global.__db;

// app/utils/session.server.ts
async function login({ username, password }) {
  let user = await db.user.findUnique({
    where: { username }
  });
  return !user || !await bcrypt.compare(password, user.passwordHash) ? null : { id: user.id, username };
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must bet set!");
var storage = createCookieSessionStorage({
  cookie: {
    name: "BT_session",
    secure: !1,
    // insecure for localhost
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function requireUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "string")
    throw redirect("/login");
  return userId;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    return null;
  try {
    return await db.user.findUnique({
      where: { id: userId },
      select: { id: !0, username: !0 }
    });
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  let session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(userId, redirectTo = "/tracks") {
  let session = await storage.getSession();
  return session.set("userId", userId), redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/utils/theme.server.ts
import { createCookieSessionStorage as createCookieSessionStorage2 } from "@remix-run/node";
var sessionSecret2 = process.env.SESSION_SECRET;
if (!sessionSecret2)
  throw new Error("SESSION_SECRET must be set");
var themeStorage = createCookieSessionStorage2({
  cookie: {
    name: "BT_theme",
    secure: !1,
    // insecure for localhost
    secrets: [sessionSecret2],
    sameSite: "lax",
    path: "/",
    httpOnly: !0
  }
});
async function getThemeSession(request) {
  let session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      let themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session)
  };
}

// app/root.tsx
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var links = () => [{ rel: "stylesheet", href: app_default }], loader = async ({ request }) => {
  let user = await getUser(request), themeSession = await getThemeSession(request);
  return json2({ user, theme: themeSession.getTheme() });
};
function App() {
  let { user, theme: ssrTheme } = useLoaderData(), [theme] = useTheme();
  return /* @__PURE__ */ jsxDEV4("html", { lang: "en", className: clsx(theme), children: [
    /* @__PURE__ */ jsxDEV4("head", { children: [
      /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(ThemeScript, { ssrTheme: Boolean(ssrTheme) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(
        "link",
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 41,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV4(
        "link",
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 46,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV4(
        "link",
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 52,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV4("link", { rel: "manifest", href: "/site.webmanifest" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("meta", { name: "msapplication-TileColor", content: "#da532c" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,viewport-fit=cover"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 61,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV4("meta", { name: "theme-color", content: "#18181b" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(
        "meta",
        {
          property: "og:title",
          content: "Free Backing Tracks for Musicians | BackyTracky"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 66,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV4(
        "meta",
        {
          property: "og:description",
          content: "Create and play-along Lead-Sheets to level up your chops! Practice scales, licks or solos. Discover chord progressions others are using or make your own!"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 70,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV4("meta", { property: "og:locale", content: "en_US" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("meta", { property: "og:site_name", content: "BackyTracky" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("meta", { property: "og:image", content: "/og-image.png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("body", { children: [
      /* @__PURE__ */ jsxDEV4(Navbar, { user }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Suspense, { fallback: /* @__PURE__ */ jsxDEV4("div", { children: "Loading..." }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 81,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ jsxDEV4(Toaster, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
function AppWithProviders() {
  let { theme } = useLoaderData();
  return /* @__PURE__ */ jsxDEV4(ThemeProvider, { specifiedTheme: theme, children: /* @__PURE__ */ jsxDEV4(App, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 99,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

// app/routes/_action.set-theme.tsx
var action_set_theme_exports = {};
__export(action_set_theme_exports, {
  action: () => action,
  loader: () => loader2
});
import { json as json3, redirect as redirect2 } from "@remix-run/node";
var action = async ({ request }) => {
  let themeSession = await getThemeSession(request), requestText = await request.text(), theme = new URLSearchParams(requestText).get("theme");
  return isTheme(theme) ? (themeSession.setTheme(theme), json3(
    {
      success: !0
    },
    {
      headers: {
        "Set-Cookie": await themeSession.commit()
      }
    }
  )) : json3({
    success: !1,
    message: `theme value of ${theme}\xA0is not valid`
  });
}, loader2 = () => redirect2("/", { status: 404 });

// app/routes/_auth.register.tsx
var auth_register_exports = {};
__export(auth_register_exports, {
  default: () => RegisterRoute
});
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function RegisterRoute() {
  return /* @__PURE__ */ jsxDEV5("main", { children: /* @__PURE__ */ jsxDEV5("section", { children: /* @__PURE__ */ jsxDEV5("div", { className: "max-w-sm mx-auto pt-8", children: /* @__PURE__ */ jsxDEV5("h1", { children: "Register \u{1F4D1}" }, void 0, !1, {
    fileName: "app/routes/_auth.register.tsx",
    lineNumber: 6,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.register.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.register.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.register.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/track.$trackId.tsx
var track_trackId_exports = {};
__export(track_trackId_exports, {
  default: () => TrackDetailRoute,
  loader: () => loader3,
  meta: () => meta
});
import { redirect as redirect3, json as json5 } from "@remix-run/node";
import { Link as Link2, useLoaderData as useLoaderData2 } from "@remix-run/react";
import { Suspense as Suspense2 } from "react";

// app/components/PageHeader.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function PageHeader({
  title,
  children
}) {
  return /* @__PURE__ */ jsxDEV6("section", { className: "border-b border-zinc-500 border-opacity-10 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-gray-1000", children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "bg-white dark:bg-black absolute top-0 left-0 right-0 h-1 -z-10", children: /* @__PURE__ */ jsxDEV6("div", { className: "color-change z-10 w-full top-0 h-full bg-opacity-10 absolute pointer-events-none" }, void 0, !1, {
      fileName: "app/components/PageHeader.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/PageHeader.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "max-w-4xl mx-auto relative", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "page-header__breadcrumbs", children }, void 0, !1, {
        fileName: "app/components/PageHeader.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("h1", { className: "font-black", children: title }, void 0, !1, {
        fileName: "app/components/PageHeader.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/PageHeader.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/PageHeader.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/track.$trackId.tsx
var import_TrackPlayer = __toESM(require_TrackPlayer(), 1);

// app/utils/tracks.server.ts
import { json as json4 } from "@remix-run/node";
async function createTrack(trackname, description, chords, userId, authorName, bpm) {
  return await db.track.create({
    data: {
      name: trackname,
      description,
      authorName,
      bpm: parseInt(bpm),
      sheet: JSON.parse(chords),
      upvotes: 0,
      userId
    }
  });
}
async function getTrack(trackId) {
  return await db.track.findUnique({
    where: { id: trackId }
  });
}
async function deleteTrack(trackId) {
  try {
    let deletedTrack = await db.track.delete({
      where: { id: trackId }
    });
    return json4({ message: "Delete Success", track: deletedTrack });
  } catch {
    return json4({ message: "Delete Error" }, { status: 400 });
  }
}

// app/routes/track.$trackId.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var loader3 = async ({ params }) => {
  if (!params.trackId)
    return redirect3("/tracks");
  let track = await getTrack(params.trackId);
  return json5({ track });
}, meta = ({ data }) => [
  {
    title: `${data.track.name} Backing Track | BackyTracky`
  },
  {
    name: "description",
    content: data.track.description
  }
];
function TrackDetailRoute() {
  let { track } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV7("main", { className: "main", children: [
    /* @__PURE__ */ jsxDEV7(PageHeader, { title: track.name, children: [
      /* @__PURE__ */ jsxDEV7(Link2, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("span", { children: " / " }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Link2, { to: "/tracks", children: "Tracks" }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("span", { children: " / " }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Link2, { to: `/track/${track.id}`, children: track.name }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/track.$trackId.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("section", { children: /* @__PURE__ */ jsxDEV7("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "opacity-50 text-xs flex justify-between", children: [
        /* @__PURE__ */ jsxDEV7("span", { children: [
          "Suggested time: ",
          /* @__PURE__ */ jsxDEV7("strong", { children: track.bpm }, void 0, !1, {
            fileName: "app/routes/track.$trackId.tsx",
            lineNumber: 43,
            columnNumber: 31
          }, this),
          " bpm"
        ] }, void 0, !0, {
          fileName: "app/routes/track.$trackId.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { children: /* @__PURE__ */ jsxDEV7("span", { children: [
          "Created by ",
          /* @__PURE__ */ jsxDEV7("strong", { children: track.authorName }, void 0, !1, {
            fileName: "app/routes/track.$trackId.tsx",
            lineNumber: 47,
            columnNumber: 28
          }, this),
          ", in",
          " ",
          new Date(track.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long"
          })
        ] }, void 0, !0, {
          fileName: "app/routes/track.$trackId.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/track.$trackId.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7(Suspense2, { fallback: /* @__PURE__ */ jsxDEV7("p", { children: "Loading..." }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 56,
        columnNumber: 31
      }, this), children: /* @__PURE__ */ jsxDEV7(import_TrackPlayer.default, { sheet: track.sheet, bpm: track.bpm }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/track.$trackId.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/track.$trackId.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/track.$trackId.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.logout.tsx
var auth_logout_exports = {};
__export(auth_logout_exports, {
  action: () => action2,
  loader: () => loader4
});
import { redirect as redirect4 } from "@remix-run/node";
var action2 = async ({ request }) => await logout(request), loader4 = async () => redirect4("/login");

// app/routes/_auth.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  action: () => action3,
  default: () => LoginRoute
});
import { json as json6 } from "@remix-run/node";
import { Form as Form2, useActionData, useNavigation } from "@remix-run/react";
import { useEffect as useEffect2 } from "react";
import toast2 from "react-hot-toast";

// app/components/BackgroundNotes.tsx
import { Fragment as Fragment3, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function BackgroundNotes() {
  return /* @__PURE__ */ jsxDEV8(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "background-note animation-float-1", children: /* @__PURE__ */ jsxDEV8(
      "svg",
      {
        viewBox: "0 0 126 188",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxDEV8(
            "path",
            {
              d: "M62.3862 0V110.104C54.4518 105.522 45.2285 103.689 36.1475 104.891C27.0664 106.093 18.6355 110.262 12.1631 116.752C5.6906 123.241 1.53848 131.688 0.35106 140.782C-0.836364 149.876 1.00729 159.108 5.59595 167.046C10.1846 174.983 17.2616 181.182 25.7289 184.681C34.1961 188.18 43.58 188.783 52.4244 186.396C61.2688 184.01 69.0792 178.767 74.6434 171.482C80.2077 164.196 83.2147 155.276 83.1979 146.105V41.7233H124.919V0H62.3862Z",
              className: "fill-yellow-500"
            },
            void 0,
            !1,
            {
              fileName: "app/components/BackgroundNotes.tsx",
              lineNumber: 10,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV8(
            "path",
            {
              opacity: "0.1",
              d: "M118.568 0V34.8754H76.8469V139.257C76.8495 147.096 74.6455 154.777 70.4877 161.42C66.3298 168.062 60.3864 173.397 53.339 176.813C46.2915 180.228 38.4254 181.586 30.6426 180.73C22.8597 179.875 15.4753 176.84 9.33594 171.975C14.7022 178.774 22.05 183.731 30.3589 186.157C38.6677 188.584 47.525 188.359 55.7004 185.514C63.8758 182.67 70.9634 177.346 75.9787 170.284C80.994 163.221 83.6879 154.77 83.6864 146.105V41.7233H125.407V0H118.568Z",
              fill: "black"
            },
            void 0,
            !1,
            {
              fileName: "app/components/BackgroundNotes.tsx",
              lineNumber: 14,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/BackgroundNotes.tsx",
        lineNumber: 5,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/BackgroundNotes.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "background-note animation-float-2", children: /* @__PURE__ */ jsxDEV8(
      "svg",
      {
        viewBox: "0 0 126 188",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxDEV8(
            "path",
            {
              d: "M62.3862 0V110.104C54.4518 105.522 45.2285 103.689 36.1475 104.891C27.0664 106.093 18.6355 110.262 12.1631 116.752C5.6906 123.241 1.53848 131.688 0.35106 140.782C-0.836364 149.876 1.00729 159.108 5.59595 167.046C10.1846 174.983 17.2616 181.182 25.7289 184.681C34.1961 188.18 43.58 188.783 52.4244 186.396C61.2688 184.01 69.0792 178.767 74.6434 171.482C80.2077 164.196 83.2147 155.276 83.1979 146.105V41.7233H124.919V0H62.3862Z",
              className: "fill-blue-500"
            },
            void 0,
            !1,
            {
              fileName: "app/components/BackgroundNotes.tsx",
              lineNumber: 27,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV8(
            "path",
            {
              opacity: "0.1",
              d: "M118.568 0V34.8754H76.8469V139.257C76.8495 147.096 74.6455 154.777 70.4877 161.42C66.3298 168.062 60.3864 173.397 53.339 176.813C46.2915 180.228 38.4254 181.586 30.6426 180.73C22.8597 179.875 15.4753 176.84 9.33594 171.975C14.7022 178.774 22.05 183.731 30.3589 186.157C38.6677 188.584 47.525 188.359 55.7004 185.514C63.8758 182.67 70.9634 177.346 75.9787 170.284C80.994 163.221 83.6879 154.77 83.6864 146.105V41.7233H125.407V0H118.568Z",
              fill: "black"
            },
            void 0,
            !1,
            {
              fileName: "app/components/BackgroundNotes.tsx",
              lineNumber: 31,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/BackgroundNotes.tsx",
        lineNumber: 22,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/BackgroundNotes.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "background-note animation-float-3", children: /* @__PURE__ */ jsxDEV8(
      "svg",
      {
        viewBox: "0 0 126 188",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxDEV8(
            "path",
            {
              d: "M62.3862 0V110.104C54.4518 105.522 45.2285 103.689 36.1475 104.891C27.0664 106.093 18.6355 110.262 12.1631 116.752C5.6906 123.241 1.53848 131.688 0.35106 140.782C-0.836364 149.876 1.00729 159.108 5.59595 167.046C10.1846 174.983 17.2616 181.182 25.7289 184.681C34.1961 188.18 43.58 188.783 52.4244 186.396C61.2688 184.01 69.0792 178.767 74.6434 171.482C80.2077 164.196 83.2147 155.276 83.1979 146.105V41.7233H124.919V0H62.3862Z",
              className: "fill-red-400"
            },
            void 0,
            !1,
            {
              fileName: "app/components/BackgroundNotes.tsx",
              lineNumber: 44,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV8(
            "path",
            {
              opacity: "0.1",
              d: "M118.568 0V34.8754H76.8469V139.257C76.8495 147.096 74.6455 154.777 70.4877 161.42C66.3298 168.062 60.3864 173.397 53.339 176.813C46.2915 180.228 38.4254 181.586 30.6426 180.73C22.8597 179.875 15.4753 176.84 9.33594 171.975C14.7022 178.774 22.05 183.731 30.3589 186.157C38.6677 188.584 47.525 188.359 55.7004 185.514C63.8758 182.67 70.9634 177.346 75.9787 170.284C80.994 163.221 83.6879 154.77 83.6864 146.105V41.7233H125.407V0H118.568Z",
              fill: "black"
            },
            void 0,
            !1,
            {
              fileName: "app/components/BackgroundNotes.tsx",
              lineNumber: 48,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/BackgroundNotes.tsx",
        lineNumber: 39,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/BackgroundNotes.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BackgroundNotes.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/TextInput.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function TextInput({
  name,
  label,
  actionData,
  placeholder = "",
  required = !1,
  type = "text"
}) {
  return /* @__PURE__ */ jsxDEV9("label", { className: "form-row", htmlFor: `${name}-input`, children: [
    /* @__PURE__ */ jsxDEV9("span", { children: label }, void 0, !1, {
      fileName: "app/components/TextInput.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9(
      "input",
      {
        type,
        id: `${name}-input`,
        name,
        required,
        placeholder,
        defaultValue: actionData?.fields?.name,
        min: type === "number" ? "30" : void 0,
        max: type === "number" ? "280" : void 0,
        "aria-invalid": Boolean(actionData?.fieldErrors?.name),
        "aria-errormessage": actionData?.fieldErrors?.name ? `${name}-error` : void 0
      },
      void 0,
      !1,
      {
        fileName: "app/components/TextInput.tsx",
        lineNumber: 26,
        columnNumber: 7
      },
      this
    ),
    actionData?.fieldErrors?.name ? /* @__PURE__ */ jsxDEV9(
      "span",
      {
        className: "form-validation-error",
        role: "alert",
        id: `${name}-error`,
        children: actionData.fieldErrors.name
      },
      void 0,
      !1,
      {
        fileName: "app/components/TextInput.tsx",
        lineNumber: 41,
        columnNumber: 9
      },
      this
    ) : null
  ] }, void 0, !0, {
    fileName: "app/components/TextInput.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/auth/utils.tsx
function validateUsername(username) {
  if (typeof username != "string" || username.length < 3)
    return "Usernames must be at least 3 characters long";
}
function validatePassword(password) {
  if (typeof password != "string" || password.length < 6)
    return "Passwords must be at least 6 characters long";
}

// app/routes/_auth.login.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var badRequest = (data) => json6(data, { status: 400 }), action3 = async ({ request }) => {
  let form = await request.formData(), username = form.get("username"), password = form.get("password");
  if (typeof username != "string" || typeof password != "string")
    return badRequest({
      formError: "Form not submitted correctly."
    });
  let fields = { username, password }, fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  let user = await login({ username, password });
  return user ? createUserSession(user.id) : badRequest({
    fields,
    formError: "Username/Password combination is incorrect"
  });
};
function LoginRoute() {
  let actionData = useActionData(), navigation = useNavigation();
  return useEffect2(() => {
    navigation.state === "submitting" && navigation.formMethod === "POST" && toast2.loading("Logging in...", { id: "auth-toast" }), navigation.state === "idle" && actionData?.formError && toast2.error("There was an error...", { id: "auth-toast" }), navigation.state === "loading" && navigation.formMethod === "POST" && toast2.success("You are logged in!", { id: "auth-toast" });
  }, [navigation, actionData]), /* @__PURE__ */ jsxDEV10("main", { children: [
    /* @__PURE__ */ jsxDEV10("section", { children: /* @__PURE__ */ jsxDEV10("div", { className: "max-w-sm mx-auto pt-8 relative z-10", children: [
      /* @__PURE__ */ jsxDEV10("h1", { className: "", children: "Login \u{1F511}" }, void 0, !1, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10(Form2, { className: "grid gap-4 mt-4", method: "post", children: [
        /* @__PURE__ */ jsxDEV10(
          TextInput,
          {
            name: "username",
            label: "Username",
            actionData
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.login.tsx",
            lineNumber: 79,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV10(
          TextInput,
          {
            name: "password",
            label: "Password",
            type: "password",
            actionData
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.login.tsx",
            lineNumber: 84,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV10("button", { type: "submit", className: "button", children: "login" }, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { id: "form-error-message", children: actionData?.formError ? /* @__PURE__ */ jsxDEV10("p", { className: "form-validation-error text-center", role: "alert", children: actionData.formError }, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this) : null }, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10("p", { className: "text-xs text-center mt-4 text-opacity-50 bg-white dark:bg-zinc-900 p-2 rounded-md", children: [
        /* @__PURE__ */ jsxDEV10("a", { href: "https://dennissmuda.com/", className: "underline", children: "Contact me" }, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        " ",
        "if you want to know more, ",
        /* @__PURE__ */ jsxDEV10("br", {}, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 107,
          columnNumber: 39
        }, this),
        " or if you have song requests \u{1F918}"
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "relative pt-32", children: /* @__PURE__ */ jsxDEV10(BackgroundNotes, {}, void 0, !1, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/generator.tsx
var generator_exports = {};
__export(generator_exports, {
  default: () => GeneratorRoute,
  meta: () => meta2
});
import { Link as Link3 } from "@remix-run/react";
import { Suspense as Suspense3 } from "react";
var import_Sequencer = __toESM(require_Sequencer(), 1);
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var meta2 = () => [
  {
    title: "Drum-Sequencer and Chord Progression Generator | BackyTracky"
  },
  {
    description: "Generate chord progressions and drum beats!"
  }
];
function GeneratorRoute() {
  return /* @__PURE__ */ jsxDEV11("main", { children: [
    /* @__PURE__ */ jsxDEV11(PageHeader, { title: "Make your own \u{1F98B}", children: [
      /* @__PURE__ */ jsxDEV11(Link3, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/generator.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("span", { children: " / " }, void 0, !1, {
        fileName: "app/routes/generator.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11(Link3, { to: "/generator", children: "Sequencer" }, void 0, !1, {
        fileName: "app/routes/generator.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/generator.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11("section", { children: /* @__PURE__ */ jsxDEV11("div", { className: "container max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV11(Suspense3, { fallback: /* @__PURE__ */ jsxDEV11("p", { children: "Loading..." }, void 0, !1, {
      fileName: "app/routes/generator.tsx",
      lineNumber: 27,
      columnNumber: 31
    }, this), children: /* @__PURE__ */ jsxDEV11(import_Sequencer.default, {}, void 0, !1, {
      fileName: "app/routes/generator.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/generator.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/generator.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/generator.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/generator.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/track.new.tsx
var track_new_exports = {};
__export(track_new_exports, {
  action: () => action4,
  default: () => NewTrackRoute,
  loader: () => loader5
});
import { useRef as useRef2, useEffect as useEffect5, useState as useState4, Suspense as Suspense4 } from "react";
import { redirect as redirect5, json as json7 } from "@remix-run/node";
import { Form as Form3, useActionData as useActionData2, useLoaderData as useLoaderData3 } from "@remix-run/react";

// app/music/utils.ts
var increaseDuration = (duration) => duration === "1n" || duration === "2n." ? "1n" : duration === "2n" ? "2n." : duration === "4n" ? "2n" : "1n", decreaseDuration = (duration) => duration === "1n" ? "2n." : duration === "2n." ? "2n" : (duration === "2n" || duration === "4n", "4n"), convertDurationToBeats = (duration) => {
  switch (duration) {
    case "1n":
      return 4;
    case "2n.":
      return 3;
    case "2n":
      return 2;
    case "4n":
      return 1;
    default:
      return 1;
  }
}, getNextChordTime = (previousChord) => {
  let c = previousChord, beats = convertDurationToBeats(c.duration), nextBeat = c.beat + beats, nextBar = c.bar;
  return nextBeat >= 4 && (nextBar += 1, nextBeat -= 4), {
    bar: nextBar,
    beat: nextBeat,
    sixteenth: 0
  };
};

// app/music/ChordBeat.ts
var ChordBeat = class {
  constructor(config) {
    this.note = config.note, this.duration = config.duration, this.root = config.root, this.type = config.type, this.extension = config.extension, this.bar = config.bar, this.beat = config.beat, this.sixteenth = config.sixteenth;
  }
  get time() {
    return `${this.bar}:${this.beat}:${this.sixteenth || 0}`;
  }
  get ghostTime() {
    return "";
  }
};

// app/components/track/ChordEditorModal.tsx
import { Fragment as Fragment4, useEffect as useEffect4, useState as useState3 } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Chord } from "@tonaljs/tonal";

// node_modules/tone/build/esm/version.js
var version = "14.7.77";

// node_modules/tone/build/esm/core/context/AudioContext.js
import { AudioContext as stdAudioContext, AudioWorkletNode as stdAudioWorkletNode, OfflineAudioContext as stdOfflineAudioContext } from "standardized-audio-context";

// node_modules/tone/build/esm/core/util/Debug.js
function assert(statement, error) {
  if (!statement)
    throw new Error(error);
}
function assertRange(value, gte, lte = 1 / 0) {
  if (!(gte <= value && value <= lte))
    throw new RangeError(`Value must be within [${gte}, ${lte}], got: ${value}`);
}
function assertContextRunning(context2) {
  !context2.isOffline && context2.state !== "running" && warn('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.');
}
var defaultLogger = console;
function log(...args) {
  defaultLogger.log(...args);
}
function warn(...args) {
  defaultLogger.warn(...args);
}

// node_modules/tone/build/esm/core/util/TypeCheck.js
function isUndef(arg) {
  return typeof arg > "u";
}
function isDefined(arg) {
  return !isUndef(arg);
}
function isFunction(arg) {
  return typeof arg == "function";
}
function isNumber(arg) {
  return typeof arg == "number";
}
function isObject(arg) {
  return Object.prototype.toString.call(arg) === "[object Object]" && arg.constructor === Object;
}
function isBoolean(arg) {
  return typeof arg == "boolean";
}
function isArray(arg) {
  return Array.isArray(arg);
}
function isString(arg) {
  return typeof arg == "string";
}
function isNote(arg) {
  return isString(arg) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(arg);
}

// node_modules/tone/build/esm/core/context/AudioContext.js
import { isSupported } from "standardized-audio-context";
function createAudioContext(options) {
  return new stdAudioContext(options);
}
function createOfflineAudioContext(channels, length, sampleRate) {
  return new stdOfflineAudioContext(channels, length, sampleRate);
}
var theWindow = typeof self == "object" ? self : null, hasAudioContext = theWindow && (theWindow.hasOwnProperty("AudioContext") || theWindow.hasOwnProperty("webkitAudioContext"));
function createAudioWorkletNode(context2, name, options) {
  return assert(isDefined(stdAudioWorkletNode), "This node only works in a secure context (https or localhost)"), new stdAudioWorkletNode(context2, name, options);
}

// node_modules/tone/build/esm/core/context/Context.js
import { __awaiter } from "tslib";

// node_modules/tone/build/esm/core/clock/Ticker.js
var Ticker = class {
  constructor(callback, type, updateInterval) {
    this._callback = callback, this._type = type, this._updateInterval = updateInterval, this._createClock();
  }
  /**
   * Generate a web worker
   */
  _createWorker() {
    let blob = new Blob([
      /* javascript */
      `
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval * 1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`
    ], { type: "text/javascript" }), blobUrl = URL.createObjectURL(blob), worker = new Worker(blobUrl);
    worker.onmessage = this._callback.bind(this), this._worker = worker;
  }
  /**
   * Create a timeout loop
   */
  _createTimeout() {
    this._timeout = setTimeout(() => {
      this._createTimeout(), this._callback();
    }, this._updateInterval * 1e3);
  }
  /**
   * Create the clock source.
   */
  _createClock() {
    if (this._type === "worker")
      try {
        this._createWorker();
      } catch {
        this._type = "timeout", this._createClock();
      }
    else
      this._type === "timeout" && this._createTimeout();
  }
  /**
   * Clean up the current clock source
   */
  _disposeClock() {
    this._timeout && (clearTimeout(this._timeout), this._timeout = 0), this._worker && (this._worker.terminate(), this._worker.onmessage = null);
  }
  /**
   * The rate in seconds the ticker will update
   */
  get updateInterval() {
    return this._updateInterval;
  }
  set updateInterval(interval) {
    this._updateInterval = Math.max(interval, 128 / 44100), this._type === "worker" && this._worker.postMessage(Math.max(interval * 1e3, 1));
  }
  /**
   * The type of the ticker, either a worker or a timeout
   */
  get type() {
    return this._type;
  }
  set type(type) {
    this._disposeClock(), this._type = type, this._createClock();
  }
  /**
   * Clean up
   */
  dispose() {
    this._disposeClock();
  }
};

// node_modules/tone/build/esm/core/util/AdvancedTypeCheck.js
import { isAnyAudioContext, isAnyAudioNode, isAnyAudioParam, isAnyOfflineAudioContext } from "standardized-audio-context";
function isAudioParam(arg) {
  return isAnyAudioParam(arg);
}
function isAudioNode(arg) {
  return isAnyAudioNode(arg);
}
function isOfflineAudioContext(arg) {
  return isAnyOfflineAudioContext(arg);
}
function isAudioContext(arg) {
  return isAnyAudioContext(arg);
}
function isAudioBuffer(arg) {
  return arg instanceof AudioBuffer;
}

// node_modules/tone/build/esm/core/util/Defaults.js
function noCopy(key, arg) {
  return key === "value" || isAudioParam(arg) || isAudioNode(arg) || isAudioBuffer(arg);
}
function deepMerge(target, ...sources) {
  if (!sources.length)
    return target;
  let source = sources.shift();
  if (isObject(target) && isObject(source))
    for (let key in source)
      noCopy(key, source[key]) ? target[key] = source[key] : isObject(source[key]) ? (target[key] || Object.assign(target, { [key]: {} }), deepMerge(target[key], source[key])) : Object.assign(target, { [key]: source[key] });
  return deepMerge(target, ...sources);
}
function deepEquals(arrayA, arrayB) {
  return arrayA.length === arrayB.length && arrayA.every((element, index) => arrayB[index] === element);
}
function optionsFromArguments(defaults, argsArray, keys = [], objKey) {
  let opts = {}, args = Array.from(argsArray);
  if (isObject(args[0]) && objKey && !Reflect.has(args[0], objKey) && (Object.keys(args[0]).some((key) => Reflect.has(defaults, key)) || (deepMerge(opts, { [objKey]: args[0] }), keys.splice(keys.indexOf(objKey), 1), args.shift())), args.length === 1 && isObject(args[0]))
    deepMerge(opts, args[0]);
  else
    for (let i = 0; i < keys.length; i++)
      isDefined(args[i]) && (opts[keys[i]] = args[i]);
  return deepMerge(defaults, opts);
}
function getDefaultsFromInstance(instance) {
  return instance.constructor.getDefaults();
}
function defaultArg(given, fallback) {
  return isUndef(given) ? fallback : given;
}
function omitFromObject(obj, omit) {
  return omit.forEach((prop) => {
    Reflect.has(obj, prop) && delete obj[prop];
  }), obj;
}

// node_modules/tone/build/esm/core/Tone.js
var Tone = class {
  constructor() {
    this.debug = !1, this._wasDisposed = !1;
  }
  /**
   * Returns all of the default options belonging to the class.
   */
  static getDefaults() {
    return {};
  }
  /**
   * Prints the outputs to the console log for debugging purposes.
   * Prints the contents only if either the object has a property
   * called `debug` set to true, or a variable called TONE_DEBUG_CLASS
   * is set to the name of the class.
   * @example
   * const osc = new Tone.Oscillator();
   * // prints all logs originating from this oscillator
   * osc.debug = true;
   * // calls to start/stop will print in the console
   * osc.start();
   */
  log(...args) {
    (this.debug || theWindow && this.toString() === theWindow.TONE_DEBUG_CLASS) && log(this, ...args);
  }
  /**
   * disconnect and dispose.
   */
  dispose() {
    return this._wasDisposed = !0, this;
  }
  /**
   * Indicates if the instance was disposed. 'Disposing' an
   * instance means that all of the Web Audio nodes that were
   * created for the instance are disconnected and freed for garbage collection.
   */
  get disposed() {
    return this._wasDisposed;
  }
  /**
   * Convert the class to a string
   * @example
   * const osc = new Tone.Oscillator();
   * console.log(osc.toString());
   */
  toString() {
    return this.name;
  }
};
Tone.version = version;

// node_modules/tone/build/esm/core/util/Math.js
function GT(a, b) {
  return a > b + 1e-6;
}
function GTE(a, b) {
  return GT(a, b) || EQ(a, b);
}
function LT(a, b) {
  return a + 1e-6 < b;
}
function EQ(a, b) {
  return Math.abs(a - b) < 1e-6;
}
function clamp(value, min, max) {
  return Math.max(Math.min(value, max), min);
}

// node_modules/tone/build/esm/core/util/Timeline.js
var Timeline = class extends Tone {
  constructor() {
    super(), this.name = "Timeline", this._timeline = [];
    let options = optionsFromArguments(Timeline.getDefaults(), arguments, ["memory"]);
    this.memory = options.memory, this.increasing = options.increasing;
  }
  static getDefaults() {
    return {
      memory: 1 / 0,
      increasing: !1
    };
  }
  /**
   * The number of items in the timeline.
   */
  get length() {
    return this._timeline.length;
  }
  /**
   * Insert an event object onto the timeline. Events must have a "time" attribute.
   * @param event  The event object to insert into the timeline.
   */
  add(event) {
    if (assert(Reflect.has(event, "time"), "Timeline: events must have a time attribute"), event.time = event.time.valueOf(), this.increasing && this.length) {
      let lastValue = this._timeline[this.length - 1];
      assert(GTE(event.time, lastValue.time), "The time must be greater than or equal to the last scheduled time"), this._timeline.push(event);
    } else {
      let index = this._search(event.time);
      this._timeline.splice(index + 1, 0, event);
    }
    if (this.length > this.memory) {
      let diff = this.length - this.memory;
      this._timeline.splice(0, diff);
    }
    return this;
  }
  /**
   * Remove an event from the timeline.
   * @param  {Object}  event  The event object to remove from the list.
   * @returns {Timeline} this
   */
  remove(event) {
    let index = this._timeline.indexOf(event);
    return index !== -1 && this._timeline.splice(index, 1), this;
  }
  /**
   * Get the nearest event whose time is less than or equal to the given time.
   * @param  time  The time to query.
   */
  get(time, param = "time") {
    let index = this._search(time, param);
    return index !== -1 ? this._timeline[index] : null;
  }
  /**
   * Return the first event in the timeline without removing it
   * @returns {Object} The first event object
   */
  peek() {
    return this._timeline[0];
  }
  /**
   * Return the first event in the timeline and remove it
   */
  shift() {
    return this._timeline.shift();
  }
  /**
   * Get the event which is scheduled after the given time.
   * @param  time  The time to query.
   */
  getAfter(time, param = "time") {
    let index = this._search(time, param);
    return index + 1 < this._timeline.length ? this._timeline[index + 1] : null;
  }
  /**
   * Get the event before the event at the given time.
   * @param  time  The time to query.
   */
  getBefore(time) {
    let len = this._timeline.length;
    if (len > 0 && this._timeline[len - 1].time < time)
      return this._timeline[len - 1];
    let index = this._search(time);
    return index - 1 >= 0 ? this._timeline[index - 1] : null;
  }
  /**
   * Cancel events at and after the given time
   * @param  after  The time to query.
   */
  cancel(after) {
    if (this._timeline.length > 1) {
      let index = this._search(after);
      if (index >= 0)
        if (EQ(this._timeline[index].time, after)) {
          for (let i = index; i >= 0 && EQ(this._timeline[i].time, after); i--)
            index = i;
          this._timeline = this._timeline.slice(0, index);
        } else
          this._timeline = this._timeline.slice(0, index + 1);
      else
        this._timeline = [];
    } else
      this._timeline.length === 1 && GTE(this._timeline[0].time, after) && (this._timeline = []);
    return this;
  }
  /**
   * Cancel events before or equal to the given time.
   * @param  time  The time to cancel before.
   */
  cancelBefore(time) {
    let index = this._search(time);
    return index >= 0 && (this._timeline = this._timeline.slice(index + 1)), this;
  }
  /**
   * Returns the previous event if there is one. null otherwise
   * @param  event The event to find the previous one of
   * @return The event right before the given event
   */
  previousEvent(event) {
    let index = this._timeline.indexOf(event);
    return index > 0 ? this._timeline[index - 1] : null;
  }
  /**
   * Does a binary search on the timeline array and returns the
   * nearest event index whose time is after or equal to the given time.
   * If a time is searched before the first index in the timeline, -1 is returned.
   * If the time is after the end, the index of the last item is returned.
   */
  _search(time, param = "time") {
    if (this._timeline.length === 0)
      return -1;
    let beginning = 0, len = this._timeline.length, end = len;
    if (len > 0 && this._timeline[len - 1][param] <= time)
      return len - 1;
    for (; beginning < end; ) {
      let midPoint = Math.floor(beginning + (end - beginning) / 2), event = this._timeline[midPoint], nextEvent = this._timeline[midPoint + 1];
      if (EQ(event[param], time)) {
        for (let i = midPoint; i < this._timeline.length; i++) {
          let testEvent = this._timeline[i];
          if (EQ(testEvent[param], time))
            midPoint = i;
          else
            break;
        }
        return midPoint;
      } else {
        if (LT(event[param], time) && GT(nextEvent[param], time))
          return midPoint;
        GT(event[param], time) ? end = midPoint : beginning = midPoint + 1;
      }
    }
    return -1;
  }
  /**
   * Internal iterator. Applies extra safety checks for
   * removing items from the array.
   */
  _iterate(callback, lowerBound = 0, upperBound = this._timeline.length - 1) {
    this._timeline.slice(lowerBound, upperBound + 1).forEach(callback);
  }
  /**
   * Iterate over everything in the array
   * @param  callback The callback to invoke with every item
   */
  forEach(callback) {
    return this._iterate(callback), this;
  }
  /**
   * Iterate over everything in the array at or before the given time.
   * @param  time The time to check if items are before
   * @param  callback The callback to invoke with every item
   */
  forEachBefore(time, callback) {
    let upperBound = this._search(time);
    return upperBound !== -1 && this._iterate(callback, 0, upperBound), this;
  }
  /**
   * Iterate over everything in the array after the given time.
   * @param  time The time to check if items are before
   * @param  callback The callback to invoke with every item
   */
  forEachAfter(time, callback) {
    let lowerBound = this._search(time);
    return this._iterate(callback, lowerBound + 1), this;
  }
  /**
   * Iterate over everything in the array between the startTime and endTime.
   * The timerange is inclusive of the startTime, but exclusive of the endTime.
   * range = [startTime, endTime).
   * @param  startTime The time to check if items are before
   * @param  endTime The end of the test interval.
   * @param  callback The callback to invoke with every item
   */
  forEachBetween(startTime, endTime, callback) {
    let lowerBound = this._search(startTime), upperBound = this._search(endTime);
    return lowerBound !== -1 && upperBound !== -1 ? (this._timeline[lowerBound].time !== startTime && (lowerBound += 1), this._timeline[upperBound].time === endTime && (upperBound -= 1), this._iterate(callback, lowerBound, upperBound)) : lowerBound === -1 && this._iterate(callback, 0, upperBound), this;
  }
  /**
   * Iterate over everything in the array at or after the given time. Similar to
   * forEachAfter, but includes the item(s) at the given time.
   * @param  time The time to check if items are before
   * @param  callback The callback to invoke with every item
   */
  forEachFrom(time, callback) {
    let lowerBound = this._search(time);
    for (; lowerBound >= 0 && this._timeline[lowerBound].time >= time; )
      lowerBound--;
    return this._iterate(callback, lowerBound + 1), this;
  }
  /**
   * Iterate over everything in the array at the given time
   * @param  time The time to check if items are before
   * @param  callback The callback to invoke with every item
   */
  forEachAtTime(time, callback) {
    let upperBound = this._search(time);
    if (upperBound !== -1 && EQ(this._timeline[upperBound].time, time)) {
      let lowerBound = upperBound;
      for (let i = upperBound; i >= 0 && EQ(this._timeline[i].time, time); i--)
        lowerBound = i;
      this._iterate((event) => {
        callback(event);
      }, lowerBound, upperBound);
    }
    return this;
  }
  /**
   * Clean up.
   */
  dispose() {
    return super.dispose(), this._timeline = [], this;
  }
};

// node_modules/tone/build/esm/core/context/ContextInitialization.js
var notifyNewContext = [];
function onContextInit(cb) {
  notifyNewContext.push(cb);
}
function initializeContext(ctx) {
  notifyNewContext.forEach((cb) => cb(ctx));
}
var notifyCloseContext = [];
function onContextClose(cb) {
  notifyCloseContext.push(cb);
}
function closeContext(ctx) {
  notifyCloseContext.forEach((cb) => cb(ctx));
}

// node_modules/tone/build/esm/core/util/Emitter.js
var Emitter = class extends Tone {
  constructor() {
    super(...arguments), this.name = "Emitter";
  }
  /**
   * Bind a callback to a specific event.
   * @param  event     The name of the event to listen for.
   * @param  callback  The callback to invoke when the event is emitted
   */
  on(event, callback) {
    return event.split(/\W+/).forEach((eventName) => {
      isUndef(this._events) && (this._events = {}), this._events.hasOwnProperty(eventName) || (this._events[eventName] = []), this._events[eventName].push(callback);
    }), this;
  }
  /**
   * Bind a callback which is only invoked once
   * @param  event     The name of the event to listen for.
   * @param  callback  The callback to invoke when the event is emitted
   */
  once(event, callback) {
    let boundCallback = (...args) => {
      callback(...args), this.off(event, boundCallback);
    };
    return this.on(event, boundCallback), this;
  }
  /**
   * Remove the event listener.
   * @param  event     The event to stop listening to.
   * @param  callback  The callback which was bound to the event with Emitter.on.
   *                   If no callback is given, all callbacks events are removed.
   */
  off(event, callback) {
    return event.split(/\W+/).forEach((eventName) => {
      if (isUndef(this._events) && (this._events = {}), this._events.hasOwnProperty(event))
        if (isUndef(callback))
          this._events[event] = [];
        else {
          let eventList = this._events[event];
          for (let i = eventList.length - 1; i >= 0; i--)
            eventList[i] === callback && eventList.splice(i, 1);
        }
    }), this;
  }
  /**
   * Invoke all of the callbacks bound to the event
   * with any arguments passed in.
   * @param  event  The name of the event.
   * @param args The arguments to pass to the functions listening.
   */
  emit(event, ...args) {
    if (this._events && this._events.hasOwnProperty(event)) {
      let eventList = this._events[event].slice(0);
      for (let i = 0, len = eventList.length; i < len; i++)
        eventList[i].apply(this, args);
    }
    return this;
  }
  /**
   * Add Emitter functions (on/off/emit) to the object
   */
  static mixin(constr) {
    ["on", "once", "off", "emit"].forEach((name) => {
      let property = Object.getOwnPropertyDescriptor(Emitter.prototype, name);
      Object.defineProperty(constr.prototype, name, property);
    });
  }
  /**
   * Clean up
   */
  dispose() {
    return super.dispose(), this._events = void 0, this;
  }
};

// node_modules/tone/build/esm/core/context/BaseContext.js
var BaseContext = class extends Emitter {
  constructor() {
    super(...arguments), this.isOffline = !1;
  }
  /*
   * This is a placeholder so that JSON.stringify does not throw an error
   * This matches what JSON.stringify(audioContext) returns on a native
   * audioContext instance.
   */
  toJSON() {
    return {};
  }
};

// node_modules/tone/build/esm/core/context/Context.js
var Context = class extends BaseContext {
  constructor() {
    super(), this.name = "Context", this._constants = /* @__PURE__ */ new Map(), this._timeouts = new Timeline(), this._timeoutIds = 0, this._initialized = !1, this.isOffline = !1, this._workletModules = /* @__PURE__ */ new Map();
    let options = optionsFromArguments(Context.getDefaults(), arguments, [
      "context"
    ]);
    options.context ? this._context = options.context : this._context = createAudioContext({
      latencyHint: options.latencyHint
    }), this._ticker = new Ticker(this.emit.bind(this, "tick"), options.clockSource, options.updateInterval), this.on("tick", this._timeoutLoop.bind(this)), this._context.onstatechange = () => {
      this.emit("statechange", this.state);
    }, this._setLatencyHint(options.latencyHint), this.lookAhead = options.lookAhead;
  }
  static getDefaults() {
    return {
      clockSource: "worker",
      latencyHint: "interactive",
      lookAhead: 0.1,
      updateInterval: 0.05
    };
  }
  /**
   * Finish setting up the context. **You usually do not need to do this manually.**
   */
  initialize() {
    return this._initialized || (initializeContext(this), this._initialized = !0), this;
  }
  //---------------------------
  // BASE AUDIO CONTEXT METHODS
  //---------------------------
  createAnalyser() {
    return this._context.createAnalyser();
  }
  createOscillator() {
    return this._context.createOscillator();
  }
  createBufferSource() {
    return this._context.createBufferSource();
  }
  createBiquadFilter() {
    return this._context.createBiquadFilter();
  }
  createBuffer(numberOfChannels, length, sampleRate) {
    return this._context.createBuffer(numberOfChannels, length, sampleRate);
  }
  createChannelMerger(numberOfInputs) {
    return this._context.createChannelMerger(numberOfInputs);
  }
  createChannelSplitter(numberOfOutputs) {
    return this._context.createChannelSplitter(numberOfOutputs);
  }
  createConstantSource() {
    return this._context.createConstantSource();
  }
  createConvolver() {
    return this._context.createConvolver();
  }
  createDelay(maxDelayTime) {
    return this._context.createDelay(maxDelayTime);
  }
  createDynamicsCompressor() {
    return this._context.createDynamicsCompressor();
  }
  createGain() {
    return this._context.createGain();
  }
  createIIRFilter(feedForward, feedback) {
    return this._context.createIIRFilter(feedForward, feedback);
  }
  createPanner() {
    return this._context.createPanner();
  }
  createPeriodicWave(real, imag, constraints) {
    return this._context.createPeriodicWave(real, imag, constraints);
  }
  createStereoPanner() {
    return this._context.createStereoPanner();
  }
  createWaveShaper() {
    return this._context.createWaveShaper();
  }
  createMediaStreamSource(stream) {
    return assert(isAudioContext(this._context), "Not available if OfflineAudioContext"), this._context.createMediaStreamSource(stream);
  }
  createMediaElementSource(element) {
    return assert(isAudioContext(this._context), "Not available if OfflineAudioContext"), this._context.createMediaElementSource(element);
  }
  createMediaStreamDestination() {
    return assert(isAudioContext(this._context), "Not available if OfflineAudioContext"), this._context.createMediaStreamDestination();
  }
  decodeAudioData(audioData) {
    return this._context.decodeAudioData(audioData);
  }
  /**
   * The current time in seconds of the AudioContext.
   */
  get currentTime() {
    return this._context.currentTime;
  }
  /**
   * The current time in seconds of the AudioContext.
   */
  get state() {
    return this._context.state;
  }
  /**
   * The current time in seconds of the AudioContext.
   */
  get sampleRate() {
    return this._context.sampleRate;
  }
  /**
   * The listener
   */
  get listener() {
    return this.initialize(), this._listener;
  }
  set listener(l) {
    assert(!this._initialized, "The listener cannot be set after initialization."), this._listener = l;
  }
  /**
   * There is only one Transport per Context. It is created on initialization.
   */
  get transport() {
    return this.initialize(), this._transport;
  }
  set transport(t) {
    assert(!this._initialized, "The transport cannot be set after initialization."), this._transport = t;
  }
  /**
   * This is the Draw object for the context which is useful for synchronizing the draw frame with the Tone.js clock.
   */
  get draw() {
    return this.initialize(), this._draw;
  }
  set draw(d) {
    assert(!this._initialized, "Draw cannot be set after initialization."), this._draw = d;
  }
  /**
   * A reference to the Context's destination node.
   */
  get destination() {
    return this.initialize(), this._destination;
  }
  set destination(d) {
    assert(!this._initialized, "The destination cannot be set after initialization."), this._destination = d;
  }
  /**
   * Create an audio worklet node from a name and options. The module
   * must first be loaded using [[addAudioWorkletModule]].
   */
  createAudioWorkletNode(name, options) {
    return createAudioWorkletNode(this.rawContext, name, options);
  }
  /**
   * Add an AudioWorkletProcessor module
   * @param url The url of the module
   * @param name The name of the module
   */
  addAudioWorkletModule(url, name) {
    return __awaiter(this, void 0, void 0, function* () {
      assert(isDefined(this.rawContext.audioWorklet), "AudioWorkletNode is only available in a secure context (https or localhost)"), this._workletModules.has(name) || this._workletModules.set(name, this.rawContext.audioWorklet.addModule(url)), yield this._workletModules.get(name);
    });
  }
  /**
   * Returns a promise which resolves when all of the worklets have been loaded on this context
   */
  workletsAreReady() {
    return __awaiter(this, void 0, void 0, function* () {
      let promises = [];
      this._workletModules.forEach((promise) => promises.push(promise)), yield Promise.all(promises);
    });
  }
  //---------------------------
  // TICKER
  //---------------------------
  /**
   * How often the interval callback is invoked.
   * This number corresponds to how responsive the scheduling
   * can be. context.updateInterval + context.lookAhead gives you the
   * total latency between scheduling an event and hearing it.
   */
  get updateInterval() {
    return this._ticker.updateInterval;
  }
  set updateInterval(interval) {
    this._ticker.updateInterval = interval;
  }
  /**
   * What the source of the clock is, either "worker" (default),
   * "timeout", or "offline" (none).
   */
  get clockSource() {
    return this._ticker.type;
  }
  set clockSource(type) {
    this._ticker.type = type;
  }
  /**
   * The type of playback, which affects tradeoffs between audio
   * output latency and responsiveness.
   * In addition to setting the value in seconds, the latencyHint also
   * accepts the strings "interactive" (prioritizes low latency),
   * "playback" (prioritizes sustained playback), "balanced" (balances
   * latency and performance).
   * @example
   * // prioritize sustained playback
   * const context = new Tone.Context({ latencyHint: "playback" });
   * // set this context as the global Context
   * Tone.setContext(context);
   * // the global context is gettable with Tone.getContext()
   * console.log(Tone.getContext().latencyHint);
   */
  get latencyHint() {
    return this._latencyHint;
  }
  /**
   * Update the lookAhead and updateInterval based on the latencyHint
   */
  _setLatencyHint(hint) {
    let lookAheadValue = 0;
    if (this._latencyHint = hint, isString(hint))
      switch (hint) {
        case "interactive":
          lookAheadValue = 0.1;
          break;
        case "playback":
          lookAheadValue = 0.5;
          break;
        case "balanced":
          lookAheadValue = 0.25;
          break;
      }
    this.lookAhead = lookAheadValue, this.updateInterval = lookAheadValue / 2;
  }
  /**
   * The unwrapped AudioContext or OfflineAudioContext
   */
  get rawContext() {
    return this._context;
  }
  /**
   * The current audio context time plus a short [[lookAhead]].
   */
  now() {
    return this._context.currentTime + this.lookAhead;
  }
  /**
   * The current audio context time without the [[lookAhead]].
   * In most cases it is better to use [[now]] instead of [[immediate]] since
   * with [[now]] the [[lookAhead]] is applied equally to _all_ components including internal components,
   * to making sure that everything is scheduled in sync. Mixing [[now]] and [[immediate]]
   * can cause some timing issues. If no lookAhead is desired, you can set the [[lookAhead]] to `0`.
   */
  immediate() {
    return this._context.currentTime;
  }
  /**
   * Starts the audio context from a suspended state. This is required
   * to initially start the AudioContext. See [[Tone.start]]
   */
  resume() {
    return isAudioContext(this._context) ? this._context.resume() : Promise.resolve();
  }
  /**
   * Close the context. Once closed, the context can no longer be used and
   * any AudioNodes created from the context will be silent.
   */
  close() {
    return __awaiter(this, void 0, void 0, function* () {
      isAudioContext(this._context) && (yield this._context.close()), this._initialized && closeContext(this);
    });
  }
  /**
   * **Internal** Generate a looped buffer at some constant value.
   */
  getConstant(val) {
    if (this._constants.has(val))
      return this._constants.get(val);
    {
      let buffer = this._context.createBuffer(1, 128, this._context.sampleRate), arr = buffer.getChannelData(0);
      for (let i = 0; i < arr.length; i++)
        arr[i] = val;
      let constant = this._context.createBufferSource();
      return constant.channelCount = 1, constant.channelCountMode = "explicit", constant.buffer = buffer, constant.loop = !0, constant.start(0), this._constants.set(val, constant), constant;
    }
  }
  /**
   * Clean up. Also closes the audio context.
   */
  dispose() {
    return super.dispose(), this._ticker.dispose(), this._timeouts.dispose(), Object.keys(this._constants).map((val) => this._constants[val].disconnect()), this;
  }
  //---------------------------
  // TIMEOUTS
  //---------------------------
  /**
   * The private loop which keeps track of the context scheduled timeouts
   * Is invoked from the clock source
   */
  _timeoutLoop() {
    let now2 = this.now(), firstEvent = this._timeouts.peek();
    for (; this._timeouts.length && firstEvent && firstEvent.time <= now2; )
      firstEvent.callback(), this._timeouts.shift(), firstEvent = this._timeouts.peek();
  }
  /**
   * A setTimeout which is guaranteed by the clock source.
   * Also runs in the offline context.
   * @param  fn       The callback to invoke
   * @param  timeout  The timeout in seconds
   * @returns ID to use when invoking Context.clearTimeout
   */
  setTimeout(fn, timeout) {
    this._timeoutIds++;
    let now2 = this.now();
    return this._timeouts.add({
      callback: fn,
      id: this._timeoutIds,
      time: now2 + timeout
    }), this._timeoutIds;
  }
  /**
   * Clears a previously scheduled timeout with Tone.context.setTimeout
   * @param  id  The ID returned from setTimeout
   */
  clearTimeout(id) {
    return this._timeouts.forEach((event) => {
      event.id === id && this._timeouts.remove(event);
    }), this;
  }
  /**
   * Clear the function scheduled by [[setInterval]]
   */
  clearInterval(id) {
    return this.clearTimeout(id);
  }
  /**
   * Adds a repeating event to the context's callback clock
   */
  setInterval(fn, interval) {
    let id = ++this._timeoutIds, intervalFn = () => {
      let now2 = this.now();
      this._timeouts.add({
        callback: () => {
          fn(), intervalFn();
        },
        id,
        time: now2 + interval
      });
    };
    return intervalFn(), id;
  }
};

// node_modules/tone/build/esm/core/context/DummyContext.js
import { __awaiter as __awaiter2 } from "tslib";
var DummyContext = class extends BaseContext {
  constructor() {
    super(...arguments), this.lookAhead = 0, this.latencyHint = 0, this.isOffline = !1;
  }
  //---------------------------
  // BASE AUDIO CONTEXT METHODS
  //---------------------------
  createAnalyser() {
    return {};
  }
  createOscillator() {
    return {};
  }
  createBufferSource() {
    return {};
  }
  createBiquadFilter() {
    return {};
  }
  createBuffer(_numberOfChannels, _length, _sampleRate) {
    return {};
  }
  createChannelMerger(_numberOfInputs) {
    return {};
  }
  createChannelSplitter(_numberOfOutputs) {
    return {};
  }
  createConstantSource() {
    return {};
  }
  createConvolver() {
    return {};
  }
  createDelay(_maxDelayTime) {
    return {};
  }
  createDynamicsCompressor() {
    return {};
  }
  createGain() {
    return {};
  }
  createIIRFilter(_feedForward, _feedback) {
    return {};
  }
  createPanner() {
    return {};
  }
  createPeriodicWave(_real, _imag, _constraints) {
    return {};
  }
  createStereoPanner() {
    return {};
  }
  createWaveShaper() {
    return {};
  }
  createMediaStreamSource(_stream) {
    return {};
  }
  createMediaElementSource(_element) {
    return {};
  }
  createMediaStreamDestination() {
    return {};
  }
  decodeAudioData(_audioData) {
    return Promise.resolve({});
  }
  //---------------------------
  // TONE AUDIO CONTEXT METHODS
  //---------------------------
  createAudioWorkletNode(_name, _options) {
    return {};
  }
  get rawContext() {
    return {};
  }
  addAudioWorkletModule(_url, _name) {
    return __awaiter2(this, void 0, void 0, function* () {
      return Promise.resolve();
    });
  }
  resume() {
    return Promise.resolve();
  }
  setTimeout(_fn, _timeout) {
    return 0;
  }
  clearTimeout(_id) {
    return this;
  }
  setInterval(_fn, _interval) {
    return 0;
  }
  clearInterval(_id) {
    return this;
  }
  getConstant(_val) {
    return {};
  }
  get currentTime() {
    return 0;
  }
  get state() {
    return {};
  }
  get sampleRate() {
    return 0;
  }
  get listener() {
    return {};
  }
  get transport() {
    return {};
  }
  get draw() {
    return {};
  }
  set draw(_d) {
  }
  get destination() {
    return {};
  }
  set destination(_d) {
  }
  now() {
    return 0;
  }
  immediate() {
    return 0;
  }
};

// node_modules/tone/build/esm/core/context/OfflineContext.js
import { __awaiter as __awaiter4 } from "tslib";

// node_modules/tone/build/esm/core/context/ToneAudioBuffer.js
import { __awaiter as __awaiter3 } from "tslib";

// node_modules/tone/build/esm/core/util/Interface.js
function readOnly(target, property) {
  isArray(property) ? property.forEach((str) => readOnly(target, str)) : Object.defineProperty(target, property, {
    enumerable: !0,
    writable: !1
  });
}
function writable(target, property) {
  isArray(property) ? property.forEach((str) => writable(target, str)) : Object.defineProperty(target, property, {
    writable: !0
  });
}
var noOp = () => {
};

// node_modules/tone/build/esm/core/context/ToneAudioBuffer.js
var ToneAudioBuffer = class extends Tone {
  constructor() {
    super(), this.name = "ToneAudioBuffer", this.onload = noOp;
    let options = optionsFromArguments(ToneAudioBuffer.getDefaults(), arguments, ["url", "onload", "onerror"]);
    this.reverse = options.reverse, this.onload = options.onload, options.url && isAudioBuffer(options.url) || options.url instanceof ToneAudioBuffer ? this.set(options.url) : isString(options.url) && this.load(options.url).catch(options.onerror);
  }
  static getDefaults() {
    return {
      onerror: noOp,
      onload: noOp,
      reverse: !1
    };
  }
  /**
   * The sample rate of the AudioBuffer
   */
  get sampleRate() {
    return this._buffer ? this._buffer.sampleRate : getContext().sampleRate;
  }
  /**
   * Pass in an AudioBuffer or ToneAudioBuffer to set the value of this buffer.
   */
  set(buffer) {
    return buffer instanceof ToneAudioBuffer ? buffer.loaded ? this._buffer = buffer.get() : buffer.onload = () => {
      this.set(buffer), this.onload(this);
    } : this._buffer = buffer, this._reversed && this._reverse(), this;
  }
  /**
   * The audio buffer stored in the object.
   */
  get() {
    return this._buffer;
  }
  /**
   * Makes an fetch request for the selected url then decodes the file as an audio buffer.
   * Invokes the callback once the audio buffer loads.
   * @param url The url of the buffer to load. filetype support depends on the browser.
   * @returns A Promise which resolves with this ToneAudioBuffer
   */
  load(url) {
    return __awaiter3(this, void 0, void 0, function* () {
      let doneLoading = ToneAudioBuffer.load(url).then((audioBuffer) => {
        this.set(audioBuffer), this.onload(this);
      });
      ToneAudioBuffer.downloads.push(doneLoading);
      try {
        yield doneLoading;
      } finally {
        let index = ToneAudioBuffer.downloads.indexOf(doneLoading);
        ToneAudioBuffer.downloads.splice(index, 1);
      }
      return this;
    });
  }
  /**
   * clean up
   */
  dispose() {
    return super.dispose(), this._buffer = void 0, this;
  }
  /**
   * Set the audio buffer from the array.
   * To create a multichannel AudioBuffer, pass in a multidimensional array.
   * @param array The array to fill the audio buffer
   */
  fromArray(array) {
    let isMultidimensional = isArray(array) && array[0].length > 0, channels = isMultidimensional ? array.length : 1, len = isMultidimensional ? array[0].length : array.length, context2 = getContext(), buffer = context2.createBuffer(channels, len, context2.sampleRate), multiChannelArray = !isMultidimensional && channels === 1 ? [array] : array;
    for (let c = 0; c < channels; c++)
      buffer.copyToChannel(multiChannelArray[c], c);
    return this._buffer = buffer, this;
  }
  /**
   * Sums multiple channels into 1 channel
   * @param chanNum Optionally only copy a single channel from the array.
   */
  toMono(chanNum) {
    if (isNumber(chanNum))
      this.fromArray(this.toArray(chanNum));
    else {
      let outputArray = new Float32Array(this.length), numChannels = this.numberOfChannels;
      for (let channel = 0; channel < numChannels; channel++) {
        let channelArray = this.toArray(channel);
        for (let i = 0; i < channelArray.length; i++)
          outputArray[i] += channelArray[i];
      }
      outputArray = outputArray.map((sample) => sample / numChannels), this.fromArray(outputArray);
    }
    return this;
  }
  /**
   * Get the buffer as an array. Single channel buffers will return a 1-dimensional
   * Float32Array, and multichannel buffers will return multidimensional arrays.
   * @param channel Optionally only copy a single channel from the array.
   */
  toArray(channel) {
    if (isNumber(channel))
      return this.getChannelData(channel);
    if (this.numberOfChannels === 1)
      return this.toArray(0);
    {
      let ret = [];
      for (let c = 0; c < this.numberOfChannels; c++)
        ret[c] = this.getChannelData(c);
      return ret;
    }
  }
  /**
   * Returns the Float32Array representing the PCM audio data for the specific channel.
   * @param  channel  The channel number to return
   * @return The audio as a TypedArray
   */
  getChannelData(channel) {
    return this._buffer ? this._buffer.getChannelData(channel) : new Float32Array(0);
  }
  /**
   * Cut a subsection of the array and return a buffer of the
   * subsection. Does not modify the original buffer
   * @param start The time to start the slice
   * @param end The end time to slice. If none is given will default to the end of the buffer
   */
  slice(start2, end = this.duration) {
    let startSamples = Math.floor(start2 * this.sampleRate), endSamples = Math.floor(end * this.sampleRate);
    assert(startSamples < endSamples, "The start time must be less than the end time");
    let length = endSamples - startSamples, retBuffer = getContext().createBuffer(this.numberOfChannels, length, this.sampleRate);
    for (let channel = 0; channel < this.numberOfChannels; channel++)
      retBuffer.copyToChannel(this.getChannelData(channel).subarray(startSamples, endSamples), channel);
    return new ToneAudioBuffer(retBuffer);
  }
  /**
   * Reverse the buffer.
   */
  _reverse() {
    if (this.loaded)
      for (let i = 0; i < this.numberOfChannels; i++)
        this.getChannelData(i).reverse();
    return this;
  }
  /**
   * If the buffer is loaded or not
   */
  get loaded() {
    return this.length > 0;
  }
  /**
   * The duration of the buffer in seconds.
   */
  get duration() {
    return this._buffer ? this._buffer.duration : 0;
  }
  /**
   * The length of the buffer in samples
   */
  get length() {
    return this._buffer ? this._buffer.length : 0;
  }
  /**
   * The number of discrete audio channels. Returns 0 if no buffer is loaded.
   */
  get numberOfChannels() {
    return this._buffer ? this._buffer.numberOfChannels : 0;
  }
  /**
   * Reverse the buffer.
   */
  get reverse() {
    return this._reversed;
  }
  set reverse(rev) {
    this._reversed !== rev && (this._reversed = rev, this._reverse());
  }
  /**
   * Create a ToneAudioBuffer from the array. To create a multichannel AudioBuffer,
   * pass in a multidimensional array.
   * @param array The array to fill the audio buffer
   * @return A ToneAudioBuffer created from the array
   */
  static fromArray(array) {
    return new ToneAudioBuffer().fromArray(array);
  }
  /**
   * Creates a ToneAudioBuffer from a URL, returns a promise which resolves to a ToneAudioBuffer
   * @param  url The url to load.
   * @return A promise which resolves to a ToneAudioBuffer
   */
  static fromUrl(url) {
    return __awaiter3(this, void 0, void 0, function* () {
      return yield new ToneAudioBuffer().load(url);
    });
  }
  /**
   * Loads a url using fetch and returns the AudioBuffer.
   */
  static load(url) {
    return __awaiter3(this, void 0, void 0, function* () {
      let matches = url.match(/\[([^\]\[]+\|.+)\]$/);
      if (matches) {
        let extensions2 = matches[1].split("|"), extension = extensions2[0];
        for (let ext of extensions2)
          if (ToneAudioBuffer.supportsType(ext)) {
            extension = ext;
            break;
          }
        url = url.replace(matches[0], extension);
      }
      let baseUrl = ToneAudioBuffer.baseUrl === "" || ToneAudioBuffer.baseUrl.endsWith("/") ? ToneAudioBuffer.baseUrl : ToneAudioBuffer.baseUrl + "/", response = yield fetch(baseUrl + url);
      if (!response.ok)
        throw new Error(`could not load url: ${url}`);
      let arrayBuffer = yield response.arrayBuffer();
      return yield getContext().decodeAudioData(arrayBuffer);
    });
  }
  /**
   * Checks a url's extension to see if the current browser can play that file type.
   * @param url The url/extension to test
   * @return If the file extension can be played
   * @static
   * @example
   * Tone.ToneAudioBuffer.supportsType("wav"); // returns true
   * Tone.ToneAudioBuffer.supportsType("path/to/file.wav"); // returns true
   */
  static supportsType(url) {
    let extensions2 = url.split("."), extension = extensions2[extensions2.length - 1];
    return document.createElement("audio").canPlayType("audio/" + extension) !== "";
  }
  /**
   * Returns a Promise which resolves when all of the buffers have loaded
   */
  static loaded() {
    return __awaiter3(this, void 0, void 0, function* () {
      for (yield Promise.resolve(); ToneAudioBuffer.downloads.length; )
        yield ToneAudioBuffer.downloads[0];
    });
  }
};
ToneAudioBuffer.baseUrl = "";
ToneAudioBuffer.downloads = [];

// node_modules/tone/build/esm/core/context/OfflineContext.js
var OfflineContext = class extends Context {
  constructor() {
    super({
      clockSource: "offline",
      context: isOfflineAudioContext(arguments[0]) ? arguments[0] : createOfflineAudioContext(arguments[0], arguments[1] * arguments[2], arguments[2]),
      lookAhead: 0,
      updateInterval: isOfflineAudioContext(arguments[0]) ? 128 / arguments[0].sampleRate : 128 / arguments[2]
    }), this.name = "OfflineContext", this._currentTime = 0, this.isOffline = !0, this._duration = isOfflineAudioContext(arguments[0]) ? arguments[0].length / arguments[0].sampleRate : arguments[1];
  }
  /**
   * Override the now method to point to the internal clock time
   */
  now() {
    return this._currentTime;
  }
  /**
   * Same as this.now()
   */
  get currentTime() {
    return this._currentTime;
  }
  /**
   * Render just the clock portion of the audio context.
   */
  _renderClock(asynchronous) {
    return __awaiter4(this, void 0, void 0, function* () {
      let index = 0;
      for (; this._duration - this._currentTime >= 0; ) {
        this.emit("tick"), this._currentTime += 128 / this.sampleRate, index++;
        let yieldEvery = Math.floor(this.sampleRate / 128);
        asynchronous && index % yieldEvery === 0 && (yield new Promise((done) => setTimeout(done, 1)));
      }
    });
  }
  /**
   * Render the output of the OfflineContext
   * @param asynchronous If the clock should be rendered asynchronously, which will not block the main thread, but be slightly slower.
   */
  render(asynchronous = !0) {
    return __awaiter4(this, void 0, void 0, function* () {
      yield this.workletsAreReady(), yield this._renderClock(asynchronous);
      let buffer = yield this._context.startRendering();
      return new ToneAudioBuffer(buffer);
    });
  }
  /**
   * Close the context
   */
  close() {
    return Promise.resolve();
  }
};

// node_modules/tone/build/esm/core/Global.js
var dummyContext = new DummyContext(), globalContext = dummyContext;
function getContext() {
  return globalContext === dummyContext && hasAudioContext && setContext(new Context()), globalContext;
}
function setContext(context2) {
  isAudioContext(context2) ? globalContext = new Context(context2) : isOfflineAudioContext(context2) ? globalContext = new OfflineContext(context2) : globalContext = context2;
}
if (theWindow && !theWindow.TONE_SILENCE_LOGGING) {
  let prefix = "v";
  version === "dev" && (prefix = "");
  let printString = ` * Tone.js ${prefix}${version} * `;
  console.log(`%c${printString}`, "background: #000; color: #fff");
}

// node_modules/tone/build/esm/core/type/Conversions.js
function dbToGain(db2) {
  return Math.pow(10, db2 / 20);
}
function gainToDb(gain) {
  return 20 * (Math.log(gain) / Math.LN10);
}
function intervalToFrequencyRatio(interval) {
  return Math.pow(2, interval / 12);
}
var A4 = 440;
function getA4() {
  return A4;
}
function setA4(freq) {
  A4 = freq;
}
function ftom(frequency) {
  return Math.round(ftomf(frequency));
}
function ftomf(frequency) {
  return 69 + 12 * Math.log2(frequency / A4);
}
function mtof(midi) {
  return A4 * Math.pow(2, (midi - 69) / 12);
}

// node_modules/tone/build/esm/core/type/TimeBase.js
var TimeBaseClass = class extends Tone {
  /**
   * @param context The context associated with the time value. Used to compute
   * Transport and context-relative timing.
   * @param  value  The time value as a number, string or object
   * @param  units  Unit values
   */
  constructor(context2, value, units) {
    super(), this.defaultUnits = "s", this._val = value, this._units = units, this.context = context2, this._expressions = this._getExpressions();
  }
  /**
   * All of the time encoding expressions
   */
  _getExpressions() {
    return {
      hz: {
        method: (value) => this._frequencyToUnits(parseFloat(value)),
        regexp: /^(\d+(?:\.\d+)?)hz$/i
      },
      i: {
        method: (value) => this._ticksToUnits(parseInt(value, 10)),
        regexp: /^(\d+)i$/i
      },
      m: {
        method: (value) => this._beatsToUnits(parseInt(value, 10) * this._getTimeSignature()),
        regexp: /^(\d+)m$/i
      },
      n: {
        method: (value, dot) => {
          let numericValue = parseInt(value, 10), scalar = dot === "." ? 1.5 : 1;
          return numericValue === 1 ? this._beatsToUnits(this._getTimeSignature()) * scalar : this._beatsToUnits(4 / numericValue) * scalar;
        },
        regexp: /^(\d+)n(\.?)$/i
      },
      number: {
        method: (value) => this._expressions[this.defaultUnits].method.call(this, value),
        regexp: /^(\d+(?:\.\d+)?)$/
      },
      s: {
        method: (value) => this._secondsToUnits(parseFloat(value)),
        regexp: /^(\d+(?:\.\d+)?)s$/
      },
      samples: {
        method: (value) => parseInt(value, 10) / this.context.sampleRate,
        regexp: /^(\d+)samples$/
      },
      t: {
        method: (value) => {
          let numericValue = parseInt(value, 10);
          return this._beatsToUnits(8 / (Math.floor(numericValue) * 3));
        },
        regexp: /^(\d+)t$/i
      },
      tr: {
        method: (m, q, s) => {
          let total = 0;
          return m && m !== "0" && (total += this._beatsToUnits(this._getTimeSignature() * parseFloat(m))), q && q !== "0" && (total += this._beatsToUnits(parseFloat(q))), s && s !== "0" && (total += this._beatsToUnits(parseFloat(s) / 4)), total;
        },
        regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/
      }
    };
  }
  //-------------------------------------
  // 	VALUE OF
  //-------------------------------------
  /**
   * Evaluate the time value. Returns the time in seconds.
   */
  valueOf() {
    if (this._val instanceof TimeBaseClass && this.fromType(this._val), isUndef(this._val))
      return this._noArg();
    if (isString(this._val) && isUndef(this._units)) {
      for (let units in this._expressions)
        if (this._expressions[units].regexp.test(this._val.trim())) {
          this._units = units;
          break;
        }
    } else if (isObject(this._val)) {
      let total = 0;
      for (let typeName in this._val)
        if (isDefined(this._val[typeName])) {
          let quantity = this._val[typeName], time = new this.constructor(this.context, typeName).valueOf() * quantity;
          total += time;
        }
      return total;
    }
    if (isDefined(this._units)) {
      let expr = this._expressions[this._units], matching = this._val.toString().trim().match(expr.regexp);
      return matching ? expr.method.apply(this, matching.slice(1)) : expr.method.call(this, this._val);
    } else
      return isString(this._val) ? parseFloat(this._val) : this._val;
  }
  //-------------------------------------
  // 	UNIT CONVERSIONS
  //-------------------------------------
  /**
   * Returns the value of a frequency in the current units
   */
  _frequencyToUnits(freq) {
    return 1 / freq;
  }
  /**
   * Return the value of the beats in the current units
   */
  _beatsToUnits(beats) {
    return 60 / this._getBpm() * beats;
  }
  /**
   * Returns the value of a second in the current units
   */
  _secondsToUnits(seconds) {
    return seconds;
  }
  /**
   * Returns the value of a tick in the current time units
   */
  _ticksToUnits(ticks) {
    return ticks * this._beatsToUnits(1) / this._getPPQ();
  }
  /**
   * With no arguments, return 'now'
   */
  _noArg() {
    return this._now();
  }
  //-------------------------------------
  // 	TEMPO CONVERSIONS
  //-------------------------------------
  /**
   * Return the bpm
   */
  _getBpm() {
    return this.context.transport.bpm.value;
  }
  /**
   * Return the timeSignature
   */
  _getTimeSignature() {
    return this.context.transport.timeSignature;
  }
  /**
   * Return the PPQ or 192 if Transport is not available
   */
  _getPPQ() {
    return this.context.transport.PPQ;
  }
  //-------------------------------------
  // 	CONVERSION INTERFACE
  //-------------------------------------
  /**
   * Coerce a time type into this units type.
   * @param type Any time type units
   */
  fromType(type) {
    switch (this._units = void 0, this.defaultUnits) {
      case "s":
        this._val = type.toSeconds();
        break;
      case "i":
        this._val = type.toTicks();
        break;
      case "hz":
        this._val = type.toFrequency();
        break;
      case "midi":
        this._val = type.toMidi();
        break;
    }
    return this;
  }
  /**
   * Return the value in hertz
   */
  toFrequency() {
    return 1 / this.toSeconds();
  }
  /**
   * Return the time in samples
   */
  toSamples() {
    return this.toSeconds() * this.context.sampleRate;
  }
  /**
   * Return the time in milliseconds.
   */
  toMilliseconds() {
    return this.toSeconds() * 1e3;
  }
};

// node_modules/tone/build/esm/core/type/Time.js
var TimeClass = class extends TimeBaseClass {
  constructor() {
    super(...arguments), this.name = "TimeClass";
  }
  _getExpressions() {
    return Object.assign(super._getExpressions(), {
      now: {
        method: (capture) => this._now() + new this.constructor(this.context, capture).valueOf(),
        regexp: /^\+(.+)/
      },
      quantize: {
        method: (capture) => {
          let quantTo = new TimeClass(this.context, capture).valueOf();
          return this._secondsToUnits(this.context.transport.nextSubdivision(quantTo));
        },
        regexp: /^@(.+)/
      }
    });
  }
  /**
   * Quantize the time by the given subdivision. Optionally add a
   * percentage which will move the time value towards the ideal
   * quantized value by that percentage.
   * @param  subdiv    The subdivision to quantize to
   * @param  percent  Move the time value towards the quantized value by a percentage.
   * @example
   * Tone.Time(21).quantize(2); // returns 22
   * Tone.Time(0.6).quantize("4n", 0.5); // returns 0.55
   */
  quantize(subdiv, percent = 1) {
    let subdivision = new this.constructor(this.context, subdiv).valueOf(), value = this.valueOf(), diff = Math.round(value / subdivision) * subdivision - value;
    return value + diff * percent;
  }
  //-------------------------------------
  // CONVERSIONS
  //-------------------------------------
  /**
   * Convert a Time to Notation. The notation values are will be the
   * closest representation between 1m to 128th note.
   * @return {Notation}
   * @example
   * // if the Transport is at 120bpm:
   * Tone.Time(2).toNotation(); // returns "1m"
   */
  toNotation() {
    let time = this.toSeconds(), testNotations = ["1m"];
    for (let power = 1; power < 9; power++) {
      let subdiv = Math.pow(2, power);
      testNotations.push(subdiv + "n."), testNotations.push(subdiv + "n"), testNotations.push(subdiv + "t");
    }
    testNotations.push("0");
    let closest = testNotations[0], closestSeconds = new TimeClass(this.context, testNotations[0]).toSeconds();
    return testNotations.forEach((notation) => {
      let notationSeconds = new TimeClass(this.context, notation).toSeconds();
      Math.abs(notationSeconds - time) < Math.abs(closestSeconds - time) && (closest = notation, closestSeconds = notationSeconds);
    }), closest;
  }
  /**
   * Return the time encoded as Bars:Beats:Sixteenths.
   */
  toBarsBeatsSixteenths() {
    let quarterTime = this._beatsToUnits(1), quarters = this.valueOf() / quarterTime;
    quarters = parseFloat(quarters.toFixed(4));
    let measures = Math.floor(quarters / this._getTimeSignature()), sixteenths = quarters % 1 * 4;
    quarters = Math.floor(quarters) % this._getTimeSignature();
    let sixteenthString = sixteenths.toString();
    return sixteenthString.length > 3 && (sixteenths = parseFloat(parseFloat(sixteenthString).toFixed(3))), [measures, quarters, sixteenths].join(":");
  }
  /**
   * Return the time in ticks.
   */
  toTicks() {
    let quarterTime = this._beatsToUnits(1), quarters = this.valueOf() / quarterTime;
    return Math.round(quarters * this._getPPQ());
  }
  /**
   * Return the time in seconds.
   */
  toSeconds() {
    return this.valueOf();
  }
  /**
   * Return the value as a midi note.
   */
  toMidi() {
    return ftom(this.toFrequency());
  }
  _now() {
    return this.context.now();
  }
};

// node_modules/tone/build/esm/core/type/Frequency.js
var FrequencyClass = class extends TimeClass {
  constructor() {
    super(...arguments), this.name = "Frequency", this.defaultUnits = "hz";
  }
  /**
   * The [concert tuning pitch](https://en.wikipedia.org/wiki/Concert_pitch) which is used
   * to generate all the other pitch values from notes. A4's values in Hertz.
   */
  static get A4() {
    return getA4();
  }
  static set A4(freq) {
    setA4(freq);
  }
  //-------------------------------------
  // 	AUGMENT BASE EXPRESSIONS
  //-------------------------------------
  _getExpressions() {
    return Object.assign({}, super._getExpressions(), {
      midi: {
        regexp: /^(\d+(?:\.\d+)?midi)/,
        method(value) {
          return this.defaultUnits === "midi" ? value : FrequencyClass.mtof(value);
        }
      },
      note: {
        regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
        method(pitch, octave) {
          let noteNumber = noteToScaleIndex[pitch.toLowerCase()] + (parseInt(octave, 10) + 1) * 12;
          return this.defaultUnits === "midi" ? noteNumber : FrequencyClass.mtof(noteNumber);
        }
      },
      tr: {
        regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
        method(m, q, s) {
          let total = 1;
          return m && m !== "0" && (total *= this._beatsToUnits(this._getTimeSignature() * parseFloat(m))), q && q !== "0" && (total *= this._beatsToUnits(parseFloat(q))), s && s !== "0" && (total *= this._beatsToUnits(parseFloat(s) / 4)), total;
        }
      }
    });
  }
  //-------------------------------------
  // 	EXPRESSIONS
  //-------------------------------------
  /**
   * Transposes the frequency by the given number of semitones.
   * @return  A new transposed frequency
   * @example
   * Tone.Frequency("A4").transpose(3); // "C5"
   */
  transpose(interval) {
    return new FrequencyClass(this.context, this.valueOf() * intervalToFrequencyRatio(interval));
  }
  /**
   * Takes an array of semitone intervals and returns
   * an array of frequencies transposed by those intervals.
   * @return  Returns an array of Frequencies
   * @example
   * Tone.Frequency("A4").harmonize([0, 3, 7]); // ["A4", "C5", "E5"]
   */
  harmonize(intervals) {
    return intervals.map((interval) => this.transpose(interval));
  }
  //-------------------------------------
  // 	UNIT CONVERSIONS
  //-------------------------------------
  /**
   * Return the value of the frequency as a MIDI note
   * @example
   * Tone.Frequency("C4").toMidi(); // 60
   */
  toMidi() {
    return ftom(this.valueOf());
  }
  /**
   * Return the value of the frequency in Scientific Pitch Notation
   * @example
   * Tone.Frequency(69, "midi").toNote(); // "A4"
   */
  toNote() {
    let freq = this.toFrequency(), log2 = Math.log2(freq / FrequencyClass.A4), noteNumber = Math.round(12 * log2) + 57, octave = Math.floor(noteNumber / 12);
    return octave < 0 && (noteNumber += -12 * octave), scaleIndexToNote[noteNumber % 12] + octave.toString();
  }
  /**
   * Return the duration of one cycle in seconds.
   */
  toSeconds() {
    return 1 / super.toSeconds();
  }
  /**
   * Return the duration of one cycle in ticks
   */
  toTicks() {
    let quarterTime = this._beatsToUnits(1), quarters = this.valueOf() / quarterTime;
    return Math.floor(quarters * this._getPPQ());
  }
  //-------------------------------------
  // 	UNIT CONVERSIONS HELPERS
  //-------------------------------------
  /**
   * With no arguments, return 0
   */
  _noArg() {
    return 0;
  }
  /**
   * Returns the value of a frequency in the current units
   */
  _frequencyToUnits(freq) {
    return freq;
  }
  /**
   * Returns the value of a tick in the current time units
   */
  _ticksToUnits(ticks) {
    return 1 / (ticks * 60 / (this._getBpm() * this._getPPQ()));
  }
  /**
   * Return the value of the beats in the current units
   */
  _beatsToUnits(beats) {
    return 1 / super._beatsToUnits(beats);
  }
  /**
   * Returns the value of a second in the current units
   */
  _secondsToUnits(seconds) {
    return 1 / seconds;
  }
  /**
   * Convert a MIDI note to frequency value.
   * @param  midi The midi number to convert.
   * @return The corresponding frequency value
   */
  static mtof(midi) {
    return mtof(midi);
  }
  /**
   * Convert a frequency value to a MIDI note.
   * @param frequency The value to frequency value to convert.
   */
  static ftom(frequency) {
    return ftom(frequency);
  }
}, noteToScaleIndex = {
  cbb: -2,
  cb: -1,
  c: 0,
  "c#": 1,
  cx: 2,
  dbb: 0,
  db: 1,
  d: 2,
  "d#": 3,
  dx: 4,
  ebb: 2,
  eb: 3,
  e: 4,
  "e#": 5,
  ex: 6,
  fbb: 3,
  fb: 4,
  f: 5,
  "f#": 6,
  fx: 7,
  gbb: 5,
  gb: 6,
  g: 7,
  "g#": 8,
  gx: 9,
  abb: 7,
  ab: 8,
  a: 9,
  "a#": 10,
  ax: 11,
  bbb: 9,
  bb: 10,
  b: 11,
  "b#": 12,
  bx: 13
}, scaleIndexToNote = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// node_modules/tone/build/esm/core/type/TransportTime.js
var TransportTimeClass = class extends TimeClass {
  constructor() {
    super(...arguments), this.name = "TransportTime";
  }
  /**
   * Return the current time in whichever context is relevant
   */
  _now() {
    return this.context.transport.seconds;
  }
};

// node_modules/tone/build/esm/core/context/ToneWithContext.js
var ToneWithContext = class extends Tone {
  constructor() {
    super();
    let options = optionsFromArguments(ToneWithContext.getDefaults(), arguments, ["context"]);
    this.defaultContext ? this.context = this.defaultContext : this.context = options.context;
  }
  static getDefaults() {
    return {
      context: getContext()
    };
  }
  /**
   * Return the current time of the Context clock plus the lookAhead.
   * @example
   * setInterval(() => {
   * 	console.log(Tone.now());
   * }, 100);
   */
  now() {
    return this.context.currentTime + this.context.lookAhead;
  }
  /**
   * Return the current time of the Context clock without any lookAhead.
   * @example
   * setInterval(() => {
   * 	console.log(Tone.immediate());
   * }, 100);
   */
  immediate() {
    return this.context.currentTime;
  }
  /**
   * The duration in seconds of one sample.
   * @example
   * console.log(Tone.Transport.sampleTime);
   */
  get sampleTime() {
    return 1 / this.context.sampleRate;
  }
  /**
   * The number of seconds of 1 processing block (128 samples)
   * @example
   * console.log(Tone.Destination.blockTime);
   */
  get blockTime() {
    return 128 / this.context.sampleRate;
  }
  /**
   * Convert the incoming time to seconds.
   * This is calculated against the current [[Tone.Transport]] bpm
   * @example
   * const gain = new Tone.Gain();
   * setInterval(() => console.log(gain.toSeconds("4n")), 100);
   * // ramp the tempo to 60 bpm over 30 seconds
   * Tone.getTransport().bpm.rampTo(60, 30);
   */
  toSeconds(time) {
    return new TimeClass(this.context, time).toSeconds();
  }
  /**
   * Convert the input to a frequency number
   * @example
   * const gain = new Tone.Gain();
   * console.log(gain.toFrequency("4n"));
   */
  toFrequency(freq) {
    return new FrequencyClass(this.context, freq).toFrequency();
  }
  /**
   * Convert the input time into ticks
   * @example
   * const gain = new Tone.Gain();
   * console.log(gain.toTicks("4n"));
   */
  toTicks(time) {
    return new TransportTimeClass(this.context, time).toTicks();
  }
  //-------------------------------------
  // 	GET/SET
  //-------------------------------------
  /**
   * Get a subset of the properties which are in the partial props
   */
  _getPartialProperties(props) {
    let options = this.get();
    return Object.keys(options).forEach((name) => {
      isUndef(props[name]) && delete options[name];
    }), options;
  }
  /**
   * Get the object's attributes.
   * @example
   * const osc = new Tone.Oscillator();
   * console.log(osc.get());
   */
  get() {
    let defaults = getDefaultsFromInstance(this);
    return Object.keys(defaults).forEach((attribute) => {
      if (Reflect.has(this, attribute)) {
        let member = this[attribute];
        isDefined(member) && isDefined(member.value) && isDefined(member.setValueAtTime) ? defaults[attribute] = member.value : member instanceof ToneWithContext ? defaults[attribute] = member._getPartialProperties(defaults[attribute]) : isArray(member) || isNumber(member) || isString(member) || isBoolean(member) ? defaults[attribute] = member : delete defaults[attribute];
      }
    }), defaults;
  }
  /**
   * Set multiple properties at once with an object.
   * @example
   * const filter = new Tone.Filter().toDestination();
   * // set values using an object
   * filter.set({
   * 	frequency: "C6",
   * 	type: "highpass"
   * });
   * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/Analogsynth_octaves_highmid.mp3").connect(filter);
   * player.autostart = true;
   */
  set(props) {
    return Object.keys(props).forEach((attribute) => {
      Reflect.has(this, attribute) && isDefined(this[attribute]) && (this[attribute] && isDefined(this[attribute].value) && isDefined(this[attribute].setValueAtTime) ? this[attribute].value !== props[attribute] && (this[attribute].value = props[attribute]) : this[attribute] instanceof ToneWithContext ? this[attribute].set(props[attribute]) : this[attribute] = props[attribute]);
    }), this;
  }
};

// node_modules/tone/build/esm/core/util/StateTimeline.js
var StateTimeline = class extends Timeline {
  constructor(initial = "stopped") {
    super(), this.name = "StateTimeline", this._initial = initial, this.setStateAtTime(this._initial, 0);
  }
  /**
   * Returns the scheduled state scheduled before or at
   * the given time.
   * @param  time  The time to query.
   * @return  The name of the state input in setStateAtTime.
   */
  getValueAtTime(time) {
    let event = this.get(time);
    return event !== null ? event.state : this._initial;
  }
  /**
   * Add a state to the timeline.
   * @param  state The name of the state to set.
   * @param  time  The time to query.
   * @param options Any additional options that are needed in the timeline.
   */
  setStateAtTime(state, time, options) {
    return assertRange(time, 0), this.add(Object.assign({}, options, {
      state,
      time
    })), this;
  }
  /**
   * Return the event before the time with the given state
   * @param  state The state to look for
   * @param  time  When to check before
   * @return  The event with the given state before the time
   */
  getLastState(state, time) {
    let index = this._search(time);
    for (let i = index; i >= 0; i--) {
      let event = this._timeline[i];
      if (event.state === state)
        return event;
    }
  }
  /**
   * Return the event after the time with the given state
   * @param  state The state to look for
   * @param  time  When to check from
   * @return  The event with the given state after the time
   */
  getNextState(state, time) {
    let index = this._search(time);
    if (index !== -1)
      for (let i = index; i < this._timeline.length; i++) {
        let event = this._timeline[i];
        if (event.state === state)
          return event;
      }
  }
};

// node_modules/tone/build/esm/core/context/Param.js
var Param = class extends ToneWithContext {
  constructor() {
    super(optionsFromArguments(Param.getDefaults(), arguments, ["param", "units", "convert"])), this.name = "Param", this.overridden = !1, this._minOutput = 1e-7;
    let options = optionsFromArguments(Param.getDefaults(), arguments, ["param", "units", "convert"]);
    for (assert(isDefined(options.param) && (isAudioParam(options.param) || options.param instanceof Param), "param must be an AudioParam"); !isAudioParam(options.param); )
      options.param = options.param._param;
    this._swappable = isDefined(options.swappable) ? options.swappable : !1, this._swappable ? (this.input = this.context.createGain(), this._param = options.param, this.input.connect(this._param)) : this._param = this.input = options.param, this._events = new Timeline(1e3), this._initialValue = this._param.defaultValue, this.units = options.units, this.convert = options.convert, this._minValue = options.minValue, this._maxValue = options.maxValue, isDefined(options.value) && options.value !== this._toType(this._initialValue) && this.setValueAtTime(options.value, 0);
  }
  static getDefaults() {
    return Object.assign(ToneWithContext.getDefaults(), {
      convert: !0,
      units: "number"
    });
  }
  get value() {
    let now2 = this.now();
    return this.getValueAtTime(now2);
  }
  set value(value) {
    this.cancelScheduledValues(this.now()), this.setValueAtTime(value, this.now());
  }
  get minValue() {
    return isDefined(this._minValue) ? this._minValue : this.units === "time" || this.units === "frequency" || this.units === "normalRange" || this.units === "positive" || this.units === "transportTime" || this.units === "ticks" || this.units === "bpm" || this.units === "hertz" || this.units === "samples" ? 0 : this.units === "audioRange" ? -1 : this.units === "decibels" ? -1 / 0 : this._param.minValue;
  }
  get maxValue() {
    return isDefined(this._maxValue) ? this._maxValue : this.units === "normalRange" || this.units === "audioRange" ? 1 : this._param.maxValue;
  }
  /**
   * Type guard based on the unit name
   */
  _is(arg, type) {
    return this.units === type;
  }
  /**
   * Make sure the value is always in the defined range
   */
  _assertRange(value) {
    return isDefined(this.maxValue) && isDefined(this.minValue) && assertRange(value, this._fromType(this.minValue), this._fromType(this.maxValue)), value;
  }
  /**
   * Convert the given value from the type specified by Param.units
   * into the destination value (such as Gain or Frequency).
   */
  _fromType(val) {
    return this.convert && !this.overridden ? this._is(val, "time") ? this.toSeconds(val) : this._is(val, "decibels") ? dbToGain(val) : this._is(val, "frequency") ? this.toFrequency(val) : val : this.overridden ? 0 : val;
  }
  /**
   * Convert the parameters value into the units specified by Param.units.
   */
  _toType(val) {
    return this.convert && this.units === "decibels" ? gainToDb(val) : val;
  }
  //-------------------------------------
  // ABSTRACT PARAM INTERFACE
  // all docs are generated from ParamInterface.ts
  //-------------------------------------
  setValueAtTime(value, time) {
    let computedTime = this.toSeconds(time), numericValue = this._fromType(value);
    return assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to setValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(time)}`), this._assertRange(numericValue), this.log(this.units, "setValueAtTime", value, computedTime), this._events.add({
      time: computedTime,
      type: "setValueAtTime",
      value: numericValue
    }), this._param.setValueAtTime(numericValue, computedTime), this;
  }
  getValueAtTime(time) {
    let computedTime = Math.max(this.toSeconds(time), 0), after = this._events.getAfter(computedTime), before = this._events.get(computedTime), value = this._initialValue;
    if (before === null)
      value = this._initialValue;
    else if (before.type === "setTargetAtTime" && (after === null || after.type === "setValueAtTime")) {
      let previous = this._events.getBefore(before.time), previousVal;
      previous === null ? previousVal = this._initialValue : previousVal = previous.value, before.type === "setTargetAtTime" && (value = this._exponentialApproach(before.time, previousVal, before.value, before.constant, computedTime));
    } else if (after === null)
      value = before.value;
    else if (after.type === "linearRampToValueAtTime" || after.type === "exponentialRampToValueAtTime") {
      let beforeValue = before.value;
      if (before.type === "setTargetAtTime") {
        let previous = this._events.getBefore(before.time);
        previous === null ? beforeValue = this._initialValue : beforeValue = previous.value;
      }
      after.type === "linearRampToValueAtTime" ? value = this._linearInterpolate(before.time, beforeValue, after.time, after.value, computedTime) : value = this._exponentialInterpolate(before.time, beforeValue, after.time, after.value, computedTime);
    } else
      value = before.value;
    return this._toType(value);
  }
  setRampPoint(time) {
    time = this.toSeconds(time);
    let currentVal = this.getValueAtTime(time);
    return this.cancelAndHoldAtTime(time), this._fromType(currentVal) === 0 && (currentVal = this._toType(this._minOutput)), this.setValueAtTime(currentVal, time), this;
  }
  linearRampToValueAtTime(value, endTime) {
    let numericValue = this._fromType(value), computedTime = this.toSeconds(endTime);
    return assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(endTime)}`), this._assertRange(numericValue), this._events.add({
      time: computedTime,
      type: "linearRampToValueAtTime",
      value: numericValue
    }), this.log(this.units, "linearRampToValueAtTime", value, computedTime), this._param.linearRampToValueAtTime(numericValue, computedTime), this;
  }
  exponentialRampToValueAtTime(value, endTime) {
    let numericValue = this._fromType(value);
    numericValue = EQ(numericValue, 0) ? this._minOutput : numericValue, this._assertRange(numericValue);
    let computedTime = this.toSeconds(endTime);
    return assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(endTime)}`), this._events.add({
      time: computedTime,
      type: "exponentialRampToValueAtTime",
      value: numericValue
    }), this.log(this.units, "exponentialRampToValueAtTime", value, computedTime), this._param.exponentialRampToValueAtTime(numericValue, computedTime), this;
  }
  exponentialRampTo(value, rampTime, startTime) {
    return startTime = this.toSeconds(startTime), this.setRampPoint(startTime), this.exponentialRampToValueAtTime(value, startTime + this.toSeconds(rampTime)), this;
  }
  linearRampTo(value, rampTime, startTime) {
    return startTime = this.toSeconds(startTime), this.setRampPoint(startTime), this.linearRampToValueAtTime(value, startTime + this.toSeconds(rampTime)), this;
  }
  targetRampTo(value, rampTime, startTime) {
    return startTime = this.toSeconds(startTime), this.setRampPoint(startTime), this.exponentialApproachValueAtTime(value, startTime, rampTime), this;
  }
  exponentialApproachValueAtTime(value, time, rampTime) {
    time = this.toSeconds(time), rampTime = this.toSeconds(rampTime);
    let timeConstant = Math.log(rampTime + 1) / Math.log(200);
    return this.setTargetAtTime(value, time, timeConstant), this.cancelAndHoldAtTime(time + rampTime * 0.9), this.linearRampToValueAtTime(value, time + rampTime), this;
  }
  setTargetAtTime(value, startTime, timeConstant) {
    let numericValue = this._fromType(value);
    assert(isFinite(timeConstant) && timeConstant > 0, "timeConstant must be a number greater than 0");
    let computedTime = this.toSeconds(startTime);
    return this._assertRange(numericValue), assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(value)}, ${JSON.stringify(startTime)}`), this._events.add({
      constant: timeConstant,
      time: computedTime,
      type: "setTargetAtTime",
      value: numericValue
    }), this.log(this.units, "setTargetAtTime", value, computedTime, timeConstant), this._param.setTargetAtTime(numericValue, computedTime, timeConstant), this;
  }
  setValueCurveAtTime(values, startTime, duration, scaling = 1) {
    duration = this.toSeconds(duration), startTime = this.toSeconds(startTime);
    let startingValue = this._fromType(values[0]) * scaling;
    this.setValueAtTime(this._toType(startingValue), startTime);
    let segTime = duration / (values.length - 1);
    for (let i = 1; i < values.length; i++) {
      let numericValue = this._fromType(values[i]) * scaling;
      this.linearRampToValueAtTime(this._toType(numericValue), startTime + i * segTime);
    }
    return this;
  }
  cancelScheduledValues(time) {
    let computedTime = this.toSeconds(time);
    return assert(isFinite(computedTime), `Invalid argument to cancelScheduledValues: ${JSON.stringify(time)}`), this._events.cancel(computedTime), this._param.cancelScheduledValues(computedTime), this.log(this.units, "cancelScheduledValues", computedTime), this;
  }
  cancelAndHoldAtTime(time) {
    let computedTime = this.toSeconds(time), valueAtTime = this._fromType(this.getValueAtTime(computedTime));
    assert(isFinite(computedTime), `Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(time)}`), this.log(this.units, "cancelAndHoldAtTime", computedTime, "value=" + valueAtTime);
    let before = this._events.get(computedTime), after = this._events.getAfter(computedTime);
    return before && EQ(before.time, computedTime) ? after ? (this._param.cancelScheduledValues(after.time), this._events.cancel(after.time)) : (this._param.cancelAndHoldAtTime(computedTime), this._events.cancel(computedTime + this.sampleTime)) : after && (this._param.cancelScheduledValues(after.time), this._events.cancel(after.time), after.type === "linearRampToValueAtTime" ? this.linearRampToValueAtTime(this._toType(valueAtTime), computedTime) : after.type === "exponentialRampToValueAtTime" && this.exponentialRampToValueAtTime(this._toType(valueAtTime), computedTime)), this._events.add({
      time: computedTime,
      type: "setValueAtTime",
      value: valueAtTime
    }), this._param.setValueAtTime(valueAtTime, computedTime), this;
  }
  rampTo(value, rampTime = 0.1, startTime) {
    return this.units === "frequency" || this.units === "bpm" || this.units === "decibels" ? this.exponentialRampTo(value, rampTime, startTime) : this.linearRampTo(value, rampTime, startTime), this;
  }
  /**
   * Apply all of the previously scheduled events to the passed in Param or AudioParam.
   * The applied values will start at the context's current time and schedule
   * all of the events which are scheduled on this Param onto the passed in param.
   */
  apply(param) {
    let now2 = this.context.currentTime;
    param.setValueAtTime(this.getValueAtTime(now2), now2);
    let previousEvent = this._events.get(now2);
    if (previousEvent && previousEvent.type === "setTargetAtTime") {
      let nextEvent = this._events.getAfter(previousEvent.time), endTime = nextEvent ? nextEvent.time : now2 + 2, subdivisions = (endTime - now2) / 10;
      for (let i = now2; i < endTime; i += subdivisions)
        param.linearRampToValueAtTime(this.getValueAtTime(i), i);
    }
    return this._events.forEachAfter(this.context.currentTime, (event) => {
      event.type === "cancelScheduledValues" ? param.cancelScheduledValues(event.time) : event.type === "setTargetAtTime" ? param.setTargetAtTime(event.value, event.time, event.constant) : param[event.type](event.value, event.time);
    }), this;
  }
  /**
   * Replace the Param's internal AudioParam. Will apply scheduled curves
   * onto the parameter and replace the connections.
   */
  setParam(param) {
    assert(this._swappable, "The Param must be assigned as 'swappable' in the constructor");
    let input = this.input;
    return input.disconnect(this._param), this.apply(param), this._param = param, input.connect(this._param), this;
  }
  dispose() {
    return super.dispose(), this._events.dispose(), this;
  }
  get defaultValue() {
    return this._toType(this._param.defaultValue);
  }
  //-------------------------------------
  // 	AUTOMATION CURVE CALCULATIONS
  // 	MIT License, copyright (c) 2014 Jordan Santell
  //-------------------------------------
  // Calculates the the value along the curve produced by setTargetAtTime
  _exponentialApproach(t0, v0, v1, timeConstant, t) {
    return v1 + (v0 - v1) * Math.exp(-(t - t0) / timeConstant);
  }
  // Calculates the the value along the curve produced by linearRampToValueAtTime
  _linearInterpolate(t0, v0, t1, v1, t) {
    return v0 + (v1 - v0) * ((t - t0) / (t1 - t0));
  }
  // Calculates the the value along the curve produced by exponentialRampToValueAtTime
  _exponentialInterpolate(t0, v0, t1, v1, t) {
    return v0 * Math.pow(v1 / v0, (t - t0) / (t1 - t0));
  }
};

// node_modules/tone/build/esm/core/context/ToneAudioNode.js
var ToneAudioNode = class extends ToneWithContext {
  constructor() {
    super(...arguments), this.name = "ToneAudioNode", this._internalChannels = [];
  }
  /**
   * The number of inputs feeding into the AudioNode.
   * For source nodes, this will be 0.
   * @example
   * const node = new Tone.Gain();
   * console.log(node.numberOfInputs);
   */
  get numberOfInputs() {
    return isDefined(this.input) ? isAudioParam(this.input) || this.input instanceof Param ? 1 : this.input.numberOfInputs : 0;
  }
  /**
   * The number of outputs of the AudioNode.
   * @example
   * const node = new Tone.Gain();
   * console.log(node.numberOfOutputs);
   */
  get numberOfOutputs() {
    return isDefined(this.output) ? this.output.numberOfOutputs : 0;
  }
  //-------------------------------------
  // AUDIO PROPERTIES
  //-------------------------------------
  /**
   * Used to decide which nodes to get/set properties on
   */
  _isAudioNode(node) {
    return isDefined(node) && (node instanceof ToneAudioNode || isAudioNode(node));
  }
  /**
   * Get all of the audio nodes (either internal or input/output) which together
   * make up how the class node responds to channel input/output
   */
  _getInternalNodes() {
    let nodeList = this._internalChannels.slice(0);
    return this._isAudioNode(this.input) && nodeList.push(this.input), this._isAudioNode(this.output) && this.input !== this.output && nodeList.push(this.output), nodeList;
  }
  /**
   * Set the audio options for this node such as channelInterpretation
   * channelCount, etc.
   * @param options
   */
  _setChannelProperties(options) {
    this._getInternalNodes().forEach((node) => {
      node.channelCount = options.channelCount, node.channelCountMode = options.channelCountMode, node.channelInterpretation = options.channelInterpretation;
    });
  }
  /**
   * Get the current audio options for this node such as channelInterpretation
   * channelCount, etc.
   */
  _getChannelProperties() {
    let nodeList = this._getInternalNodes();
    assert(nodeList.length > 0, "ToneAudioNode does not have any internal nodes");
    let node = nodeList[0];
    return {
      channelCount: node.channelCount,
      channelCountMode: node.channelCountMode,
      channelInterpretation: node.channelInterpretation
    };
  }
  /**
   * channelCount is the number of channels used when up-mixing and down-mixing
   * connections to any inputs to the node. The default value is 2 except for
   * specific nodes where its value is specially determined.
   */
  get channelCount() {
    return this._getChannelProperties().channelCount;
  }
  set channelCount(channelCount) {
    let props = this._getChannelProperties();
    this._setChannelProperties(Object.assign(props, { channelCount }));
  }
  /**
   * channelCountMode determines how channels will be counted when up-mixing and
   * down-mixing connections to any inputs to the node.
   * The default value is "max". This attribute has no effect for nodes with no inputs.
   * * "max" - computedNumberOfChannels is the maximum of the number of channels of all connections to an input. In this mode channelCount is ignored.
   * * "clamped-max" - computedNumberOfChannels is determined as for "max" and then clamped to a maximum value of the given channelCount.
   * * "explicit" - computedNumberOfChannels is the exact value as specified by the channelCount.
   */
  get channelCountMode() {
    return this._getChannelProperties().channelCountMode;
  }
  set channelCountMode(channelCountMode) {
    let props = this._getChannelProperties();
    this._setChannelProperties(Object.assign(props, { channelCountMode }));
  }
  /**
   * channelInterpretation determines how individual channels will be treated
   * when up-mixing and down-mixing connections to any inputs to the node.
   * The default value is "speakers".
   */
  get channelInterpretation() {
    return this._getChannelProperties().channelInterpretation;
  }
  set channelInterpretation(channelInterpretation) {
    let props = this._getChannelProperties();
    this._setChannelProperties(Object.assign(props, { channelInterpretation }));
  }
  //-------------------------------------
  // CONNECTIONS
  //-------------------------------------
  /**
   * connect the output of a ToneAudioNode to an AudioParam, AudioNode, or ToneAudioNode
   * @param destination The output to connect to
   * @param outputNum The output to connect from
   * @param inputNum The input to connect to
   */
  connect(destination, outputNum = 0, inputNum = 0) {
    return connect(this, destination, outputNum, inputNum), this;
  }
  /**
   * Connect the output to the context's destination node.
   * @example
   * const osc = new Tone.Oscillator("C2").start();
   * osc.toDestination();
   */
  toDestination() {
    return this.connect(this.context.destination), this;
  }
  /**
   * Connect the output to the context's destination node.
   * See [[toDestination]]
   * @deprecated
   */
  toMaster() {
    return warn("toMaster() has been renamed toDestination()"), this.toDestination();
  }
  /**
   * disconnect the output
   */
  disconnect(destination, outputNum = 0, inputNum = 0) {
    return disconnect(this, destination, outputNum, inputNum), this;
  }
  /**
   * Connect the output of this node to the rest of the nodes in series.
   * @example
   * const player = new Tone.Player("https://tonejs.github.io/audio/drum-samples/handdrum-loop.mp3");
   * player.autostart = true;
   * const filter = new Tone.AutoFilter(4).start();
   * const distortion = new Tone.Distortion(0.5);
   * // connect the player to the filter, distortion and then to the master output
   * player.chain(filter, distortion, Tone.Destination);
   */
  chain(...nodes) {
    return connectSeries(this, ...nodes), this;
  }
  /**
   * connect the output of this node to the rest of the nodes in parallel.
   * @example
   * const player = new Tone.Player("https://tonejs.github.io/audio/drum-samples/conga-rhythm.mp3");
   * player.autostart = true;
   * const pitchShift = new Tone.PitchShift(4).toDestination();
   * const filter = new Tone.Filter("G5").toDestination();
   * // connect a node to the pitch shift and filter in parallel
   * player.fan(pitchShift, filter);
   */
  fan(...nodes) {
    return nodes.forEach((node) => this.connect(node)), this;
  }
  /**
   * Dispose and disconnect
   */
  dispose() {
    return super.dispose(), isDefined(this.input) && (this.input instanceof ToneAudioNode ? this.input.dispose() : isAudioNode(this.input) && this.input.disconnect()), isDefined(this.output) && (this.output instanceof ToneAudioNode ? this.output.dispose() : isAudioNode(this.output) && this.output.disconnect()), this._internalChannels = [], this;
  }
};
function connectSeries(...nodes) {
  let first = nodes.shift();
  nodes.reduce((prev, current) => (prev instanceof ToneAudioNode ? prev.connect(current) : isAudioNode(prev) && connect(prev, current), current), first);
}
function connect(srcNode, dstNode, outputNumber = 0, inputNumber = 0) {
  for (assert(isDefined(srcNode), "Cannot connect from undefined node"), assert(isDefined(dstNode), "Cannot connect to undefined node"), (dstNode instanceof ToneAudioNode || isAudioNode(dstNode)) && assert(dstNode.numberOfInputs > 0, "Cannot connect to node with no inputs"), assert(srcNode.numberOfOutputs > 0, "Cannot connect from node with no outputs"); dstNode instanceof ToneAudioNode || dstNode instanceof Param; )
    isDefined(dstNode.input) && (dstNode = dstNode.input);
  for (; srcNode instanceof ToneAudioNode; )
    isDefined(srcNode.output) && (srcNode = srcNode.output);
  isAudioParam(dstNode) ? srcNode.connect(dstNode, outputNumber) : srcNode.connect(dstNode, outputNumber, inputNumber);
}
function disconnect(srcNode, dstNode, outputNumber = 0, inputNumber = 0) {
  if (isDefined(dstNode))
    for (; dstNode instanceof ToneAudioNode; )
      dstNode = dstNode.input;
  for (; !isAudioNode(srcNode); )
    isDefined(srcNode.output) && (srcNode = srcNode.output);
  isAudioParam(dstNode) ? srcNode.disconnect(dstNode, outputNumber) : isAudioNode(dstNode) ? srcNode.disconnect(dstNode, outputNumber, inputNumber) : srcNode.disconnect();
}

// node_modules/tone/build/esm/core/context/Gain.js
var Gain = class extends ToneAudioNode {
  constructor() {
    super(optionsFromArguments(Gain.getDefaults(), arguments, ["gain", "units"])), this.name = "Gain", this._gainNode = this.context.createGain(), this.input = this._gainNode, this.output = this._gainNode;
    let options = optionsFromArguments(Gain.getDefaults(), arguments, ["gain", "units"]);
    this.gain = new Param({
      context: this.context,
      convert: options.convert,
      param: this._gainNode.gain,
      units: options.units,
      value: options.gain,
      minValue: options.minValue,
      maxValue: options.maxValue
    }), readOnly(this, "gain");
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      convert: !0,
      gain: 1,
      units: "gain"
    });
  }
  /**
   * Clean up.
   */
  dispose() {
    return super.dispose(), this._gainNode.disconnect(), this.gain.dispose(), this;
  }
};

// node_modules/tone/build/esm/source/OneShotSource.js
var OneShotSource = class extends ToneAudioNode {
  constructor(options) {
    super(options), this.onended = noOp, this._startTime = -1, this._stopTime = -1, this._timeout = -1, this.output = new Gain({
      context: this.context,
      gain: 0
    }), this._gainNode = this.output, this.getStateAtTime = function(time) {
      let computedTime = this.toSeconds(time);
      return this._startTime !== -1 && computedTime >= this._startTime && (this._stopTime === -1 || computedTime <= this._stopTime) ? "started" : "stopped";
    }, this._fadeIn = options.fadeIn, this._fadeOut = options.fadeOut, this._curve = options.curve, this.onended = options.onended;
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      curve: "linear",
      fadeIn: 0,
      fadeOut: 0,
      onended: noOp
    });
  }
  /**
   * Start the source at the given time
   * @param  time When to start the source
   */
  _startGain(time, gain = 1) {
    assert(this._startTime === -1, "Source cannot be started more than once");
    let fadeInTime = this.toSeconds(this._fadeIn);
    return this._startTime = time + fadeInTime, this._startTime = Math.max(this._startTime, this.context.currentTime), fadeInTime > 0 ? (this._gainNode.gain.setValueAtTime(0, time), this._curve === "linear" ? this._gainNode.gain.linearRampToValueAtTime(gain, time + fadeInTime) : this._gainNode.gain.exponentialApproachValueAtTime(gain, time, fadeInTime)) : this._gainNode.gain.setValueAtTime(gain, time), this;
  }
  /**
   * Stop the source node at the given time.
   * @param time When to stop the source
   */
  stop(time) {
    return this.log("stop", time), this._stopGain(this.toSeconds(time)), this;
  }
  /**
   * Stop the source at the given time
   * @param  time When to stop the source
   */
  _stopGain(time) {
    assert(this._startTime !== -1, "'start' must be called before 'stop'"), this.cancelStop();
    let fadeOutTime = this.toSeconds(this._fadeOut);
    return this._stopTime = this.toSeconds(time) + fadeOutTime, this._stopTime = Math.max(this._stopTime, this.context.currentTime), fadeOutTime > 0 ? this._curve === "linear" ? this._gainNode.gain.linearRampTo(0, fadeOutTime, time) : this._gainNode.gain.targetRampTo(0, fadeOutTime, time) : (this._gainNode.gain.cancelAndHoldAtTime(time), this._gainNode.gain.setValueAtTime(0, time)), this.context.clearTimeout(this._timeout), this._timeout = this.context.setTimeout(() => {
      let additionalTail = this._curve === "exponential" ? fadeOutTime * 2 : 0;
      this._stopSource(this.now() + additionalTail), this._onended();
    }, this._stopTime - this.context.currentTime), this;
  }
  /**
   * Invoke the onended callback
   */
  _onended() {
    if (this.onended !== noOp && (this.onended(this), this.onended = noOp, !this.context.isOffline)) {
      let disposeCallback = () => this.dispose();
      typeof window.requestIdleCallback < "u" ? window.requestIdleCallback(disposeCallback) : setTimeout(disposeCallback, 1e3);
    }
  }
  /**
   * Get the playback state at the current time
   */
  get state() {
    return this.getStateAtTime(this.now());
  }
  /**
   * Cancel a scheduled stop event
   */
  cancelStop() {
    return this.log("cancelStop"), assert(this._startTime !== -1, "Source is not started"), this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime), this.context.clearTimeout(this._timeout), this._stopTime = -1, this;
  }
  dispose() {
    return super.dispose(), this._gainNode.disconnect(), this;
  }
};

// node_modules/tone/build/esm/signal/ToneConstantSource.js
var ToneConstantSource = class extends OneShotSource {
  constructor() {
    super(optionsFromArguments(ToneConstantSource.getDefaults(), arguments, ["offset"])), this.name = "ToneConstantSource", this._source = this.context.createConstantSource();
    let options = optionsFromArguments(ToneConstantSource.getDefaults(), arguments, ["offset"]);
    connect(this._source, this._gainNode), this.offset = new Param({
      context: this.context,
      convert: options.convert,
      param: this._source.offset,
      units: options.units,
      value: options.offset,
      minValue: options.minValue,
      maxValue: options.maxValue
    });
  }
  static getDefaults() {
    return Object.assign(OneShotSource.getDefaults(), {
      convert: !0,
      offset: 1,
      units: "number"
    });
  }
  /**
   * Start the source node at the given time
   * @param  time When to start the source
   */
  start(time) {
    let computedTime = this.toSeconds(time);
    return this.log("start", computedTime), this._startGain(computedTime), this._source.start(computedTime), this;
  }
  _stopSource(time) {
    this._source.stop(time);
  }
  dispose() {
    return super.dispose(), this.state === "started" && this.stop(), this._source.disconnect(), this.offset.dispose(), this;
  }
};

// node_modules/tone/build/esm/signal/Signal.js
var Signal = class extends ToneAudioNode {
  constructor() {
    super(optionsFromArguments(Signal.getDefaults(), arguments, ["value", "units"])), this.name = "Signal", this.override = !0;
    let options = optionsFromArguments(Signal.getDefaults(), arguments, ["value", "units"]);
    this.output = this._constantSource = new ToneConstantSource({
      context: this.context,
      convert: options.convert,
      offset: options.value,
      units: options.units,
      minValue: options.minValue,
      maxValue: options.maxValue
    }), this._constantSource.start(0), this.input = this._param = this._constantSource.offset;
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      convert: !0,
      units: "number",
      value: 0
    });
  }
  connect(destination, outputNum = 0, inputNum = 0) {
    return connectSignal(this, destination, outputNum, inputNum), this;
  }
  dispose() {
    return super.dispose(), this._param.dispose(), this._constantSource.dispose(), this;
  }
  //-------------------------------------
  // ABSTRACT PARAM INTERFACE
  // just a proxy for the ConstantSourceNode's offset AudioParam
  // all docs are generated from AbstractParam.ts
  //-------------------------------------
  setValueAtTime(value, time) {
    return this._param.setValueAtTime(value, time), this;
  }
  getValueAtTime(time) {
    return this._param.getValueAtTime(time);
  }
  setRampPoint(time) {
    return this._param.setRampPoint(time), this;
  }
  linearRampToValueAtTime(value, time) {
    return this._param.linearRampToValueAtTime(value, time), this;
  }
  exponentialRampToValueAtTime(value, time) {
    return this._param.exponentialRampToValueAtTime(value, time), this;
  }
  exponentialRampTo(value, rampTime, startTime) {
    return this._param.exponentialRampTo(value, rampTime, startTime), this;
  }
  linearRampTo(value, rampTime, startTime) {
    return this._param.linearRampTo(value, rampTime, startTime), this;
  }
  targetRampTo(value, rampTime, startTime) {
    return this._param.targetRampTo(value, rampTime, startTime), this;
  }
  exponentialApproachValueAtTime(value, time, rampTime) {
    return this._param.exponentialApproachValueAtTime(value, time, rampTime), this;
  }
  setTargetAtTime(value, startTime, timeConstant) {
    return this._param.setTargetAtTime(value, startTime, timeConstant), this;
  }
  setValueCurveAtTime(values, startTime, duration, scaling) {
    return this._param.setValueCurveAtTime(values, startTime, duration, scaling), this;
  }
  cancelScheduledValues(time) {
    return this._param.cancelScheduledValues(time), this;
  }
  cancelAndHoldAtTime(time) {
    return this._param.cancelAndHoldAtTime(time), this;
  }
  rampTo(value, rampTime, startTime) {
    return this._param.rampTo(value, rampTime, startTime), this;
  }
  get value() {
    return this._param.value;
  }
  set value(value) {
    this._param.value = value;
  }
  get convert() {
    return this._param.convert;
  }
  set convert(convert) {
    this._param.convert = convert;
  }
  get units() {
    return this._param.units;
  }
  get overridden() {
    return this._param.overridden;
  }
  set overridden(overridden) {
    this._param.overridden = overridden;
  }
  get maxValue() {
    return this._param.maxValue;
  }
  get minValue() {
    return this._param.minValue;
  }
  /**
   * See [[Param.apply]].
   */
  apply(param) {
    return this._param.apply(param), this;
  }
};
function connectSignal(signal, destination, outputNum, inputNum) {
  (destination instanceof Param || isAudioParam(destination) || destination instanceof Signal && destination.override) && (destination.cancelScheduledValues(0), destination.setValueAtTime(0, 0), destination instanceof Signal && (destination.overridden = !0)), connect(signal, destination, outputNum, inputNum);
}

// node_modules/tone/build/esm/core/clock/TickParam.js
var TickParam = class extends Param {
  constructor() {
    super(optionsFromArguments(TickParam.getDefaults(), arguments, ["value"])), this.name = "TickParam", this._events = new Timeline(1 / 0), this._multiplier = 1;
    let options = optionsFromArguments(TickParam.getDefaults(), arguments, ["value"]);
    this._multiplier = options.multiplier, this._events.cancel(0), this._events.add({
      ticks: 0,
      time: 0,
      type: "setValueAtTime",
      value: this._fromType(options.value)
    }), this.setValueAtTime(options.value, 0);
  }
  static getDefaults() {
    return Object.assign(Param.getDefaults(), {
      multiplier: 1,
      units: "hertz",
      value: 1
    });
  }
  setTargetAtTime(value, time, constant) {
    time = this.toSeconds(time), this.setRampPoint(time);
    let computedValue = this._fromType(value), prevEvent = this._events.get(time), segments = Math.round(Math.max(1 / constant, 1));
    for (let i = 0; i <= segments; i++) {
      let segTime = constant * i + time, rampVal = this._exponentialApproach(prevEvent.time, prevEvent.value, computedValue, constant, segTime);
      this.linearRampToValueAtTime(this._toType(rampVal), segTime);
    }
    return this;
  }
  setValueAtTime(value, time) {
    let computedTime = this.toSeconds(time);
    super.setValueAtTime(value, time);
    let event = this._events.get(computedTime), previousEvent = this._events.previousEvent(event), ticksUntilTime = this._getTicksUntilEvent(previousEvent, computedTime);
    return event.ticks = Math.max(ticksUntilTime, 0), this;
  }
  linearRampToValueAtTime(value, time) {
    let computedTime = this.toSeconds(time);
    super.linearRampToValueAtTime(value, time);
    let event = this._events.get(computedTime), previousEvent = this._events.previousEvent(event), ticksUntilTime = this._getTicksUntilEvent(previousEvent, computedTime);
    return event.ticks = Math.max(ticksUntilTime, 0), this;
  }
  exponentialRampToValueAtTime(value, time) {
    time = this.toSeconds(time);
    let computedVal = this._fromType(value), prevEvent = this._events.get(time), segments = Math.round(Math.max((time - prevEvent.time) * 10, 1)), segmentDur = (time - prevEvent.time) / segments;
    for (let i = 0; i <= segments; i++) {
      let segTime = segmentDur * i + prevEvent.time, rampVal = this._exponentialInterpolate(prevEvent.time, prevEvent.value, time, computedVal, segTime);
      this.linearRampToValueAtTime(this._toType(rampVal), segTime);
    }
    return this;
  }
  /**
   * Returns the tick value at the time. Takes into account
   * any automation curves scheduled on the signal.
   * @param  event The time to get the tick count at
   * @return The number of ticks which have elapsed at the time given any automations.
   */
  _getTicksUntilEvent(event, time) {
    if (event === null)
      event = {
        ticks: 0,
        time: 0,
        type: "setValueAtTime",
        value: 0
      };
    else if (isUndef(event.ticks)) {
      let previousEvent = this._events.previousEvent(event);
      event.ticks = this._getTicksUntilEvent(previousEvent, event.time);
    }
    let val0 = this._fromType(this.getValueAtTime(event.time)), val1 = this._fromType(this.getValueAtTime(time)), onTheLineEvent = this._events.get(time);
    return onTheLineEvent && onTheLineEvent.time === time && onTheLineEvent.type === "setValueAtTime" && (val1 = this._fromType(this.getValueAtTime(time - this.sampleTime))), 0.5 * (time - event.time) * (val0 + val1) + event.ticks;
  }
  /**
   * Returns the tick value at the time. Takes into account
   * any automation curves scheduled on the signal.
   * @param  time The time to get the tick count at
   * @return The number of ticks which have elapsed at the time given any automations.
   */
  getTicksAtTime(time) {
    let computedTime = this.toSeconds(time), event = this._events.get(computedTime);
    return Math.max(this._getTicksUntilEvent(event, computedTime), 0);
  }
  /**
   * Return the elapsed time of the number of ticks from the given time
   * @param ticks The number of ticks to calculate
   * @param  time The time to get the next tick from
   * @return The duration of the number of ticks from the given time in seconds
   */
  getDurationOfTicks(ticks, time) {
    let computedTime = this.toSeconds(time), currentTick = this.getTicksAtTime(time);
    return this.getTimeOfTick(currentTick + ticks) - computedTime;
  }
  /**
   * Given a tick, returns the time that tick occurs at.
   * @return The time that the tick occurs.
   */
  getTimeOfTick(tick) {
    let before = this._events.get(tick, "ticks"), after = this._events.getAfter(tick, "ticks");
    if (before && before.ticks === tick)
      return before.time;
    if (before && after && after.type === "linearRampToValueAtTime" && before.value !== after.value) {
      let val0 = this._fromType(this.getValueAtTime(before.time)), delta = (this._fromType(this.getValueAtTime(after.time)) - val0) / (after.time - before.time), k = Math.sqrt(Math.pow(val0, 2) - 2 * delta * (before.ticks - tick)), sol1 = (-val0 + k) / delta, sol2 = (-val0 - k) / delta;
      return (sol1 > 0 ? sol1 : sol2) + before.time;
    } else
      return before ? before.value === 0 ? 1 / 0 : before.time + (tick - before.ticks) / before.value : tick / this._initialValue;
  }
  /**
   * Convert some number of ticks their the duration in seconds accounting
   * for any automation curves starting at the given time.
   * @param  ticks The number of ticks to convert to seconds.
   * @param  when  When along the automation timeline to convert the ticks.
   * @return The duration in seconds of the ticks.
   */
  ticksToTime(ticks, when) {
    return this.getDurationOfTicks(ticks, when);
  }
  /**
   * The inverse of [[ticksToTime]]. Convert a duration in
   * seconds to the corresponding number of ticks accounting for any
   * automation curves starting at the given time.
   * @param  duration The time interval to convert to ticks.
   * @param  when When along the automation timeline to convert the ticks.
   * @return The duration in ticks.
   */
  timeToTicks(duration, when) {
    let computedTime = this.toSeconds(when), computedDuration = this.toSeconds(duration), startTicks = this.getTicksAtTime(computedTime);
    return this.getTicksAtTime(computedTime + computedDuration) - startTicks;
  }
  /**
   * Convert from the type when the unit value is BPM
   */
  _fromType(val) {
    return this.units === "bpm" && this.multiplier ? 1 / (60 / val / this.multiplier) : super._fromType(val);
  }
  /**
   * Special case of type conversion where the units === "bpm"
   */
  _toType(val) {
    return this.units === "bpm" && this.multiplier ? val / this.multiplier * 60 : super._toType(val);
  }
  /**
   * A multiplier on the bpm value. Useful for setting a PPQ relative to the base frequency value.
   */
  get multiplier() {
    return this._multiplier;
  }
  set multiplier(m) {
    let currentVal = this.value;
    this._multiplier = m, this.cancelScheduledValues(0), this.setValueAtTime(currentVal, 0);
  }
};

// node_modules/tone/build/esm/core/clock/TickSignal.js
var TickSignal = class extends Signal {
  constructor() {
    super(optionsFromArguments(TickSignal.getDefaults(), arguments, ["value"])), this.name = "TickSignal";
    let options = optionsFromArguments(TickSignal.getDefaults(), arguments, ["value"]);
    this.input = this._param = new TickParam({
      context: this.context,
      convert: options.convert,
      multiplier: options.multiplier,
      param: this._constantSource.offset,
      units: options.units,
      value: options.value
    });
  }
  static getDefaults() {
    return Object.assign(Signal.getDefaults(), {
      multiplier: 1,
      units: "hertz",
      value: 1
    });
  }
  ticksToTime(ticks, when) {
    return this._param.ticksToTime(ticks, when);
  }
  timeToTicks(duration, when) {
    return this._param.timeToTicks(duration, when);
  }
  getTimeOfTick(tick) {
    return this._param.getTimeOfTick(tick);
  }
  getDurationOfTicks(ticks, time) {
    return this._param.getDurationOfTicks(ticks, time);
  }
  getTicksAtTime(time) {
    return this._param.getTicksAtTime(time);
  }
  /**
   * A multiplier on the bpm value. Useful for setting a PPQ relative to the base frequency value.
   */
  get multiplier() {
    return this._param.multiplier;
  }
  set multiplier(m) {
    this._param.multiplier = m;
  }
  dispose() {
    return super.dispose(), this._param.dispose(), this;
  }
};

// node_modules/tone/build/esm/core/clock/TickSource.js
var TickSource = class extends ToneWithContext {
  constructor() {
    super(optionsFromArguments(TickSource.getDefaults(), arguments, ["frequency"])), this.name = "TickSource", this._state = new StateTimeline(), this._tickOffset = new Timeline();
    let options = optionsFromArguments(TickSource.getDefaults(), arguments, ["frequency"]);
    this.frequency = new TickSignal({
      context: this.context,
      units: options.units,
      value: options.frequency
    }), readOnly(this, "frequency"), this._state.setStateAtTime("stopped", 0), this.setTicksAtTime(0, 0);
  }
  static getDefaults() {
    return Object.assign({
      frequency: 1,
      units: "hertz"
    }, ToneWithContext.getDefaults());
  }
  /**
   * Returns the playback state of the source, either "started", "stopped" or "paused".
   */
  get state() {
    return this.getStateAtTime(this.now());
  }
  /**
   * Start the clock at the given time. Optionally pass in an offset
   * of where to start the tick counter from.
   * @param  time    The time the clock should start
   * @param offset The number of ticks to start the source at
   */
  start(time, offset) {
    let computedTime = this.toSeconds(time);
    return this._state.getValueAtTime(computedTime) !== "started" && (this._state.setStateAtTime("started", computedTime), isDefined(offset) && this.setTicksAtTime(offset, computedTime)), this;
  }
  /**
   * Stop the clock. Stopping the clock resets the tick counter to 0.
   * @param time The time when the clock should stop.
   */
  stop(time) {
    let computedTime = this.toSeconds(time);
    if (this._state.getValueAtTime(computedTime) === "stopped") {
      let event = this._state.get(computedTime);
      event && event.time > 0 && (this._tickOffset.cancel(event.time), this._state.cancel(event.time));
    }
    return this._state.cancel(computedTime), this._state.setStateAtTime("stopped", computedTime), this.setTicksAtTime(0, computedTime), this;
  }
  /**
   * Pause the clock. Pausing does not reset the tick counter.
   * @param time The time when the clock should stop.
   */
  pause(time) {
    let computedTime = this.toSeconds(time);
    return this._state.getValueAtTime(computedTime) === "started" && this._state.setStateAtTime("paused", computedTime), this;
  }
  /**
   * Cancel start/stop/pause and setTickAtTime events scheduled after the given time.
   * @param time When to clear the events after
   */
  cancel(time) {
    return time = this.toSeconds(time), this._state.cancel(time), this._tickOffset.cancel(time), this;
  }
  /**
   * Get the elapsed ticks at the given time
   * @param  time  When to get the tick value
   * @return The number of ticks
   */
  getTicksAtTime(time) {
    let computedTime = this.toSeconds(time), stopEvent = this._state.getLastState("stopped", computedTime), tmpEvent = { state: "paused", time: computedTime };
    this._state.add(tmpEvent);
    let lastState = stopEvent, elapsedTicks = 0;
    return this._state.forEachBetween(stopEvent.time, computedTime + this.sampleTime, (e) => {
      let periodStartTime = lastState.time, offsetEvent = this._tickOffset.get(e.time);
      offsetEvent && offsetEvent.time >= lastState.time && (elapsedTicks = offsetEvent.ticks, periodStartTime = offsetEvent.time), lastState.state === "started" && e.state !== "started" && (elapsedTicks += this.frequency.getTicksAtTime(e.time) - this.frequency.getTicksAtTime(periodStartTime)), lastState = e;
    }), this._state.remove(tmpEvent), elapsedTicks;
  }
  /**
   * The number of times the callback was invoked. Starts counting at 0
   * and increments after the callback was invoked. Returns -1 when stopped.
   */
  get ticks() {
    return this.getTicksAtTime(this.now());
  }
  set ticks(t) {
    this.setTicksAtTime(t, this.now());
  }
  /**
   * The time since ticks=0 that the TickSource has been running. Accounts
   * for tempo curves
   */
  get seconds() {
    return this.getSecondsAtTime(this.now());
  }
  set seconds(s) {
    let now2 = this.now(), ticks = this.frequency.timeToTicks(s, now2);
    this.setTicksAtTime(ticks, now2);
  }
  /**
   * Return the elapsed seconds at the given time.
   * @param  time  When to get the elapsed seconds
   * @return  The number of elapsed seconds
   */
  getSecondsAtTime(time) {
    time = this.toSeconds(time);
    let stopEvent = this._state.getLastState("stopped", time), tmpEvent = { state: "paused", time };
    this._state.add(tmpEvent);
    let lastState = stopEvent, elapsedSeconds = 0;
    return this._state.forEachBetween(stopEvent.time, time + this.sampleTime, (e) => {
      let periodStartTime = lastState.time, offsetEvent = this._tickOffset.get(e.time);
      offsetEvent && offsetEvent.time >= lastState.time && (elapsedSeconds = offsetEvent.seconds, periodStartTime = offsetEvent.time), lastState.state === "started" && e.state !== "started" && (elapsedSeconds += e.time - periodStartTime), lastState = e;
    }), this._state.remove(tmpEvent), elapsedSeconds;
  }
  /**
   * Set the clock's ticks at the given time.
   * @param  ticks The tick value to set
   * @param  time  When to set the tick value
   */
  setTicksAtTime(ticks, time) {
    return time = this.toSeconds(time), this._tickOffset.cancel(time), this._tickOffset.add({
      seconds: this.frequency.getDurationOfTicks(ticks, time),
      ticks,
      time
    }), this;
  }
  /**
   * Returns the scheduled state at the given time.
   * @param  time  The time to query.
   */
  getStateAtTime(time) {
    return time = this.toSeconds(time), this._state.getValueAtTime(time);
  }
  /**
   * Get the time of the given tick. The second argument
   * is when to test before. Since ticks can be set (with setTicksAtTime)
   * there may be multiple times for a given tick value.
   * @param  tick The tick number.
   * @param  before When to measure the tick value from.
   * @return The time of the tick
   */
  getTimeOfTick(tick, before = this.now()) {
    let offset = this._tickOffset.get(before), event = this._state.get(before), startTime = Math.max(offset.time, event.time), absoluteTicks = this.frequency.getTicksAtTime(startTime) + tick - offset.ticks;
    return this.frequency.getTimeOfTick(absoluteTicks);
  }
  /**
   * Invoke the callback event at all scheduled ticks between the
   * start time and the end time
   * @param  startTime  The beginning of the search range
   * @param  endTime    The end of the search range
   * @param  callback   The callback to invoke with each tick
   */
  forEachTickBetween(startTime, endTime, callback) {
    let lastStateEvent = this._state.get(startTime);
    this._state.forEachBetween(startTime, endTime, (event) => {
      lastStateEvent && lastStateEvent.state === "started" && event.state !== "started" && this.forEachTickBetween(Math.max(lastStateEvent.time, startTime), event.time - this.sampleTime, callback), lastStateEvent = event;
    });
    let error = null;
    if (lastStateEvent && lastStateEvent.state === "started") {
      let maxStartTime = Math.max(lastStateEvent.time, startTime), startTicks = this.frequency.getTicksAtTime(maxStartTime), ticksAtStart = this.frequency.getTicksAtTime(lastStateEvent.time), diff = startTicks - ticksAtStart, offset = Math.ceil(diff) - diff;
      offset = EQ(offset, 1) ? 0 : offset;
      let nextTickTime = this.frequency.getTimeOfTick(startTicks + offset);
      for (; nextTickTime < endTime; ) {
        try {
          callback(nextTickTime, Math.round(this.getTicksAtTime(nextTickTime)));
        } catch (e) {
          error = e;
          break;
        }
        nextTickTime += this.frequency.getDurationOfTicks(1, nextTickTime);
      }
    }
    if (error)
      throw error;
    return this;
  }
  /**
   * Clean up
   */
  dispose() {
    return super.dispose(), this._state.dispose(), this._tickOffset.dispose(), this.frequency.dispose(), this;
  }
};

// node_modules/tone/build/esm/core/clock/Clock.js
var Clock = class extends ToneWithContext {
  constructor() {
    super(optionsFromArguments(Clock.getDefaults(), arguments, ["callback", "frequency"])), this.name = "Clock", this.callback = noOp, this._lastUpdate = 0, this._state = new StateTimeline("stopped"), this._boundLoop = this._loop.bind(this);
    let options = optionsFromArguments(Clock.getDefaults(), arguments, ["callback", "frequency"]);
    this.callback = options.callback, this._tickSource = new TickSource({
      context: this.context,
      frequency: options.frequency,
      units: options.units
    }), this._lastUpdate = 0, this.frequency = this._tickSource.frequency, readOnly(this, "frequency"), this._state.setStateAtTime("stopped", 0), this.context.on("tick", this._boundLoop);
  }
  static getDefaults() {
    return Object.assign(ToneWithContext.getDefaults(), {
      callback: noOp,
      frequency: 1,
      units: "hertz"
    });
  }
  /**
   * Returns the playback state of the source, either "started", "stopped" or "paused".
   */
  get state() {
    return this._state.getValueAtTime(this.now());
  }
  /**
   * Start the clock at the given time. Optionally pass in an offset
   * of where to start the tick counter from.
   * @param  time    The time the clock should start
   * @param offset  Where the tick counter starts counting from.
   */
  start(time, offset) {
    assertContextRunning(this.context);
    let computedTime = this.toSeconds(time);
    return this.log("start", computedTime), this._state.getValueAtTime(computedTime) !== "started" && (this._state.setStateAtTime("started", computedTime), this._tickSource.start(computedTime, offset), computedTime < this._lastUpdate && this.emit("start", computedTime, offset)), this;
  }
  /**
   * Stop the clock. Stopping the clock resets the tick counter to 0.
   * @param time The time when the clock should stop.
   * @example
   * const clock = new Tone.Clock(time => {
   * 	console.log(time);
   * }, 1);
   * clock.start();
   * // stop the clock after 10 seconds
   * clock.stop("+10");
   */
  stop(time) {
    let computedTime = this.toSeconds(time);
    return this.log("stop", computedTime), this._state.cancel(computedTime), this._state.setStateAtTime("stopped", computedTime), this._tickSource.stop(computedTime), computedTime < this._lastUpdate && this.emit("stop", computedTime), this;
  }
  /**
   * Pause the clock. Pausing does not reset the tick counter.
   * @param time The time when the clock should stop.
   */
  pause(time) {
    let computedTime = this.toSeconds(time);
    return this._state.getValueAtTime(computedTime) === "started" && (this._state.setStateAtTime("paused", computedTime), this._tickSource.pause(computedTime), computedTime < this._lastUpdate && this.emit("pause", computedTime)), this;
  }
  /**
   * The number of times the callback was invoked. Starts counting at 0
   * and increments after the callback was invoked.
   */
  get ticks() {
    return Math.ceil(this.getTicksAtTime(this.now()));
  }
  set ticks(t) {
    this._tickSource.ticks = t;
  }
  /**
   * The time since ticks=0 that the Clock has been running. Accounts for tempo curves
   */
  get seconds() {
    return this._tickSource.seconds;
  }
  set seconds(s) {
    this._tickSource.seconds = s;
  }
  /**
   * Return the elapsed seconds at the given time.
   * @param  time  When to get the elapsed seconds
   * @return  The number of elapsed seconds
   */
  getSecondsAtTime(time) {
    return this._tickSource.getSecondsAtTime(time);
  }
  /**
   * Set the clock's ticks at the given time.
   * @param  ticks The tick value to set
   * @param  time  When to set the tick value
   */
  setTicksAtTime(ticks, time) {
    return this._tickSource.setTicksAtTime(ticks, time), this;
  }
  /**
   * Get the time of the given tick. The second argument
   * is when to test before. Since ticks can be set (with setTicksAtTime)
   * there may be multiple times for a given tick value.
   * @param  tick The tick number.
   * @param  before When to measure the tick value from.
   * @return The time of the tick
   */
  getTimeOfTick(tick, before = this.now()) {
    return this._tickSource.getTimeOfTick(tick, before);
  }
  /**
   * Get the clock's ticks at the given time.
   * @param  time  When to get the tick value
   * @return The tick value at the given time.
   */
  getTicksAtTime(time) {
    return this._tickSource.getTicksAtTime(time);
  }
  /**
   * Get the time of the next tick
   * @param  offset The tick number.
   */
  nextTickTime(offset, when) {
    let computedTime = this.toSeconds(when), currentTick = this.getTicksAtTime(computedTime);
    return this._tickSource.getTimeOfTick(currentTick + offset, computedTime);
  }
  /**
   * The scheduling loop.
   */
  _loop() {
    let startTime = this._lastUpdate, endTime = this.now();
    this._lastUpdate = endTime, this.log("loop", startTime, endTime), startTime !== endTime && (this._state.forEachBetween(startTime, endTime, (e) => {
      switch (e.state) {
        case "started":
          let offset = this._tickSource.getTicksAtTime(e.time);
          this.emit("start", e.time, offset);
          break;
        case "stopped":
          e.time !== 0 && this.emit("stop", e.time);
          break;
        case "paused":
          this.emit("pause", e.time);
          break;
      }
    }), this._tickSource.forEachTickBetween(startTime, endTime, (time, ticks) => {
      this.callback(time, ticks);
    }));
  }
  /**
   * Returns the scheduled state at the given time.
   * @param  time  The time to query.
   * @return  The name of the state input in setStateAtTime.
   * @example
   * const clock = new Tone.Clock();
   * clock.start("+0.1");
   * clock.getStateAtTime("+0.1"); // returns "started"
   */
  getStateAtTime(time) {
    let computedTime = this.toSeconds(time);
    return this._state.getValueAtTime(computedTime);
  }
  /**
   * Clean up
   */
  dispose() {
    return super.dispose(), this.context.off("tick", this._boundLoop), this._tickSource.dispose(), this._state.dispose(), this;
  }
};
Emitter.mixin(Clock);

// node_modules/tone/build/esm/core/context/Offline.js
import { __awaiter as __awaiter5 } from "tslib";

// node_modules/tone/build/esm/core/context/ToneAudioBuffers.js
var ToneAudioBuffers = class extends Tone {
  constructor() {
    super(), this.name = "ToneAudioBuffers", this._buffers = /* @__PURE__ */ new Map(), this._loadingCount = 0;
    let options = optionsFromArguments(ToneAudioBuffers.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls");
    this.baseUrl = options.baseUrl, Object.keys(options.urls).forEach((name) => {
      this._loadingCount++;
      let url = options.urls[name];
      this.add(name, url, this._bufferLoaded.bind(this, options.onload), options.onerror);
    });
  }
  static getDefaults() {
    return {
      baseUrl: "",
      onerror: noOp,
      onload: noOp,
      urls: {}
    };
  }
  /**
   * True if the buffers object has a buffer by that name.
   * @param  name  The key or index of the buffer.
   */
  has(name) {
    return this._buffers.has(name.toString());
  }
  /**
   * Get a buffer by name. If an array was loaded,
   * then use the array index.
   * @param  name  The key or index of the buffer.
   */
  get(name) {
    return assert(this.has(name), `ToneAudioBuffers has no buffer named: ${name}`), this._buffers.get(name.toString());
  }
  /**
   * A buffer was loaded. decrement the counter.
   */
  _bufferLoaded(callback) {
    this._loadingCount--, this._loadingCount === 0 && callback && callback();
  }
  /**
   * If the buffers are loaded or not
   */
  get loaded() {
    return Array.from(this._buffers).every(([_, buffer]) => buffer.loaded);
  }
  /**
   * Add a buffer by name and url to the Buffers
   * @param  name      A unique name to give the buffer
   * @param  url  Either the url of the bufer, or a buffer which will be added with the given name.
   * @param  callback  The callback to invoke when the url is loaded.
   * @param  onerror  Invoked if the buffer can't be loaded
   */
  add(name, url, callback = noOp, onerror = noOp) {
    return isString(url) ? this._buffers.set(name.toString(), new ToneAudioBuffer(this.baseUrl + url, callback, onerror)) : this._buffers.set(name.toString(), new ToneAudioBuffer(url, callback, onerror)), this;
  }
  dispose() {
    return super.dispose(), this._buffers.forEach((buffer) => buffer.dispose()), this._buffers.clear(), this;
  }
};

// node_modules/tone/build/esm/core/type/Ticks.js
var TicksClass = class extends TransportTimeClass {
  constructor() {
    super(...arguments), this.name = "Ticks", this.defaultUnits = "i";
  }
  /**
   * Get the current time in the given units
   */
  _now() {
    return this.context.transport.ticks;
  }
  /**
   * Return the value of the beats in the current units
   */
  _beatsToUnits(beats) {
    return this._getPPQ() * beats;
  }
  /**
   * Returns the value of a second in the current units
   */
  _secondsToUnits(seconds) {
    return Math.floor(seconds / (60 / this._getBpm()) * this._getPPQ());
  }
  /**
   * Returns the value of a tick in the current time units
   */
  _ticksToUnits(ticks) {
    return ticks;
  }
  /**
   * Return the time in ticks
   */
  toTicks() {
    return this.valueOf();
  }
  /**
   * Return the time in seconds
   */
  toSeconds() {
    return this.valueOf() / this._getPPQ() * (60 / this._getBpm());
  }
};

// node_modules/tone/build/esm/core/util/Draw.js
var Draw = class extends ToneWithContext {
  constructor() {
    super(...arguments), this.name = "Draw", this.expiration = 0.25, this.anticipation = 8e-3, this._events = new Timeline(), this._boundDrawLoop = this._drawLoop.bind(this), this._animationFrame = -1;
  }
  /**
   * Schedule a function at the given time to be invoked
   * on the nearest animation frame.
   * @param  callback  Callback is invoked at the given time.
   * @param  time      The time relative to the AudioContext time to invoke the callback.
   * @example
   * Tone.Transport.scheduleRepeat(time => {
   * 	Tone.Draw.schedule(() => console.log(time), time);
   * }, 1);
   * Tone.Transport.start();
   */
  schedule(callback, time) {
    return this._events.add({
      callback,
      time: this.toSeconds(time)
    }), this._events.length === 1 && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop)), this;
  }
  /**
   * Cancel events scheduled after the given time
   * @param  after  Time after which scheduled events will be removed from the scheduling timeline.
   */
  cancel(after) {
    return this._events.cancel(this.toSeconds(after)), this;
  }
  /**
   * The draw loop
   */
  _drawLoop() {
    let now2 = this.context.currentTime;
    for (; this._events.length && this._events.peek().time - this.anticipation <= now2; ) {
      let event = this._events.shift();
      event && now2 - event.time <= this.expiration && event.callback();
    }
    this._events.length > 0 && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop));
  }
  dispose() {
    return super.dispose(), this._events.dispose(), cancelAnimationFrame(this._animationFrame), this;
  }
};
onContextInit((context2) => {
  context2.draw = new Draw({ context: context2 });
});
onContextClose((context2) => {
  context2.draw.dispose();
});

// node_modules/tone/build/esm/core/util/IntervalTimeline.js
var IntervalTimeline = class extends Tone {
  constructor() {
    super(...arguments), this.name = "IntervalTimeline", this._root = null, this._length = 0;
  }
  /**
   * The event to add to the timeline. All events must
   * have a time and duration value
   * @param  event  The event to add to the timeline
   */
  add(event) {
    assert(isDefined(event.time), "Events must have a time property"), assert(isDefined(event.duration), "Events must have a duration parameter"), event.time = event.time.valueOf();
    let node = new IntervalNode(event.time, event.time + event.duration, event);
    for (this._root === null ? this._root = node : this._root.insert(node), this._length++; node !== null; )
      node.updateHeight(), node.updateMax(), this._rebalance(node), node = node.parent;
    return this;
  }
  /**
   * Remove an event from the timeline.
   * @param  event  The event to remove from the timeline
   */
  remove(event) {
    if (this._root !== null) {
      let results = [];
      this._root.search(event.time, results);
      for (let node of results)
        if (node.event === event) {
          this._removeNode(node), this._length--;
          break;
        }
    }
    return this;
  }
  /**
   * The number of items in the timeline.
   * @readOnly
   */
  get length() {
    return this._length;
  }
  /**
   * Remove events whose time time is after the given time
   * @param  after  The time to query.
   */
  cancel(after) {
    return this.forEachFrom(after, (event) => this.remove(event)), this;
  }
  /**
   * Set the root node as the given node
   */
  _setRoot(node) {
    this._root = node, this._root !== null && (this._root.parent = null);
  }
  /**
   * Replace the references to the node in the node's parent
   * with the replacement node.
   */
  _replaceNodeInParent(node, replacement) {
    node.parent !== null ? (node.isLeftChild() ? node.parent.left = replacement : node.parent.right = replacement, this._rebalance(node.parent)) : this._setRoot(replacement);
  }
  /**
   * Remove the node from the tree and replace it with
   * a successor which follows the schema.
   */
  _removeNode(node) {
    if (node.left === null && node.right === null)
      this._replaceNodeInParent(node, null);
    else if (node.right === null)
      this._replaceNodeInParent(node, node.left);
    else if (node.left === null)
      this._replaceNodeInParent(node, node.right);
    else {
      let balance = node.getBalance(), replacement, temp = null;
      if (balance > 0)
        if (node.left.right === null)
          replacement = node.left, replacement.right = node.right, temp = replacement;
        else {
          for (replacement = node.left.right; replacement.right !== null; )
            replacement = replacement.right;
          replacement.parent && (replacement.parent.right = replacement.left, temp = replacement.parent, replacement.left = node.left, replacement.right = node.right);
        }
      else if (node.right.left === null)
        replacement = node.right, replacement.left = node.left, temp = replacement;
      else {
        for (replacement = node.right.left; replacement.left !== null; )
          replacement = replacement.left;
        replacement.parent && (replacement.parent.left = replacement.right, temp = replacement.parent, replacement.left = node.left, replacement.right = node.right);
      }
      node.parent !== null ? node.isLeftChild() ? node.parent.left = replacement : node.parent.right = replacement : this._setRoot(replacement), temp && this._rebalance(temp);
    }
    node.dispose();
  }
  /**
   * Rotate the tree to the left
   */
  _rotateLeft(node) {
    let parent = node.parent, isLeftChild = node.isLeftChild(), pivotNode = node.right;
    pivotNode && (node.right = pivotNode.left, pivotNode.left = node), parent !== null ? isLeftChild ? parent.left = pivotNode : parent.right = pivotNode : this._setRoot(pivotNode);
  }
  /**
   * Rotate the tree to the right
   */
  _rotateRight(node) {
    let parent = node.parent, isLeftChild = node.isLeftChild(), pivotNode = node.left;
    pivotNode && (node.left = pivotNode.right, pivotNode.right = node), parent !== null ? isLeftChild ? parent.left = pivotNode : parent.right = pivotNode : this._setRoot(pivotNode);
  }
  /**
   * Balance the BST
   */
  _rebalance(node) {
    let balance = node.getBalance();
    balance > 1 && node.left ? node.left.getBalance() < 0 ? this._rotateLeft(node.left) : this._rotateRight(node) : balance < -1 && node.right && (node.right.getBalance() > 0 ? this._rotateRight(node.right) : this._rotateLeft(node));
  }
  /**
   * Get an event whose time and duration span the give time. Will
   * return the match whose "time" value is closest to the given time.
   * @return  The event which spans the desired time
   */
  get(time) {
    if (this._root !== null) {
      let results = [];
      if (this._root.search(time, results), results.length > 0) {
        let max = results[0];
        for (let i = 1; i < results.length; i++)
          results[i].low > max.low && (max = results[i]);
        return max.event;
      }
    }
    return null;
  }
  /**
   * Iterate over everything in the timeline.
   * @param  callback The callback to invoke with every item
   */
  forEach(callback) {
    if (this._root !== null) {
      let allNodes = [];
      this._root.traverse((node) => allNodes.push(node)), allNodes.forEach((node) => {
        node.event && callback(node.event);
      });
    }
    return this;
  }
  /**
   * Iterate over everything in the array in which the given time
   * overlaps with the time and duration time of the event.
   * @param  time The time to check if items are overlapping
   * @param  callback The callback to invoke with every item
   */
  forEachAtTime(time, callback) {
    if (this._root !== null) {
      let results = [];
      this._root.search(time, results), results.forEach((node) => {
        node.event && callback(node.event);
      });
    }
    return this;
  }
  /**
   * Iterate over everything in the array in which the time is greater
   * than or equal to the given time.
   * @param  time The time to check if items are before
   * @param  callback The callback to invoke with every item
   */
  forEachFrom(time, callback) {
    if (this._root !== null) {
      let results = [];
      this._root.searchAfter(time, results), results.forEach((node) => {
        node.event && callback(node.event);
      });
    }
    return this;
  }
  /**
   * Clean up
   */
  dispose() {
    return super.dispose(), this._root !== null && this._root.traverse((node) => node.dispose()), this._root = null, this;
  }
}, IntervalNode = class {
  constructor(low, high, event) {
    this._left = null, this._right = null, this.parent = null, this.height = 0, this.event = event, this.low = low, this.high = high, this.max = this.high;
  }
  /**
   * Insert a node into the correct spot in the tree
   */
  insert(node) {
    node.low <= this.low ? this.left === null ? this.left = node : this.left.insert(node) : this.right === null ? this.right = node : this.right.insert(node);
  }
  /**
   * Search the tree for nodes which overlap
   * with the given point
   * @param  point  The point to query
   * @param  results  The array to put the results
   */
  search(point, results) {
    point > this.max || (this.left !== null && this.left.search(point, results), this.low <= point && this.high > point && results.push(this), !(this.low > point) && this.right !== null && this.right.search(point, results));
  }
  /**
   * Search the tree for nodes which are less
   * than the given point
   * @param  point  The point to query
   * @param  results  The array to put the results
   */
  searchAfter(point, results) {
    this.low >= point && (results.push(this), this.left !== null && this.left.searchAfter(point, results)), this.right !== null && this.right.searchAfter(point, results);
  }
  /**
   * Invoke the callback on this element and both it's branches
   * @param  {Function}  callback
   */
  traverse(callback) {
    callback(this), this.left !== null && this.left.traverse(callback), this.right !== null && this.right.traverse(callback);
  }
  /**
   * Update the height of the node
   */
  updateHeight() {
    this.left !== null && this.right !== null ? this.height = Math.max(this.left.height, this.right.height) + 1 : this.right !== null ? this.height = this.right.height + 1 : this.left !== null ? this.height = this.left.height + 1 : this.height = 0;
  }
  /**
   * Update the height of the node
   */
  updateMax() {
    this.max = this.high, this.left !== null && (this.max = Math.max(this.max, this.left.max)), this.right !== null && (this.max = Math.max(this.max, this.right.max));
  }
  /**
   * The balance is how the leafs are distributed on the node
   * @return  Negative numbers are balanced to the right
   */
  getBalance() {
    let balance = 0;
    return this.left !== null && this.right !== null ? balance = this.left.height - this.right.height : this.left !== null ? balance = this.left.height + 1 : this.right !== null && (balance = -(this.right.height + 1)), balance;
  }
  /**
   * @returns true if this node is the left child of its parent
   */
  isLeftChild() {
    return this.parent !== null && this.parent.left === this;
  }
  /**
   * get/set the left node
   */
  get left() {
    return this._left;
  }
  set left(node) {
    this._left = node, node !== null && (node.parent = this), this.updateHeight(), this.updateMax();
  }
  /**
   * get/set the right node
   */
  get right() {
    return this._right;
  }
  set right(node) {
    this._right = node, node !== null && (node.parent = this), this.updateHeight(), this.updateMax();
  }
  /**
   * null out references.
   */
  dispose() {
    this.parent = null, this._left = null, this._right = null, this.event = null;
  }
};

// node_modules/tone/build/esm/component/channel/Volume.js
var Volume = class extends ToneAudioNode {
  constructor() {
    super(optionsFromArguments(Volume.getDefaults(), arguments, ["volume"])), this.name = "Volume";
    let options = optionsFromArguments(Volume.getDefaults(), arguments, ["volume"]);
    this.input = this.output = new Gain({
      context: this.context,
      gain: options.volume,
      units: "decibels"
    }), this.volume = this.output.gain, readOnly(this, "volume"), this._unmutedVolume = options.volume, this.mute = options.mute;
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      mute: !1,
      volume: 0
    });
  }
  /**
   * Mute the output.
   * @example
   * const vol = new Tone.Volume(-12).toDestination();
   * const osc = new Tone.Oscillator().connect(vol).start();
   * // mute the output
   * vol.mute = true;
   */
  get mute() {
    return this.volume.value === -1 / 0;
  }
  set mute(mute) {
    !this.mute && mute ? (this._unmutedVolume = this.volume.value, this.volume.value = -1 / 0) : this.mute && !mute && (this.volume.value = this._unmutedVolume);
  }
  /**
   * clean up
   */
  dispose() {
    return super.dispose(), this.input.dispose(), this.volume.dispose(), this;
  }
};

// node_modules/tone/build/esm/core/context/Destination.js
var Destination = class extends ToneAudioNode {
  constructor() {
    super(optionsFromArguments(Destination.getDefaults(), arguments)), this.name = "Destination", this.input = new Volume({ context: this.context }), this.output = new Gain({ context: this.context }), this.volume = this.input.volume;
    let options = optionsFromArguments(Destination.getDefaults(), arguments);
    connectSeries(this.input, this.output, this.context.rawContext.destination), this.mute = options.mute, this._internalChannels = [this.input, this.context.rawContext.destination, this.output];
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      mute: !1,
      volume: 0
    });
  }
  /**
   * Mute the output.
   * @example
   * const oscillator = new Tone.Oscillator().start().toDestination();
   * setTimeout(() => {
   * 	// mute the output
   * 	Tone.Destination.mute = true;
   * }, 1000);
   */
  get mute() {
    return this.input.mute;
  }
  set mute(mute) {
    this.input.mute = mute;
  }
  /**
   * Add a master effects chain. NOTE: this will disconnect any nodes which were previously
   * chained in the master effects chain.
   * @param args All arguments will be connected in a row and the Master will be routed through it.
   * @example
   * // route all audio through a filter and compressor
   * const lowpass = new Tone.Filter(800, "lowpass");
   * const compressor = new Tone.Compressor(-18);
   * Tone.Destination.chain(lowpass, compressor);
   */
  chain(...args) {
    return this.input.disconnect(), args.unshift(this.input), args.push(this.output), connectSeries(...args), this;
  }
  /**
   * The maximum number of channels the system can output
   * @example
   * console.log(Tone.Destination.maxChannelCount);
   */
  get maxChannelCount() {
    return this.context.rawContext.destination.maxChannelCount;
  }
  /**
   * Clean up
   */
  dispose() {
    return super.dispose(), this.volume.dispose(), this;
  }
};
onContextInit((context2) => {
  context2.destination = new Destination({ context: context2 });
});
onContextClose((context2) => {
  context2.destination.dispose();
});

// node_modules/tone/build/esm/core/util/TimelineValue.js
var TimelineValue = class extends Tone {
  /**
   * @param initialValue The value to return if there is no scheduled values
   */
  constructor(initialValue) {
    super(), this.name = "TimelineValue", this._timeline = new Timeline({ memory: 10 }), this._initialValue = initialValue;
  }
  /**
   * Set the value at the given time
   */
  set(value, time) {
    return this._timeline.add({
      value,
      time
    }), this;
  }
  /**
   * Get the value at the given time
   */
  get(time) {
    let event = this._timeline.get(time);
    return event ? event.value : this._initialValue;
  }
};

// node_modules/tone/build/esm/core/clock/TransportEvent.js
var TransportEvent = class {
  /**
   * @param transport The transport object which the event belongs to
   */
  constructor(transport, opts) {
    this.id = TransportEvent._eventId++;
    let options = Object.assign(TransportEvent.getDefaults(), opts);
    this.transport = transport, this.callback = options.callback, this._once = options.once, this.time = options.time;
  }
  static getDefaults() {
    return {
      callback: noOp,
      once: !1,
      time: 0
    };
  }
  /**
   * Invoke the event callback.
   * @param  time  The AudioContext time in seconds of the event
   */
  invoke(time) {
    this.callback && (this.callback(time), this._once && this.transport.clear(this.id));
  }
  /**
   * Clean up
   */
  dispose() {
    return this.callback = void 0, this;
  }
};
TransportEvent._eventId = 0;

// node_modules/tone/build/esm/core/clock/TransportRepeatEvent.js
var TransportRepeatEvent = class extends TransportEvent {
  /**
   * @param transport The transport object which the event belongs to
   */
  constructor(transport, opts) {
    super(transport, opts), this._currentId = -1, this._nextId = -1, this._nextTick = this.time, this._boundRestart = this._restart.bind(this);
    let options = Object.assign(TransportRepeatEvent.getDefaults(), opts);
    this.duration = new TicksClass(transport.context, options.duration).valueOf(), this._interval = new TicksClass(transport.context, options.interval).valueOf(), this._nextTick = options.time, this.transport.on("start", this._boundRestart), this.transport.on("loopStart", this._boundRestart), this.context = this.transport.context, this._restart();
  }
  static getDefaults() {
    return Object.assign({}, TransportEvent.getDefaults(), {
      duration: 1 / 0,
      interval: 1,
      once: !1
    });
  }
  /**
   * Invoke the callback. Returns the tick time which
   * the next event should be scheduled at.
   * @param  time  The AudioContext time in seconds of the event
   */
  invoke(time) {
    this._createEvents(time), super.invoke(time);
  }
  /**
   * Push more events onto the timeline to keep up with the position of the timeline
   */
  _createEvents(time) {
    let ticks = this.transport.getTicksAtTime(time);
    ticks >= this.time && ticks >= this._nextTick && this._nextTick + this._interval < this.time + this.duration && (this._nextTick += this._interval, this._currentId = this._nextId, this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new TicksClass(this.context, this._nextTick).toSeconds()));
  }
  /**
   * Push more events onto the timeline to keep up with the position of the timeline
   */
  _restart(time) {
    this.transport.clear(this._currentId), this.transport.clear(this._nextId), this._nextTick = this.time;
    let ticks = this.transport.getTicksAtTime(time);
    ticks > this.time && (this._nextTick = this.time + Math.ceil((ticks - this.time) / this._interval) * this._interval), this._currentId = this.transport.scheduleOnce(this.invoke.bind(this), new TicksClass(this.context, this._nextTick).toSeconds()), this._nextTick += this._interval, this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new TicksClass(this.context, this._nextTick).toSeconds());
  }
  /**
   * Clean up
   */
  dispose() {
    return super.dispose(), this.transport.clear(this._currentId), this.transport.clear(this._nextId), this.transport.off("start", this._boundRestart), this.transport.off("loopStart", this._boundRestart), this;
  }
};

// node_modules/tone/build/esm/core/clock/Transport.js
var Transport = class extends ToneWithContext {
  constructor() {
    super(optionsFromArguments(Transport.getDefaults(), arguments)), this.name = "Transport", this._loop = new TimelineValue(!1), this._loopStart = 0, this._loopEnd = 0, this._scheduledEvents = {}, this._timeline = new Timeline(), this._repeatedEvents = new IntervalTimeline(), this._syncedSignals = [], this._swingAmount = 0;
    let options = optionsFromArguments(Transport.getDefaults(), arguments);
    this._ppq = options.ppq, this._clock = new Clock({
      callback: this._processTick.bind(this),
      context: this.context,
      frequency: 0,
      units: "bpm"
    }), this._bindClockEvents(), this.bpm = this._clock.frequency, this._clock.frequency.multiplier = options.ppq, this.bpm.setValueAtTime(options.bpm, 0), readOnly(this, "bpm"), this._timeSignature = options.timeSignature, this._swingTicks = options.ppq / 2;
  }
  static getDefaults() {
    return Object.assign(ToneWithContext.getDefaults(), {
      bpm: 120,
      loopEnd: "4m",
      loopStart: 0,
      ppq: 192,
      swing: 0,
      swingSubdivision: "8n",
      timeSignature: 4
    });
  }
  //-------------------------------------
  // 	TICKS
  //-------------------------------------
  /**
   * called on every tick
   * @param  tickTime clock relative tick time
   */
  _processTick(tickTime, ticks) {
    if (this._loop.get(tickTime) && ticks >= this._loopEnd && (this.emit("loopEnd", tickTime), this._clock.setTicksAtTime(this._loopStart, tickTime), ticks = this._loopStart, this.emit("loopStart", tickTime, this._clock.getSecondsAtTime(tickTime)), this.emit("loop", tickTime)), this._swingAmount > 0 && ticks % this._ppq !== 0 && // not on a downbeat
    ticks % (this._swingTicks * 2) !== 0) {
      let progress = ticks % (this._swingTicks * 2) / (this._swingTicks * 2), amount = Math.sin(progress * Math.PI) * this._swingAmount;
      tickTime += new TicksClass(this.context, this._swingTicks * 2 / 3).toSeconds() * amount;
    }
    this._timeline.forEachAtTime(ticks, (event) => event.invoke(tickTime));
  }
  //-------------------------------------
  // 	SCHEDULABLE EVENTS
  //-------------------------------------
  /**
   * Schedule an event along the timeline.
   * @param callback The callback to be invoked at the time.
   * @param time The time to invoke the callback at.
   * @return The id of the event which can be used for canceling the event.
   * @example
   * // schedule an event on the 16th measure
   * Tone.Transport.schedule((time) => {
   * 	// invoked on measure 16
   * 	console.log("measure 16!");
   * }, "16:0:0");
   */
  schedule(callback, time) {
    let event = new TransportEvent(this, {
      callback,
      time: new TransportTimeClass(this.context, time).toTicks()
    });
    return this._addEvent(event, this._timeline);
  }
  /**
   * Schedule a repeated event along the timeline. The event will fire
   * at the `interval` starting at the `startTime` and for the specified
   * `duration`.
   * @param  callback   The callback to invoke.
   * @param  interval   The duration between successive callbacks. Must be a positive number.
   * @param  startTime  When along the timeline the events should start being invoked.
   * @param  duration How long the event should repeat.
   * @return  The ID of the scheduled event. Use this to cancel the event.
   * @example
   * const osc = new Tone.Oscillator().toDestination().start();
   * // a callback invoked every eighth note after the first measure
   * Tone.Transport.scheduleRepeat((time) => {
   * 	osc.start(time).stop(time + 0.1);
   * }, "8n", "1m");
   */
  scheduleRepeat(callback, interval, startTime, duration = 1 / 0) {
    let event = new TransportRepeatEvent(this, {
      callback,
      duration: new TimeClass(this.context, duration).toTicks(),
      interval: new TimeClass(this.context, interval).toTicks(),
      time: new TransportTimeClass(this.context, startTime).toTicks()
    });
    return this._addEvent(event, this._repeatedEvents);
  }
  /**
   * Schedule an event that will be removed after it is invoked.
   * @param callback The callback to invoke once.
   * @param time The time the callback should be invoked.
   * @returns The ID of the scheduled event.
   */
  scheduleOnce(callback, time) {
    let event = new TransportEvent(this, {
      callback,
      once: !0,
      time: new TransportTimeClass(this.context, time).toTicks()
    });
    return this._addEvent(event, this._timeline);
  }
  /**
   * Clear the passed in event id from the timeline
   * @param eventId The id of the event.
   */
  clear(eventId) {
    if (this._scheduledEvents.hasOwnProperty(eventId)) {
      let item = this._scheduledEvents[eventId.toString()];
      item.timeline.remove(item.event), item.event.dispose(), delete this._scheduledEvents[eventId.toString()];
    }
    return this;
  }
  /**
   * Add an event to the correct timeline. Keep track of the
   * timeline it was added to.
   * @returns the event id which was just added
   */
  _addEvent(event, timeline) {
    return this._scheduledEvents[event.id.toString()] = {
      event,
      timeline
    }, timeline.add(event), event.id;
  }
  /**
   * Remove scheduled events from the timeline after
   * the given time. Repeated events will be removed
   * if their startTime is after the given time
   * @param after Clear all events after this time.
   */
  cancel(after = 0) {
    let computedAfter = this.toTicks(after);
    return this._timeline.forEachFrom(computedAfter, (event) => this.clear(event.id)), this._repeatedEvents.forEachFrom(computedAfter, (event) => this.clear(event.id)), this;
  }
  //-------------------------------------
  // 	START/STOP/PAUSE
  //-------------------------------------
  /**
   * Bind start/stop/pause events from the clock and emit them.
   */
  _bindClockEvents() {
    this._clock.on("start", (time, offset) => {
      offset = new TicksClass(this.context, offset).toSeconds(), this.emit("start", time, offset);
    }), this._clock.on("stop", (time) => {
      this.emit("stop", time);
    }), this._clock.on("pause", (time) => {
      this.emit("pause", time);
    });
  }
  /**
   * Returns the playback state of the source, either "started", "stopped", or "paused"
   */
  get state() {
    return this._clock.getStateAtTime(this.now());
  }
  /**
   * Start the transport and all sources synced to the transport.
   * @param  time The time when the transport should start.
   * @param  offset The timeline offset to start the transport.
   * @example
   * // start the transport in one second starting at beginning of the 5th measure.
   * Tone.Transport.start("+1", "4:0:0");
   */
  start(time, offset) {
    let offsetTicks;
    return isDefined(offset) && (offsetTicks = this.toTicks(offset)), this._clock.start(time, offsetTicks), this;
  }
  /**
   * Stop the transport and all sources synced to the transport.
   * @param time The time when the transport should stop.
   * @example
   * Tone.Transport.stop();
   */
  stop(time) {
    return this._clock.stop(time), this;
  }
  /**
   * Pause the transport and all sources synced to the transport.
   */
  pause(time) {
    return this._clock.pause(time), this;
  }
  /**
   * Toggle the current state of the transport. If it is
   * started, it will stop it, otherwise it will start the Transport.
   * @param  time The time of the event
   */
  toggle(time) {
    return time = this.toSeconds(time), this._clock.getStateAtTime(time) !== "started" ? this.start(time) : this.stop(time), this;
  }
  //-------------------------------------
  // 	SETTERS/GETTERS
  //-------------------------------------
  /**
   * The time signature as just the numerator over 4.
   * For example 4/4 would be just 4 and 6/8 would be 3.
   * @example
   * // common time
   * Tone.Transport.timeSignature = 4;
   * // 7/8
   * Tone.Transport.timeSignature = [7, 8];
   * // this will be reduced to a single number
   * Tone.Transport.timeSignature; // returns 3.5
   */
  get timeSignature() {
    return this._timeSignature;
  }
  set timeSignature(timeSig) {
    isArray(timeSig) && (timeSig = timeSig[0] / timeSig[1] * 4), this._timeSignature = timeSig;
  }
  /**
   * When the Transport.loop = true, this is the starting position of the loop.
   */
  get loopStart() {
    return new TimeClass(this.context, this._loopStart, "i").toSeconds();
  }
  set loopStart(startPosition) {
    this._loopStart = this.toTicks(startPosition);
  }
  /**
   * When the Transport.loop = true, this is the ending position of the loop.
   */
  get loopEnd() {
    return new TimeClass(this.context, this._loopEnd, "i").toSeconds();
  }
  set loopEnd(endPosition) {
    this._loopEnd = this.toTicks(endPosition);
  }
  /**
   * If the transport loops or not.
   */
  get loop() {
    return this._loop.get(this.now());
  }
  set loop(loop) {
    this._loop.set(loop, this.now());
  }
  /**
   * Set the loop start and stop at the same time.
   * @example
   * // loop over the first measure
   * Tone.Transport.setLoopPoints(0, "1m");
   * Tone.Transport.loop = true;
   */
  setLoopPoints(startPosition, endPosition) {
    return this.loopStart = startPosition, this.loopEnd = endPosition, this;
  }
  /**
   * The swing value. Between 0-1 where 1 equal to the note + half the subdivision.
   */
  get swing() {
    return this._swingAmount;
  }
  set swing(amount) {
    this._swingAmount = amount;
  }
  /**
   * Set the subdivision which the swing will be applied to.
   * The default value is an 8th note. Value must be less
   * than a quarter note.
   */
  get swingSubdivision() {
    return new TicksClass(this.context, this._swingTicks).toNotation();
  }
  set swingSubdivision(subdivision) {
    this._swingTicks = this.toTicks(subdivision);
  }
  /**
   * The Transport's position in Bars:Beats:Sixteenths.
   * Setting the value will jump to that position right away.
   */
  get position() {
    let now2 = this.now(), ticks = this._clock.getTicksAtTime(now2);
    return new TicksClass(this.context, ticks).toBarsBeatsSixteenths();
  }
  set position(progress) {
    let ticks = this.toTicks(progress);
    this.ticks = ticks;
  }
  /**
   * The Transport's position in seconds
   * Setting the value will jump to that position right away.
   */
  get seconds() {
    return this._clock.seconds;
  }
  set seconds(s) {
    let now2 = this.now(), ticks = this._clock.frequency.timeToTicks(s, now2);
    this.ticks = ticks;
  }
  /**
   * The Transport's loop position as a normalized value. Always
   * returns 0 if the transport if loop is not true.
   */
  get progress() {
    if (this.loop) {
      let now2 = this.now();
      return (this._clock.getTicksAtTime(now2) - this._loopStart) / (this._loopEnd - this._loopStart);
    } else
      return 0;
  }
  /**
   * The transports current tick position.
   */
  get ticks() {
    return this._clock.ticks;
  }
  set ticks(t) {
    if (this._clock.ticks !== t) {
      let now2 = this.now();
      if (this.state === "started") {
        let ticks = this._clock.getTicksAtTime(now2), remainingTick = this._clock.frequency.getDurationOfTicks(Math.ceil(ticks) - ticks, now2), time = now2 + remainingTick;
        this.emit("stop", time), this._clock.setTicksAtTime(t, time), this.emit("start", time, this._clock.getSecondsAtTime(time));
      } else
        this._clock.setTicksAtTime(t, now2);
    }
  }
  /**
   * Get the clock's ticks at the given time.
   * @param  time  When to get the tick value
   * @return The tick value at the given time.
   */
  getTicksAtTime(time) {
    return Math.round(this._clock.getTicksAtTime(time));
  }
  /**
   * Return the elapsed seconds at the given time.
   * @param  time  When to get the elapsed seconds
   * @return  The number of elapsed seconds
   */
  getSecondsAtTime(time) {
    return this._clock.getSecondsAtTime(time);
  }
  /**
   * Pulses Per Quarter note. This is the smallest resolution
   * the Transport timing supports. This should be set once
   * on initialization and not set again. Changing this value
   * after other objects have been created can cause problems.
   */
  get PPQ() {
    return this._clock.frequency.multiplier;
  }
  set PPQ(ppq) {
    this._clock.frequency.multiplier = ppq;
  }
  //-------------------------------------
  // 	SYNCING
  //-------------------------------------
  /**
   * Returns the time aligned to the next subdivision
   * of the Transport. If the Transport is not started,
   * it will return 0.
   * Note: this will not work precisely during tempo ramps.
   * @param  subdivision  The subdivision to quantize to
   * @return  The context time of the next subdivision.
   * @example
   * // the transport must be started, otherwise returns 0
   * Tone.Transport.start();
   * Tone.Transport.nextSubdivision("4n");
   */
  nextSubdivision(subdivision) {
    if (subdivision = this.toTicks(subdivision), this.state !== "started")
      return 0;
    {
      let now2 = this.now(), transportPos = this.getTicksAtTime(now2), remainingTicks = subdivision - transportPos % subdivision;
      return this._clock.nextTickTime(remainingTicks, now2);
    }
  }
  /**
   * Attaches the signal to the tempo control signal so that
   * any changes in the tempo will change the signal in the same
   * ratio.
   *
   * @param signal
   * @param ratio Optionally pass in the ratio between the two signals.
   * 			Otherwise it will be computed based on their current values.
   */
  syncSignal(signal, ratio) {
    if (!ratio) {
      let now2 = this.now();
      if (signal.getValueAtTime(now2) !== 0) {
        let computedFreq = 1 / (60 / this.bpm.getValueAtTime(now2) / this.PPQ);
        ratio = signal.getValueAtTime(now2) / computedFreq;
      } else
        ratio = 0;
    }
    let ratioSignal = new Gain(ratio);
    return this.bpm.connect(ratioSignal), ratioSignal.connect(signal._param), this._syncedSignals.push({
      initial: signal.value,
      ratio: ratioSignal,
      signal
    }), signal.value = 0, this;
  }
  /**
   * Unsyncs a previously synced signal from the transport's control.
   * See Transport.syncSignal.
   */
  unsyncSignal(signal) {
    for (let i = this._syncedSignals.length - 1; i >= 0; i--) {
      let syncedSignal = this._syncedSignals[i];
      syncedSignal.signal === signal && (syncedSignal.ratio.dispose(), syncedSignal.signal.value = syncedSignal.initial, this._syncedSignals.splice(i, 1));
    }
    return this;
  }
  /**
   * Clean up.
   */
  dispose() {
    return super.dispose(), this._clock.dispose(), writable(this, "bpm"), this._timeline.dispose(), this._repeatedEvents.dispose(), this;
  }
};
Emitter.mixin(Transport);
onContextInit((context2) => {
  context2.transport = new Transport({ context: context2 });
});
onContextClose((context2) => {
  context2.transport.dispose();
});

// node_modules/tone/build/esm/source/Source.js
var Source = class extends ToneAudioNode {
  constructor(options) {
    super(options), this.input = void 0, this._state = new StateTimeline("stopped"), this._synced = !1, this._scheduled = [], this._syncedStart = noOp, this._syncedStop = noOp, this._state.memory = 100, this._state.increasing = !0, this._volume = this.output = new Volume({
      context: this.context,
      mute: options.mute,
      volume: options.volume
    }), this.volume = this._volume.volume, readOnly(this, "volume"), this.onstop = options.onstop;
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      mute: !1,
      onstop: noOp,
      volume: 0
    });
  }
  /**
   * Returns the playback state of the source, either "started" or "stopped".
   * @example
   * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/ahntone_c3.mp3", () => {
   * 	player.start();
   * 	console.log(player.state);
   * }).toDestination();
   */
  get state() {
    return this._synced ? this.context.transport.state === "started" ? this._state.getValueAtTime(this.context.transport.seconds) : "stopped" : this._state.getValueAtTime(this.now());
  }
  /**
   * Mute the output.
   * @example
   * const osc = new Tone.Oscillator().toDestination().start();
   * // mute the output
   * osc.mute = true;
   */
  get mute() {
    return this._volume.mute;
  }
  set mute(mute) {
    this._volume.mute = mute;
  }
  /**
   * Ensure that the scheduled time is not before the current time.
   * Should only be used when scheduled unsynced.
   */
  _clampToCurrentTime(time) {
    return this._synced ? time : Math.max(time, this.context.currentTime);
  }
  /**
   * Start the source at the specified time. If no time is given,
   * start the source now.
   * @param  time When the source should be started.
   * @example
   * const source = new Tone.Oscillator().toDestination();
   * source.start("+0.5"); // starts the source 0.5 seconds from now
   */
  start(time, offset, duration) {
    let computedTime = isUndef(time) && this._synced ? this.context.transport.seconds : this.toSeconds(time);
    if (computedTime = this._clampToCurrentTime(computedTime), !this._synced && this._state.getValueAtTime(computedTime) === "started")
      assert(GT(computedTime, this._state.get(computedTime).time), "Start time must be strictly greater than previous start time"), this._state.cancel(computedTime), this._state.setStateAtTime("started", computedTime), this.log("restart", computedTime), this.restart(computedTime, offset, duration);
    else if (this.log("start", computedTime), this._state.setStateAtTime("started", computedTime), this._synced) {
      let event = this._state.get(computedTime);
      event && (event.offset = this.toSeconds(defaultArg(offset, 0)), event.duration = duration ? this.toSeconds(duration) : void 0);
      let sched = this.context.transport.schedule((t) => {
        this._start(t, offset, duration);
      }, computedTime);
      this._scheduled.push(sched), this.context.transport.state === "started" && this.context.transport.getSecondsAtTime(this.immediate()) > computedTime && this._syncedStart(this.now(), this.context.transport.seconds);
    } else
      assertContextRunning(this.context), this._start(computedTime, offset, duration);
    return this;
  }
  /**
   * Stop the source at the specified time. If no time is given,
   * stop the source now.
   * @param  time When the source should be stopped.
   * @example
   * const source = new Tone.Oscillator().toDestination();
   * source.start();
   * source.stop("+0.5"); // stops the source 0.5 seconds from now
   */
  stop(time) {
    let computedTime = isUndef(time) && this._synced ? this.context.transport.seconds : this.toSeconds(time);
    if (computedTime = this._clampToCurrentTime(computedTime), this._state.getValueAtTime(computedTime) === "started" || isDefined(this._state.getNextState("started", computedTime))) {
      if (this.log("stop", computedTime), !this._synced)
        this._stop(computedTime);
      else {
        let sched = this.context.transport.schedule(this._stop.bind(this), computedTime);
        this._scheduled.push(sched);
      }
      this._state.cancel(computedTime), this._state.setStateAtTime("stopped", computedTime);
    }
    return this;
  }
  /**
   * Restart the source.
   */
  restart(time, offset, duration) {
    return time = this.toSeconds(time), this._state.getValueAtTime(time) === "started" && (this._state.cancel(time), this._restart(time, offset, duration)), this;
  }
  /**
   * Sync the source to the Transport so that all subsequent
   * calls to `start` and `stop` are synced to the TransportTime
   * instead of the AudioContext time.
   *
   * @example
   * const osc = new Tone.Oscillator().toDestination();
   * // sync the source so that it plays between 0 and 0.3 on the Transport's timeline
   * osc.sync().start(0).stop(0.3);
   * // start the transport.
   * Tone.Transport.start();
   * // set it to loop once a second
   * Tone.Transport.loop = true;
   * Tone.Transport.loopEnd = 1;
   */
  sync() {
    return this._synced || (this._synced = !0, this._syncedStart = (time, offset) => {
      if (offset > 0) {
        let stateEvent = this._state.get(offset);
        if (stateEvent && stateEvent.state === "started" && stateEvent.time !== offset) {
          let startOffset = offset - this.toSeconds(stateEvent.time), duration;
          stateEvent.duration && (duration = this.toSeconds(stateEvent.duration) - startOffset), this._start(time, this.toSeconds(stateEvent.offset) + startOffset, duration);
        }
      }
    }, this._syncedStop = (time) => {
      let seconds = this.context.transport.getSecondsAtTime(Math.max(time - this.sampleTime, 0));
      this._state.getValueAtTime(seconds) === "started" && this._stop(time);
    }, this.context.transport.on("start", this._syncedStart), this.context.transport.on("loopStart", this._syncedStart), this.context.transport.on("stop", this._syncedStop), this.context.transport.on("pause", this._syncedStop), this.context.transport.on("loopEnd", this._syncedStop)), this;
  }
  /**
   * Unsync the source to the Transport. See Source.sync
   */
  unsync() {
    return this._synced && (this.context.transport.off("stop", this._syncedStop), this.context.transport.off("pause", this._syncedStop), this.context.transport.off("loopEnd", this._syncedStop), this.context.transport.off("start", this._syncedStart), this.context.transport.off("loopStart", this._syncedStart)), this._synced = !1, this._scheduled.forEach((id) => this.context.transport.clear(id)), this._scheduled = [], this._state.cancel(0), this._stop(0), this;
  }
  /**
   * Clean up.
   */
  dispose() {
    return super.dispose(), this.onstop = noOp, this.unsync(), this._volume.dispose(), this._state.dispose(), this;
  }
};

// node_modules/tone/build/esm/source/buffer/ToneBufferSource.js
var ToneBufferSource = class extends OneShotSource {
  constructor() {
    super(optionsFromArguments(ToneBufferSource.getDefaults(), arguments, ["url", "onload"])), this.name = "ToneBufferSource", this._source = this.context.createBufferSource(), this._internalChannels = [this._source], this._sourceStarted = !1, this._sourceStopped = !1;
    let options = optionsFromArguments(ToneBufferSource.getDefaults(), arguments, ["url", "onload"]);
    connect(this._source, this._gainNode), this._source.onended = () => this._stopSource(), this.playbackRate = new Param({
      context: this.context,
      param: this._source.playbackRate,
      units: "positive",
      value: options.playbackRate
    }), this.loop = options.loop, this.loopStart = options.loopStart, this.loopEnd = options.loopEnd, this._buffer = new ToneAudioBuffer(options.url, options.onload, options.onerror), this._internalChannels.push(this._source);
  }
  static getDefaults() {
    return Object.assign(OneShotSource.getDefaults(), {
      url: new ToneAudioBuffer(),
      loop: !1,
      loopEnd: 0,
      loopStart: 0,
      onload: noOp,
      onerror: noOp,
      playbackRate: 1
    });
  }
  /**
   * The fadeIn time of the amplitude envelope.
   */
  get fadeIn() {
    return this._fadeIn;
  }
  set fadeIn(t) {
    this._fadeIn = t;
  }
  /**
   * The fadeOut time of the amplitude envelope.
   */
  get fadeOut() {
    return this._fadeOut;
  }
  set fadeOut(t) {
    this._fadeOut = t;
  }
  /**
   * The curve applied to the fades, either "linear" or "exponential"
   */
  get curve() {
    return this._curve;
  }
  set curve(t) {
    this._curve = t;
  }
  /**
   * Start the buffer
   * @param  time When the player should start.
   * @param  offset The offset from the beginning of the sample to start at.
   * @param  duration How long the sample should play. If no duration is given, it will default to the full length of the sample (minus any offset)
   * @param  gain  The gain to play the buffer back at.
   */
  start(time, offset, duration, gain = 1) {
    assert(this.buffer.loaded, "buffer is either not set or not loaded");
    let computedTime = this.toSeconds(time);
    this._startGain(computedTime, gain), this.loop ? offset = defaultArg(offset, this.loopStart) : offset = defaultArg(offset, 0);
    let computedOffset = Math.max(this.toSeconds(offset), 0);
    if (this.loop) {
      let loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration, loopStart = this.toSeconds(this.loopStart), loopDuration = loopEnd - loopStart;
      GTE(computedOffset, loopEnd) && (computedOffset = (computedOffset - loopStart) % loopDuration + loopStart), EQ(computedOffset, this.buffer.duration) && (computedOffset = 0);
    }
    if (this._source.buffer = this.buffer.get(), this._source.loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration, LT(computedOffset, this.buffer.duration) && (this._sourceStarted = !0, this._source.start(computedTime, computedOffset)), isDefined(duration)) {
      let computedDur = this.toSeconds(duration);
      computedDur = Math.max(computedDur, 0), this.stop(computedTime + computedDur);
    }
    return this;
  }
  _stopSource(time) {
    !this._sourceStopped && this._sourceStarted && (this._sourceStopped = !0, this._source.stop(this.toSeconds(time)), this._onended());
  }
  /**
   * If loop is true, the loop will start at this position.
   */
  get loopStart() {
    return this._source.loopStart;
  }
  set loopStart(loopStart) {
    this._source.loopStart = this.toSeconds(loopStart);
  }
  /**
   * If loop is true, the loop will end at this position.
   */
  get loopEnd() {
    return this._source.loopEnd;
  }
  set loopEnd(loopEnd) {
    this._source.loopEnd = this.toSeconds(loopEnd);
  }
  /**
   * The audio buffer belonging to the player.
   */
  get buffer() {
    return this._buffer;
  }
  set buffer(buffer) {
    this._buffer.set(buffer);
  }
  /**
   * If the buffer should loop once it's over.
   */
  get loop() {
    return this._source.loop;
  }
  set loop(loop) {
    this._source.loop = loop, this._sourceStarted && this.cancelStop();
  }
  /**
   * Clean up.
   */
  dispose() {
    return super.dispose(), this._source.onended = null, this._source.disconnect(), this._buffer.dispose(), this.playbackRate.dispose(), this;
  }
};

// node_modules/tone/build/esm/source/Noise.js
var BUFFER_LENGTH = 44100 * 5;

// node_modules/tone/build/esm/source/UserMedia.js
import { __awaiter as __awaiter6 } from "tslib";

// node_modules/tone/build/esm/source/oscillator/Oscillator.js
import { __awaiter as __awaiter8 } from "tslib";

// node_modules/tone/build/esm/source/oscillator/OscillatorInterface.js
import { __awaiter as __awaiter7 } from "tslib";
function generateWaveform(instance, length) {
  return __awaiter7(this, void 0, void 0, function* () {
    let duration = length / instance.context.sampleRate, context2 = new OfflineContext(1, duration, instance.context.sampleRate);
    return new instance.constructor(Object.assign(instance.get(), {
      // should do 2 iterations
      frequency: 2 / duration,
      // zero out the detune
      detune: 0,
      context: context2
    })).toDestination().start(0), (yield context2.render()).getChannelData(0);
  });
}

// node_modules/tone/build/esm/source/oscillator/ToneOscillatorNode.js
var ToneOscillatorNode = class extends OneShotSource {
  constructor() {
    super(optionsFromArguments(ToneOscillatorNode.getDefaults(), arguments, ["frequency", "type"])), this.name = "ToneOscillatorNode", this._oscillator = this.context.createOscillator(), this._internalChannels = [this._oscillator];
    let options = optionsFromArguments(ToneOscillatorNode.getDefaults(), arguments, ["frequency", "type"]);
    connect(this._oscillator, this._gainNode), this.type = options.type, this.frequency = new Param({
      context: this.context,
      param: this._oscillator.frequency,
      units: "frequency",
      value: options.frequency
    }), this.detune = new Param({
      context: this.context,
      param: this._oscillator.detune,
      units: "cents",
      value: options.detune
    }), readOnly(this, ["frequency", "detune"]);
  }
  static getDefaults() {
    return Object.assign(OneShotSource.getDefaults(), {
      detune: 0,
      frequency: 440,
      type: "sine"
    });
  }
  /**
   * Start the oscillator node at the given time
   * @param  time When to start the oscillator
   */
  start(time) {
    let computedTime = this.toSeconds(time);
    return this.log("start", computedTime), this._startGain(computedTime), this._oscillator.start(computedTime), this;
  }
  _stopSource(time) {
    this._oscillator.stop(time);
  }
  /**
   * Sets an arbitrary custom periodic waveform given a PeriodicWave.
   * @param  periodicWave PeriodicWave should be created with context.createPeriodicWave
   */
  setPeriodicWave(periodicWave) {
    return this._oscillator.setPeriodicWave(periodicWave), this;
  }
  /**
   * The oscillator type. Either 'sine', 'sawtooth', 'square', or 'triangle'
   */
  get type() {
    return this._oscillator.type;
  }
  set type(type) {
    this._oscillator.type = type;
  }
  /**
   * Clean up.
   */
  dispose() {
    return super.dispose(), this.state === "started" && this.stop(), this._oscillator.disconnect(), this.frequency.dispose(), this.detune.dispose(), this;
  }
};

// node_modules/tone/build/esm/source/oscillator/Oscillator.js
var Oscillator = class extends Source {
  constructor() {
    super(optionsFromArguments(Oscillator.getDefaults(), arguments, ["frequency", "type"])), this.name = "Oscillator", this._oscillator = null;
    let options = optionsFromArguments(Oscillator.getDefaults(), arguments, ["frequency", "type"]);
    this.frequency = new Signal({
      context: this.context,
      units: "frequency",
      value: options.frequency
    }), readOnly(this, "frequency"), this.detune = new Signal({
      context: this.context,
      units: "cents",
      value: options.detune
    }), readOnly(this, "detune"), this._partials = options.partials, this._partialCount = options.partialCount, this._type = options.type, options.partialCount && options.type !== "custom" && (this._type = this.baseType + options.partialCount.toString()), this.phase = options.phase;
  }
  static getDefaults() {
    return Object.assign(Source.getDefaults(), {
      detune: 0,
      frequency: 440,
      partialCount: 0,
      partials: [],
      phase: 0,
      type: "sine"
    });
  }
  /**
   * start the oscillator
   */
  _start(time) {
    let computedTime = this.toSeconds(time), oscillator = new ToneOscillatorNode({
      context: this.context,
      onended: () => this.onstop(this)
    });
    this._oscillator = oscillator, this._wave ? this._oscillator.setPeriodicWave(this._wave) : this._oscillator.type = this._type, this._oscillator.connect(this.output), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.start(computedTime);
  }
  /**
   * stop the oscillator
   */
  _stop(time) {
    let computedTime = this.toSeconds(time);
    this._oscillator && this._oscillator.stop(computedTime);
  }
  /**
   * Restart the oscillator. Does not stop the oscillator, but instead
   * just cancels any scheduled 'stop' from being invoked.
   */
  _restart(time) {
    let computedTime = this.toSeconds(time);
    return this.log("restart", computedTime), this._oscillator && this._oscillator.cancelStop(), this._state.cancel(computedTime), this;
  }
  /**
   * Sync the signal to the Transport's bpm. Any changes to the transports bpm,
   * will also affect the oscillators frequency.
   * @example
   * const osc = new Tone.Oscillator().toDestination().start();
   * osc.frequency.value = 440;
   * // the ratio between the bpm and the frequency will be maintained
   * osc.syncFrequency();
   * // double the tempo
   * Tone.Transport.bpm.value *= 2;
   * // the frequency of the oscillator is doubled to 880
   */
  syncFrequency() {
    return this.context.transport.syncSignal(this.frequency), this;
  }
  /**
   * Unsync the oscillator's frequency from the Transport.
   * See Oscillator.syncFrequency
   */
  unsyncFrequency() {
    return this.context.transport.unsyncSignal(this.frequency), this;
  }
  /**
   * Get a cached periodic wave. Avoids having to recompute
   * the oscillator values when they have already been computed
   * with the same values.
   */
  _getCachedPeriodicWave() {
    if (this._type === "custom")
      return Oscillator._periodicWaveCache.find((description) => description.phase === this._phase && deepEquals(description.partials, this._partials));
    {
      let oscProps = Oscillator._periodicWaveCache.find((description) => description.type === this._type && description.phase === this._phase);
      return this._partialCount = oscProps ? oscProps.partialCount : this._partialCount, oscProps;
    }
  }
  get type() {
    return this._type;
  }
  set type(type) {
    this._type = type;
    let isBasicType = ["sine", "square", "sawtooth", "triangle"].indexOf(type) !== -1;
    if (this._phase === 0 && isBasicType)
      this._wave = void 0, this._partialCount = 0, this._oscillator !== null && (this._oscillator.type = type);
    else {
      let cache = this._getCachedPeriodicWave();
      if (isDefined(cache)) {
        let { partials, wave } = cache;
        this._wave = wave, this._partials = partials, this._oscillator !== null && this._oscillator.setPeriodicWave(this._wave);
      } else {
        let [real, imag] = this._getRealImaginary(type, this._phase), periodicWave = this.context.createPeriodicWave(real, imag);
        this._wave = periodicWave, this._oscillator !== null && this._oscillator.setPeriodicWave(this._wave), Oscillator._periodicWaveCache.push({
          imag,
          partialCount: this._partialCount,
          partials: this._partials,
          phase: this._phase,
          real,
          type: this._type,
          wave: this._wave
        }), Oscillator._periodicWaveCache.length > 100 && Oscillator._periodicWaveCache.shift();
      }
    }
  }
  get baseType() {
    return this._type.replace(this.partialCount.toString(), "");
  }
  set baseType(baseType) {
    this.partialCount && this._type !== "custom" && baseType !== "custom" ? this.type = baseType + this.partialCount : this.type = baseType;
  }
  get partialCount() {
    return this._partialCount;
  }
  set partialCount(p) {
    assertRange(p, 0);
    let type = this._type, partial = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
    if (partial && (type = partial[1]), this._type !== "custom")
      p === 0 ? this.type = type : this.type = type + p.toString();
    else {
      let fullPartials = new Float32Array(p);
      this._partials.forEach((v, i) => fullPartials[i] = v), this._partials = Array.from(fullPartials), this.type = this._type;
    }
  }
  /**
   * Returns the real and imaginary components based
   * on the oscillator type.
   * @returns [real: Float32Array, imaginary: Float32Array]
   */
  _getRealImaginary(type, phase) {
    let periodicWaveSize = 2048, real = new Float32Array(periodicWaveSize), imag = new Float32Array(periodicWaveSize), partialCount = 1;
    if (type === "custom") {
      if (partialCount = this._partials.length + 1, this._partialCount = this._partials.length, periodicWaveSize = partialCount, this._partials.length === 0)
        return [real, imag];
    } else {
      let partial = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(type);
      partial ? (partialCount = parseInt(partial[2], 10) + 1, this._partialCount = parseInt(partial[2], 10), type = partial[1], partialCount = Math.max(partialCount, 2), periodicWaveSize = partialCount) : this._partialCount = 0, this._partials = [];
    }
    for (let n = 1; n < periodicWaveSize; ++n) {
      let piFactor = 2 / (n * Math.PI), b;
      switch (type) {
        case "sine":
          b = n <= partialCount ? 1 : 0, this._partials[n - 1] = b;
          break;
        case "square":
          b = n & 1 ? 2 * piFactor : 0, this._partials[n - 1] = b;
          break;
        case "sawtooth":
          b = piFactor * (n & 1 ? 1 : -1), this._partials[n - 1] = b;
          break;
        case "triangle":
          n & 1 ? b = 2 * (piFactor * piFactor) * (n - 1 >> 1 & 1 ? -1 : 1) : b = 0, this._partials[n - 1] = b;
          break;
        case "custom":
          b = this._partials[n - 1];
          break;
        default:
          throw new TypeError("Oscillator: invalid type: " + type);
      }
      b !== 0 ? (real[n] = -b * Math.sin(phase * n), imag[n] = b * Math.cos(phase * n)) : (real[n] = 0, imag[n] = 0);
    }
    return [real, imag];
  }
  /**
   * Compute the inverse FFT for a given phase.
   */
  _inverseFFT(real, imag, phase) {
    let sum = 0, len = real.length;
    for (let i = 0; i < len; i++)
      sum += real[i] * Math.cos(i * phase) + imag[i] * Math.sin(i * phase);
    return sum;
  }
  /**
   * Returns the initial value of the oscillator when stopped.
   * E.g. a "sine" oscillator with phase = 90 would return an initial value of -1.
   */
  getInitialValue() {
    let [real, imag] = this._getRealImaginary(this._type, 0), maxValue = 0, twoPi = Math.PI * 2, testPositions = 32;
    for (let i = 0; i < testPositions; i++)
      maxValue = Math.max(this._inverseFFT(real, imag, i / testPositions * twoPi), maxValue);
    return clamp(-this._inverseFFT(real, imag, this._phase) / maxValue, -1, 1);
  }
  get partials() {
    return this._partials.slice(0, this.partialCount);
  }
  set partials(partials) {
    this._partials = partials, this._partialCount = this._partials.length, partials.length && (this.type = "custom");
  }
  get phase() {
    return this._phase * (180 / Math.PI);
  }
  set phase(phase) {
    this._phase = phase * Math.PI / 180, this.type = this._type;
  }
  asArray(length = 1024) {
    return __awaiter8(this, void 0, void 0, function* () {
      return generateWaveform(this, length);
    });
  }
  dispose() {
    return super.dispose(), this._oscillator !== null && this._oscillator.dispose(), this._wave = void 0, this.frequency.dispose(), this.detune.dispose(), this;
  }
};
Oscillator._periodicWaveCache = [];

// node_modules/tone/build/esm/source/oscillator/AMOscillator.js
import { __awaiter as __awaiter9 } from "tslib";

// node_modules/tone/build/esm/signal/SignalOperator.js
var SignalOperator = class extends ToneAudioNode {
  constructor() {
    super(Object.assign(optionsFromArguments(SignalOperator.getDefaults(), arguments, ["context"])));
  }
  connect(destination, outputNum = 0, inputNum = 0) {
    return connectSignal(this, destination, outputNum, inputNum), this;
  }
};

// node_modules/tone/build/esm/signal/WaveShaper.js
var WaveShaper = class extends SignalOperator {
  constructor() {
    super(Object.assign(optionsFromArguments(WaveShaper.getDefaults(), arguments, ["mapping", "length"]))), this.name = "WaveShaper", this._shaper = this.context.createWaveShaper(), this.input = this._shaper, this.output = this._shaper;
    let options = optionsFromArguments(WaveShaper.getDefaults(), arguments, ["mapping", "length"]);
    isArray(options.mapping) || options.mapping instanceof Float32Array ? this.curve = Float32Array.from(options.mapping) : isFunction(options.mapping) && this.setMap(options.mapping, options.length);
  }
  static getDefaults() {
    return Object.assign(Signal.getDefaults(), {
      length: 1024
    });
  }
  /**
   * Uses a mapping function to set the value of the curve.
   * @param mapping The function used to define the values.
   *                The mapping function take two arguments:
   *                the first is the value at the current position
   *                which goes from -1 to 1 over the number of elements
   *                in the curve array. The second argument is the array position.
   * @example
   * const shaper = new Tone.WaveShaper();
   * // map the input signal from [-1, 1] to [0, 10]
   * shaper.setMap((val, index) => (val + 1) * 5);
   */
  setMap(mapping, length = 1024) {
    let array = new Float32Array(length);
    for (let i = 0, len = length; i < len; i++) {
      let normalized = i / (len - 1) * 2 - 1;
      array[i] = mapping(normalized, i);
    }
    return this.curve = array, this;
  }
  /**
   * The array to set as the waveshaper curve. For linear curves
   * array length does not make much difference, but for complex curves
   * longer arrays will provide smoother interpolation.
   */
  get curve() {
    return this._shaper.curve;
  }
  set curve(mapping) {
    this._shaper.curve = mapping;
  }
  /**
   * Specifies what type of oversampling (if any) should be used when
   * applying the shaping curve. Can either be "none", "2x" or "4x".
   */
  get oversample() {
    return this._shaper.oversample;
  }
  set oversample(oversampling) {
    let isOverSampleType = ["none", "2x", "4x"].some((str) => str.includes(oversampling));
    assert(isOverSampleType, "oversampling must be either 'none', '2x', or '4x'"), this._shaper.oversample = oversampling;
  }
  /**
   * Clean up.
   */
  dispose() {
    return super.dispose(), this._shaper.disconnect(), this;
  }
};

// node_modules/tone/build/esm/signal/AudioToGain.js
var AudioToGain = class extends SignalOperator {
  constructor() {
    super(...arguments), this.name = "AudioToGain", this._norm = new WaveShaper({
      context: this.context,
      mapping: (x) => (x + 1) / 2
    }), this.input = this._norm, this.output = this._norm;
  }
  /**
   * clean up
   */
  dispose() {
    return super.dispose(), this._norm.dispose(), this;
  }
};

// node_modules/tone/build/esm/signal/Multiply.js
var Multiply = class extends Signal {
  constructor() {
    super(Object.assign(optionsFromArguments(Multiply.getDefaults(), arguments, ["value"]))), this.name = "Multiply", this.override = !1;
    let options = optionsFromArguments(Multiply.getDefaults(), arguments, ["value"]);
    this._mult = this.input = this.output = new Gain({
      context: this.context,
      minValue: options.minValue,
      maxValue: options.maxValue
    }), this.factor = this._param = this._mult.gain, this.factor.setValueAtTime(options.value, 0);
  }
  static getDefaults() {
    return Object.assign(Signal.getDefaults(), {
      value: 0
    });
  }
  dispose() {
    return super.dispose(), this._mult.dispose(), this;
  }
};

// node_modules/tone/build/esm/source/oscillator/AMOscillator.js
var AMOscillator = class extends Source {
  constructor() {
    super(optionsFromArguments(AMOscillator.getDefaults(), arguments, ["frequency", "type", "modulationType"])), this.name = "AMOscillator", this._modulationScale = new AudioToGain({ context: this.context }), this._modulationNode = new Gain({
      context: this.context
    });
    let options = optionsFromArguments(AMOscillator.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
    this._carrier = new Oscillator({
      context: this.context,
      detune: options.detune,
      frequency: options.frequency,
      onstop: () => this.onstop(this),
      phase: options.phase,
      type: options.type
    }), this.frequency = this._carrier.frequency, this.detune = this._carrier.detune, this._modulator = new Oscillator({
      context: this.context,
      phase: options.phase,
      type: options.modulationType
    }), this.harmonicity = new Multiply({
      context: this.context,
      units: "positive",
      value: options.harmonicity
    }), this.frequency.chain(this.harmonicity, this._modulator.frequency), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output), readOnly(this, ["frequency", "detune", "harmonicity"]);
  }
  static getDefaults() {
    return Object.assign(Oscillator.getDefaults(), {
      harmonicity: 1,
      modulationType: "square"
    });
  }
  /**
   * start the oscillator
   */
  _start(time) {
    this._modulator.start(time), this._carrier.start(time);
  }
  /**
   * stop the oscillator
   */
  _stop(time) {
    this._modulator.stop(time), this._carrier.stop(time);
  }
  _restart(time) {
    this._modulator.restart(time), this._carrier.restart(time);
  }
  /**
   * The type of the carrier oscillator
   */
  get type() {
    return this._carrier.type;
  }
  set type(type) {
    this._carrier.type = type;
  }
  get baseType() {
    return this._carrier.baseType;
  }
  set baseType(baseType) {
    this._carrier.baseType = baseType;
  }
  get partialCount() {
    return this._carrier.partialCount;
  }
  set partialCount(partialCount) {
    this._carrier.partialCount = partialCount;
  }
  /**
   * The type of the modulator oscillator
   */
  get modulationType() {
    return this._modulator.type;
  }
  set modulationType(type) {
    this._modulator.type = type;
  }
  get phase() {
    return this._carrier.phase;
  }
  set phase(phase) {
    this._carrier.phase = phase, this._modulator.phase = phase;
  }
  get partials() {
    return this._carrier.partials;
  }
  set partials(partials) {
    this._carrier.partials = partials;
  }
  asArray(length = 1024) {
    return __awaiter9(this, void 0, void 0, function* () {
      return generateWaveform(this, length);
    });
  }
  /**
   * Clean up.
   */
  dispose() {
    return super.dispose(), this.frequency.dispose(), this.detune.dispose(), this.harmonicity.dispose(), this._carrier.dispose(), this._modulator.dispose(), this._modulationNode.dispose(), this._modulationScale.dispose(), this;
  }
};

// node_modules/tone/build/esm/source/oscillator/FMOscillator.js
import { __awaiter as __awaiter10 } from "tslib";
var FMOscillator = class extends Source {
  constructor() {
    super(optionsFromArguments(FMOscillator.getDefaults(), arguments, ["frequency", "type", "modulationType"])), this.name = "FMOscillator", this._modulationNode = new Gain({
      context: this.context,
      gain: 0
    });
    let options = optionsFromArguments(FMOscillator.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
    this._carrier = new Oscillator({
      context: this.context,
      detune: options.detune,
      frequency: 0,
      onstop: () => this.onstop(this),
      phase: options.phase,
      type: options.type
    }), this.detune = this._carrier.detune, this.frequency = new Signal({
      context: this.context,
      units: "frequency",
      value: options.frequency
    }), this._modulator = new Oscillator({
      context: this.context,
      phase: options.phase,
      type: options.modulationType
    }), this.harmonicity = new Multiply({
      context: this.context,
      units: "positive",
      value: options.harmonicity
    }), this.modulationIndex = new Multiply({
      context: this.context,
      units: "positive",
      value: options.modulationIndex
    }), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output), this.detune.connect(this._modulator.detune), readOnly(this, ["modulationIndex", "frequency", "detune", "harmonicity"]);
  }
  static getDefaults() {
    return Object.assign(Oscillator.getDefaults(), {
      harmonicity: 1,
      modulationIndex: 2,
      modulationType: "square"
    });
  }
  /**
   * start the oscillator
   */
  _start(time) {
    this._modulator.start(time), this._carrier.start(time);
  }
  /**
   * stop the oscillator
   */
  _stop(time) {
    this._modulator.stop(time), this._carrier.stop(time);
  }
  _restart(time) {
    return this._modulator.restart(time), this._carrier.restart(time), this;
  }
  get type() {
    return this._carrier.type;
  }
  set type(type) {
    this._carrier.type = type;
  }
  get baseType() {
    return this._carrier.baseType;
  }
  set baseType(baseType) {
    this._carrier.baseType = baseType;
  }
  get partialCount() {
    return this._carrier.partialCount;
  }
  set partialCount(partialCount) {
    this._carrier.partialCount = partialCount;
  }
  /**
   * The type of the modulator oscillator
   */
  get modulationType() {
    return this._modulator.type;
  }
  set modulationType(type) {
    this._modulator.type = type;
  }
  get phase() {
    return this._carrier.phase;
  }
  set phase(phase) {
    this._carrier.phase = phase, this._modulator.phase = phase;
  }
  get partials() {
    return this._carrier.partials;
  }
  set partials(partials) {
    this._carrier.partials = partials;
  }
  asArray(length = 1024) {
    return __awaiter10(this, void 0, void 0, function* () {
      return generateWaveform(this, length);
    });
  }
  /**
   * Clean up.
   */
  dispose() {
    return super.dispose(), this.frequency.dispose(), this.harmonicity.dispose(), this._carrier.dispose(), this._modulator.dispose(), this._modulationNode.dispose(), this.modulationIndex.dispose(), this;
  }
};

// node_modules/tone/build/esm/source/oscillator/PulseOscillator.js
import { __awaiter as __awaiter11 } from "tslib";
var PulseOscillator = class extends Source {
  constructor() {
    super(optionsFromArguments(PulseOscillator.getDefaults(), arguments, ["frequency", "width"])), this.name = "PulseOscillator", this._widthGate = new Gain({
      context: this.context,
      gain: 0
    }), this._thresh = new WaveShaper({
      context: this.context,
      mapping: (val) => val <= 0 ? -1 : 1
    });
    let options = optionsFromArguments(PulseOscillator.getDefaults(), arguments, ["frequency", "width"]);
    this.width = new Signal({
      context: this.context,
      units: "audioRange",
      value: options.width
    }), this._triangle = new Oscillator({
      context: this.context,
      detune: options.detune,
      frequency: options.frequency,
      onstop: () => this.onstop(this),
      phase: options.phase,
      type: "triangle"
    }), this.frequency = this._triangle.frequency, this.detune = this._triangle.detune, this._triangle.chain(this._thresh, this.output), this.width.chain(this._widthGate, this._thresh), readOnly(this, ["width", "frequency", "detune"]);
  }
  static getDefaults() {
    return Object.assign(Source.getDefaults(), {
      detune: 0,
      frequency: 440,
      phase: 0,
      type: "pulse",
      width: 0.2
    });
  }
  /**
   * start the oscillator
   */
  _start(time) {
    time = this.toSeconds(time), this._triangle.start(time), this._widthGate.gain.setValueAtTime(1, time);
  }
  /**
   * stop the oscillator
   */
  _stop(time) {
    time = this.toSeconds(time), this._triangle.stop(time), this._widthGate.gain.cancelScheduledValues(time), this._widthGate.gain.setValueAtTime(0, time);
  }
  _restart(time) {
    this._triangle.restart(time), this._widthGate.gain.cancelScheduledValues(time), this._widthGate.gain.setValueAtTime(1, time);
  }
  /**
   * The phase of the oscillator in degrees.
   */
  get phase() {
    return this._triangle.phase;
  }
  set phase(phase) {
    this._triangle.phase = phase;
  }
  /**
   * The type of the oscillator. Always returns "pulse".
   */
  get type() {
    return "pulse";
  }
  /**
   * The baseType of the oscillator. Always returns "pulse".
   */
  get baseType() {
    return "pulse";
  }
  /**
   * The partials of the waveform. Cannot set partials for this waveform type
   */
  get partials() {
    return [];
  }
  /**
   * No partials for this waveform type.
   */
  get partialCount() {
    return 0;
  }
  /**
   * *Internal use* The carrier oscillator type is fed through the
   * waveshaper node to create the pulse. Using different carrier oscillators
   * changes oscillator's behavior.
   */
  set carrierType(type) {
    this._triangle.type = type;
  }
  asArray(length = 1024) {
    return __awaiter11(this, void 0, void 0, function* () {
      return generateWaveform(this, length);
    });
  }
  /**
   * Clean up method.
   */
  dispose() {
    return super.dispose(), this._triangle.dispose(), this.width.dispose(), this._widthGate.dispose(), this._thresh.dispose(), this;
  }
};

// node_modules/tone/build/esm/source/oscillator/FatOscillator.js
import { __awaiter as __awaiter12 } from "tslib";
var FatOscillator = class extends Source {
  constructor() {
    super(optionsFromArguments(FatOscillator.getDefaults(), arguments, ["frequency", "type", "spread"])), this.name = "FatOscillator", this._oscillators = [];
    let options = optionsFromArguments(FatOscillator.getDefaults(), arguments, ["frequency", "type", "spread"]);
    this.frequency = new Signal({
      context: this.context,
      units: "frequency",
      value: options.frequency
    }), this.detune = new Signal({
      context: this.context,
      units: "cents",
      value: options.detune
    }), this._spread = options.spread, this._type = options.type, this._phase = options.phase, this._partials = options.partials, this._partialCount = options.partialCount, this.count = options.count, readOnly(this, ["frequency", "detune"]);
  }
  static getDefaults() {
    return Object.assign(Oscillator.getDefaults(), {
      count: 3,
      spread: 20,
      type: "sawtooth"
    });
  }
  /**
   * start the oscillator
   */
  _start(time) {
    time = this.toSeconds(time), this._forEach((osc) => osc.start(time));
  }
  /**
   * stop the oscillator
   */
  _stop(time) {
    time = this.toSeconds(time), this._forEach((osc) => osc.stop(time));
  }
  _restart(time) {
    this._forEach((osc) => osc.restart(time));
  }
  /**
   * Iterate over all of the oscillators
   */
  _forEach(iterator) {
    for (let i = 0; i < this._oscillators.length; i++)
      iterator(this._oscillators[i], i);
  }
  /**
   * The type of the oscillator
   */
  get type() {
    return this._type;
  }
  set type(type) {
    this._type = type, this._forEach((osc) => osc.type = type);
  }
  /**
   * The detune spread between the oscillators. If "count" is
   * set to 3 oscillators and the "spread" is set to 40,
   * the three oscillators would be detuned like this: [-20, 0, 20]
   * for a total detune spread of 40 cents.
   * @example
   * const fatOsc = new Tone.FatOscillator().toDestination().start();
   * fatOsc.spread = 70;
   */
  get spread() {
    return this._spread;
  }
  set spread(spread) {
    if (this._spread = spread, this._oscillators.length > 1) {
      let start2 = -spread / 2, step = spread / (this._oscillators.length - 1);
      this._forEach((osc, i) => osc.detune.value = start2 + step * i);
    }
  }
  /**
   * The number of detuned oscillators. Must be an integer greater than 1.
   * @example
   * const fatOsc = new Tone.FatOscillator("C#3", "sawtooth").toDestination().start();
   * // use 4 sawtooth oscillators
   * fatOsc.count = 4;
   */
  get count() {
    return this._oscillators.length;
  }
  set count(count) {
    if (assertRange(count, 1), this._oscillators.length !== count) {
      this._forEach((osc) => osc.dispose()), this._oscillators = [];
      for (let i = 0; i < count; i++) {
        let osc = new Oscillator({
          context: this.context,
          volume: -6 - count * 1.1,
          type: this._type,
          phase: this._phase + i / count * 360,
          partialCount: this._partialCount,
          onstop: i === 0 ? () => this.onstop(this) : noOp
        });
        this.type === "custom" && (osc.partials = this._partials), this.frequency.connect(osc.frequency), this.detune.connect(osc.detune), osc.detune.overridden = !1, osc.connect(this.output), this._oscillators[i] = osc;
      }
      this.spread = this._spread, this.state === "started" && this._forEach((osc) => osc.start());
    }
  }
  get phase() {
    return this._phase;
  }
  set phase(phase) {
    this._phase = phase, this._forEach((osc, i) => osc.phase = this._phase + i / this.count * 360);
  }
  get baseType() {
    return this._oscillators[0].baseType;
  }
  set baseType(baseType) {
    this._forEach((osc) => osc.baseType = baseType), this._type = this._oscillators[0].type;
  }
  get partials() {
    return this._oscillators[0].partials;
  }
  set partials(partials) {
    this._partials = partials, this._partialCount = this._partials.length, partials.length && (this._type = "custom", this._forEach((osc) => osc.partials = partials));
  }
  get partialCount() {
    return this._oscillators[0].partialCount;
  }
  set partialCount(partialCount) {
    this._partialCount = partialCount, this._forEach((osc) => osc.partialCount = partialCount), this._type = this._oscillators[0].type;
  }
  asArray(length = 1024) {
    return __awaiter12(this, void 0, void 0, function* () {
      return generateWaveform(this, length);
    });
  }
  /**
   * Clean up.
   */
  dispose() {
    return super.dispose(), this.frequency.dispose(), this.detune.dispose(), this._forEach((osc) => osc.dispose()), this;
  }
};

// node_modules/tone/build/esm/source/oscillator/PWMOscillator.js
import { __awaiter as __awaiter13 } from "tslib";
var PWMOscillator = class extends Source {
  constructor() {
    super(optionsFromArguments(PWMOscillator.getDefaults(), arguments, ["frequency", "modulationFrequency"])), this.name = "PWMOscillator", this.sourceType = "pwm", this._scale = new Multiply({
      context: this.context,
      value: 2
    });
    let options = optionsFromArguments(PWMOscillator.getDefaults(), arguments, ["frequency", "modulationFrequency"]);
    this._pulse = new PulseOscillator({
      context: this.context,
      frequency: options.modulationFrequency
    }), this._pulse.carrierType = "sine", this.modulationFrequency = this._pulse.frequency, this._modulator = new Oscillator({
      context: this.context,
      detune: options.detune,
      frequency: options.frequency,
      onstop: () => this.onstop(this),
      phase: options.phase
    }), this.frequency = this._modulator.frequency, this.detune = this._modulator.detune, this._modulator.chain(this._scale, this._pulse.width), this._pulse.connect(this.output), readOnly(this, ["modulationFrequency", "frequency", "detune"]);
  }
  static getDefaults() {
    return Object.assign(Source.getDefaults(), {
      detune: 0,
      frequency: 440,
      modulationFrequency: 0.4,
      phase: 0,
      type: "pwm"
    });
  }
  /**
   * start the oscillator
   */
  _start(time) {
    time = this.toSeconds(time), this._modulator.start(time), this._pulse.start(time);
  }
  /**
   * stop the oscillator
   */
  _stop(time) {
    time = this.toSeconds(time), this._modulator.stop(time), this._pulse.stop(time);
  }
  /**
   * restart the oscillator
   */
  _restart(time) {
    this._modulator.restart(time), this._pulse.restart(time);
  }
  /**
   * The type of the oscillator. Always returns "pwm".
   */
  get type() {
    return "pwm";
  }
  /**
   * The baseType of the oscillator. Always returns "pwm".
   */
  get baseType() {
    return "pwm";
  }
  /**
   * The partials of the waveform. Cannot set partials for this waveform type
   */
  get partials() {
    return [];
  }
  /**
   * No partials for this waveform type.
   */
  get partialCount() {
    return 0;
  }
  /**
   * The phase of the oscillator in degrees.
   */
  get phase() {
    return this._modulator.phase;
  }
  set phase(phase) {
    this._modulator.phase = phase;
  }
  asArray(length = 1024) {
    return __awaiter13(this, void 0, void 0, function* () {
      return generateWaveform(this, length);
    });
  }
  /**
   * Clean up.
   */
  dispose() {
    return super.dispose(), this._pulse.dispose(), this._scale.dispose(), this._modulator.dispose(), this;
  }
};

// node_modules/tone/build/esm/source/oscillator/OmniOscillator.js
import { __awaiter as __awaiter14 } from "tslib";
var OmniOscillatorSourceMap = {
  am: AMOscillator,
  fat: FatOscillator,
  fm: FMOscillator,
  oscillator: Oscillator,
  pulse: PulseOscillator,
  pwm: PWMOscillator
}, OmniOscillator = class extends Source {
  constructor() {
    super(optionsFromArguments(OmniOscillator.getDefaults(), arguments, ["frequency", "type"])), this.name = "OmniOscillator";
    let options = optionsFromArguments(OmniOscillator.getDefaults(), arguments, ["frequency", "type"]);
    this.frequency = new Signal({
      context: this.context,
      units: "frequency",
      value: options.frequency
    }), this.detune = new Signal({
      context: this.context,
      units: "cents",
      value: options.detune
    }), readOnly(this, ["frequency", "detune"]), this.set(options);
  }
  static getDefaults() {
    return Object.assign(Oscillator.getDefaults(), FMOscillator.getDefaults(), AMOscillator.getDefaults(), FatOscillator.getDefaults(), PulseOscillator.getDefaults(), PWMOscillator.getDefaults());
  }
  /**
   * start the oscillator
   */
  _start(time) {
    this._oscillator.start(time);
  }
  /**
   * start the oscillator
   */
  _stop(time) {
    this._oscillator.stop(time);
  }
  _restart(time) {
    return this._oscillator.restart(time), this;
  }
  /**
   * The type of the oscillator. Can be any of the basic types: sine, square, triangle, sawtooth. Or
   * prefix the basic types with "fm", "am", or "fat" to use the FMOscillator, AMOscillator or FatOscillator
   * types. The oscillator could also be set to "pwm" or "pulse". All of the parameters of the
   * oscillator's class are accessible when the oscillator is set to that type, but throws an error
   * when it's not.
   * @example
   * const omniOsc = new Tone.OmniOscillator().toDestination().start();
   * omniOsc.type = "pwm";
   * // modulationFrequency is parameter which is available
   * // only when the type is "pwm".
   * omniOsc.modulationFrequency.value = 0.5;
   */
  get type() {
    let prefix = "";
    return ["am", "fm", "fat"].some((p) => this._sourceType === p) && (prefix = this._sourceType), prefix + this._oscillator.type;
  }
  set type(type) {
    type.substr(0, 2) === "fm" ? (this._createNewOscillator("fm"), this._oscillator = this._oscillator, this._oscillator.type = type.substr(2)) : type.substr(0, 2) === "am" ? (this._createNewOscillator("am"), this._oscillator = this._oscillator, this._oscillator.type = type.substr(2)) : type.substr(0, 3) === "fat" ? (this._createNewOscillator("fat"), this._oscillator = this._oscillator, this._oscillator.type = type.substr(3)) : type === "pwm" ? (this._createNewOscillator("pwm"), this._oscillator = this._oscillator) : type === "pulse" ? this._createNewOscillator("pulse") : (this._createNewOscillator("oscillator"), this._oscillator = this._oscillator, this._oscillator.type = type);
  }
  /**
   * The value is an empty array when the type is not "custom".
   * This is not available on "pwm" and "pulse" oscillator types.
   * See [[Oscillator.partials]]
   */
  get partials() {
    return this._oscillator.partials;
  }
  set partials(partials) {
    !this._getOscType(this._oscillator, "pulse") && !this._getOscType(this._oscillator, "pwm") && (this._oscillator.partials = partials);
  }
  get partialCount() {
    return this._oscillator.partialCount;
  }
  set partialCount(partialCount) {
    !this._getOscType(this._oscillator, "pulse") && !this._getOscType(this._oscillator, "pwm") && (this._oscillator.partialCount = partialCount);
  }
  set(props) {
    return Reflect.has(props, "type") && props.type && (this.type = props.type), super.set(props), this;
  }
  /**
   * connect the oscillator to the frequency and detune signals
   */
  _createNewOscillator(oscType) {
    if (oscType !== this._sourceType) {
      this._sourceType = oscType;
      let OscConstructor = OmniOscillatorSourceMap[oscType], now2 = this.now();
      if (this._oscillator) {
        let oldOsc = this._oscillator;
        oldOsc.stop(now2), this.context.setTimeout(() => oldOsc.dispose(), this.blockTime);
      }
      this._oscillator = new OscConstructor({
        context: this.context
      }), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.connect(this.output), this._oscillator.onstop = () => this.onstop(this), this.state === "started" && this._oscillator.start(now2);
    }
  }
  get phase() {
    return this._oscillator.phase;
  }
  set phase(phase) {
    this._oscillator.phase = phase;
  }
  /**
   * The source type of the oscillator.
   * @example
   * const omniOsc = new Tone.OmniOscillator(440, "fmsquare");
   * console.log(omniOsc.sourceType); // 'fm'
   */
  get sourceType() {
    return this._sourceType;
  }
  set sourceType(sType) {
    let baseType = "sine";
    this._oscillator.type !== "pwm" && this._oscillator.type !== "pulse" && (baseType = this._oscillator.type), sType === "fm" ? this.type = "fm" + baseType : sType === "am" ? this.type = "am" + baseType : sType === "fat" ? this.type = "fat" + baseType : sType === "oscillator" ? this.type = baseType : sType === "pulse" ? this.type = "pulse" : sType === "pwm" && (this.type = "pwm");
  }
  _getOscType(osc, sourceType) {
    return osc instanceof OmniOscillatorSourceMap[sourceType];
  }
  /**
   * The base type of the oscillator. See [[Oscillator.baseType]]
   * @example
   * const omniOsc = new Tone.OmniOscillator(440, "fmsquare4");
   * console.log(omniOsc.sourceType, omniOsc.baseType, omniOsc.partialCount);
   */
  get baseType() {
    return this._oscillator.baseType;
  }
  set baseType(baseType) {
    !this._getOscType(this._oscillator, "pulse") && !this._getOscType(this._oscillator, "pwm") && baseType !== "pulse" && baseType !== "pwm" && (this._oscillator.baseType = baseType);
  }
  /**
   * The width of the oscillator when sourceType === "pulse".
   * See [[PWMOscillator.width]]
   */
  get width() {
    if (this._getOscType(this._oscillator, "pulse"))
      return this._oscillator.width;
  }
  /**
   * The number of detuned oscillators when sourceType === "fat".
   * See [[FatOscillator.count]]
   */
  get count() {
    if (this._getOscType(this._oscillator, "fat"))
      return this._oscillator.count;
  }
  set count(count) {
    this._getOscType(this._oscillator, "fat") && isNumber(count) && (this._oscillator.count = count);
  }
  /**
   * The detune spread between the oscillators when sourceType === "fat".
   * See [[FatOscillator.count]]
   */
  get spread() {
    if (this._getOscType(this._oscillator, "fat"))
      return this._oscillator.spread;
  }
  set spread(spread) {
    this._getOscType(this._oscillator, "fat") && isNumber(spread) && (this._oscillator.spread = spread);
  }
  /**
   * The type of the modulator oscillator. Only if the oscillator is set to "am" or "fm" types.
   * See [[AMOscillator]] or [[FMOscillator]]
   */
  get modulationType() {
    if (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am"))
      return this._oscillator.modulationType;
  }
  set modulationType(mType) {
    (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) && isString(mType) && (this._oscillator.modulationType = mType);
  }
  /**
   * The modulation index when the sourceType === "fm"
   * See [[FMOscillator]].
   */
  get modulationIndex() {
    if (this._getOscType(this._oscillator, "fm"))
      return this._oscillator.modulationIndex;
  }
  /**
   * Harmonicity is the frequency ratio between the carrier and the modulator oscillators.
   * See [[AMOscillator]] or [[FMOscillator]]
   */
  get harmonicity() {
    if (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am"))
      return this._oscillator.harmonicity;
  }
  /**
   * The modulationFrequency Signal of the oscillator when sourceType === "pwm"
   * see [[PWMOscillator]]
   * @min 0.1
   * @max 5
   */
  get modulationFrequency() {
    if (this._getOscType(this._oscillator, "pwm"))
      return this._oscillator.modulationFrequency;
  }
  asArray(length = 1024) {
    return __awaiter14(this, void 0, void 0, function* () {
      return generateWaveform(this, length);
    });
  }
  dispose() {
    return super.dispose(), this.detune.dispose(), this.frequency.dispose(), this._oscillator.dispose(), this;
  }
};

// node_modules/tone/build/esm/source/buffer/Player.js
import { __awaiter as __awaiter15, __decorate } from "tslib";

// node_modules/tone/build/esm/core/util/Decorator.js
function range(min, max = 1 / 0) {
  let valueMap = /* @__PURE__ */ new WeakMap();
  return function(target, propertyKey) {
    Reflect.defineProperty(target, propertyKey, {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return valueMap.get(this);
      },
      set: function(newValue) {
        assertRange(newValue, min, max), valueMap.set(this, newValue);
      }
    });
  };
}
function timeRange(min, max = 1 / 0) {
  let valueMap = /* @__PURE__ */ new WeakMap();
  return function(target, propertyKey) {
    Reflect.defineProperty(target, propertyKey, {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return valueMap.get(this);
      },
      set: function(newValue) {
        assertRange(this.toSeconds(newValue), min, max), valueMap.set(this, newValue);
      }
    });
  };
}

// node_modules/tone/build/esm/source/buffer/Player.js
var Player = class extends Source {
  constructor() {
    super(optionsFromArguments(Player.getDefaults(), arguments, ["url", "onload"])), this.name = "Player", this._activeSources = /* @__PURE__ */ new Set();
    let options = optionsFromArguments(Player.getDefaults(), arguments, ["url", "onload"]);
    this._buffer = new ToneAudioBuffer({
      onload: this._onload.bind(this, options.onload),
      onerror: options.onerror,
      reverse: options.reverse,
      url: options.url
    }), this.autostart = options.autostart, this._loop = options.loop, this._loopStart = options.loopStart, this._loopEnd = options.loopEnd, this._playbackRate = options.playbackRate, this.fadeIn = options.fadeIn, this.fadeOut = options.fadeOut;
  }
  static getDefaults() {
    return Object.assign(Source.getDefaults(), {
      autostart: !1,
      fadeIn: 0,
      fadeOut: 0,
      loop: !1,
      loopEnd: 0,
      loopStart: 0,
      onload: noOp,
      onerror: noOp,
      playbackRate: 1,
      reverse: !1
    });
  }
  /**
   * Load the audio file as an audio buffer.
   * Decodes the audio asynchronously and invokes
   * the callback once the audio buffer loads.
   * Note: this does not need to be called if a url
   * was passed in to the constructor. Only use this
   * if you want to manually load a new url.
   * @param url The url of the buffer to load. Filetype support depends on the browser.
   */
  load(url) {
    return __awaiter15(this, void 0, void 0, function* () {
      return yield this._buffer.load(url), this._onload(), this;
    });
  }
  /**
   * Internal callback when the buffer is loaded.
   */
  _onload(callback = noOp) {
    callback(), this.autostart && this.start();
  }
  /**
   * Internal callback when the buffer is done playing.
   */
  _onSourceEnd(source) {
    this.onstop(this), this._activeSources.delete(source), this._activeSources.size === 0 && !this._synced && this._state.getValueAtTime(this.now()) === "started" && (this._state.cancel(this.now()), this._state.setStateAtTime("stopped", this.now()));
  }
  /**
   * Play the buffer at the given startTime. Optionally add an offset
   * and/or duration which will play the buffer from a position
   * within the buffer for the given duration.
   *
   * @param  time When the player should start.
   * @param  offset The offset from the beginning of the sample to start at.
   * @param  duration How long the sample should play. If no duration is given, it will default to the full length of the sample (minus any offset)
   */
  start(time, offset, duration) {
    return super.start(time, offset, duration), this;
  }
  /**
   * Internal start method
   */
  _start(startTime, offset, duration) {
    this._loop ? offset = defaultArg(offset, this._loopStart) : offset = defaultArg(offset, 0);
    let computedOffset = this.toSeconds(offset), origDuration = duration;
    duration = defaultArg(duration, Math.max(this._buffer.duration - computedOffset, 0));
    let computedDuration = this.toSeconds(duration);
    computedDuration = computedDuration / this._playbackRate, startTime = this.toSeconds(startTime);
    let source = new ToneBufferSource({
      url: this._buffer,
      context: this.context,
      fadeIn: this.fadeIn,
      fadeOut: this.fadeOut,
      loop: this._loop,
      loopEnd: this._loopEnd,
      loopStart: this._loopStart,
      onended: this._onSourceEnd.bind(this),
      playbackRate: this._playbackRate
    }).connect(this.output);
    !this._loop && !this._synced && (this._state.cancel(startTime + computedDuration), this._state.setStateAtTime("stopped", startTime + computedDuration, {
      implicitEnd: !0
    })), this._activeSources.add(source), this._loop && isUndef(origDuration) ? source.start(startTime, computedOffset) : source.start(startTime, computedOffset, computedDuration - this.toSeconds(this.fadeOut));
  }
  /**
   * Stop playback.
   */
  _stop(time) {
    let computedTime = this.toSeconds(time);
    this._activeSources.forEach((source) => source.stop(computedTime));
  }
  /**
   * Stop and then restart the player from the beginning (or offset)
   * @param  time When the player should start.
   * @param  offset The offset from the beginning of the sample to start at.
   * @param  duration How long the sample should play. If no duration is given,
   * 					it will default to the full length of the sample (minus any offset)
   */
  restart(time, offset, duration) {
    return super.restart(time, offset, duration), this;
  }
  _restart(time, offset, duration) {
    this._stop(time), this._start(time, offset, duration);
  }
  /**
   * Seek to a specific time in the player's buffer. If the
   * source is no longer playing at that time, it will stop.
   * @param offset The time to seek to.
   * @param when The time for the seek event to occur.
   * @example
   * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3", () => {
   * 	player.start();
   * 	// seek to the offset in 1 second from now
   * 	player.seek(0.4, "+1");
   * }).toDestination();
   */
  seek(offset, when) {
    let computedTime = this.toSeconds(when);
    if (this._state.getValueAtTime(computedTime) === "started") {
      let computedOffset = this.toSeconds(offset);
      this._stop(computedTime), this._start(computedTime, computedOffset);
    }
    return this;
  }
  /**
   * Set the loop start and end. Will only loop if loop is set to true.
   * @param loopStart The loop start time
   * @param loopEnd The loop end time
   * @example
   * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/malevoices_aa2_F3.mp3").toDestination();
   * // loop between the given points
   * player.setLoopPoints(0.2, 0.3);
   * player.loop = true;
   * player.autostart = true;
   */
  setLoopPoints(loopStart, loopEnd) {
    return this.loopStart = loopStart, this.loopEnd = loopEnd, this;
  }
  /**
   * If loop is true, the loop will start at this position.
   */
  get loopStart() {
    return this._loopStart;
  }
  set loopStart(loopStart) {
    this._loopStart = loopStart, this.buffer.loaded && assertRange(this.toSeconds(loopStart), 0, this.buffer.duration), this._activeSources.forEach((source) => {
      source.loopStart = loopStart;
    });
  }
  /**
   * If loop is true, the loop will end at this position.
   */
  get loopEnd() {
    return this._loopEnd;
  }
  set loopEnd(loopEnd) {
    this._loopEnd = loopEnd, this.buffer.loaded && assertRange(this.toSeconds(loopEnd), 0, this.buffer.duration), this._activeSources.forEach((source) => {
      source.loopEnd = loopEnd;
    });
  }
  /**
   * The audio buffer belonging to the player.
   */
  get buffer() {
    return this._buffer;
  }
  set buffer(buffer) {
    this._buffer.set(buffer);
  }
  /**
   * If the buffer should loop once it's over.
   * @example
   * const player = new Tone.Player("https://tonejs.github.io/audio/drum-samples/breakbeat.mp3").toDestination();
   * player.loop = true;
   * player.autostart = true;
   */
  get loop() {
    return this._loop;
  }
  set loop(loop) {
    if (this._loop !== loop && (this._loop = loop, this._activeSources.forEach((source) => {
      source.loop = loop;
    }), loop)) {
      let stopEvent = this._state.getNextState("stopped", this.now());
      stopEvent && this._state.cancel(stopEvent.time);
    }
  }
  /**
   * Normal speed is 1. The pitch will change with the playback rate.
   * @example
   * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/femalevoices_aa2_A5.mp3").toDestination();
   * // play at 1/4 speed
   * player.playbackRate = 0.25;
   * // play as soon as the buffer is loaded
   * player.autostart = true;
   */
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(rate) {
    this._playbackRate = rate;
    let now2 = this.now(), stopEvent = this._state.getNextState("stopped", now2);
    stopEvent && stopEvent.implicitEnd && (this._state.cancel(stopEvent.time), this._activeSources.forEach((source) => source.cancelStop())), this._activeSources.forEach((source) => {
      source.playbackRate.setValueAtTime(rate, now2);
    });
  }
  /**
   * If the buffer should be reversed
   * @example
   * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/chime_1.mp3").toDestination();
   * player.autostart = true;
   * player.reverse = true;
   */
  get reverse() {
    return this._buffer.reverse;
  }
  set reverse(rev) {
    this._buffer.reverse = rev;
  }
  /**
   * If the buffer is loaded
   */
  get loaded() {
    return this._buffer.loaded;
  }
  dispose() {
    return super.dispose(), this._activeSources.forEach((source) => source.dispose()), this._activeSources.clear(), this._buffer.dispose(), this;
  }
};
__decorate([
  timeRange(0)
], Player.prototype, "fadeIn", void 0);
__decorate([
  timeRange(0)
], Player.prototype, "fadeOut", void 0);

// node_modules/tone/build/esm/component/envelope/Envelope.js
import { __awaiter as __awaiter16, __decorate as __decorate2 } from "tslib";
var Envelope = class extends ToneAudioNode {
  constructor() {
    super(optionsFromArguments(Envelope.getDefaults(), arguments, ["attack", "decay", "sustain", "release"])), this.name = "Envelope", this._sig = new Signal({
      context: this.context,
      value: 0
    }), this.output = this._sig, this.input = void 0;
    let options = optionsFromArguments(Envelope.getDefaults(), arguments, ["attack", "decay", "sustain", "release"]);
    this.attack = options.attack, this.decay = options.decay, this.sustain = options.sustain, this.release = options.release, this.attackCurve = options.attackCurve, this.releaseCurve = options.releaseCurve, this.decayCurve = options.decayCurve;
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      attack: 0.01,
      attackCurve: "linear",
      decay: 0.1,
      decayCurve: "exponential",
      release: 1,
      releaseCurve: "exponential",
      sustain: 0.5
    });
  }
  /**
   * Read the current value of the envelope. Useful for
   * synchronizing visual output to the envelope.
   */
  get value() {
    return this.getValueAtTime(this.now());
  }
  /**
   * Get the curve
   * @param  curve
   * @param  direction  In/Out
   * @return The curve name
   */
  _getCurve(curve, direction) {
    if (isString(curve))
      return curve;
    {
      let curveName;
      for (curveName in EnvelopeCurves)
        if (EnvelopeCurves[curveName][direction] === curve)
          return curveName;
      return curve;
    }
  }
  /**
   * Assign a the curve to the given name using the direction
   * @param  name
   * @param  direction In/Out
   * @param  curve
   */
  _setCurve(name, direction, curve) {
    if (isString(curve) && Reflect.has(EnvelopeCurves, curve)) {
      let curveDef = EnvelopeCurves[curve];
      isObject(curveDef) ? name !== "_decayCurve" && (this[name] = curveDef[direction]) : this[name] = curveDef;
    } else if (isArray(curve) && name !== "_decayCurve")
      this[name] = curve;
    else
      throw new Error("Envelope: invalid curve: " + curve);
  }
  /**
   * The shape of the attack.
   * Can be any of these strings:
   * * "linear"
   * * "exponential"
   * * "sine"
   * * "cosine"
   * * "bounce"
   * * "ripple"
   * * "step"
   *
   * Can also be an array which describes the curve. Values
   * in the array are evenly subdivided and linearly
   * interpolated over the duration of the attack.
   * @example
   * return Tone.Offline(() => {
   * 	const env = new Tone.Envelope(0.4).toDestination();
   * 	env.attackCurve = "linear";
   * 	env.triggerAttack();
   * }, 1, 1);
   */
  get attackCurve() {
    return this._getCurve(this._attackCurve, "In");
  }
  set attackCurve(curve) {
    this._setCurve("_attackCurve", "In", curve);
  }
  /**
   * The shape of the release. See the attack curve types.
   * @example
   * return Tone.Offline(() => {
   * 	const env = new Tone.Envelope({
   * 		release: 0.8
   * 	}).toDestination();
   * 	env.triggerAttack();
   * 	// release curve could also be defined by an array
   * 	env.releaseCurve = [1, 0.3, 0.4, 0.2, 0.7, 0];
   * 	env.triggerRelease(0.2);
   * }, 1, 1);
   */
  get releaseCurve() {
    return this._getCurve(this._releaseCurve, "Out");
  }
  set releaseCurve(curve) {
    this._setCurve("_releaseCurve", "Out", curve);
  }
  /**
   * The shape of the decay either "linear" or "exponential"
   * @example
   * return Tone.Offline(() => {
   * 	const env = new Tone.Envelope({
   * 		sustain: 0.1,
   * 		decay: 0.5
   * 	}).toDestination();
   * 	env.decayCurve = "linear";
   * 	env.triggerAttack();
   * }, 1, 1);
   */
  get decayCurve() {
    return this._decayCurve;
  }
  set decayCurve(curve) {
    assert(["linear", "exponential"].some((c) => c === curve), `Invalid envelope curve: ${curve}`), this._decayCurve = curve;
  }
  /**
   * Trigger the attack/decay portion of the ADSR envelope.
   * @param  time When the attack should start.
   * @param velocity The velocity of the envelope scales the vales.
   *                             number between 0-1
   * @example
   * const env = new Tone.AmplitudeEnvelope().toDestination();
   * const osc = new Tone.Oscillator().connect(env).start();
   * // trigger the attack 0.5 seconds from now with a velocity of 0.2
   * env.triggerAttack("+0.5", 0.2);
   */
  triggerAttack(time, velocity = 1) {
    this.log("triggerAttack", time, velocity), time = this.toSeconds(time);
    let attack = this.toSeconds(this.attack), decay = this.toSeconds(this.decay), currentValue = this.getValueAtTime(time);
    if (currentValue > 0) {
      let attackRate = 1 / attack;
      attack = (1 - currentValue) / attackRate;
    }
    if (attack < this.sampleTime)
      this._sig.cancelScheduledValues(time), this._sig.setValueAtTime(velocity, time);
    else if (this._attackCurve === "linear")
      this._sig.linearRampTo(velocity, attack, time);
    else if (this._attackCurve === "exponential")
      this._sig.targetRampTo(velocity, attack, time);
    else {
      this._sig.cancelAndHoldAtTime(time);
      let curve = this._attackCurve;
      for (let i = 1; i < curve.length; i++)
        if (curve[i - 1] <= currentValue && currentValue <= curve[i]) {
          curve = this._attackCurve.slice(i), curve[0] = currentValue;
          break;
        }
      this._sig.setValueCurveAtTime(curve, time, attack, velocity);
    }
    if (decay && this.sustain < 1) {
      let decayValue = velocity * this.sustain, decayStart = time + attack;
      this.log("decay", decayStart), this._decayCurve === "linear" ? this._sig.linearRampToValueAtTime(decayValue, decay + decayStart) : this._sig.exponentialApproachValueAtTime(decayValue, decayStart, decay);
    }
    return this;
  }
  /**
   * Triggers the release of the envelope.
   * @param  time When the release portion of the envelope should start.
   * @example
   * const env = new Tone.AmplitudeEnvelope().toDestination();
   * const osc = new Tone.Oscillator({
   * 	type: "sawtooth"
   * }).connect(env).start();
   * env.triggerAttack();
   * // trigger the release half a second after the attack
   * env.triggerRelease("+0.5");
   */
  triggerRelease(time) {
    this.log("triggerRelease", time), time = this.toSeconds(time);
    let currentValue = this.getValueAtTime(time);
    if (currentValue > 0) {
      let release = this.toSeconds(this.release);
      release < this.sampleTime ? this._sig.setValueAtTime(0, time) : this._releaseCurve === "linear" ? this._sig.linearRampTo(0, release, time) : this._releaseCurve === "exponential" ? this._sig.targetRampTo(0, release, time) : (assert(isArray(this._releaseCurve), "releaseCurve must be either 'linear', 'exponential' or an array"), this._sig.cancelAndHoldAtTime(time), this._sig.setValueCurveAtTime(this._releaseCurve, time, release, currentValue));
    }
    return this;
  }
  /**
   * Get the scheduled value at the given time. This will
   * return the unconverted (raw) value.
   * @example
   * const env = new Tone.Envelope(0.5, 1, 0.4, 2);
   * env.triggerAttackRelease(2);
   * setInterval(() => console.log(env.getValueAtTime(Tone.now())), 100);
   */
  getValueAtTime(time) {
    return this._sig.getValueAtTime(time);
  }
  /**
   * triggerAttackRelease is shorthand for triggerAttack, then waiting
   * some duration, then triggerRelease.
   * @param duration The duration of the sustain.
   * @param time When the attack should be triggered.
   * @param velocity The velocity of the envelope.
   * @example
   * const env = new Tone.AmplitudeEnvelope().toDestination();
   * const osc = new Tone.Oscillator().connect(env).start();
   * // trigger the release 0.5 seconds after the attack
   * env.triggerAttackRelease(0.5);
   */
  triggerAttackRelease(duration, time, velocity = 1) {
    return time = this.toSeconds(time), this.triggerAttack(time, velocity), this.triggerRelease(time + this.toSeconds(duration)), this;
  }
  /**
   * Cancels all scheduled envelope changes after the given time.
   */
  cancel(after) {
    return this._sig.cancelScheduledValues(this.toSeconds(after)), this;
  }
  /**
   * Connect the envelope to a destination node.
   */
  connect(destination, outputNumber = 0, inputNumber = 0) {
    return connectSignal(this, destination, outputNumber, inputNumber), this;
  }
  /**
   * Render the envelope curve to an array of the given length.
   * Good for visualizing the envelope curve. Rescales the duration of the
   * envelope to fit the length.
   */
  asArray(length = 1024) {
    return __awaiter16(this, void 0, void 0, function* () {
      let duration = length / this.context.sampleRate, context2 = new OfflineContext(1, duration, this.context.sampleRate), attackPortion = this.toSeconds(this.attack) + this.toSeconds(this.decay), envelopeDuration = attackPortion + this.toSeconds(this.release), sustainTime = envelopeDuration * 0.1, totalDuration = envelopeDuration + sustainTime, clone = new this.constructor(Object.assign(this.get(), {
        attack: duration * this.toSeconds(this.attack) / totalDuration,
        decay: duration * this.toSeconds(this.decay) / totalDuration,
        release: duration * this.toSeconds(this.release) / totalDuration,
        context: context2
      }));
      return clone._sig.toDestination(), clone.triggerAttackRelease(duration * (attackPortion + sustainTime) / totalDuration, 0), (yield context2.render()).getChannelData(0);
    });
  }
  dispose() {
    return super.dispose(), this._sig.dispose(), this;
  }
};
__decorate2([
  timeRange(0)
], Envelope.prototype, "attack", void 0);
__decorate2([
  timeRange(0)
], Envelope.prototype, "decay", void 0);
__decorate2([
  range(0, 1)
], Envelope.prototype, "sustain", void 0);
__decorate2([
  timeRange(0)
], Envelope.prototype, "release", void 0);
var EnvelopeCurves = (() => {
  let i, k, cosineCurve = [];
  for (i = 0; i < 128; i++)
    cosineCurve[i] = Math.sin(i / (128 - 1) * (Math.PI / 2));
  let rippleCurve = [], rippleCurveFreq = 6.4;
  for (i = 0; i < 128 - 1; i++) {
    k = i / (128 - 1);
    let sineWave = Math.sin(k * (Math.PI * 2) * rippleCurveFreq - Math.PI / 2) + 1;
    rippleCurve[i] = sineWave / 10 + k * 0.83;
  }
  rippleCurve[128 - 1] = 1;
  let stairsCurve = [], steps = 5;
  for (i = 0; i < 128; i++)
    stairsCurve[i] = Math.ceil(i / (128 - 1) * steps) / steps;
  let sineCurve = [];
  for (i = 0; i < 128; i++)
    k = i / (128 - 1), sineCurve[i] = 0.5 * (1 - Math.cos(Math.PI * k));
  let bounceCurve = [];
  for (i = 0; i < 128; i++) {
    k = i / (128 - 1);
    let freq = Math.pow(k, 3) * 4 + 0.2, val = Math.cos(freq * Math.PI * 2 * k);
    bounceCurve[i] = Math.abs(val * (1 - k));
  }
  function invertCurve(curve) {
    let out = new Array(curve.length);
    for (let j = 0; j < curve.length; j++)
      out[j] = 1 - curve[j];
    return out;
  }
  function reverseCurve(curve) {
    return curve.slice(0).reverse();
  }
  return {
    bounce: {
      In: invertCurve(bounceCurve),
      Out: bounceCurve
    },
    cosine: {
      In: cosineCurve,
      Out: reverseCurve(cosineCurve)
    },
    exponential: "exponential",
    linear: "linear",
    ripple: {
      In: rippleCurve,
      Out: invertCurve(rippleCurve)
    },
    sine: {
      In: sineCurve,
      Out: invertCurve(sineCurve)
    },
    step: {
      In: stairsCurve,
      Out: invertCurve(stairsCurve)
    }
  };
})();

// node_modules/tone/build/esm/instrument/Monophonic.js
import { __decorate as __decorate3 } from "tslib";

// node_modules/tone/build/esm/instrument/Instrument.js
var Instrument = class extends ToneAudioNode {
  constructor() {
    super(optionsFromArguments(Instrument.getDefaults(), arguments)), this._scheduledEvents = [], this._synced = !1, this._original_triggerAttack = this.triggerAttack, this._original_triggerRelease = this.triggerRelease;
    let options = optionsFromArguments(Instrument.getDefaults(), arguments);
    this._volume = this.output = new Volume({
      context: this.context,
      volume: options.volume
    }), this.volume = this._volume.volume, readOnly(this, "volume");
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      volume: 0
    });
  }
  /**
   * Sync the instrument to the Transport. All subsequent calls of
   * [[triggerAttack]] and [[triggerRelease]] will be scheduled along the transport.
   * @example
   * const fmSynth = new Tone.FMSynth().toDestination();
   * fmSynth.volume.value = -6;
   * fmSynth.sync();
   * // schedule 3 notes when the transport first starts
   * fmSynth.triggerAttackRelease("C4", "8n", 0);
   * fmSynth.triggerAttackRelease("E4", "8n", "8n");
   * fmSynth.triggerAttackRelease("G4", "8n", "4n");
   * // start the transport to hear the notes
   * Tone.Transport.start();
   */
  sync() {
    return this._syncState() && (this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 0)), this;
  }
  /**
   * set _sync
   */
  _syncState() {
    let changed = !1;
    return this._synced || (this._synced = !0, changed = !0), changed;
  }
  /**
   * Wrap the given method so that it can be synchronized
   * @param method Which method to wrap and sync
   * @param  timePosition What position the time argument appears in
   */
  _syncMethod(method, timePosition) {
    let originalMethod = this["_original_" + method] = this[method];
    this[method] = (...args) => {
      let time = args[timePosition], id = this.context.transport.schedule((t) => {
        args[timePosition] = t, originalMethod.apply(this, args);
      }, time);
      this._scheduledEvents.push(id);
    };
  }
  /**
   * Unsync the instrument from the Transport
   */
  unsync() {
    return this._scheduledEvents.forEach((id) => this.context.transport.clear(id)), this._scheduledEvents = [], this._synced && (this._synced = !1, this.triggerAttack = this._original_triggerAttack, this.triggerRelease = this._original_triggerRelease), this;
  }
  /**
   * Trigger the attack and then the release after the duration.
   * @param  note     The note to trigger.
   * @param  duration How long the note should be held for before
   *                         triggering the release. This value must be greater than 0.
   * @param time  When the note should be triggered.
   * @param  velocity The velocity the note should be triggered at.
   * @example
   * const synth = new Tone.Synth().toDestination();
   * // trigger "C4" for the duration of an 8th note
   * synth.triggerAttackRelease("C4", "8n");
   */
  triggerAttackRelease(note, duration, time, velocity) {
    let computedTime = this.toSeconds(time), computedDuration = this.toSeconds(duration);
    return this.triggerAttack(note, computedTime, velocity), this.triggerRelease(computedTime + computedDuration), this;
  }
  /**
   * clean up
   * @returns {Instrument} this
   */
  dispose() {
    return super.dispose(), this._volume.dispose(), this.unsync(), this._scheduledEvents = [], this;
  }
};

// node_modules/tone/build/esm/instrument/Monophonic.js
var Monophonic = class extends Instrument {
  constructor() {
    super(optionsFromArguments(Monophonic.getDefaults(), arguments));
    let options = optionsFromArguments(Monophonic.getDefaults(), arguments);
    this.portamento = options.portamento, this.onsilence = options.onsilence;
  }
  static getDefaults() {
    return Object.assign(Instrument.getDefaults(), {
      detune: 0,
      onsilence: noOp,
      portamento: 0
    });
  }
  /**
   * Trigger the attack of the note optionally with a given velocity.
   * @param  note The note to trigger.
   * @param  time When the note should start.
   * @param  velocity The velocity scaler determines how "loud" the note will be triggered.
   * @example
   * const synth = new Tone.Synth().toDestination();
   * // trigger the note a half second from now at half velocity
   * synth.triggerAttack("C4", "+0.5", 0.5);
   */
  triggerAttack(note, time, velocity = 1) {
    this.log("triggerAttack", note, time, velocity);
    let seconds = this.toSeconds(time);
    return this._triggerEnvelopeAttack(seconds, velocity), this.setNote(note, seconds), this;
  }
  /**
   * Trigger the release portion of the envelope
   * @param  time If no time is given, the release happens immediatly
   * @example
   * const synth = new Tone.Synth().toDestination();
   * synth.triggerAttack("C4");
   * // trigger the release a second from now
   * synth.triggerRelease("+1");
   */
  triggerRelease(time) {
    this.log("triggerRelease", time);
    let seconds = this.toSeconds(time);
    return this._triggerEnvelopeRelease(seconds), this;
  }
  /**
   * Set the note at the given time. If no time is given, the note
   * will set immediately.
   * @param note The note to change to.
   * @param  time The time when the note should be set.
   * @example
   * const synth = new Tone.Synth().toDestination();
   * synth.triggerAttack("C4");
   * // change to F#6 in one quarter note from now.
   * synth.setNote("F#6", "+4n");
   */
  setNote(note, time) {
    let computedTime = this.toSeconds(time), computedFrequency = note instanceof FrequencyClass ? note.toFrequency() : note;
    if (this.portamento > 0 && this.getLevelAtTime(computedTime) > 0.05) {
      let portTime = this.toSeconds(this.portamento);
      this.frequency.exponentialRampTo(computedFrequency, portTime, computedTime);
    } else
      this.frequency.setValueAtTime(computedFrequency, computedTime);
    return this;
  }
};
__decorate3([
  timeRange(0)
], Monophonic.prototype, "portamento", void 0);

// node_modules/tone/build/esm/component/envelope/AmplitudeEnvelope.js
var AmplitudeEnvelope = class extends Envelope {
  constructor() {
    super(optionsFromArguments(AmplitudeEnvelope.getDefaults(), arguments, ["attack", "decay", "sustain", "release"])), this.name = "AmplitudeEnvelope", this._gainNode = new Gain({
      context: this.context,
      gain: 0
    }), this.output = this._gainNode, this.input = this._gainNode, this._sig.connect(this._gainNode.gain), this.output = this._gainNode, this.input = this._gainNode;
  }
  /**
   * Clean up
   */
  dispose() {
    return super.dispose(), this._gainNode.dispose(), this;
  }
};

// node_modules/tone/build/esm/instrument/Synth.js
var Synth = class extends Monophonic {
  constructor() {
    super(optionsFromArguments(Synth.getDefaults(), arguments)), this.name = "Synth";
    let options = optionsFromArguments(Synth.getDefaults(), arguments);
    this.oscillator = new OmniOscillator(Object.assign({
      context: this.context,
      detune: options.detune,
      onstop: () => this.onsilence(this)
    }, options.oscillator)), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.envelope = new AmplitudeEnvelope(Object.assign({
      context: this.context
    }, options.envelope)), this.oscillator.chain(this.envelope, this.output), readOnly(this, ["oscillator", "frequency", "detune", "envelope"]);
  }
  static getDefaults() {
    return Object.assign(Monophonic.getDefaults(), {
      envelope: Object.assign(omitFromObject(Envelope.getDefaults(), Object.keys(ToneAudioNode.getDefaults())), {
        attack: 5e-3,
        decay: 0.1,
        release: 1,
        sustain: 0.3
      }),
      oscillator: Object.assign(omitFromObject(OmniOscillator.getDefaults(), [...Object.keys(Source.getDefaults()), "frequency", "detune"]), {
        type: "triangle"
      })
    });
  }
  /**
   * start the attack portion of the envelope
   * @param time the time the attack should start
   * @param velocity the velocity of the note (0-1)
   */
  _triggerEnvelopeAttack(time, velocity) {
    if (this.envelope.triggerAttack(time, velocity), this.oscillator.start(time), this.envelope.sustain === 0) {
      let computedAttack = this.toSeconds(this.envelope.attack), computedDecay = this.toSeconds(this.envelope.decay);
      this.oscillator.stop(time + computedAttack + computedDecay);
    }
  }
  /**
   * start the release portion of the envelope
   * @param time the time the release should start
   */
  _triggerEnvelopeRelease(time) {
    this.envelope.triggerRelease(time), this.oscillator.stop(time + this.toSeconds(this.envelope.release));
  }
  getLevelAtTime(time) {
    return time = this.toSeconds(time), this.envelope.getValueAtTime(time);
  }
  /**
   * clean up
   */
  dispose() {
    return super.dispose(), this.oscillator.dispose(), this.envelope.dispose(), this;
  }
};

// node_modules/tone/build/esm/instrument/MembraneSynth.js
import { __decorate as __decorate4 } from "tslib";
var MembraneSynth = class extends Synth {
  constructor() {
    super(optionsFromArguments(MembraneSynth.getDefaults(), arguments)), this.name = "MembraneSynth", this.portamento = 0;
    let options = optionsFromArguments(MembraneSynth.getDefaults(), arguments);
    this.pitchDecay = options.pitchDecay, this.octaves = options.octaves, readOnly(this, ["oscillator", "envelope"]);
  }
  static getDefaults() {
    return deepMerge(Monophonic.getDefaults(), Synth.getDefaults(), {
      envelope: {
        attack: 1e-3,
        attackCurve: "exponential",
        decay: 0.4,
        release: 1.4,
        sustain: 0.01
      },
      octaves: 10,
      oscillator: {
        type: "sine"
      },
      pitchDecay: 0.05
    });
  }
  setNote(note, time) {
    let seconds = this.toSeconds(time), hertz = this.toFrequency(note instanceof FrequencyClass ? note.toFrequency() : note), maxNote = hertz * this.octaves;
    return this.oscillator.frequency.setValueAtTime(maxNote, seconds), this.oscillator.frequency.exponentialRampToValueAtTime(hertz, seconds + this.toSeconds(this.pitchDecay)), this;
  }
  dispose() {
    return super.dispose(), this;
  }
};
__decorate4([
  range(0)
], MembraneSynth.prototype, "octaves", void 0);
__decorate4([
  timeRange(0)
], MembraneSynth.prototype, "pitchDecay", void 0);

// node_modules/tone/build/esm/core/worklet/WorkletGlobalScope.js
var workletContext = /* @__PURE__ */ new Set();
function addToWorklet(classOrFunction) {
  workletContext.add(classOrFunction);
}
function registerProcessor(name, classDesc) {
  let processor = (
    /* javascript */
    `registerProcessor("${name}", ${classDesc})`
  );
  workletContext.add(processor);
}

// node_modules/tone/build/esm/core/worklet/ToneAudioWorkletProcessor.worklet.js
var toneAudioWorkletProcessor = (
  /* javascript */
  `
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`
);
addToWorklet(toneAudioWorkletProcessor);

// node_modules/tone/build/esm/core/worklet/SingleIOProcessor.worklet.js
var singleIOProcess = (
  /* javascript */
  `
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`
);
addToWorklet(singleIOProcess);

// node_modules/tone/build/esm/core/worklet/DelayLine.worklet.js
var delayLine = (
  /* javascript */
  `
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`
);
addToWorklet(delayLine);

// node_modules/tone/build/esm/component/filter/FeedbackCombFilter.worklet.js
var workletName = "feedback-comb-filter", feedbackCombFilter = (
  /* javascript */
  `
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`
);
registerProcessor(workletName, feedbackCombFilter);

// node_modules/tone/build/esm/instrument/Sampler.js
import { __decorate as __decorate5 } from "tslib";
var Sampler = class extends Instrument {
  constructor() {
    super(optionsFromArguments(Sampler.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls")), this.name = "Sampler", this._activeSources = /* @__PURE__ */ new Map();
    let options = optionsFromArguments(Sampler.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls"), urlMap = {};
    Object.keys(options.urls).forEach((note) => {
      let noteNumber = parseInt(note, 10);
      if (assert(isNote(note) || isNumber(noteNumber) && isFinite(noteNumber), `url key is neither a note or midi pitch: ${note}`), isNote(note)) {
        let mid = new FrequencyClass(this.context, note).toMidi();
        urlMap[mid] = options.urls[note];
      } else
        isNumber(noteNumber) && isFinite(noteNumber) && (urlMap[noteNumber] = options.urls[noteNumber]);
    }), this._buffers = new ToneAudioBuffers({
      urls: urlMap,
      onload: options.onload,
      baseUrl: options.baseUrl,
      onerror: options.onerror
    }), this.attack = options.attack, this.release = options.release, this.curve = options.curve, this._buffers.loaded && Promise.resolve().then(options.onload);
  }
  static getDefaults() {
    return Object.assign(Instrument.getDefaults(), {
      attack: 0,
      baseUrl: "",
      curve: "exponential",
      onload: noOp,
      onerror: noOp,
      release: 0.1,
      urls: {}
    });
  }
  /**
   * Returns the difference in steps between the given midi note at the closets sample.
   */
  _findClosest(midi) {
    let interval = 0;
    for (; interval < 96; ) {
      if (this._buffers.has(midi + interval))
        return -interval;
      if (this._buffers.has(midi - interval))
        return interval;
      interval++;
    }
    throw new Error(`No available buffers for note: ${midi}`);
  }
  /**
   * @param  notes	The note to play, or an array of notes.
   * @param  time     When to play the note
   * @param  velocity The velocity to play the sample back.
   */
  triggerAttack(notes, time, velocity = 1) {
    return this.log("triggerAttack", notes, time, velocity), Array.isArray(notes) || (notes = [notes]), notes.forEach((note) => {
      let midiFloat = ftomf(new FrequencyClass(this.context, note).toFrequency()), midi = Math.round(midiFloat), remainder = midiFloat - midi, difference = this._findClosest(midi), closestNote = midi - difference, buffer = this._buffers.get(closestNote), playbackRate = intervalToFrequencyRatio(difference + remainder), source = new ToneBufferSource({
        url: buffer,
        context: this.context,
        curve: this.curve,
        fadeIn: this.attack,
        fadeOut: this.release,
        playbackRate
      }).connect(this.output);
      source.start(time, 0, buffer.duration / playbackRate, velocity), isArray(this._activeSources.get(midi)) || this._activeSources.set(midi, []), this._activeSources.get(midi).push(source), source.onended = () => {
        if (this._activeSources && this._activeSources.has(midi)) {
          let sources = this._activeSources.get(midi), index = sources.indexOf(source);
          index !== -1 && sources.splice(index, 1);
        }
      };
    }), this;
  }
  /**
   * @param  notes	The note to release, or an array of notes.
   * @param  time     	When to release the note.
   */
  triggerRelease(notes, time) {
    return this.log("triggerRelease", notes, time), Array.isArray(notes) || (notes = [notes]), notes.forEach((note) => {
      let midi = new FrequencyClass(this.context, note).toMidi();
      if (this._activeSources.has(midi) && this._activeSources.get(midi).length) {
        let sources = this._activeSources.get(midi);
        time = this.toSeconds(time), sources.forEach((source) => {
          source.stop(time);
        }), this._activeSources.set(midi, []);
      }
    }), this;
  }
  /**
   * Release all currently active notes.
   * @param  time     	When to release the notes.
   */
  releaseAll(time) {
    let computedTime = this.toSeconds(time);
    return this._activeSources.forEach((sources) => {
      for (; sources.length; )
        sources.shift().stop(computedTime);
    }), this;
  }
  sync() {
    return this._syncState() && (this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1)), this;
  }
  /**
   * Invoke the attack phase, then after the duration, invoke the release.
   * @param  notes	The note to play and release, or an array of notes.
   * @param  duration The time the note should be held
   * @param  time     When to start the attack
   * @param  velocity The velocity of the attack
   */
  triggerAttackRelease(notes, duration, time, velocity = 1) {
    let computedTime = this.toSeconds(time);
    return this.triggerAttack(notes, computedTime, velocity), isArray(duration) ? (assert(isArray(notes), "notes must be an array when duration is array"), notes.forEach((note, index) => {
      let d = duration[Math.min(index, duration.length - 1)];
      this.triggerRelease(note, computedTime + this.toSeconds(d));
    })) : this.triggerRelease(notes, computedTime + this.toSeconds(duration)), this;
  }
  /**
   * Add a note to the sampler.
   * @param  note      The buffer's pitch.
   * @param  url  Either the url of the buffer, or a buffer which will be added with the given name.
   * @param  callback  The callback to invoke when the url is loaded.
   */
  add(note, url, callback) {
    if (assert(isNote(note) || isFinite(note), `note must be a pitch or midi: ${note}`), isNote(note)) {
      let mid = new FrequencyClass(this.context, note).toMidi();
      this._buffers.add(mid, url, callback);
    } else
      this._buffers.add(note, url, callback);
    return this;
  }
  /**
   * If the buffers are loaded or not
   */
  get loaded() {
    return this._buffers.loaded;
  }
  /**
   * Clean up
   */
  dispose() {
    return super.dispose(), this._buffers.dispose(), this._activeSources.forEach((sources) => {
      sources.forEach((source) => source.dispose());
    }), this._activeSources.clear(), this;
  }
};
__decorate5([
  timeRange(0)
], Sampler.prototype, "attack", void 0);
__decorate5([
  timeRange(0)
], Sampler.prototype, "release", void 0);

// node_modules/tone/build/esm/component/channel/Panner.js
var Panner = class extends ToneAudioNode {
  constructor() {
    super(Object.assign(optionsFromArguments(Panner.getDefaults(), arguments, ["pan"]))), this.name = "Panner", this._panner = this.context.createStereoPanner(), this.input = this._panner, this.output = this._panner;
    let options = optionsFromArguments(Panner.getDefaults(), arguments, ["pan"]);
    this.pan = new Param({
      context: this.context,
      param: this._panner.pan,
      value: options.pan,
      minValue: -1,
      maxValue: 1
    }), this._panner.channelCount = options.channelCount, this._panner.channelCountMode = "explicit", readOnly(this, "pan");
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      pan: 0,
      channelCount: 1
    });
  }
  dispose() {
    return super.dispose(), this._panner.disconnect(), this.pan.dispose(), this;
  }
};

// node_modules/tone/build/esm/effect/BitCrusher.worklet.js
var workletName2 = "bit-crusher", bitCrusherWorklet = (
  /* javascript */
  `
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`
);
registerProcessor(workletName2, bitCrusherWorklet);

// node_modules/tone/build/esm/effect/Freeverb.js
var combFilterTunings = [1557 / 44100, 1617 / 44100, 1491 / 44100, 1422 / 44100, 1277 / 44100, 1356 / 44100, 1188 / 44100, 1116 / 44100];

// node_modules/tone/build/esm/effect/JCReverb.js
var combFilterDelayTimes = [1687 / 25e3, 1601 / 25e3, 2053 / 25e3, 2251 / 25e3];

// node_modules/tone/build/esm/effect/Reverb.js
import { __awaiter as __awaiter17 } from "tslib";

// node_modules/tone/build/esm/component/channel/Solo.js
var Solo = class extends ToneAudioNode {
  constructor() {
    super(optionsFromArguments(Solo.getDefaults(), arguments, ["solo"])), this.name = "Solo";
    let options = optionsFromArguments(Solo.getDefaults(), arguments, ["solo"]);
    this.input = this.output = new Gain({
      context: this.context
    }), Solo._allSolos.has(this.context) || Solo._allSolos.set(this.context, /* @__PURE__ */ new Set()), Solo._allSolos.get(this.context).add(this), this.solo = options.solo;
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      solo: !1
    });
  }
  /**
   * Isolates this instance and mutes all other instances of Solo.
   * Only one instance can be soloed at a time. A soloed
   * instance will report `solo=false` when another instance is soloed.
   */
  get solo() {
    return this._isSoloed();
  }
  set solo(solo) {
    solo ? this._addSolo() : this._removeSolo(), Solo._allSolos.get(this.context).forEach((instance) => instance._updateSolo());
  }
  /**
   * If the current instance is muted, i.e. another instance is soloed
   */
  get muted() {
    return this.input.gain.value === 0;
  }
  /**
   * Add this to the soloed array
   */
  _addSolo() {
    Solo._soloed.has(this.context) || Solo._soloed.set(this.context, /* @__PURE__ */ new Set()), Solo._soloed.get(this.context).add(this);
  }
  /**
   * Remove this from the soloed array
   */
  _removeSolo() {
    Solo._soloed.has(this.context) && Solo._soloed.get(this.context).delete(this);
  }
  /**
   * Is this on the soloed array
   */
  _isSoloed() {
    return Solo._soloed.has(this.context) && Solo._soloed.get(this.context).has(this);
  }
  /**
   * Returns true if no one is soloed
   */
  _noSolos() {
    return !Solo._soloed.has(this.context) || // or has a solo set but doesn't include any items
    Solo._soloed.has(this.context) && Solo._soloed.get(this.context).size === 0;
  }
  /**
   * Solo the current instance and unsolo all other instances.
   */
  _updateSolo() {
    this._isSoloed() ? this.input.gain.value = 1 : this._noSolos() ? this.input.gain.value = 1 : this.input.gain.value = 0;
  }
  dispose() {
    return super.dispose(), Solo._allSolos.get(this.context).delete(this), this._removeSolo(), this;
  }
};
Solo._allSolos = /* @__PURE__ */ new Map();
Solo._soloed = /* @__PURE__ */ new Map();

// node_modules/tone/build/esm/component/channel/PanVol.js
var PanVol = class extends ToneAudioNode {
  constructor() {
    super(optionsFromArguments(PanVol.getDefaults(), arguments, ["pan", "volume"])), this.name = "PanVol";
    let options = optionsFromArguments(PanVol.getDefaults(), arguments, ["pan", "volume"]);
    this._panner = this.input = new Panner({
      context: this.context,
      pan: options.pan,
      channelCount: options.channelCount
    }), this.pan = this._panner.pan, this._volume = this.output = new Volume({
      context: this.context,
      volume: options.volume
    }), this.volume = this._volume.volume, this._panner.connect(this._volume), this.mute = options.mute, readOnly(this, ["pan", "volume"]);
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      mute: !1,
      pan: 0,
      volume: 0,
      channelCount: 1
    });
  }
  /**
   * Mute/unmute the volume
   */
  get mute() {
    return this._volume.mute;
  }
  set mute(mute) {
    this._volume.mute = mute;
  }
  dispose() {
    return super.dispose(), this._panner.dispose(), this.pan.dispose(), this._volume.dispose(), this.volume.dispose(), this;
  }
};

// node_modules/tone/build/esm/component/channel/Channel.js
var Channel = class extends ToneAudioNode {
  constructor() {
    super(optionsFromArguments(Channel.getDefaults(), arguments, ["volume", "pan"])), this.name = "Channel";
    let options = optionsFromArguments(Channel.getDefaults(), arguments, ["volume", "pan"]);
    this._solo = this.input = new Solo({
      solo: options.solo,
      context: this.context
    }), this._panVol = this.output = new PanVol({
      context: this.context,
      pan: options.pan,
      volume: options.volume,
      mute: options.mute,
      channelCount: options.channelCount
    }), this.pan = this._panVol.pan, this.volume = this._panVol.volume, this._solo.connect(this._panVol), readOnly(this, ["pan", "volume"]);
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      pan: 0,
      volume: 0,
      mute: !1,
      solo: !1,
      channelCount: 1
    });
  }
  /**
   * Solo/unsolo the channel. Soloing is only relative to other [[Channels]] and [[Solo]] instances
   */
  get solo() {
    return this._solo.solo;
  }
  set solo(solo) {
    this._solo.solo = solo;
  }
  /**
   * If the current instance is muted, i.e. another instance is soloed,
   * or the channel is muted
   */
  get muted() {
    return this._solo.muted || this.mute;
  }
  /**
   * Mute/unmute the volume
   */
  get mute() {
    return this._panVol.mute;
  }
  set mute(mute) {
    this._panVol.mute = mute;
  }
  /**
   * Get the gain node belonging to the bus name. Create it if
   * it doesn't exist
   * @param name The bus name
   */
  _getBus(name) {
    return Channel.buses.has(name) || Channel.buses.set(name, new Gain({ context: this.context })), Channel.buses.get(name);
  }
  /**
   * Send audio to another channel using a string. `send` is a lot like
   * [[connect]], except it uses a string instead of an object. This can
   * be useful in large applications to decouple sections since [[send]]
   * and [[receive]] can be invoked separately in order to connect an object
   * @param name The channel name to send the audio
   * @param volume The amount of the signal to send.
   * 	Defaults to 0db, i.e. send the entire signal
   * @returns Returns the gain node of this connection.
   */
  send(name, volume = 0) {
    let bus = this._getBus(name), sendKnob = new Gain({
      context: this.context,
      units: "decibels",
      gain: volume
    });
    return this.connect(sendKnob), sendKnob.connect(bus), sendKnob;
  }
  /**
   * Receive audio from a channel which was connected with [[send]].
   * @param name The channel name to receive audio from.
   */
  receive(name) {
    return this._getBus(name).connect(this), this;
  }
  dispose() {
    return super.dispose(), this._panVol.dispose(), this.pan.dispose(), this.volume.dispose(), this._solo.dispose(), this;
  }
};
Channel.buses = /* @__PURE__ */ new Map();

// node_modules/tone/build/esm/core/context/Listener.js
var Listener = class extends ToneAudioNode {
  constructor() {
    super(...arguments), this.name = "Listener", this.positionX = new Param({
      context: this.context,
      param: this.context.rawContext.listener.positionX
    }), this.positionY = new Param({
      context: this.context,
      param: this.context.rawContext.listener.positionY
    }), this.positionZ = new Param({
      context: this.context,
      param: this.context.rawContext.listener.positionZ
    }), this.forwardX = new Param({
      context: this.context,
      param: this.context.rawContext.listener.forwardX
    }), this.forwardY = new Param({
      context: this.context,
      param: this.context.rawContext.listener.forwardY
    }), this.forwardZ = new Param({
      context: this.context,
      param: this.context.rawContext.listener.forwardZ
    }), this.upX = new Param({
      context: this.context,
      param: this.context.rawContext.listener.upX
    }), this.upY = new Param({
      context: this.context,
      param: this.context.rawContext.listener.upY
    }), this.upZ = new Param({
      context: this.context,
      param: this.context.rawContext.listener.upZ
    });
  }
  static getDefaults() {
    return Object.assign(ToneAudioNode.getDefaults(), {
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      forwardX: 0,
      forwardY: 0,
      forwardZ: -1,
      upX: 0,
      upY: 1,
      upZ: 0
    });
  }
  dispose() {
    return super.dispose(), this.positionX.dispose(), this.positionY.dispose(), this.positionZ.dispose(), this.forwardX.dispose(), this.forwardY.dispose(), this.forwardZ.dispose(), this.upX.dispose(), this.upY.dispose(), this.upZ.dispose(), this;
  }
};
onContextInit((context2) => {
  context2.listener = new Listener({ context: context2 });
});
onContextClose((context2) => {
  context2.listener.dispose();
});

// node_modules/tone/build/esm/component/channel/Recorder.js
import { __awaiter as __awaiter18 } from "tslib";

// node_modules/tone/build/esm/component/filter/Convolver.js
import { __awaiter as __awaiter19 } from "tslib";

// node_modules/tone/build/esm/index.js
function now() {
  return getContext().now();
}
var Transport2 = getContext().transport;
var Destination2 = getContext().destination, Master = getContext().destination;
var Listener2 = getContext().listener;
var Draw2 = getContext().draw;
var context = getContext();

// app/hooks/useInstruments.ts
import { useEffect as useEffect3, useState as useState2 } from "react";

// app/music/loader.ts
function loadInstruments(callback) {
  let pianoSampler = new Sampler({
    urls: {
      A0: "A0.mp3",
      C1: "C1.mp3",
      "D#1": "Ds1.mp3",
      "F#1": "Fs1.mp3",
      A1: "A1.mp3",
      C2: "C2.mp3",
      "D#2": "Ds2.mp3",
      "F#2": "Fs2.mp3",
      A2: "A2.mp3",
      C3: "C3.mp3",
      "D#3": "Ds3.mp3",
      "F#3": "Fs3.mp3",
      A3: "A3.mp3",
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
      C5: "C5.mp3",
      "D#5": "Ds5.mp3",
      "F#5": "Fs5.mp3",
      A5: "A5.mp3",
      C6: "C6.mp3",
      "D#6": "Ds6.mp3",
      "F#6": "Fs6.mp3",
      A6: "A6.mp3",
      C7: "C7.mp3",
      "D#7": "Ds7.mp3",
      "F#7": "Fs7.mp3",
      A7: "A7.mp3",
      C8: "C8.mp3"
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
    onload: () => {
    }
  }).toDestination(), bassSampler = new Sampler({
    urls: {
      A0: "A0.mp3",
      C1: "C1.mp3",
      "D#1": "Ds1.mp3",
      "F#1": "Fs1.mp3",
      A1: "A1.mp3",
      C2: "C2.mp3",
      "D#2": "Ds2.mp3",
      "F#2": "Fs2.mp3",
      A2: "A2.mp3",
      C3: "C3.mp3",
      "D#3": "Ds3.mp3",
      "F#3": "Fs3.mp3",
      A3: "A3.mp3",
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
      C5: "C5.mp3",
      "D#5": "Ds5.mp3",
      "F#5": "Fs5.mp3",
      A5: "A5.mp3",
      C6: "C6.mp3",
      "D#6": "Ds6.mp3",
      "F#6": "Fs6.mp3",
      A6: "A6.mp3",
      C7: "C7.mp3",
      "D#7": "Ds7.mp3",
      "F#7": "Fs7.mp3",
      A7: "A7.mp3",
      C8: "C8.mp3"
    },
    baseUrl: "https://tonejs.github.io/audio/salamander/"
  }).toDestination(), drumSampler = new Sampler({
    urls: {
      C1: "kick.mp3",
      D1: "hihat.mp3",
      E1: "snare.mp3"
    },
    baseUrl: "https://tonejs.github.io/audio/drum-samples/acoustic-kit/"
  }).toDestination();
  return callback && callback(!0), {
    pianoSampler,
    bassSampler,
    drumSampler
  };
}

// app/hooks/useInstruments.ts
function useInstruments() {
  let [instruments, setInstruments] = useState2();
  return useEffect3(() => {
    let { pianoSampler, drumSampler, bassSampler } = loadInstruments();
    setInstruments({ pianoSampler, bassSampler, drumSampler });
  }, []), [instruments];
}

// app/components/track/ChordEditorModal.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var roots = ["C", "D", "E", "F", "G", "A", "B"], flatRoots = ["Db", "Eb", "Gb", "Ab", "Bb"], octaves = ["2", "3", "4", "5", "6"], chordTypes = ["", "M", "maj", "min", "dim", "aug"], extensions = [
  "",
  "7",
  "7sus4",
  "7b9",
  "6",
  "9",
  "7#9",
  "11",
  "7#11",
  "13",
  "13#11",
  "7#9#11"
];
function ChordEditor({
  isOpen,
  currentChord,
  onClose
}) {
  let [instruments] = useInstruments(), [newChordName, setNewChordName] = useState3(""), [newRoot, setNewRoot] = useState3("C"), [newType, setNewType] = useState3("maj"), [newExtension, setNewExtension] = useState3("7"), [newOctave, setNewOctave] = useState3("3");
  return useEffect4(() => {
    if (!currentChord)
      return;
    let newChord = Chord.getChord(
      `${newType}${newExtension}`,
      `${newRoot}${newOctave}`
    ), isChordBroken = newChord.empty;
    if (newChord.notes.forEach((note) => {
      note.includes("##") && (isChordBroken = !0);
    }), isChordBroken)
      return setNewChordName("Try something else..");
    currentChord.note = newChord.notes, currentChord.root = newRoot, currentChord.type = newType, currentChord.extension = newExtension, setNewChordName(newChord.symbol), instruments?.pianoSampler?.triggerAttackRelease(
      currentChord.note,
      "4n",
      now(),
      0.35
    );
  }, [newRoot, newType, newExtension, newOctave, currentChord, instruments]), /* @__PURE__ */ jsxDEV12(
    Transition,
    {
      show: isOpen,
      enter: "transition duration-100 ease-out",
      enterFrom: "transform scale-95 opacity-0",
      enterTo: "transform scale-100 opacity-100",
      leave: "transition duration-75 ease-out",
      leaveFrom: "transform scale-100 opacity-100",
      leaveTo: "transform scale-95 opacity-0",
      as: Fragment4,
      children: /* @__PURE__ */ jsxDEV12(
        Dialog,
        {
          onClose: () => onClose(),
          className: "fixed inset-0 z-50 chord-editor-modal",
          children: [
            /* @__PURE__ */ jsxDEV12("div", { className: "fixed inset-0 bg-black/30", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/components/track/ChordEditorModal.tsx",
              lineNumber: 92,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV12("div", { className: "fixed inset-0 flex items-center justify-center p-2", children: /* @__PURE__ */ jsxDEV12(Dialog.Panel, { className: "w-full max-w-md rounded bg-white p-4 dark:bg-black", children: [
              /* @__PURE__ */ jsxDEV12(Dialog.Title, { children: newChordName || "Change chord" }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 96,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV12(Dialog.Description, { className: "text-xs opacity-50", children: "Listen to know what works! Not every combination is possible." }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 97,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV12("span", { className: "opacity-50 text-xs", children: "root" }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 101,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV12("div", { className: "grid grid-flow-col gap-2 mb-2", children: roots.map((root) => /* @__PURE__ */ jsxDEV12(
                "button",
                {
                  onClick: () => setNewRoot(root),
                  className: `button ${root === newRoot ? "active" : ""}`,
                  children: root
                },
                root,
                !1,
                {
                  fileName: "app/components/track/ChordEditorModal.tsx",
                  lineNumber: 104,
                  columnNumber: 17
                },
                this
              )) }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 102,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV12("div", { className: "grid grid-flow-col gap-2", children: flatRoots.map((root) => /* @__PURE__ */ jsxDEV12(
                "button",
                {
                  onClick: () => setNewRoot(root),
                  className: `button ${root === newRoot ? "active" : ""}`,
                  children: root
                },
                root,
                !1,
                {
                  fileName: "app/components/track/ChordEditorModal.tsx",
                  lineNumber: 115,
                  columnNumber: 17
                },
                this
              )) }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 113,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV12("span", { className: "opacity-50 text-xs", children: "type" }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 125,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV12("div", { className: "grid grid-flow-col gap-2 mb-2", children: chordTypes.map((type) => /* @__PURE__ */ jsxDEV12(
                "button",
                {
                  onClick: () => setNewType(type),
                  className: `button ${type === newType ? "active" : ""}`,
                  children: type
                },
                type,
                !1,
                {
                  fileName: "app/components/track/ChordEditorModal.tsx",
                  lineNumber: 128,
                  columnNumber: 17
                },
                this
              )) }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 126,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV12("span", { className: "opacity-50 text-xs", children: "extension" }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 138,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV12("div", { className: "grid grid-rows-2 grid-cols-6 gap-2 mb-2", children: extensions.map((ext) => /* @__PURE__ */ jsxDEV12(
                "button",
                {
                  onClick: () => setNewExtension(ext),
                  className: `button ${ext === newExtension ? "active" : ""}`,
                  children: ext
                },
                ext,
                !1,
                {
                  fileName: "app/components/track/ChordEditorModal.tsx",
                  lineNumber: 141,
                  columnNumber: 17
                },
                this
              )) }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 139,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV12("span", { className: "opacity-50 text-xs", children: "octave" }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 151,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV12("div", { className: "grid grid-flow-col gap-2 mb-4", children: octaves.map((octave) => /* @__PURE__ */ jsxDEV12(
                "button",
                {
                  onClick: () => setNewOctave(octave),
                  className: `button ${octave === newOctave ? "active" : ""}`,
                  children: octave
                },
                octave,
                !1,
                {
                  fileName: "app/components/track/ChordEditorModal.tsx",
                  lineNumber: 154,
                  columnNumber: 17
                },
                this
              )) }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 152,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV12(
                "button",
                {
                  className: "button button--submit w-full",
                  onClick: () => onClose(),
                  children: "save chord"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/track/ChordEditorModal.tsx",
                  lineNumber: 164,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/track/ChordEditorModal.tsx",
              lineNumber: 95,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/components/track/ChordEditorModal.tsx",
              lineNumber: 94,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/track/ChordEditorModal.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/track/ChordEditorModal.tsx",
      lineNumber: 78,
      columnNumber: 5
    },
    this
  );
}

// app/routes/track.new.tsx
var import_TrackEditor = __toESM(require_TrackEditor(), 1);
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var sampleChordConfig = {
  root: "C",
  type: "maj",
  extension: "7",
  note: ["C3", "E3", "G3", "B3"],
  duration: "1n",
  bar: 0,
  beat: 0,
  sixteenth: 0
}, loader5 = async ({ request }) => {
  let user = await getUser(request);
  return json7({ user });
}, action4 = async ({ request }) => {
  let userId = await requireUserId(request), form = await request.formData(), trackname = form.get("trackname"), description = form.get("description"), authorName = form.get("author-name"), bpm = form.get("bpm"), chords = form.get("chords");
  if (typeof trackname != "string" || typeof chords != "string" || typeof description != "string" || typeof authorName != "string" || typeof bpm != "string")
    return badRequest2({
      formError: "Form not submitted correctly."
    });
  let newTrack = await createTrack(
    trackname,
    description,
    chords,
    userId,
    authorName,
    bpm
  );
  return newTrack ? redirect5(`/track/${newTrack.id}`) : badRequest2({
    formError: "couldn't create track!"
  });
}, badRequest2 = (data) => json7(data, { status: 400 });
function NewTrackRoute() {
  let actionData = useActionData2(), loaderData = useLoaderData3(), [isChordEditorOpen, setIsChordEditorOpen] = useState4(!1), [chords, setChords] = useState4([]), selectedChord = useRef2(null), lastChord = useRef2(null);
  useEffect5(() => {
    setChords([new ChordBeat(sampleChordConfig)]);
  }, []);
  let editChord = (e, chord) => {
    e.preventDefault(), selectedChord.current = chord, lastChord.current = chord, setIsChordEditorOpen(!0);
  }, finishEditingChord = () => {
    selectedChord.current = null, setIsChordEditorOpen(!1), setChords([...chords]);
  }, shortenChord = (e, chord) => {
    e.preventDefault(), chord.duration = decreaseDuration(chord.duration);
    let chordIndex = chords.indexOf(chord);
    updateFollowingChords(chordIndex + 1), setChords([...chords]);
  }, lengthenChord = (e, chord) => {
    e.preventDefault(), chord.duration = increaseDuration(chord.duration);
    let chordIndex = chords.indexOf(chord);
    updateFollowingChords(chordIndex + 1), setChords([...chords]);
  }, updateFollowingChords = (index) => {
    for (let i = index; i < chords.length; i++) {
      let previousChord = chords[i - 1];
      chords[i] = new ChordBeat({
        ...chords[i],
        ...getNextChordTime(previousChord)
      });
    }
  }, updateChordTimes = () => {
    chords[0] = new ChordBeat({
      ...chords[0],
      bar: 0,
      beat: 0,
      sixteenth: 0
    }), updateFollowingChords(1);
  }, deleteChord = (e, chord) => {
    e.preventDefault();
    let chordIndex = chords.indexOf(chord);
    chords.splice(chordIndex, 1), chords.length && updateChordTimes(), setChords([...chords]);
  }, addChord = (e) => {
    e.preventDefault();
    let newTime = chords.length > 0 ? getNextChordTime(chords[chords.length - 1]) : { bar: 0, beat: 0, sixteenth: 0 }, newChord = new ChordBeat({
      root: lastChord?.current?.root || "C",
      type: lastChord?.current?.type || "maj",
      extension: lastChord?.current?.extension || "7",
      note: lastChord?.current?.note || ["C3", "E3", "G3", "B3"],
      duration: lastChord?.current?.duration || "1n",
      ...newTime
    });
    chords?.length ? setChords([...chords, newChord]) : setChords([newChord]);
  };
  return /* @__PURE__ */ jsxDEV13("main", { children: [
    /* @__PURE__ */ jsxDEV13("section", { children: /* @__PURE__ */ jsxDEV13("div", { className: "container max-w-4xl mx-auto pt-8", children: /* @__PURE__ */ jsxDEV13(Form3, { className: "flex flex-col gap-4", method: "post", children: [
      /* @__PURE__ */ jsxDEV13("div", { className: "grid grid-cols-6 gap-4", children: [
        /* @__PURE__ */ jsxDEV13("div", { className: "col-span-5", children: /* @__PURE__ */ jsxDEV13(
          TextInput,
          {
            name: "trackname",
            label: "New Trackname",
            placeholder: "My awesome backing track",
            required: !0,
            actionData
          },
          void 0,
          !1,
          {
            fileName: "app/routes/track.new.tsx",
            lineNumber: 183,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 182,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "col-span-1", children: /* @__PURE__ */ jsxDEV13(
          TextInput,
          {
            type: "number",
            name: "bpm",
            label: "BPM",
            placeholder: "120",
            required: !0,
            actionData
          },
          void 0,
          !1,
          {
            fileName: "app/routes/track.new.tsx",
            lineNumber: 193,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 192,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 181,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV13(
        TextInput,
        {
          name: "description",
          label: "Description",
          placeholder: "Short but sweet progression in C major",
          required: !0,
          actionData
        },
        void 0,
        !1,
        {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 204,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV13(
        "input",
        {
          name: "chords",
          type: "text",
          value: JSON.stringify(chords),
          className: "hidden",
          readOnly: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 211,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV13(
        "input",
        {
          name: "author-name",
          type: "text",
          value: loaderData.user.username,
          className: "hidden",
          readOnly: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 218,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV13("div", { className: "overflow-x-scroll", children: /* @__PURE__ */ jsxDEV13("fieldset", { className: "sheet-grid sheet-grid--editor overflow-x-auto", children: [
        /* @__PURE__ */ jsxDEV13("legend", { children: "Sheet - one full row = count to 4" }, void 0, !1, {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 228,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV13(Suspense4, { fallback: /* @__PURE__ */ jsxDEV13("p", { children: "Loading..." }, void 0, !1, {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 229,
          columnNumber: 37
        }, this), children: /* @__PURE__ */ jsxDEV13(
          import_TrackEditor.default,
          {
            chords,
            shortenChord,
            lengthenChord,
            editChord,
            deleteChord
          },
          void 0,
          !1,
          {
            fileName: "app/routes/track.new.tsx",
            lineNumber: 230,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 229,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 227,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 226,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV13("button", { className: "button", onClick: addChord, children: [
        /* @__PURE__ */ jsxDEV13("span", { children: "add chord" }, void 0, !1, {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 242,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV13("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV13(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
            clipRule: "evenodd"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/track.new.tsx",
            lineNumber: 244,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 243,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 241,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV13("label", { className: "form-row", htmlFor: "newChord", children: /* @__PURE__ */ jsxDEV13(
        "input",
        {
          name: "newChord",
          disabled: chords.length === 0,
          type: "submit",
          className: "button col-span-4",
          value: "save track"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 253,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 252,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { id: "form-error-message", children: actionData?.formError ? /* @__PURE__ */ jsxDEV13("p", { className: "form-validation-error text-center", role: "alert", children: actionData.formError }, void 0, !1, {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 263,
        columnNumber: 17
      }, this) : null }, void 0, !1, {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 261,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/track.new.tsx",
      lineNumber: 180,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/track.new.tsx",
      lineNumber: 179,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/track.new.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13(
      ChordEditor,
      {
        isOpen: isChordEditorOpen,
        currentChord: selectedChord.current,
        onClose: () => finishEditingChord()
      },
      void 0,
      !1,
      {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 272,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/track.new.tsx",
    lineNumber: 177,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta3
});
import { Link as Link5 } from "@remix-run/react";

// app/components/Footer.tsx
import { Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function Footer() {
  return /* @__PURE__ */ jsxDEV14("footer", { className: "p-3 sm:p-6 mt-24", children: /* @__PURE__ */ jsxDEV14("div", { className: "container max-w-4xl mx-auto pt-8", children: /* @__PURE__ */ jsxDEV14("div", { className: "flex flex-col md:flex-row justify-between", children: [
    /* @__PURE__ */ jsxDEV14("div", { className: "flex items-baseline", children: [
      /* @__PURE__ */ jsxDEV14(Link4, { className: "font-black tracking-tighter text-xl", to: "/", children: "BackyTracky\u2122" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV14(Link4, { className: "ml-8 text-xs opacity-50", to: "/tracks", children: "Tracks" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV14(Link4, { className: "ml-8 text-xs opacity-50", to: "/generator", children: "Sequencer" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV14(Link4, { className: "ml-8 text-xs opacity-50", to: "/tuner", children: "Guitar Tuner" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "mt-2 opacity-50 text-xs", children: /* @__PURE__ */ jsxDEV14("span", { children: [
      (/* @__PURE__ */ new Date()).getFullYear(),
      " created by",
      " ",
      /* @__PURE__ */ jsxDEV14(
        "a",
        {
          href: "https://dennissmuda.com/",
          target: "blank",
          rel: "nofollower",
          className: "underline hover:no-underline",
          children: "dennissmuda"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Footer.tsx",
          lineNumber: 25,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { charset: "utf-8" },
  {
    title: "Free Backing Tracks for Musicians! | BackyTracky Homepage"
  },
  {
    name: "description",
    content: "Create and play-along Lead-Sheets to level up your chops! Practice scales, licks or solos. Discover chord progressions others are using or make your own!"
  }
];
function Index() {
  return /* @__PURE__ */ jsxDEV15("main", { className: "main relative", children: [
    /* @__PURE__ */ jsxDEV15("div", { className: "bg-white dark:bg-black absolute -top-32 left-0 right-0 h-[280px] -z-10 rotate-1", children: /* @__PURE__ */ jsxDEV15("div", { className: "color-change z-10 w-full top-0 h-full bg-opacity-10 absolute pointer-events-none" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("section", { className: "relative", children: [
      /* @__PURE__ */ jsxDEV15(BackgroundNotes, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "container max-w-4xl mx-auto pt-8 relative z-10", children: /* @__PURE__ */ jsxDEV15("div", { className: "bt-prose mx-auto my-12", children: [
        /* @__PURE__ */ jsxDEV15("h1", { className: "mb-0 rounded-md relative -ml-2 inline-block px-1 font-black", children: "Welcome to BackyTracky" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV15("p", { className: "max-w-lg bg-zinc-50 dark:bg-zinc-900 bg-opacity-10 rounded-md", children: [
          /* @__PURE__ */ jsxDEV15("span", { className: "sr-only", children: "Free " }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 34,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV15("strong", { children: "Backing Tracks" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 35,
            columnNumber: 15
          }, this),
          " for Musicians! Play-along some of my favorite lead-sheets to level up your chops... ",
          /* @__PURE__ */ jsxDEV15("i", { children: "or" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 36,
            columnNumber: 65
          }, this),
          " go ahead and try making something of your own! Practice scales, licks or solos."
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV15(
          Link5,
          {
            className: "button no-underline px-8 dark:text-white",
            to: "/tracks",
            children: [
              /* @__PURE__ */ jsxDEV15("span", { children: "see some tracks" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 44,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV15(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-5 w-5",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: /* @__PURE__ */ jsxDEV15(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
                      clipRule: "evenodd"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 51,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 45,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 40,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV15(
          Link5,
          {
            className: "button button--submit no-underline px-8 ml-4 dark:text-white",
            to: "/generator",
            children: [
              /* @__PURE__ */ jsxDEV15("span", { children: "make your own" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 62,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV15(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-5 w-5",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: /* @__PURE__ */ jsxDEV15(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
                      clipRule: "evenodd"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 69,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 63,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 58,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("section", { children: /* @__PURE__ */ jsxDEV15("div", { className: "container max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV15("div", { className: "bt-prose mx-auto my-12", children: [
      /* @__PURE__ */ jsxDEV15("h2", { className: "mt-2 font-black", children: "Features" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV15("ul", { className: "max-w-lg", children: [
        /* @__PURE__ */ jsxDEV15("li", { children: [
          /* @__PURE__ */ jsxDEV15("strong", { children: "Lead-sheets" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this),
          " for some of my favorite tracks, inspired by some of my favorite standards"
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV15("li", { children: [
          "A full blown ",
          /* @__PURE__ */ jsxDEV15("strong", { children: "Sequencer" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 89,
            columnNumber: 30
          }, this),
          " that let's you try out some new wild chord progressions!"
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV15("li", { children: [
          /* @__PURE__ */ jsxDEV15("strong", { children: "Guitar Tuner" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this),
          " to help practice tuning your guitar by ear"
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 92,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 81,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("section", { children: /* @__PURE__ */ jsxDEV15("div", { className: "container max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV15("div", { className: "bt-prose mx-auto my-12", children: [
      /* @__PURE__ */ jsxDEV15("h2", { className: "mt-2 font-black", children: "FAQ" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 104,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV15("h3", { className: "font-black", children: "What is all this?" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 105,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { className: "max-w-lg", children: [
        "The ",
        /* @__PURE__ */ jsxDEV15("strong", { children: "Tracks" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 107,
          columnNumber: 19
        }, this),
        " are mainly some chord progressions that I throw together to jam around on. If you have any requests, feel free to",
        " ",
        /* @__PURE__ */ jsxDEV15(
          "a",
          {
            href: "https://dennissmuda.com/",
            rel: "noopener noreferrer",
            target: "_blank",
            className: "underline",
            children: "contact me"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 110,
            columnNumber: 15
          },
          this
        ),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV15("h3", { className: "font-black", children: "Code?" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { children: [
        "This project is ",
        /* @__PURE__ */ jsxDEV15("strong", { children: "open source" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 122,
          columnNumber: 31
        }, this),
        " and you can",
        " ",
        /* @__PURE__ */ jsxDEV15(
          "a",
          {
            target: "_blank",
            href: "https://github.com/DennisSmuda/backytracky-remix/",
            rel: "noopener noreferrer",
            children: "check it out on github"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 123,
            columnNumber: 15
          },
          this
        ),
        "! ",
        /* @__PURE__ */ jsxDEV15("br", {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 130,
          columnNumber: 17
        }, this),
        "It uses React (",
        /* @__PURE__ */ jsxDEV15(
          "a",
          {
            target: "_blank",
            href: "https://remix.run/",
            rel: "noopener noreferrer",
            children: "remix.run"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 132,
            columnNumber: 15
          },
          this
        ),
        "), tailwindcss and prisma and is deployed to netlify. To play and generate music, there is",
        " ",
        /* @__PURE__ */ jsxDEV15(
          "a",
          {
            href: "https://tonejs.github.io/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Tone.js"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 141,
            columnNumber: 15
          },
          this
        ),
        " ",
        "and",
        " ",
        /* @__PURE__ */ jsxDEV15(
          "a",
          {
            href: "https://github.com/tonaljs/tonal",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "tonal"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 149,
            columnNumber: 15
          },
          this
        ),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV15("h3", { className: "font-black", children: "Does it cost anything?" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { className: "max-w-lg", children: [
        /* @__PURE__ */ jsxDEV15("strong", { children: "No!" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 160,
          columnNumber: 15
        }, this),
        " As long as I don't just let anyone create accounts and tracks I can maintain BackyTracky for free."
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 159,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 103,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15(Footer, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 166,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/tracks.tsx
var tracks_exports = {};
__export(tracks_exports, {
  action: () => action5,
  default: () => TracksRoute,
  loader: () => loader6,
  meta: () => meta4
});
import { json as json8 } from "@remix-run/node";
import {
  Link as Link7,
  useActionData as useActionData3,
  useLoaderData as useLoaderData4,
  useNavigation as useNavigation2
} from "@remix-run/react";
import { useEffect as useEffect6 } from "react";
import toast3 from "react-hot-toast";

// app/components/track/TrackListing.tsx
import { Form as Form4, Link as Link6 } from "@remix-run/react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function TrackListing({
  track,
  showDescription,
  currentUserId
}) {
  return /* @__PURE__ */ jsxDEV16(
    "div",
    {
      className: "flex items-center rounded-lg",
      "data-testid": "track-listing",
      children: [
        /* @__PURE__ */ jsxDEV16("div", { className: "flex flex-col flex-grow", children: [
          /* @__PURE__ */ jsxDEV16("div", { className: "flex items-center gap-4 text-xs opacity-50", children: /* @__PURE__ */ jsxDEV16("span", { children: [
            track.bpm,
            " bpm"
          ] }, void 0, !0, {
            fileName: "app/components/track/TrackListing.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/track/TrackListing.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV16(
            Link6,
            {
              to: `/track/${track.id}`,
              className: `${showDescription ? "text-2xl" : "text-lg"} font-black no-underline hover:underline`,
              children: track.name
            },
            void 0,
            !1,
            {
              fileName: "app/components/track/TrackListing.tsx",
              lineNumber: 23,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV16("div", { className: "text-xs opacity-50", children: [
            /* @__PURE__ */ jsxDEV16("span", { className: "", children: [
              "created",
              " ",
              new Date(track.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long"
              })
            ] }, void 0, !0, {
              fileName: "app/components/track/TrackListing.tsx",
              lineNumber: 32,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV16("span", { children: [
              ", by ",
              track.authorName
            ] }, void 0, !0, {
              fileName: "app/components/track/TrackListing.tsx",
              lineNumber: 39,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/track/TrackListing.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/track/TrackListing.tsx",
          lineNumber: 19,
          columnNumber: 7
        }, this),
        track.userId === currentUserId ? /* @__PURE__ */ jsxDEV16(Form4, { method: "delete", children: [
          /* @__PURE__ */ jsxDEV16("input", { type: "hidden", name: "trackId", value: track.id }, void 0, !1, {
            fileName: "app/components/track/TrackListing.tsx",
            lineNumber: 50,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV16("button", { className: "icon-button button--delete", children: [
            /* @__PURE__ */ jsxDEV16("span", { children: "delete" }, void 0, !1, {
              fileName: "app/components/track/TrackListing.tsx",
              lineNumber: 52,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV16(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: /* @__PURE__ */ jsxDEV16(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                    clipRule: "evenodd"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/track/TrackListing.tsx",
                    lineNumber: 58,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/track/TrackListing.tsx",
                lineNumber: 53,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/track/TrackListing.tsx",
            lineNumber: 51,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/track/TrackListing.tsx",
          lineNumber: 49,
          columnNumber: 9
        }, this) : ""
      ]
    },
    track.id,
    !0,
    {
      fileName: "app/components/track/TrackListing.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}

// app/routes/tracks.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var loader6 = async ({ request }) => {
  let data = {
    tracks: await db.track.findMany(),
    user: await getUser(request)
  };
  return json8(data);
}, action5 = async ({ request }) => {
  let trackId = (await request.formData()).get("trackId"), response = await deleteTrack(trackId);
  return response.status === 400 ? badRequest3({
    error: "Error deleting track"
  }) : json8({ response });
}, badRequest3 = (data) => json8(data, { status: 400 }), meta4 = () => [
  {
    title: "All Tracks | BackyTracky"
  },
  {
    description: "Explore all published backing tracks. Grab your instrument and practice some chord changes!"
  }
];
function TracksRoute() {
  let actionData = useActionData3(), loaderData = useLoaderData4(), navigation = useNavigation2();
  return useEffect6(() => {
    navigation.state === "submitting" && navigation.formMethod === "delete" && toast3.loading("Deleting...", { id: "track-delete-toast" }), navigation.state === "idle" && actionData?.error && toast3.error("Couldn't delete track...", {
      id: "track-delete-toast"
    }), navigation.state === "idle" && actionData?.response && toast3.success("Deleted track!", { id: "track-delete-toast" });
  }, [navigation, actionData]), /* @__PURE__ */ jsxDEV17("main", { className: "main", children: [
    /* @__PURE__ */ jsxDEV17("div", { className: "absolute bottom-24 md:bottom-32 right-0 md:right-20", children: /* @__PURE__ */ jsxDEV17(BackgroundNotes, {}, void 0, !1, {
      fileName: "app/routes/tracks.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tracks.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17(PageHeader, { title: "All Tracks \u{1F3BA}", children: [
      /* @__PURE__ */ jsxDEV17(Link7, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/tracks.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17("span", { children: " / " }, void 0, !1, {
        fileName: "app/routes/tracks.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17(Link7, { to: "/tracks", children: "Tracks" }, void 0, !1, {
        fileName: "app/routes/tracks.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tracks.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17("section", { children: /* @__PURE__ */ jsxDEV17("div", { className: "container max-w-4xl mx-auto relative", children: /* @__PURE__ */ jsxDEV17("div", { className: "grid gap-12 mb-12 mt-4", children: [
      loaderData.tracks.length === 0 ? /* @__PURE__ */ jsxDEV17("div", { children: "no Tracks yet" }, void 0, !1, {
        fileName: "app/routes/tracks.tsx",
        lineNumber: 95,
        columnNumber: 47
      }, this) : "",
      loaderData.tracks.map((track) => /* @__PURE__ */ jsxDEV17(
        TrackListing,
        {
          track,
          showDescription: !0,
          currentUserId: loaderData.user?.id
        },
        track.id,
        !1,
        {
          fileName: "app/routes/tracks.tsx",
          lineNumber: 97,
          columnNumber: 15
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/routes/tracks.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/tracks.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tracks.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17(Footer, {}, void 0, !1, {
      fileName: "app/routes/tracks.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tracks.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

// app/routes/tuner.tsx
var tuner_exports = {};
__export(tuner_exports, {
  default: () => Tuner,
  meta: () => meta5
});
import { Link as Link8 } from "@remix-run/react";
import { Suspense as Suspense5 } from "react";
var import_GuitarTuner = __toESM(require_GuitarTuner(), 1);
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var meta5 = () => [
  {
    title: "Guitar Tuner | BackyTracky"
  },
  {
    description: "Practice tuning your guitar by ear! Supports multiple tunings!"
  }
];
function Tuner() {
  return /* @__PURE__ */ jsxDEV18("main", { className: "main", children: [
    /* @__PURE__ */ jsxDEV18(PageHeader, { title: "Tune by ear \u{1F442}", children: [
      /* @__PURE__ */ jsxDEV18(Link8, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/tuner.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("span", { children: " / " }, void 0, !1, {
        fileName: "app/routes/tuner.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18(Link8, { to: "/tuner", children: "Tuner" }, void 0, !1, {
        fileName: "app/routes/tuner.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tuner.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("section", { children: /* @__PURE__ */ jsxDEV18("div", { className: "max-w-4xl mx-auto relative", children: /* @__PURE__ */ jsxDEV18(Suspense5, { fallback: /* @__PURE__ */ jsxDEV18("div", { children: "Loading..." }, void 0, !1, {
      fileName: "app/routes/tuner.tsx",
      lineNumber: 29,
      columnNumber: 31
    }, this), children: /* @__PURE__ */ jsxDEV18(import_GuitarTuner.default, {}, void 0, !1, {
      fileName: "app/routes/tuner.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/tuner.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/tuner.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tuner.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18(Footer, {}, void 0, !1, {
      fileName: "app/routes/tuner.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tuner.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-JWKTC22P.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-WEL37Y7B.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-AB26UJ6G.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-REVCKDL7.js", imports: ["/build/_shared/chunk-ONLNHW7P.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_action.set-theme": { id: "routes/_action.set-theme", parentId: "root", path: "set-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/_action.set-theme-5KROQWND.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login-BOOWBBD7.js", imports: ["/build/_shared/chunk-7MEWGV2P.js", "/build/_shared/chunk-V22J52NZ.js", "/build/_shared/chunk-PWSAHRFS.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.logout": { id: "routes/_auth.logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.logout-TQQKM25O.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_auth.register": { id: "routes/_auth.register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.register-7MPE3FWW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-XVJHIXI4.js", imports: ["/build/_shared/chunk-6DJUASJP.js", "/build/_shared/chunk-PWSAHRFS.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/generator": { id: "routes/generator", parentId: "root", path: "generator", index: void 0, caseSensitive: void 0, module: "/build/routes/generator-YIYKFJE2.js", imports: ["/build/_shared/chunk-4TNCM64E.js", "/build/_shared/chunk-P6IXS4CZ.js", "/build/_shared/chunk-YDUQ6HJN.js", "/build/_shared/chunk-4NFPUYXC.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/track.$trackId": { id: "routes/track.$trackId", parentId: "root", path: "track/:trackId", index: void 0, caseSensitive: void 0, module: "/build/routes/track.$trackId-K4UEOVU4.js", imports: ["/build/_shared/chunk-Q37BEO7O.js", "/build/_shared/chunk-AYITFWIO.js", "/build/_shared/chunk-P6IXS4CZ.js", "/build/_shared/chunk-YDUQ6HJN.js", "/build/_shared/chunk-4NFPUYXC.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/track.new": { id: "routes/track.new", parentId: "root", path: "track/new", index: void 0, caseSensitive: void 0, module: "/build/routes/track.new-HKRWYVIU.js", imports: ["/build/_shared/chunk-Q37BEO7O.js", "/build/_shared/chunk-AYITFWIO.js", "/build/_shared/chunk-7MEWGV2P.js", "/build/_shared/chunk-V22J52NZ.js", "/build/_shared/chunk-4TNCM64E.js", "/build/_shared/chunk-YDUQ6HJN.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/tracks": { id: "routes/tracks", parentId: "root", path: "tracks", index: void 0, caseSensitive: void 0, module: "/build/routes/tracks-RTXXMUVY.js", imports: ["/build/_shared/chunk-6DJUASJP.js", "/build/_shared/chunk-AYITFWIO.js", "/build/_shared/chunk-V22J52NZ.js", "/build/_shared/chunk-PWSAHRFS.js", "/build/_shared/chunk-4NFPUYXC.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/tuner": { id: "routes/tuner", parentId: "root", path: "tuner", index: void 0, caseSensitive: void 0, module: "/build/routes/tuner-ILZ3Z7E3.js", imports: ["/build/_shared/chunk-6DJUASJP.js", "/build/_shared/chunk-YDUQ6HJN.js", "/build/_shared/chunk-4NFPUYXC.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "52587722", hmr: { runtime: "/build/_shared/chunk-AB26UJ6G.js", timestamp: 1698100344481 }, url: "/build/manifest-52587722.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_action.set-theme": {
    id: "routes/_action.set-theme",
    parentId: "root",
    path: "set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: action_set_theme_exports
  },
  "routes/_auth.register": {
    id: "routes/_auth.register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: auth_register_exports
  },
  "routes/track.$trackId": {
    id: "routes/track.$trackId",
    parentId: "root",
    path: "track/:trackId",
    index: void 0,
    caseSensitive: void 0,
    module: track_trackId_exports
  },
  "routes/_auth.logout": {
    id: "routes/_auth.logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: auth_logout_exports
  },
  "routes/_auth.login": {
    id: "routes/_auth.login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_exports
  },
  "routes/generator": {
    id: "routes/generator",
    parentId: "root",
    path: "generator",
    index: void 0,
    caseSensitive: void 0,
    module: generator_exports
  },
  "routes/track.new": {
    id: "routes/track.new",
    parentId: "root",
    path: "track/new",
    index: void 0,
    caseSensitive: void 0,
    module: track_new_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/tracks": {
    id: "routes/tracks",
    parentId: "root",
    path: "tracks",
    index: void 0,
    caseSensitive: void 0,
    module: tracks_exports
  },
  "routes/tuner": {
    id: "routes/tuner",
    parentId: "root",
    path: "tuner",
    index: void 0,
    caseSensitive: void 0,
    module: tuner_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
/*! Bundled license information:

tone/build/esm/core/Tone.js:
  (**
   * Tone.js
   * @author Yotam Mann
   * @license http://opensource.org/licenses/MIT MIT License
   * @copyright 2014-2019 Yotam Mann
   *)
*/
//# sourceMappingURL=index.js.map
