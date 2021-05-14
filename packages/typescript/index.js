module.exports = {
  extends: ["@cabe"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-this-alias": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/explicit-member-accessibility": ["error", {
      accessibility: "no-public",
    }],
    "@typescript-eslint/explicit-function-return-type": ["error", {
      allowExpressions: true,
    }],
  },
  overrides: [{
    files: ["*.ts", "*.tsx"],
    rules: {
      "constructor-super": "off", // ts(2335) & ts(2377)
      "getter-return": "off", // ts(2378)
      "indent": "off",
      "no-const-assign": "off", // ts(2588)
      "no-dupe-args": "off", // ts(2300)
      "no-dupe-class-members": "off", // ts(2393) & ts(2300)
      "no-dupe-keys": "off", // ts(1117)
      "no-func-assign": "off", // ts(2539)
      "no-import-assign": "off", // ts(2539) & ts(2540)
      "no-new-symbol": "off", // ts(2588)
      "no-obj-calls": "off", // ts(2349)
      "no-redeclare": "off", // ts(2451)
      "no-setter-return": "off", // ts(2408)
      "no-this-before-super": "off", // ts(2376)
      "no-undef": "off", // ts(2304)
      "no-unreachable": "off", // ts(7027)
      "no-unsafe-negation": "off", // ts(2365) & ts(2360) & ts(2358)
      "no-unused-vars": "off",
      "no-use-before-define": "off",
      "no-var": "error", // ts transpiles let/const to var, so no need for vars any more
      "prefer-const": "error", // ts provides better types with const
      "prefer-rest-params": "error", // ts provides better types with rest args over arguments
      "prefer-spread": "error", // ts transpiles spread to apply, so no need for manual apply
      "valid-typeof": "off", // ts(2367)
    },
  }],
};
