const vars = require('./vars');


module.exports = {
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
        'indent': ['error', vars.INDENTATION],
        'no-multiple-empty-lines': ['error', { max: vars.MAX_EMPTY_LINES }],
        'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
        'object-curly-spacing': ['error', 'always'],
        "prefer-destructuring": ['error', { "object": true, "array": false }],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'space-before-function-paren': 'off',
    },
};
