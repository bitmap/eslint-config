# eslint config

ESLint 9 flat config for JavaScript and TypeScript projects.

## Requirements

- Node.js >= 18.18.0
- ESLint >= 9.0.0

## Install

### JavaScript

```sh
npm install --save-dev eslint @cabe/eslint-config
```

#### eslint.config.js

```js
import baseConfig from "@cabe/eslint-config";

export default [
  ...baseConfig,
  {
    // your custom config here
  },
];
```

### TypeScript

```sh
npm install --save-dev eslint typescript @cabe/eslint-config-typescript
```

#### eslint.config.js

```js
import tsConfig from "@cabe/eslint-config-typescript";

export default tsConfig;
```

Or with customizations:

```js
import tseslint from "typescript-eslint";
import tsConfig from "@cabe/eslint-config-typescript";

export default tseslint.config(...tsConfig, {
  // your custom config here
});
```

### React (with TypeScript)

```sh
npm install --save-dev eslint typescript @cabe/eslint-config-typescript eslint-plugin-react eslint-plugin-react-hooks
```

#### eslint.config.js

```js
import tseslint from "typescript-eslint";
import tsConfig from "@cabe/eslint-config-typescript";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(...tsConfig, {
  plugins: {
    react,
    "react-hooks": reactHooks,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
  },
});
```

## Migration from v1.x

Version 2.0.0 updates to ESLint 9's flat config format. Key changes:

- Config file is now `eslint.config.js` (not `.eslintrc`)
- Uses ES modules (`import`/`export`)
- No more `extends` string arrays - import and spread configs directly
- `env` is replaced by `globals` in `languageOptions`
- `parser` is now set in `languageOptions.parser`

See the [ESLint migration guide](https://eslint.org/docs/latest/use/configure/migration-guide) for more details.