"use strict";

const path = require("path");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const { babel } = require("@rollup/plugin-babel");
const replace = require("@rollup/plugin-replace");
const inject = require("@rollup/plugin-inject");
const commonjs = require("rollup-plugin-commonjs");

const BUNDLE = process.env.BUNDLE === "true";
const ESM = process.env.ESM === "true";

let fileDest = `pelican${ESM ? ".esm" : ""}`;

let external = ["jquery", "popper.js", "bootstrap"];

let plugins = [
  commonjs(),
  babel({
    exclude: "node_modules/**",
    babelHelpers: "bundled",
  }),
];

let globals = {
  jquery: "jQuery",
  "popper.js": "Popper",
};

if (BUNDLE) {
  fileDest += ".bundle";
  external = [];
  globals = [];

  plugins = [
    nodeResolve(),
    ...plugins,
    replace({
      "process.env.NODE_ENV": "production",
      preventAssignment: true,
    }),
    inject({
      include: "**/*.js",
      exclude: "node_modules/**",
      $: "jquery",
    }),
  ];
}

const rollupConfig = {
  input: path.resolve(__dirname, "../js/pelican.js"),
  output: {
    file: path.resolve(__dirname, `../dist/js/${fileDest}.js`),
    format: ESM ? "esm" : "umd",
    globals,
  },
  external,
  plugins,
};

if (!ESM) {
  rollupConfig.output.name = "pelican";
}

module.exports = rollupConfig;
