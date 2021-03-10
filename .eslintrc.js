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
    rules: {
        // Best Practices
        'array-callback-return': ['error'],
        'block-scoped-var': ['error'],
        "eqeqeq": "error",
        // Stylistic
        'quotes': ['error', 'single'],

        // @todo delete this
        // 'no-unused-vars': 'off',
    },
    noInlineConfig: true,
    reportUnusedDisableDirectives: true,
};
