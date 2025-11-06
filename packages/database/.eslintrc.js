/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@luno/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: ["generated/**"],
  rules: {
    "turbo/no-undeclared-env-vars": [
      "error",
      {
        allowList: ["NODE_ENV"],
      },
    ],
  },
};
