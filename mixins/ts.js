module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],

    // these eslint rules can report incorrect errors in TypeScript files
    "semi": "off",
    "no-shadow": "off",
    "@typescript-eslint/semi": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
}
