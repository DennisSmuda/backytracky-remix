/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v2_errorBoundary: true,
    v2_routeConvention: true,
  },
  // serverBuild deprecation block
  publicPath: "/_static/build/",
  serverBuildPath: "server/index.js",
  serverMainFields: ["main", "module"], // default value, can be removed
  serverMinify: false, // default value, can be removed
  serverModuleFormat: "cjs", // default value in 1.x, add before upgrading
  serverPlatform: "node", // default value, can be removed
  //
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
  ignoredRouteFiles: ["**/.*"],
};
