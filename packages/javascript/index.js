module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': [2, 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    'array-bracket-spacing': [2, 'never'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': 2,
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': 2,
    'comma-style': 2,
    'constructor-super': 2,
    'default-case': 2,
    'dot-notation': 2,
    'function-paren-newline': [2, 'consistent'],
    'eol-last': [2, 'always'],
    'eqeqeq': 2,
    'indent': [2, 2],
    'keyword-spacing': [2, {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    }],
    'linebreak-style': [2, 'unix'],
    'lines-between-class-members': 2,
    'new-cap': 2,
    'new-parens': 2,
    'no-await-in-loop': 2,
    'no-class-assign': 2,
    'no-console': 1,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-func-assign': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      max: 2,
      maxEOF: 1,
      maxBOF: 0,
    }],
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-plusplus': 2,
    'no-return-assign': [2, 'always'],
    'no-return-await': 2,
    'no-script-url': 2,
    'no-spaced-func': 2,
    'no-this-before-super': 2,
    'no-trailing-spaces': [2, {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    'no-unneeded-ternary': [2, {
      defaultAssignment: false,
    }],
    'no-undef': 2,
    'no-unreachable': 2,
    'no-unused-vars': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-whitespace-before-property': 2,
    'no-var': 2,
    'object-curly-spacing': [2, 'always'],
    'object-shorthand': [2, 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],
    'one-var-declaration-per-line': [2, 'always'],
    'operator-linebreak': [2, 'before', {
      overrides: { '=': 'none' },
    }],
    'prefer-arrow-callback': 2,
    'prefer-const': [2, {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],
    'prefer-destructuring': [2, {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: true,
      },
    }, {
      enforceForRenamedProperties: false,
    }],
    'prefer-numeric-literals': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'quote-props': [2, 'consistent-as-needed'],
    'quotes': [2, 'single'],
    'rest-spread-spacing': [2, 'never'],
    'semi': [2, 'never'],
    'space-before-function-paren': [2, {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'spaced-comment': [2, 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
        balanced: true,
      },
    }],
    'switch-colon-spacing': [2, {
      after: true,
      before: false,
    }],
    'template-tag-spacing': [2, 'never'],
    'template-curly-spacing': 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'outside', {
      functionPrototypeMethods: false,
    }],
  },
}
