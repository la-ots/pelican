"use strict";

const { build } = require("esbuild");
const path = require("path");

const BUNDLE = process.env.BUNDLE === "true";
const ESM = process.env.ESM === "true";
let fileDest = `pelican${ESM ? ".esm" : ""}`;

if (BUNDLE) {
  fileDest += ".bundle";
}

const options = {
  entryPoints: [path.resolve(__dirname, "../js/pelican.js")],
  format: ESM ? "esm" : "iife",
  minify: false,
  bundle: BUNDLE,
  sourcemap: true,
  outfile: path.resolve(__dirname, `../dist/js/${fileDest}.js`),
};

build(options).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
