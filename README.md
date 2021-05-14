# eslint config

## Install

### JavaScript

```sh
npm install --save-dev eslint @cabe/eslint-config @babel/core @babel/eslint-parser
```

#### .eslintrc

```json
{
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "extends": ["@cabe"],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "plugins": [],
  "settings": {}
}
```

### TypeScript

```sh
npm install --save-dev eslint @cabe/eslint-config @cabe/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

#### .eslintrc

```json
{
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "extends": ["@cabe/typescript"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "settings": {}
}
```

### React

```sh
npm install --save-dev eslint @cabe/eslint-config @babel/core @babel/eslint-parser eslint-plugin-react eslint-plugin-react-hooks
```

#### .eslintrc

```json
{
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "extends": [
    "@cabe",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```
