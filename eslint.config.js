import baseConfig from "./packages/javascript/index.js";

export default [
  ...baseConfig,
  {
    ignores: ["**/node_modules/**", "**/dist/**"],
  },
];
