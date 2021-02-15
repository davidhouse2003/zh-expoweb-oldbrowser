const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { withEntry } = require("@expo/webpack-config/addons");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  return withEntry(config, env, {
    // your polyfill here
    entryPath: require.resolve("react-app-polyfill/stable"),
  });
};


/*
const createExpoWebpackConfigAsync = require("@expo/webpack-config");
// import helper function
const { withEntry } = require("@expo/webpack-config/addons");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  return withEntry(config, env, {
    // your polyfill here
    entryPath: require.resolve("./polyfill.js"),
  });
};
*/