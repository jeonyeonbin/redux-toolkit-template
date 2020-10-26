module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
  },
  "plugins": ["@typescript-eslint", "react-hooks", "import", "simple-import-sort"],
  "extends": [
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "react-app"
  ],
  "rules": {
    // disable the rule for all files
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "simple-import-sort/sort": "error",
    "sort-imports": "off",
    "import/order": "off"
  },
  "overrides": [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.tsx"],
    }
  ],
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "moduleDirectory": ["node_modules", "src/"],
      },
      // use <root>/tsconfig.json
      "typescript": {
        "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn"t contain any source code, like `@types/unist`
        "project": "./tsconfig.json" // use <root>/path/to/folder/tsconfig.json
      },
    }
  },
}
