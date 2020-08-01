module.exports = {
    root: true,

    parserOptions: {
        ecmaVersion: 2017,
    },

    env: {
        browser: true,
        node: true,
        es6: true,
    },

    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'indent': ['error', 4],
        'no-multiple-empty-lines': ['error', { max: 2 }],
        'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
        "prefer-destructuring": ["error", { "object": true, "array": false }],
        'semi': ['error', 'always'],
        'space-before-function-paren': 'off',
    },
};
