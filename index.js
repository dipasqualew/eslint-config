module.exports = {
    root: true,

    env: {
        browser: true,
        node: true,
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
