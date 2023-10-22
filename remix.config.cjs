/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  // serverBuild deprecation block
  publicPath: "/_static/build/",
  serverBuildPath: "server/index.js",
  //
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    /^remix-utils.*/,
    // If you installed is-ip optional dependency you will need these too
    "is-ip",
    "dot-prop",
    "tone",
    "ip-regex",
    "super-regex",
    "clone-regexp",
    "function-timeout",
    "time-span",
    "convert-hrtime",
    "is-regexp",
  ],
};
