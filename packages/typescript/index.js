import tseslint from "typescript-eslint";
import baseConfig from "@cabe/eslint-config";

export default tseslint.config(...baseConfig, {
  files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
  extends: [...tseslint.configs.recommended],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
      warnOnUnsupportedTypeScriptVersion: true,
    },
  },
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-object-type": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "no-public",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "warn",

    // Disable base rules that are covered by TypeScript
    "constructor-super": "off",
    "getter-return": "off",
    "no-array-constructor": "off",
    "no-const-assign": "off",
    "no-dupe-args": "off",
    "no-dupe-class-members": "off",
    "no-dupe-keys": "off",
    "no-empty-function": "off",
    "no-func-assign": "off",
    "no-import-assign": "off",
    "no-new-symbol": "off",
    "no-obj-calls": "off",
    "no-redeclare": "off",
    "no-setter-return": "off",
    "no-this-before-super": "off",
    "no-undef": "off",
    "no-unreachable": "off",
    "no-unsafe-negation": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "valid-typeof": "off",
  },
});
