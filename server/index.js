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
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
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
  loader: () => loader,
  meta: () => meta
});
var import_node3 = require("@remix-run/node"), import_react8 = require("@remix-run/react"), import_clsx = __toESM(require("clsx"));

// app/utils/ThemeProvider.tsx
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_react4 = require("react"), import_react5 = require("react"), import_react6 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Theme = /* @__PURE__ */ ((Theme2) => (Theme2.DARK = "dark", Theme2.LIGHT = "light", Theme2))(Theme || {}), ThemeContext = (0, import_react6.createContext)(void 0), prefersDarkMQ = "(prefers-color-scheme: dark)", getPreferredTheme = () => window.matchMedia(prefersDarkMQ).matches ? "dark" /* DARK */ : "light" /* LIGHT */, clientThemeCode = `
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "meta",
      {
        name: "color-scheme",
        content: theme === "light" ? "light dark" : "dark light"
      },
      void 0,
      !1,
      {
        fileName: "app/utils/ThemeProvider.tsx",
        lineNumber: 39,
        columnNumber: 7
      },
      this
    ),
    ssrTheme ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("script", { dangerouslySetInnerHTML: { __html: clientThemeCode } }, void 0, !1, {
      fileName: "app/utils/ThemeProvider.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/utils/ThemeProvider.tsx",
    lineNumber: 38,
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
  }, [theme]), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ThemeContext.Provider, { value: [theme, setTheme], children }, void 0, !1, {
    fileName: "app/utils/ThemeProvider.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}
function useTheme() {
  let context = (0, import_react4.useContext)(ThemeContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}

// app/components/Navbar.tsx
var import_react7 = require("@remix-run/react"), import_react_hot_toast = __toESM(require("react-hot-toast"));
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), notifyLogout = () => {
  import_react_hot_toast.default.success("Logged out");
};
function Navbar({ user }) {
  let [currentTheme, setTheme] = useTheme(), toggleTheme = () => {
    console.log("theme"), setTheme(
      (prevTheme) => prevTheme === "light" /* LIGHT */ ? "dark" /* DARK */ : "light" /* LIGHT */
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "flex justify-between items-center px-1 sm:px-4 pb-2 pt-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "grid gap-4 grid-flow-col items-baseline", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.Link, { className: "font-black tracking-tighter text-xl", to: "/", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "hidden sm:inline", children: "BackyTracky" }, void 0, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sm:hidden", children: "BT" }, void 0, !1, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.NavLink, { to: "/tracks", children: "Tracks" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.NavLink, { to: "/generator", children: "Generate" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.NavLink, { to: "/tuner", children: "Tuner" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "grid gap-4 grid-flow-col items-center", children: [
      (user == null ? void 0 : user.username) && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.NavLink, { className: "button--cta", to: "/track/new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-5 w-5",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
              lineNumber: 44,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 38,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      user ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.Form, { className: "hidden sm:block", method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: notifyLogout, type: "submit", children: "Logout" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react7.NavLink, { className: "hidden sm:block", to: "/login", children: "Login" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "text-xl", onClick: toggleTheme, children: currentTheme === "light" /* LIGHT */ ? "\u{1F31A}" : "\u{1F60E}" }, void 0, !1, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/styles/app.css
var app_default = "/_static/build/_assets/app-VC4PS46U.css";

// app/utils/session.server.ts
var import_node = require("@remix-run/node"), import_bcryptjs = __toESM(require("bcryptjs"));

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

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
var import_react_hot_toast2 = __toESM(require("react-hot-toast")), import_remix_utils = require("remix-utils"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: app_default }], meta = () => ({
  charset: "utf-8",
  title: "Free Backing Tracks for Musicians! | BackyTracky Homepage",
  description: "Create and play-along Lead-Sheets to level up your chops! Practice scales, licks or solos. Discover chord progressions others are using or make your own!",
  viewport: "width=device-width,initial-scale=1"
}), loader = async ({ request }) => {
  let user = await getUser(request), themeSession = await getThemeSession(request);
  return (0, import_node3.json)({ user, theme: themeSession.getTheme() });
};
function App() {
  let { user, theme: ssrTheme } = (0, import_react8.useLoaderData)(), [theme] = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", className: (0, import_clsx.default)(theme), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react8.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react8.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ThemeScript, { ssrTheme: Boolean(ssrTheme) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          lineNumber: 53,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          lineNumber: 58,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
          lineNumber: 64,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { rel: "manifest", href: "/site.webmanifest" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "msapplication-TileColor", content: "#da532c" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "theme-color", content: "#18181b" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "meta",
        {
          property: "og:title",
          content: "Free Backing Tracks for Musicians | BackyTracky"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 74,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "meta",
        {
          property: "og:description",
          content: "Create and play-along Lead-Sheets to level up your chops! Practice scales, licks or solos. Discover chord progressions others are using or make your own!"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { property: "og:locale", content: "en_US" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { property: "og:site_name", content: "BackyTracky" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { property: "og:image", content: "/og-image.png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Navbar, { user }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_remix_utils.ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_hot_toast2.Toaster, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 89,
        columnNumber: 28
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react8.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react8.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react8.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
function AppWithProviders() {
  let { theme } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ThemeProvider, { specifiedTheme: theme, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(App, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 105,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 104,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.register.tsx
var auth_register_exports = {};
__export(auth_register_exports, {
  default: () => RegisterRoute
});
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function RegisterRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-sm mx-auto pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Register \u{1F4D1}" }, void 0, !1, {
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
  loader: () => loader2,
  meta: () => meta2
});
var import_node5 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_remix_utils2 = require("remix-utils");

// app/components/PageHeader.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function PageHeader({
  title,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "border-b border-zinc-500 border-opacity-10 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-gray-1000", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white dark:bg-black absolute top-0 left-0 right-0 h-1 -z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "color-change z-10 w-full top-0 h-full bg-opacity-10 absolute pointer-events-none" }, void 0, !1, {
      fileName: "app/components/PageHeader.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/PageHeader.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "max-w-4xl mx-auto relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "page-header__breadcrumbs", children }, void 0, !1, {
        fileName: "app/components/PageHeader.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "font-black", children: title }, void 0, !1, {
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
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => {
  if (!params.trackId)
    return (0, import_node5.redirect)("/tracks");
  let track = await getTrack(params.trackId);
  return (0, import_node5.json)({ track });
}, meta2 = ({ data }) => ({
  title: `${data.track.name} Backing Track | BackyTracky`,
  description: data.track.description
});
function TrackDetailRoute() {
  let { track } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(PageHeader, { title: track.name, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: " / " }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Link, { to: "/tracks", children: "Tracks" }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: " / " }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Link, { to: `/track/${track.id}`, children: track.name }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/track.$trackId.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "opacity-50 text-xs flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: [
          "Suggested time: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: track.bpm }, void 0, !1, {
            fileName: "app/routes/track.$trackId.tsx",
            lineNumber: 36,
            columnNumber: 31
          }, this),
          " bpm"
        ] }, void 0, !0, {
          fileName: "app/routes/track.$trackId.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: [
          "Created by ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: track.authorName }, void 0, !1, {
            fileName: "app/routes/track.$trackId.tsx",
            lineNumber: 40,
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
          lineNumber: 39,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/track.$trackId.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_remix_utils2.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Loading..." }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 49,
        columnNumber: 33
      }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_TrackPlayer.default, { sheet: track.sheet, bpm: track.bpm }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 50,
        columnNumber: 20
      }, this) }, void 0, !1, {
        fileName: "app/routes/track.$trackId.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/track.$trackId.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/track.$trackId.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/track.$trackId.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
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
var import_node7 = require("@remix-run/node"), import_react10 = require("@remix-run/react");

// app/components/BackgroundNotes.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function BackgroundNotes() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "background-note animation-float-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "svg",
      {
        viewBox: "0 0 126 188",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "background-note animation-float-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "svg",
      {
        viewBox: "0 0 126 188",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "background-note animation-float-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "svg",
      {
        viewBox: "0 0 126 188",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function TextInput({
  name,
  label,
  actionData,
  placeholder = "",
  required = !1,
  type = "text"
}) {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { className: "form-row", htmlFor: `${name}-input`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: label }, void 0, !1, {
      fileName: "app/components/TextInput.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
      },
      void 0,
      !1,
      {
        fileName: "app/components/TextInput.tsx",
        lineNumber: 24,
        columnNumber: 7
      },
      this
    ),
    (_d = actionData == null ? void 0 : actionData.fieldErrors) != null && _d.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
        lineNumber: 39,
        columnNumber: 9
      },
      this
    ) : null
  ] }, void 0, !0, {
    fileName: "app/components/TextInput.tsx",
    lineNumber: 22,
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
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), badRequest = (data) => (0, import_node7.json)(data, { status: 400 }), action2 = async ({ request }) => {
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
  let actionData = (0, import_react10.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "max-w-sm mx-auto pt-8 relative z-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "", children: "Login \u{1F511}" }, void 0, !1, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react10.Form, { className: "grid gap-4 mt-4", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
            lineNumber: 88,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
            lineNumber: 93,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { type: "submit", className: "button", children: "login" }, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { id: "form-error-message", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "form-validation-error text-center", role: "alert", children: actionData.formError }, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 105,
          columnNumber: 17
        }, this) : null }, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-center mt-4 text-opacity-50 bg-white dark:bg-zinc-900 p-2 rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("a", { href: "https://dennissmuda.com/", className: "underline", children: "Contact me" }, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this),
        " ",
        "if you want to know more, ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 116,
          columnNumber: 39
        }, this),
        " or if you have song requests \u{1F918}"
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "relative pt-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(BackgroundNotes, {}, void 0, !1, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

// app/routes/generator.tsx
var generator_exports = {};
__export(generator_exports, {
  default: () => GeneratorRoute
});
var import_react11 = require("@remix-run/react"), import_remix_utils3 = require("remix-utils");
var import_Sequencer = __toESM(require_Sequencer()), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function GeneratorRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(PageHeader, { title: "Make your own \u{1F98B}", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/generator.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: " / " }, void 0, !1, {
        fileName: "app/routes/generator.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { to: "/generator", children: "Sequencer" }, void 0, !1, {
        fileName: "app/routes/generator.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/generator.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "container max-w-4xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_remix_utils3.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Loading..." }, void 0, !1, {
      fileName: "app/routes/generator.tsx",
      lineNumber: 17,
      columnNumber: 33
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_Sequencer.default, {}, void 0, !1, {
      fileName: "app/routes/generator.tsx",
      lineNumber: 18,
      columnNumber: 20
    }, this) }, void 0, !1, {
      fileName: "app/routes/generator.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/generator.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/generator.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/generator.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/track.new.tsx
var track_new_exports = {};
__export(track_new_exports, {
  action: () => action3,
  default: () => NewTrackRoute,
  loader: () => loader4
});
var import_react15 = require("react"), import_node8 = require("@remix-run/node"), import_react16 = require("@remix-run/react");

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
var import_react13 = require("react"), import_react14 = require("@headlessui/react"), import_tonal = require("@tonaljs/tonal"), import_tone2 = require("tone");

// app/hooks/useInstruments.ts
var import_react12 = require("react");

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
  let [instruments, setInstruments] = (0, import_react12.useState)();
  return (0, import_react12.useEffect)(() => {
    let { pianoSampler, drumSampler, bassSampler } = loadInstruments();
    setInstruments({ pianoSampler, bassSampler, drumSampler });
  }, []), [instruments];
}

// app/components/track/ChordEditorModal.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), roots = ["C", "D", "E", "F", "G", "A", "B"], flatRoots = ["Db", "Eb", "Gb", "Ab", "Bb"], octaves = ["2", "3", "4", "5", "6"], chordTypes = ["", "M", "maj", "min", "dim", "aug"], extensions = [
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
  let [instruments] = useInstruments(), [newChordName, setNewChordName] = (0, import_react13.useState)(""), [newRoot, setNewRoot] = (0, import_react13.useState)("C"), [newType, setNewType] = (0, import_react13.useState)("maj"), [newExtension, setNewExtension] = (0, import_react13.useState)("7"), [newOctave, setNewOctave] = (0, import_react13.useState)("3");
  return (0, import_react13.useEffect)(() => {
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
  }, [newRoot, newType, newExtension, newOctave, currentChord, instruments]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    import_react14.Transition,
    {
      show: isOpen,
      enter: "transition duration-100 ease-out",
      enterFrom: "transform scale-95 opacity-0",
      enterTo: "transform scale-100 opacity-100",
      leave: "transition duration-75 ease-out",
      leaveFrom: "transform scale-100 opacity-100",
      leaveTo: "transform scale-95 opacity-0",
      as: import_react13.Fragment,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_react14.Dialog,
        {
          onClose: () => onClose(),
          className: "fixed inset-0 z-50 chord-editor-modal",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "fixed inset-0 bg-black/30", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/components/track/ChordEditorModal.tsx",
              lineNumber: 92,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "fixed inset-0 flex items-center justify-center p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react14.Dialog.Panel, { className: "w-full max-w-md rounded bg-white p-4 dark:bg-black", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react14.Dialog.Title, { children: newChordName || "Change chord" }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 96,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react14.Dialog.Description, { className: "text-xs opacity-50", children: "Listen to know what works! Not every combination is possible." }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 97,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "opacity-50 text-xs", children: "root" }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 101,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid grid-flow-col gap-2 mb-2", children: roots.map((root) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid grid-flow-col gap-2", children: flatRoots.map((root) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "opacity-50 text-xs", children: "type" }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 125,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid grid-flow-col gap-2 mb-2", children: chordTypes.map((type) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "opacity-50 text-xs", children: "extension" }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 138,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid grid-rows-2 grid-cols-6 gap-2 mb-2", children: extensions.map((ext) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "opacity-50 text-xs", children: "octave" }, void 0, !1, {
                fileName: "app/components/track/ChordEditorModal.tsx",
                lineNumber: 151,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid grid-flow-col gap-2 mb-4", children: octaves.map((octave) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
var import_TrackEditor = __toESM(require_TrackEditor()), import_remix_utils4 = require("remix-utils"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), sampleChordConfig = {
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
  let actionData = (0, import_react16.useActionData)(), loaderData = (0, import_react16.useLoaderData)(), [isChordEditorOpen, setIsChordEditorOpen] = (0, import_react15.useState)(!1), [chords, setChords] = (0, import_react15.useState)([]), selectedChord = (0, import_react15.useRef)(null), lastChord = (0, import_react15.useRef)(null);
  (0, import_react15.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "container max-w-4xl mx-auto pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react16.Form, { className: "flex flex-col gap-4", method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "grid grid-cols-6 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "col-span-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
            lineNumber: 184,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 183,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
            lineNumber: 194,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 193,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 182,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
          lineNumber: 205,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
          lineNumber: 212,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
          lineNumber: 219,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "overflow-x-scroll", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("fieldset", { className: "sheet-grid sheet-grid--editor overflow-x-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("legend", { children: "Sheet - one full row = count to 4" }, void 0, !1, {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 229,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_remix_utils4.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Loading..." }, void 0, !1, {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 230,
          columnNumber: 39
        }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
            lineNumber: 232,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 230,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 228,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 227,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { className: "button", onClick: addChord, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: "add chord" }, void 0, !1, {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 245,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
            lineNumber: 247,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/track.new.tsx",
          lineNumber: 246,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 244,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { className: "form-row", htmlFor: "newChord", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
          lineNumber: 256,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 255,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { id: "form-error-message", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "form-validation-error text-center", role: "alert", children: actionData.formError }, void 0, !1, {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 266,
        columnNumber: 17
      }, this) : null }, void 0, !1, {
        fileName: "app/routes/track.new.tsx",
        lineNumber: 264,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/track.new.tsx",
      lineNumber: 181,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/track.new.tsx",
      lineNumber: 180,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/track.new.tsx",
      lineNumber: 179,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
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
        lineNumber: 275,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/track.new.tsx",
    lineNumber: 178,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
var import_react18 = require("@remix-run/react");

// app/components/Footer.tsx
var import_react17 = require("@remix-run/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("footer", { className: "p-3 sm:p-6 mt-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "container max-w-4xl mx-auto pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-baseline", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react17.Link, { className: "font-black tracking-tighter text-xl", to: "/", children: "BackyTracky\u2122" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react17.Link, { className: "ml-8 text-xs opacity-50", to: "/tracks", children: "Tracks" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react17.Link, { className: "ml-8 text-xs opacity-50", to: "/generator", children: "Sequencer" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react17.Link, { className: "ml-8 text-xs opacity-50", to: "/tuner", children: "Guitar Tuner" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-2 opacity-50 text-xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { children: [
      (/* @__PURE__ */ new Date()).getFullYear(),
      " created by",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
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
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { className: "main relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bg-white dark:bg-black absolute -top-32 left-0 right-0 h-[280px] -z-10 rotate-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "color-change z-10 w-full top-0 h-full bg-opacity-10 absolute pointer-events-none" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(BackgroundNotes, {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "container max-w-4xl mx-auto pt-8 relative z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bt-prose mx-auto my-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "mb-0 rounded-md relative -ml-2 inline-block px-1 font-black", children: "Welcome to BackyTracky" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "max-w-lg bg-zinc-50 dark:bg-zinc-900 bg-opacity-10 rounded-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "sr-only", children: "Free " }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 19,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { children: "Backing Tracks" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 20,
            columnNumber: 15
          }, this),
          " for Musicians! Play-along some of my favorite lead-sheets to level up your chops... ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("i", { children: "or" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 21,
            columnNumber: 65
          }, this),
          " go ahead and try making something of your own! Practice scales, licks or solos."
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_react18.Link,
          {
            className: "button no-underline px-8 dark:text-white",
            to: "/tracks",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: "see some tracks" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 29,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-5 w-5",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
                      lineNumber: 36,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 30,
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
            lineNumber: 25,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_react18.Link,
          {
            className: "button button--submit no-underline px-8 ml-4 dark:text-white",
            to: "/generator",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: "make your own" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 47,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-5 w-5",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
                      lineNumber: 54,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 48,
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
            lineNumber: 43,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "container max-w-4xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bt-prose mx-auto my-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "mt-2 font-black", children: "Features" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ul", { className: "max-w-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { children: "Lead-sheets" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this),
          " for some of my favorite tracks, inspired by some of my favorite standards"
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: [
          "A full blown ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { children: "Sequencer" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 74,
            columnNumber: 30
          }, this),
          " that let's you try out some new wild chord progressions!"
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { children: "Guitar Tuner" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this),
          " to help practice tuning your guitar by ear"
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 66,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "container max-w-4xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bt-prose mx-auto my-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "mt-2 font-black", children: "FAQ" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h3", { className: "font-black", children: "What is all this?" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "max-w-lg", children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { children: "Tracks" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 92,
          columnNumber: 19
        }, this),
        " are mainly some chord progressions that I throw together to jam around on. If you have any requests, feel free to",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
            lineNumber: 95,
            columnNumber: 15
          },
          this
        ),
        "."
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h3", { className: "font-black", children: "Code?" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 105,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: [
        "This project is ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { children: "open source" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 107,
          columnNumber: 31
        }, this),
        " and you can",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
            lineNumber: 108,
            columnNumber: 15
          },
          this
        ),
        "! ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 115,
          columnNumber: 17
        }, this),
        "It uses React (",
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
            lineNumber: 117,
            columnNumber: 15
          },
          this
        ),
        "), tailwindcss and prisma and is deployed to netlify. To play and generate music, there is",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
            lineNumber: 126,
            columnNumber: 15
          },
          this
        ),
        " ",
        "and",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
            lineNumber: 134,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h3", { className: "font-black", children: "Does it cost anything?" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "max-w-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { children: "No!" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, this),
        " As long as I don't just let anyone create accounts and tracks I can maintain BackyTracky for free."
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/tracks.tsx
var tracks_exports = {};
__export(tracks_exports, {
  action: () => action4,
  default: () => TracksRoute,
  loader: () => loader5,
  meta: () => meta3
});
var import_node9 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), import_react21 = require("react"), import_react_hot_toast3 = __toESM(require("react-hot-toast"));

// app/components/track/TrackListing.tsx
var import_react19 = require("@remix-run/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function TrackListing({
  track,
  showDescription,
  currentUserId
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    "div",
    {
      className: "flex items-center rounded-lg",
      "data-testid": "track-listing",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-col flex-grow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center gap-4 text-xs opacity-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { children: [
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            import_react19.Link,
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text-xs opacity-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "", children: [
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { children: [
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
        track.userId === currentUserId ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react19.Form, { method: "delete", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "hidden", name: "trackId", value: track.id }, void 0, !1, {
            fileName: "app/components/track/TrackListing.tsx",
            lineNumber: 50,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { className: "icon-button button--delete", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { children: "delete" }, void 0, !1, {
              fileName: "app/components/track/TrackListing.tsx",
              lineNumber: 52,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => {
  let data = {
    tracks: await db.track.findMany(),
    user: await getUser(request)
  };
  return (0, import_node9.json)(data);
}, action4 = async ({ request }) => {
  let trackId = (await request.formData()).get("trackId");
  return console.log("Delete a track", trackId), badRequest3({ error: "error deleting track" });
  let response = await deleteTrack(trackId);
  return response.status === 400 ? badRequest3({
    error: "Error deleting track"
  }) : (0, import_node9.json)({ response });
}, badRequest3 = (data) => (0, import_node9.json)(data, { status: 400 });
var meta3 = () => ({
  title: "All Tracks | BackyTracky",
  description: "Explore all published backing tracks. Grab your instrument and practice some chord changes!"
});
function TracksRoute() {
  let actionData = (0, import_react20.useActionData)(), loaderData = (0, import_react20.useLoaderData)(), navigation = (0, import_react20.useNavigation)();
  return (0, import_react21.useEffect)(() => {
    console.log("Track Route UseEffect", actionData, navigation);
  }, [navigation, actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("main", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "absolute bottom-24 md:bottom-32 right-0 md:right-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(BackgroundNotes, {}, void 0, !1, {
      fileName: "app/routes/tracks.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tracks.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(PageHeader, { title: "All Tracks \u{1F3BA}", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react20.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/tracks.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: " / " }, void 0, !1, {
        fileName: "app/routes/tracks.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react20.Link, { to: "/tracks", children: "Tracks" }, void 0, !1, {
        fileName: "app/routes/tracks.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tracks.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "container max-w-4xl mx-auto relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "grid gap-12 mb-12 mt-4", children: [
      loaderData.tracks.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: "no Tracks yet" }, void 0, !1, {
        fileName: "app/routes/tracks.tsx",
        lineNumber: 96,
        columnNumber: 47
      }, this) : "",
      loaderData.tracks.map((track) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          TrackListing,
          {
            track,
            showDescription: !0,
            currentUserId: (_a = loaderData.user) == null ? void 0 : _a.id
          },
          track.id,
          !1,
          {
            fileName: "app/routes/tracks.tsx",
            lineNumber: 98,
            columnNumber: 15
          },
          this
        );
      })
    ] }, void 0, !0, {
      fileName: "app/routes/tracks.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/tracks.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tracks.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/tracks.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tracks.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/tuner.tsx
var tuner_exports = {};
__export(tuner_exports, {
  default: () => Tuner
});
var import_react22 = require("@remix-run/react"), import_remix_utils5 = require("remix-utils");
var import_GuitarTuner = __toESM(require_GuitarTuner());
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function Tuner() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { className: "main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(PageHeader, { title: "Tune by ear \u{1F442}", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react22.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/tuner.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: " / " }, void 0, !1, {
        fileName: "app/routes/tuner.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react22.Link, { to: "/tuner", children: "Tuner" }, void 0, !1, {
        fileName: "app/routes/tuner.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tuner.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "max-w-4xl mx-auto relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_remix_utils5.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: "Loading..." }, void 0, !1, {
      fileName: "app/routes/tuner.tsx",
      lineNumber: 18,
      columnNumber: 33
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_GuitarTuner.default, {}, void 0, !1, {
      fileName: "app/routes/tuner.tsx",
      lineNumber: 19,
      columnNumber: 20
    }, this) }, void 0, !1, {
      fileName: "app/routes/tuner.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/tuner.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tuner.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/routes/tuner.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tuner.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/_static/build/entry.client-TXYDCXPW.js", imports: ["/_static/build/_shared/chunk-NSPMZDGG.js", "/_static/build/_shared/chunk-MGIKEUUG.js", "/_static/build/_shared/chunk-M2CHRLHC.js", "/_static/build/_shared/chunk-OV6IFOTW.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/_static/build/root-F2YKCZKY.js", imports: ["/_static/build/_shared/chunk-OAVV4AYS.js", "/_static/build/_shared/chunk-PKK3VIMV.js", "/_static/build/_shared/chunk-4FKMWGAP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/_auth.login-ZK4FBLCY.js", imports: ["/_static/build/_shared/chunk-X4ZYQSWZ.js", "/_static/build/_shared/chunk-JYWYUVGB.js", "/_static/build/_shared/chunk-PLQN7QSM.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.logout": { id: "routes/_auth.logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/_auth.logout-P6VAALUE.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.register": { id: "routes/_auth.register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/_auth.register-FUC62AOD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/_static/build/routes/_index-FAKPTDRJ.js", imports: ["/_static/build/_shared/chunk-GILJTBBQ.js", "/_static/build/_shared/chunk-X4ZYQSWZ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/generator": { id: "routes/generator", parentId: "root", path: "generator", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/generator-GIL6JNYT.js", imports: ["/_static/build/_shared/chunk-DW3BUVYY.js", "/_static/build/_shared/chunk-CZMCTG4Y.js", "/_static/build/_shared/chunk-NHT4IXME.js", "/_static/build/_shared/chunk-E3TV5QG2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/track.$trackId": { id: "routes/track.$trackId", parentId: "root", path: "track/:trackId", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/track.$trackId-TPLP5XVG.js", imports: ["/_static/build/_shared/chunk-DW3BUVYY.js", "/_static/build/_shared/chunk-CZMCTG4Y.js", "/_static/build/_shared/chunk-FSZDRCST.js", "/_static/build/_shared/chunk-M7RAB7HF.js", "/_static/build/_shared/chunk-E3TV5QG2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/track.new": { id: "routes/track.new", parentId: "root", path: "track/new", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/track.new-SUFFH7AV.js", imports: ["/_static/build/_shared/chunk-FSZDRCST.js", "/_static/build/_shared/chunk-M7RAB7HF.js", "/_static/build/_shared/chunk-JYWYUVGB.js", "/_static/build/_shared/chunk-PLQN7QSM.js", "/_static/build/_shared/chunk-NHT4IXME.js", "/_static/build/_shared/chunk-E3TV5QG2.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tracks": { id: "routes/tracks", parentId: "root", path: "tracks", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/tracks-PBCNKFXO.js", imports: ["/_static/build/_shared/chunk-GILJTBBQ.js", "/_static/build/_shared/chunk-X4ZYQSWZ.js", "/_static/build/_shared/chunk-CZMCTG4Y.js", "/_static/build/_shared/chunk-M7RAB7HF.js", "/_static/build/_shared/chunk-PLQN7QSM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tuner": { id: "routes/tuner", parentId: "root", path: "tuner", index: void 0, caseSensitive: void 0, module: "/_static/build/routes/tuner-22JZ7BDG.js", imports: ["/_static/build/_shared/chunk-GILJTBBQ.js", "/_static/build/_shared/chunk-CZMCTG4Y.js", "/_static/build/_shared/chunk-E3TV5QG2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "1d4fe860", hmr: void 0, url: "/_static/build/manifest-1D4FE860.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !0 }, publicPath = "/_static/build/", entry = { module: entry_server_exports }, routes = {
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
//# sourceMappingURL=index.js.map
