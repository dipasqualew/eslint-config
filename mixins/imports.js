module.exports = {
  "rules": {
    "import/no-cycle": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/order": ["error", {
      "alphabetize": {
        "order": "asc",
      },
      "groups": ["builtin", "external", "internal"],
      "pathGroups": [
        // Order all @/src/**
        // just before all local/relative imports
        {
          "pattern": "@/src/**",
          "group": "internal",
          "position": "before",
        },
        // Order all remaining alias
        // just before all local/relative imports
        {
          "pattern": "@/**",
          "group": "internal",
          "position": "before",
        },
      ],
      "pathGroupsExcludedImportTypes": ["builtin"],
      "newlines-between": "always"
    }],
    // Also order the individual import members
    // from each file declaration
    "sort-imports": ["error", {
      "ignoreDeclarationSort": true,
    }]
  },
};
