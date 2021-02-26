const vars = require('../vars');

module.exports = {
  "extends": [
    "eslint-config-airbnb-base",
  ],
  "env": {
    "es6": true,
    "node": true,
  },
  "rules": {
    'indent': ['error', vars.INDENTATION],
    "linebreak-style": "off",
    "max-len": "off",
    "no-await-in-loop": "off",
    'no-multiple-empty-lines': ['error', { max: vars.MAX_EMPTY_LINES }],
    "no-restricted-syntax": "off",
    "no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
    }],
    "prefer-destructuring": "off",
  },
};
