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
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// empty-module:~/components/track/TrackPlayer.client
var require_TrackPlayer = __commonJS({
  "empty-module:~/components/track/TrackPlayer.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/components/sequencer/Sequencer.client
var require_Sequencer = __commonJS({
  "empty-module:~/components/sequencer/Sequencer.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/components/track/TrackEditor.client
var require_TrackEditor = __commonJS({
  "empty-module:~/components/track/TrackEditor.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/components/GuitarTuner.client
var require_GuitarTuner = __commonJS({
  "empty-module:~/components/GuitarTuner.client"(exports, module2) {
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url })
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
var import_node3 = require("@remix-run/node"), import_react8 = require("@remix-run/react"), import_clsx = __toESM(require("clsx"));

// app/utils/ThemeProvider.tsx
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_react4 = require("react"), import_react5 = require("react"), import_react6 = require("react"), import_jsx_runtime2 = require("react/jsx-runtime"), Theme = /* @__PURE__ */ ((Theme2) => (Theme2.DARK = "dark", Theme2.LIGHT = "light", Theme2))(Theme || {}), ThemeContext = (0, import_react6.createContext)(void 0), prefersDarkMQ = "(prefers-color-scheme: dark)", getPreferredTheme = () => window.matchMedia(prefersDarkMQ).matches ? "dark" /* DARK */ : "light" /* LIGHT */, clientThemeCode = `
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "meta",
      {
        name: "color-scheme",
        content: theme === "light" ? "light dark" : "dark light"
      }
    ),
    ssrTheme ? null : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("script", { dangerouslySetInnerHTML: { __html: clientThemeCode } })
  ] });
}
var themes = Object.values(Theme);
function isTheme(value) {
  return typeof value == "string" && themes.includes(value);
}
function ThemeProvider({
  children,
  specifiedTheme
}) {
  let [theme, setTheme] = (0, import_react5.useState)(() => specifiedTheme ? themes.includes(specifiedTheme) ? specifiedTheme : null : typeof window != "object" ? null : getPreferredTheme()), persistTheme = (0, import_react2.useFetcher)(), persistThemeRef = (0, import_react3.useRef)(persistTheme);
  (0, import_react3.useEffect)(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);
  let mountRun = (0, import_react3.useRef)(!1);
  return (0, import_react3.useEffect)(() => {
    if (!mountRun.current) {
      mountRun.current = !0;
      return;
    }
    theme && persistThemeRef.current.submit(
      { theme },
      { action: "action/set-theme", method: "post" }
    );
  }, [theme]), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ThemeContext.Provider, { value: [theme, setTheme], children });
}
function useTheme() {
  let context = (0, import_react4.useContext)(ThemeContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}

// app/components/Navbar.tsx
var import_react7 = require("@remix-run/react"), import_react_hot_toast = __toESM(require("react-hot-toast"));
var import_jsx_runtime3 = require("react/jsx-runtime"), notifyLogout = () => {
  import_react_hot_toast.default.success("Logged out", { id: "auth-toast" });
};
function Navbar({ user }) {
  let [currentTheme, setTheme] = useTheme(), toggleTheme = () => {
    console.log("theme"), setTheme(
      (prevTheme) => prevTheme === "light" /* LIGHT */ ? "dark" /* DARK */ : "light" /* LIGHT */
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: "flex justify-between items-center px-1 sm:px-4 pb-2 pt-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("nav", { className: "grid gap-4 grid-flow-col items-baseline", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react7.Link, { className: "font-black tracking-tighter text-xl", to: "/", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "hidden sm:inline", children: "BackyTracky" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sm:hidden", children: "BT" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react7.NavLink, { to: "/tracks", children: "Tracks" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react7.NavLink, { to: "/generator", children: "Generate" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react7.NavLink, { to: "/tuner", children: "Tuner" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("nav", { className: "grid gap-4 grid-flow-col items-center", children: [
      (user == null ? void 0 : user.username) && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react7.NavLink, { className: "button--cta", to: "/track/new", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-5 w-5",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "path",
            {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
              clipRule: "evenodd"
            }
          )
        }
      ) }),
      user ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react7.Form, { className: "hidden sm:block", method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { onClick: notifyLogout, type: "submit", children: "Logout" }) }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react7.NavLink, { className: "hidden sm:block", to: "/login", children: "Login" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: "text-xl", onClick: toggleTheme, children: currentTheme === "light" /* LIGHT */ ? "\u{1F31A}" : "\u{1F60E}" })
    ] })
  ] });
}

// app/styles/app.css
var app_default = "/_static/build/_assets/app-SIBQ2CLQ.css";

// app/utils/session.server.ts
var import_node = require("@remix-run/node"), import_bcryptjs = __toESM(require("bcryptjs"));

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
db = new import_client.PrismaClient();

// app/utils/session.server.ts
async function login({ username, password }) {
  let user = await db.user.findUnique({
    where: { username }
  });
  return !user || !await import_bcryptjs.default.compare(password, user.passwordHash) ? null : { id: user.id, username };
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must bet set!");
var storage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "BT_session",
    secure: !0,
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
    throw (0, import_node.redirect)("/login");
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
  return (0, import_node.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(userId, redirectTo = "/tracks") {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/utils/theme.server.ts
var import_node2 = require("@remix-run/node");
var sessionSecret2 = process.env.SESSION_SECRET;
if (!sessionSecret2)
  throw new Error("SESSION_SECRET must be set");
var themeStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "BT_theme",
    secure: !0,
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
var import_react_hot_toast2 = require("react-hot-toast"), import_remix_utils = require("remix-utils"), import_jsx_runtime4 = require("react/jsx-runtime"), links = () => [{ rel: "stylesheet", href: app_default }], loader = async ({ request }) => {
  let user = await getUser(request), themeSession = await getThemeSession(request);
  return (0, import_node3.json)({ user, theme: themeSession.getTheme() });
};
function App() {
  let { user, theme: ssrTheme } = (0, import_react8.useLoaderData)(), [theme] = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", { lang: "en", className: (0, import_clsx.default)(theme), children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react8.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react8.Links, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ThemeScript, { ssrTheme: Boolean(ssrTheme) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "link",
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "link",
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "link",
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "manifest", href: "/site.webmanifest" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "msapplication-TileColor", content: "#da532c" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,viewport-fit=cover"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "theme-color", content: "#18181b" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "meta",
        {
          property: "og:title",
          content: "Free Backing Tracks for Musicians | BackyTracky"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "meta",
        {
          property: "og:description",
          content: "Create and play-along Lead-Sheets to level up your chops! Practice scales, licks or solos. Discover chord progressions others are using or make your own!"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { property: "og:locale", content: "en_US" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { property: "og:site_name", content: "BackyTracky" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { property: "og:image", content: "/og-image.png" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Navbar, { user }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_remix_utils.ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_hot_toast2.Toaster, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react8.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react8.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react8.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react8.LiveReload, {})
    ] })
  ] });
}
function AppWithProviders() {
  let { theme } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ThemeProvider, { specifiedTheme: theme, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(App, {}) });
}

// app/routes/_auth.register.tsx
var auth_register_exports = {};
__export(auth_register_exports, {
  default: () => RegisterRoute
});
var import_jsx_runtime5 = require("react/jsx-runtime");
function RegisterRoute() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "max-w-sm mx-auto pt-8", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { children: "Register \u{1F4D1}" }) }) }) });
}

// app/routes/track.$trackId.tsx
var track_trackId_exports = {};
__export(track_trackId_exports, {
  default: () => TrackDetailRoute,
  loader: () => loader2,
  meta: () => meta
});
var import_node5 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_remix_utils2 = require("remix-utils");

// app/components/PageHeader.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function PageHeader({
  title,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "border-b border-zinc-500 border-opacity-10 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-gray-1000", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "bg-white dark:bg-black absolute top-0 left-0 right-0 h-1 -z-10", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "color-change z-10 w-full top-0 h-full bg-opacity-10 absolute pointer-events-none" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "max-w-4xl mx-auto relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "page-header__breadcrumbs", children }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { className: "font-black", children: title })
    ] })
  ] });
}

// app/routes/track.$trackId.tsx
var import_TrackPlayer = __toESM(require_TrackPlayer());

// app/utils/tracks.server.ts
var import_node4 = require("@remix-run/node");
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
    return (0, import_node4.json)({ message: "Delete Success", track: deletedTrack });
  } catch {
    return (0, import_node4.json)({ message: "Delete Error" }, { status: 400 });
  }
}

// app/routes/track.$trackId.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), loader2 = async ({ params }) => {
  if (!params.trackId)
    return (0, import_node5.redirect)("/tracks");
  let track = await getTrack(params.trackId);
  return (0, import_node5.json)({ track });
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
  let { track } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("main", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(PageHeader, { title: track.name, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react9.Link, { to: "/", children: "Home" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: " / " }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react9.Link, { to: "/tracks", children: "Tracks" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: " / " }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react9.Link, { to: `/track/${track.id}`, children: track.name })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "opacity-50 text-xs flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { children: [
          "Suggested time: ",
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("strong", { children: track.bpm }),
          " bpm"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { children: [
          "Created by ",
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("strong", { children: track.authorName }),
          ", in",
          " ",
          new Date(track.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long"
          })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_remix_utils2.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "Loading..." }), children: () => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_TrackPlayer.default, { sheet: track.sheet, bpm: track.bpm }) })
    ] }) })
  ] });
}

// app/routes/_auth.logout.tsx
var auth_logout_exports = {};
__export(auth_logout_exports, {
  action: () => action,
  loader: () => loader3
});
var import_node6 = require("@remix-run/node");
var action = async ({ request }) => await logout(request), loader3 = async () => (0, import_node6.redirect)("/login");

// app/routes/_auth.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  action: () => action2,
  default: () => LoginRoute
});
var import_node7 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_react11 = require("react"), import_react_hot_toast3 = __toESM(require("react-hot-toast"));

// app/components/BackgroundNotes.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function BackgroundNotes() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "background-note animation-float-1", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "svg",
      {
        viewBox: "0 0 126 188",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "path",
            {
              d: "M62.3862 0V110.104C54.4518 105.522 45.2285 103.689 36.1475 104.891C27.0664 106.093 18.6355 110.262 12.1631 116.752C5.6906 123.241 1.53848 131.688 0.35106 140.782C-0.836364 149.876 1.00729 159.108 5.59595 167.046C10.1846 174.983 17.2616 181.182 25.7289 184.681C34.1961 188.18 43.58 188.783 52.4244 186.396C61.2688 184.01 69.0792 178.767 74.6434 171.482C80.2077 164.196 83.2147 155.276 83.1979 146.105V41.7233H124.919V0H62.3862Z",
              className: "fill-yellow-500"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "path",
            {
              opacity: "0.1",
              d: "M118.568 0V34.8754H76.8469V139.257C76.8495 147.096 74.6455 154.777 70.4877 161.42C66.3298 168.062 60.3864 173.397 53.339 176.813C46.2915 180.228 38.4254 181.586 30.6426 180.73C22.8597 179.875 15.4753 176.84 9.33594 171.975C14.7022 178.774 22.05 183.731 30.3589 186.157C38.6677 188.584 47.525 188.359 55.7004 185.514C63.8758 182.67 70.9634 177.346 75.9787 170.284C80.994 163.221 83.6879 154.77 83.6864 146.105V41.7233H125.407V0H118.568Z",
              fill: "black"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "background-note animation-float-2", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "svg",
      {
        viewBox: "0 0 126 188",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "path",
            {
              d: "M62.3862 0V110.104C54.4518 105.522 45.2285 103.689 36.1475 104.891C27.0664 106.093 18.6355 110.262 12.1631 116.752C5.6906 123.241 1.53848 131.688 0.35106 140.782C-0.836364 149.876 1.00729 159.108 5.59595 167.046C10.1846 174.983 17.2616 181.182 25.7289 184.681C34.1961 188.18 43.58 188.783 52.4244 186.396C61.2688 184.01 69.0792 178.767 74.6434 171.482C80.2077 164.196 83.2147 155.276 83.1979 146.105V41.7233H124.919V0H62.3862Z",
              className: "fill-blue-500"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "path",
            {
              opacity: "0.1",
              d: "M118.568 0V34.8754H76.8469V139.257C76.8495 147.096 74.6455 154.777 70.4877 161.42C66.3298 168.062 60.3864 173.397 53.339 176.813C46.2915 180.228 38.4254 181.586 30.6426 180.73C22.8597 179.875 15.4753 176.84 9.33594 171.975C14.7022 178.774 22.05 183.731 30.3589 186.157C38.6677 188.584 47.525 188.359 55.7004 185.514C63.8758 182.67 70.9634 177.346 75.9787 170.284C80.994 163.221 83.6879 154.77 83.6864 146.105V41.7233H125.407V0H118.568Z",
              fill: "black"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "background-note animation-float-3", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "svg",
      {
        viewBox: "0 0 126 188",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "path",
            {
              d: "M62.3862 0V110.104C54.4518 105.522 45.2285 103.689 36.1475 104.891C27.0664 106.093 18.6355 110.262 12.1631 116.752C5.6906 123.241 1.53848 131.688 0.35106 140.782C-0.836364 149.876 1.00729 159.108 5.59595 167.046C10.1846 174.983 17.2616 181.182 25.7289 184.681C34.1961 188.18 43.58 188.783 52.4244 186.396C61.2688 184.01 69.0792 178.767 74.6434 171.482C80.2077 164.196 83.2147 155.276 83.1979 146.105V41.7233H124.919V0H62.3862Z",
              className: "fill-red-400"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "path",
            {
              opacity: "0.1",
              d: "M118.568 0V34.8754H76.8469V139.257C76.8495 147.096 74.6455 154.777 70.4877 161.42C66.3298 168.062 60.3864 173.397 53.339 176.813C46.2915 180.228 38.4254 181.586 30.6426 180.73C22.8597 179.875 15.4753 176.84 9.33594 171.975C14.7022 178.774 22.05 183.731 30.3589 186.157C38.6677 188.584 47.525 188.359 55.7004 185.514C63.8758 182.67 70.9634 177.346 75.9787 170.284C80.994 163.221 83.6879 154.77 83.6864 146.105V41.7233H125.407V0H118.568Z",
              fill: "black"
            }
          )
        ]
      }
    ) })
  ] });
}

// app/components/TextInput.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function TextInput({
  name,
  label,
  actionData,
  placeholder = "",
  required = !1,
  type = "text"
}) {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className: "form-row", htmlFor: `${name}-input`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "input",
      {
        type,
        id: `${name}-input`,
        name,
        required,
        placeholder,
        defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
        min: type === "number" ? "30" : void 0,
        max: type === "number" ? "280" : void 0,
        "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.name),
        "aria-errormessage": (_c = actionData == null ? void 0 : actionData.fieldErrors) != null && _c.name ? `${name}-error` : void 0
      }
    ),
    (_d = actionData == null ? void 0 : actionData.fieldErrors) != null && _d.name ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "span",
      {
        className: "form-validation-error",
        role: "alert",
        id: `${name}-error`,
        children: actionData.fieldErrors.name
      }
    ) : null
  ] });
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
var import_jsx_runtime10 = require("react/jsx-runtime"), badRequest = (data) => (0, import_node7.json)(data, { status: 400 }), action2 = async ({ request }) => {
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
  let actionData = (0, import_react10.useActionData)(), navigation = (0, import_react10.useNavigation)();
  return (0, import_react11.useEffect)(() => {
    navigation.state === "submitting" && navigation.formMethod === "POST" && import_react_hot_toast3.default.loading("Logging in...", { id: "auth-toast" }), navigation.state === "idle" && (actionData != null && actionData.formError) && import_react_hot_toast3.default.error("There was an error...", { id: "auth-toast" }), navigation.state === "loading" && navigation.formMethod === "POST" && import_react_hot_toast3.default.success("You are logged in!", { id: "auth-toast" });
  }, [navigation, actionData]), /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "max-w-sm mx-auto pt-8 relative z-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h1", { className: "", children: "Login \u{1F511}" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react10.Form, { className: "grid gap-4 mt-4", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          TextInput,
          {
            name: "username",
            label: "Username",
            actionData
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          TextInput,
          {
            name: "password",
            label: "Password",
            type: "password",
            actionData
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "submit", className: "button", children: "login" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { id: "form-error-message", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "form-validation-error text-center", role: "alert", children: actionData.formError }) : null })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "text-xs text-center mt-4 text-opacity-50 bg-white dark:bg-zinc-900 p-2 rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { href: "https://dennissmuda.com/", className: "underline", children: "Contact me" }),
        " ",
        "if you want to know more, ",
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("br", {}),
        " or if you have song requests \u{1F918}"
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "relative pt-32", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(BackgroundNotes, {}) })
  ] });
}

// app/routes/generator.tsx
var generator_exports = {};
__export(generator_exports, {
  default: () => GeneratorRoute,
  meta: () => meta2
});
var import_react12 = require("@remix-run/react"), import_remix_utils3 = require("remix-utils");
var import_Sequencer = __toESM(require_Sequencer()), import_jsx_runtime11 = require("react/jsx-runtime"), meta2 = () => [
  {
    title: "Drum-Sequencer and Chord Progression Generator | BackyTracky"
  },
  {
    description: "Generate chord progressions and drum beats!"
  }
];
function GeneratorRoute() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(PageHeader, { title: "Make your own \u{1F98B}", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react12.Link, { to: "/", children: "Home" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: " / " }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react12.Link, { to: "/generator", children: "Sequencer" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "container max-w-4xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_remix_utils3.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: "Loading..." }), children: () => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_Sequencer.default, {}) }) }) })
  ] });
}

// app/routes/track.new.tsx
var track_new_exports = {};
__export(track_new_exports, {
  action: () => action3,
  default: () => NewTrackRoute,
  loader: () => loader4
});
var import_react16 = require("react"), import_node8 = require("@remix-run/node"), import_react17 = require("@remix-run/react");

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
var import_react14 = require("react"), import_react15 = require("@headlessui/react"), import_tonal = require("@tonaljs/tonal"), import_tone2 = require("tone");

// app/hooks/useInstruments.ts
var import_react13 = require("react");

// app/music/loader.ts
var import_tone = require("tone");
function loadInstruments(callback) {
  let pianoSampler = new import_tone.Sampler({
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
  }).toDestination(), bassSampler = new import_tone.Sampler({
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
  }).toDestination(), drumSampler = new import_tone.Sampler({
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
  let [instruments, setInstruments] = (0, import_react13.useState)();
  return (0, import_react13.useEffect)(() => {
    let { pianoSampler, drumSampler, bassSampler } = loadInstruments();
    setInstruments({ pianoSampler, bassSampler, drumSampler });
  }, []), [instruments];
}

// app/components/track/ChordEditorModal.tsx
var import_jsx_runtime12 = require("react/jsx-runtime"), roots = ["C", "D", "E", "F", "G", "A", "B"], flatRoots = ["Db", "Eb", "Gb", "Ab", "Bb"], octaves = ["2", "3", "4", "5", "6"], chordTypes = ["", "M", "maj", "min", "dim", "aug"], extensions = [
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
  let [instruments] = useInstruments(), [newChordName, setNewChordName] = (0, import_react14.useState)(""), [newRoot, setNewRoot] = (0, import_react14.useState)("C"), [newType, setNewType] = (0, import_react14.useState)("maj"), [newExtension, setNewExtension] = (0, import_react14.useState)("7"), [newOctave, setNewOctave] = (0, import_react14.useState)("3");
  return (0, import_react14.useEffect)(() => {
    var _a;
    if (!currentChord)
      return;
    let newChord = import_tonal.Chord.getChord(
      `${newType}${newExtension}`,
      `${newRoot}${newOctave}`
    ), isChordBroken = newChord.empty;
    if (newChord.notes.forEach((note) => {
      note.includes("##") && (isChordBroken = !0);
    }), isChordBroken)
      return setNewChordName("Try something else..");
    currentChord.note = newChord.notes, currentChord.root = newRoot, currentChord.type = newType, currentChord.extension = newExtension, setNewChordName(newChord.symbol), (_a = instruments == null ? void 0 : instruments.pianoSampler) == null || _a.triggerAttackRelease(
      currentChord.note,
      "4n",
      (0, import_tone2.now)(),
      0.35
    );
  }, [newRoot, newType, newExtension, newOctave, currentChord, instruments]), /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_react15.Transition,
    {
      show: isOpen,
      enter: "transition duration-100 ease-out",
      enterFrom: "transform scale-95 opacity-0",
      enterTo: "transform scale-100 opacity-100",
      leave: "transition duration-75 ease-out",
      leaveFrom: "transform scale-100 opacity-100",
      leaveTo: "transform scale-95 opacity-0",
      as: import_react14.Fragment,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
        import_react15.Dialog,
        {
          onClose: () => onClose(),
          className: "fixed inset-0 z-50 chord-editor-modal",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "fixed inset-0 bg-black/30", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "fixed inset-0 flex items-center justify-center p-2", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react15.Dialog.Panel, { className: "w-full max-w-md rounded bg-white p-4 dark:bg-black", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react15.Dialog.Title, { children: newChordName || "Change chord" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react15.Dialog.Description, { className: "text-xs opacity-50", children: "Listen to know what works! Not every combination is possible." }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "opacity-50 text-xs", children: "root" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grid grid-flow-col gap-2 mb-2", children: roots.map((root) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "button",
                {
                  onClick: () => setNewRoot(root),
                  className: `button ${root === newRoot ? "active" : ""}`,
                  children: root
                },
                root
              )) }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grid grid-flow-col gap-2", children: flatRoots.map((root) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "button",
                {
                  onClick: () => setNewRoot(root),
                  className: `button ${root === newRoot ? "active" : ""}`,
                  children: root
                },
                root
              )) }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "opacity-50 text-xs", children: "type" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grid grid-flow-col gap-2 mb-2", children: chordTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "button",
                {
                  onClick: () => setNewType(type),
                  className: `button ${type === newType ? "active" : ""}`,
                  children: type
                },
                type
              )) }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "opacity-50 text-xs", children: "extension" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grid grid-rows-2 grid-cols-6 gap-2 mb-2", children: extensions.map((ext) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "button",
                {
                  onClick: () => setNewExtension(ext),
                  className: `button ${ext === newExtension ? "active" : ""}`,
                  children: ext
                },
                ext
              )) }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "opacity-50 text-xs", children: "octave" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grid grid-flow-col gap-2 mb-4", children: octaves.map((octave) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "button",
                {
                  onClick: () => setNewOctave(octave),
                  className: `button ${octave === newOctave ? "active" : ""}`,
                  children: octave
                },
                octave
              )) }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "button",
                {
                  className: "button button--submit w-full",
                  onClick: () => onClose(),
                  children: "save chord"
                }
              )
            ] }) })
          ]
        }
      )
    }
  );
}

// app/routes/track.new.tsx
var import_TrackEditor = __toESM(require_TrackEditor()), import_remix_utils4 = require("remix-utils"), import_jsx_runtime13 = require("react/jsx-runtime"), sampleChordConfig = {
  root: "C",
  type: "maj",
  extension: "7",
  note: ["C3", "E3", "G3", "B3"],
  duration: "1n",
  bar: 0,
  beat: 0,
  sixteenth: 0
}, loader4 = async ({ request }) => {
  let user = await getUser(request);
  return (0, import_node8.json)({ user });
}, action3 = async ({ request }) => {
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
  return newTrack ? (0, import_node8.redirect)(`/track/${newTrack.id}`) : badRequest2({
    formError: "couldn't create track!"
  });
}, badRequest2 = (data) => (0, import_node8.json)(data, { status: 400 });
function NewTrackRoute() {
  let actionData = (0, import_react17.useActionData)(), loaderData = (0, import_react17.useLoaderData)(), [isChordEditorOpen, setIsChordEditorOpen] = (0, import_react16.useState)(!1), [chords, setChords] = (0, import_react16.useState)([]), selectedChord = (0, import_react16.useRef)(null), lastChord = (0, import_react16.useRef)(null);
  (0, import_react16.useEffect)(() => {
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
    var _a, _b, _c, _d, _e;
    e.preventDefault();
    let newTime = chords.length > 0 ? getNextChordTime(chords[chords.length - 1]) : { bar: 0, beat: 0, sixteenth: 0 }, newChord = new ChordBeat({
      root: ((_a = lastChord == null ? void 0 : lastChord.current) == null ? void 0 : _a.root) || "C",
      type: ((_b = lastChord == null ? void 0 : lastChord.current) == null ? void 0 : _b.type) || "maj",
      extension: ((_c = lastChord == null ? void 0 : lastChord.current) == null ? void 0 : _c.extension) || "7",
      note: ((_d = lastChord == null ? void 0 : lastChord.current) == null ? void 0 : _d.note) || ["C3", "E3", "G3", "B3"],
      duration: ((_e = lastChord == null ? void 0 : lastChord.current) == null ? void 0 : _e.duration) || "1n",
      ...newTime
    });
    chords != null && chords.length ? setChords([...chords, newChord]) : setChords([newChord]);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "container max-w-4xl mx-auto pt-8", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react17.Form, { className: "flex flex-col gap-4", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid grid-cols-6 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "col-span-5", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          TextInput,
          {
            name: "trackname",
            label: "New Trackname",
            placeholder: "My awesome backing track",
            required: !0,
            actionData
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "col-span-1", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          TextInput,
          {
            type: "number",
            name: "bpm",
            label: "BPM",
            placeholder: "120",
            required: !0,
            actionData
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        TextInput,
        {
          name: "description",
          label: "Description",
          placeholder: "Short but sweet progression in C major",
          required: !0,
          actionData
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "input",
        {
          name: "chords",
          type: "text",
          value: JSON.stringify(chords),
          className: "hidden",
          readOnly: !0
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "input",
        {
          name: "author-name",
          type: "text",
          value: loaderData.user.username,
          className: "hidden",
          readOnly: !0
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "overflow-x-scroll", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("fieldset", { className: "sheet-grid sheet-grid--editor overflow-x-auto", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("legend", { children: "Sheet - one full row = count to 4" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_remix_utils4.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { children: "Loading..." }), children: () => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_TrackEditor.default,
          {
            chords,
            shortenChord,
            lengthenChord,
            editChord,
            deleteChord
          }
        ) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("button", { className: "button", onClick: addChord, children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: "add chord" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
            clipRule: "evenodd"
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "form-row", htmlFor: "newChord", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "input",
        {
          name: "newChord",
          disabled: chords.length === 0,
          type: "submit",
          className: "button col-span-4",
          value: "save track"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { id: "form-error-message", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "form-validation-error text-center", role: "alert", children: actionData.formError }) : null })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      ChordEditor,
      {
        isOpen: isChordEditorOpen,
        currentChord: selectedChord.current,
        onClose: () => finishEditingChord()
      }
    )
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta3
});
var import_react19 = require("@remix-run/react");

// app/components/Footer.tsx
var import_react18 = require("@remix-run/react"), import_jsx_runtime14 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("footer", { className: "p-3 sm:p-6 mt-24", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "container max-w-4xl mx-auto pt-8", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex flex-col md:flex-row justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-baseline", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react18.Link, { className: "font-black tracking-tighter text-xl", to: "/", children: "BackyTracky\u2122" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react18.Link, { className: "ml-8 text-xs opacity-50", to: "/tracks", children: "Tracks" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react18.Link, { className: "ml-8 text-xs opacity-50", to: "/generator", children: "Sequencer" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react18.Link, { className: "ml-8 text-xs opacity-50", to: "/tuner", children: "Guitar Tuner" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "mt-2 opacity-50 text-xs", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { children: [
      (/* @__PURE__ */ new Date()).getFullYear(),
      " created by",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "a",
        {
          href: "https://dennissmuda.com/",
          target: "blank",
          rel: "nofollower",
          className: "underline hover:no-underline",
          children: "dennissmuda"
        }
      )
    ] }) })
  ] }) }) });
}

// app/routes/_index.tsx
var import_jsx_runtime15 = require("react/jsx-runtime"), meta3 = () => [
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("main", { className: "main relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "bg-white dark:bg-black absolute -top-32 left-0 right-0 h-[280px] -z-10 rotate-1", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "color-change z-10 w-full top-0 h-full bg-opacity-10 absolute pointer-events-none" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(BackgroundNotes, {}),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "container max-w-4xl mx-auto pt-8 relative z-10", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "bt-prose mx-auto my-12", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h1", { className: "mb-0 rounded-md relative -ml-2 inline-block px-1 font-black", children: "Welcome to BackyTracky" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "max-w-lg bg-zinc-50 dark:bg-zinc-900 bg-opacity-10 rounded-md", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "sr-only", children: "Free " }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { children: "Backing Tracks" }),
          " for Musicians! Play-along some of my favorite lead-sheets to level up your chops... ",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("i", { children: "or" }),
          " go ahead and try making something of your own! Practice scales, licks or solos."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
          import_react19.Link,
          {
            className: "button no-underline px-8 dark:text-white",
            to: "/tracks",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "see some tracks" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-5 w-5",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
                      clipRule: "evenodd"
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
          import_react19.Link,
          {
            className: "button button--submit no-underline px-8 ml-4 dark:text-white",
            to: "/generator",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "make your own" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-5 w-5",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
                      clipRule: "evenodd"
                    }
                  )
                }
              )
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "container max-w-4xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "bt-prose mx-auto my-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "mt-2 font-black", children: "Features" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("ul", { className: "max-w-lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { children: "Lead-sheets" }),
          " for some of my favorite tracks, inspired by some of my favorite standards"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("li", { children: [
          "A full blown ",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { children: "Sequencer" }),
          " that let's you try out some new wild chord progressions!"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { children: "Guitar Tuner" }),
          " to help practice tuning your guitar by ear"
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "container max-w-4xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "bt-prose mx-auto my-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "mt-2 font-black", children: "FAQ" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "font-black", children: "What is all this?" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "max-w-lg", children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { children: "Tracks" }),
        " are mainly some chord progressions that I throw together to jam around on. If you have any requests, feel free to",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "a",
          {
            href: "https://dennissmuda.com/",
            rel: "noopener noreferrer",
            target: "_blank",
            className: "underline",
            children: "contact me"
          }
        ),
        "."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "font-black", children: "Code?" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { children: [
        "This project is ",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { children: "open source" }),
        " and you can",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "a",
          {
            target: "_blank",
            href: "https://github.com/DennisSmuda/backytracky-remix/",
            rel: "noopener noreferrer",
            children: "check it out on github"
          }
        ),
        "! ",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
        "It uses React (",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "a",
          {
            target: "_blank",
            href: "https://remix.run/",
            rel: "noopener noreferrer",
            children: "remix.run"
          }
        ),
        "), tailwindcss and prisma and is deployed to netlify. To play and generate music, there is",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "a",
          {
            href: "https://tonejs.github.io/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Tone.js"
          }
        ),
        " ",
        "and",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "a",
          {
            href: "https://github.com/tonaljs/tonal",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "tonal"
          }
        ),
        "."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "font-black", children: "Does it cost anything?" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "max-w-lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { children: "No!" }),
        " As long as I don't just let anyone create accounts and tracks I can maintain BackyTracky for free."
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Footer, {})
  ] });
}

// app/routes/tracks.tsx
var tracks_exports = {};
__export(tracks_exports, {
  action: () => action4,
  default: () => TracksRoute,
  loader: () => loader5,
  meta: () => meta4
});
var import_node9 = require("@remix-run/node"), import_react21 = require("@remix-run/react"), import_react22 = require("react"), import_react_hot_toast4 = __toESM(require("react-hot-toast"));

// app/components/track/TrackListing.tsx
var import_react20 = require("@remix-run/react"), import_jsx_runtime16 = require("react/jsx-runtime");
function TrackListing({
  track,
  showDescription,
  currentUserId
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    "div",
    {
      className: "flex items-center rounded-lg",
      "data-testid": "track-listing",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col flex-grow", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex items-center gap-4 text-xs opacity-50", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { children: [
            track.bpm,
            " bpm"
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            import_react20.Link,
            {
              to: `/track/${track.id}`,
              className: `${showDescription ? "text-2xl" : "text-lg"} font-black no-underline hover:underline`,
              children: track.name
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "text-xs opacity-50", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { className: "", children: [
              "created",
              " ",
              new Date(track.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long"
              })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { children: [
              ", by ",
              track.authorName
            ] })
          ] })
        ] }),
        track.userId === currentUserId ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react20.Form, { method: "delete", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { type: "hidden", name: "trackId", value: track.id }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("button", { className: "icon-button button--delete", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "delete" }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                    clipRule: "evenodd"
                  }
                )
              }
            )
          ] })
        ] }) : ""
      ]
    },
    track.id
  );
}

// app/routes/tracks.tsx
var import_jsx_runtime17 = require("react/jsx-runtime"), loader5 = async ({ request }) => {
  let data = {
    tracks: await db.track.findMany(),
    user: await getUser(request)
  };
  return (0, import_node9.json)(data);
}, action4 = async ({ request }) => {
  let trackId = (await request.formData()).get("trackId"), response = await deleteTrack(trackId);
  return response.status === 400 ? badRequest3({
    error: "Error deleting track"
  }) : (0, import_node9.json)({ response });
}, badRequest3 = (data) => (0, import_node9.json)(data, { status: 400 }), meta4 = () => [
  {
    title: "All Tracks | BackyTracky"
  },
  {
    description: "Explore all published backing tracks. Grab your instrument and practice some chord changes!"
  }
];
function TracksRoute() {
  let actionData = (0, import_react21.useActionData)(), loaderData = (0, import_react21.useLoaderData)(), navigation = (0, import_react21.useNavigation)();
  return (0, import_react22.useEffect)(() => {
    navigation.state === "submitting" && navigation.formMethod === "delete" && import_react_hot_toast4.default.loading("Deleting...", { id: "track-delete-toast" }), navigation.state === "idle" && (actionData != null && actionData.error) && import_react_hot_toast4.default.error("Couldn't delete track...", {
      id: "track-delete-toast"
    }), navigation.state === "idle" && (actionData != null && actionData.response) && import_react_hot_toast4.default.success("Deleted track!", { id: "track-delete-toast" });
  }, [navigation, actionData]), /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("main", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "absolute bottom-24 md:bottom-32 right-0 md:right-20", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(BackgroundNotes, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(PageHeader, { title: "All Tracks \u{1F3BA}", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react21.Link, { to: "/", children: "Home" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: " / " }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react21.Link, { to: "/tracks", children: "Tracks" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "container max-w-4xl mx-auto relative", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "grid gap-12 mb-12 mt-4", children: [
      loaderData.tracks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { children: "no Tracks yet" }) : "",
      loaderData.tracks.map((track) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          TrackListing,
          {
            track,
            showDescription: !0,
            currentUserId: (_a = loaderData.user) == null ? void 0 : _a.id
          },
          track.id
        );
      })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Footer, {})
  ] });
}

// app/routes/tuner.tsx
var tuner_exports = {};
__export(tuner_exports, {
  default: () => Tuner,
  meta: () => meta5
});
var import_react23 = require("@remix-run/react"), import_remix_utils5 = require("remix-utils");
var import_GuitarTuner = __toESM(require_GuitarTuner());
var import_jsx_runtime18 = require("react/jsx-runtime"), meta5 = () => [
  {
    title: "Guitar Tuner | BackyTracky"
  },
  {
    description: "Practice tuning your guitar by ear! Supports multiple tunings!"
  }
];
function Tuner() {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("main", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(PageHeader, { title: "Tune by ear \u{1F442}", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react23.Link, { to: "/", children: "Home" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: " / " }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react23.Link, { to: "/tuner", children: "Tuner" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "max-w-4xl mx-auto relative", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_remix_utils5.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { children: "Loading..." }), children: () => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_GuitarTuner.default, {}) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Footer, {})
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/_static/build/entry.client-ANZNA4IW.js", imports: ["/_static/build/_shared/chunk-6JIP7T2U.js", "/_static/build/_shared/chunk-2V6SYTAZ.js", "/_static/build/_shared/chunk-3MRMLTOA.js", "/_static/build/_shared/chunk-IDOYUPXY.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/_static/build/root-NBH22W6Q.js", imports: ["/_static/build/_shared/chunk-VCRFJVC5.js", "/_static/build/_shared/chunk-4U5R7A67.js", "/_static/build/_shared/chunk-2HSPSO5W.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/_auth.login-WKSNPG24.js", imports: ["/_static/build/_shared/chunk-5QYQAQP7.js", "/_static/build/_shared/chunk-32PKUXH3.js", "/_static/build/_shared/chunk-TZRESNRP.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.logout": { id: "routes/_auth.logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/_auth.logout-354DVZCM.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.register": { id: "routes/_auth.register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/_auth.register-R4JULM6Y.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/_static/build/routes/_index-QO5ULQJT.js", imports: ["/_static/build/_shared/chunk-7MY6TLFE.js", "/_static/build/_shared/chunk-5QYQAQP7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/generator": { id: "routes/generator", parentId: "root", path: "generator", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/generator-SOA6Z4ZH.js", imports: ["/_static/build/_shared/chunk-DYZB73S4.js", "/_static/build/_shared/chunk-7RWJS7TT.js", "/_static/build/_shared/chunk-CNIH4ILY.js", "/_static/build/_shared/chunk-THF2SXEC.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/track.$trackId": { id: "routes/track.$trackId", parentId: "root", path: "track/:trackId", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/track.$trackId-77ZUAA6Q.js", imports: ["/_static/build/_shared/chunk-DYZB73S4.js", "/_static/build/_shared/chunk-7RWJS7TT.js", "/_static/build/_shared/chunk-NPERGGDU.js", "/_static/build/_shared/chunk-EDVGF6CU.js", "/_static/build/_shared/chunk-THF2SXEC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/track.new": { id: "routes/track.new", parentId: "root", path: "track/new", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/track.new-HD5S6ORV.js", imports: ["/_static/build/_shared/chunk-NPERGGDU.js", "/_static/build/_shared/chunk-EDVGF6CU.js", "/_static/build/_shared/chunk-32PKUXH3.js", "/_static/build/_shared/chunk-TZRESNRP.js", "/_static/build/_shared/chunk-CNIH4ILY.js", "/_static/build/_shared/chunk-THF2SXEC.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tracks": { id: "routes/tracks", parentId: "root", path: "tracks", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/tracks-U4YG2JT4.js", imports: ["/_static/build/_shared/chunk-7MY6TLFE.js", "/_static/build/_shared/chunk-5QYQAQP7.js", "/_static/build/_shared/chunk-7RWJS7TT.js", "/_static/build/_shared/chunk-EDVGF6CU.js", "/_static/build/_shared/chunk-TZRESNRP.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tuner": { id: "routes/tuner", parentId: "root", path: "tuner", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/tuner-OS2D2BNY.js", imports: ["/_static/build/_shared/chunk-7MY6TLFE.js", "/_static/build/_shared/chunk-7RWJS7TT.js", "/_static/build/_shared/chunk-THF2SXEC.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "2e9341ec", hmr: void 0, url: "/_static/build/manifest-2E9341EC.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/_static/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
