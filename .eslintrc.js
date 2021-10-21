module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ["prettier"],
  extends: "eslint:recommended",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2017,
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "prettier/prettier": "error",
  },
};
