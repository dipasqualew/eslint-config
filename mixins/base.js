module.exports = {
  "extends": [
    "eslint-config-airbnb-base",
  ],
  "env": {
    "es6": true,
    "node": true,
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": "off",
    "max-len": "off",
    "no-await-in-loop": "off",
    "no-restricted-syntax": "off",
    "no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
    }],
    "prefer-destructuring": "off",
  },
};
