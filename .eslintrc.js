module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  // https://eslint.org/docs/rules/
  rules: {
    // Possible Errors
    // Best Practices
    'array-callback-return': ['error'],
    'block-scoped-var': ['error'],
    "eqeqeq": "error",
    // Strict Mode
    // Variables
    "no-unused-vars": ["error", {"vars": "local", "args": "none"}],
    // Stylistic Issues
    // ECMAScript 6
    'quotes': ['error', 'single'],
  },
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
};
