module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@cabe',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'indent': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-member-accessibility': [2, {
      accessibility: 'no-public',
    }],
    '@typescript-eslint/member-delimiter-style': [2, {
      multiline: {
        delimiter: 'none',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    }],
    '@typescript-eslint/explicit-function-return-type': [2, {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
    }],
  },
}
