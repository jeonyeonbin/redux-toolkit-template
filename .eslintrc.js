module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "react-hooks", "import"],
  "extends": [
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    'import/resolver': {
      "node": {
        "extensions": ['.js', '.jsx', '.ts', '.tsx'],
        "moduleDirectory": ['node_modules', 'src/'],
      },
      // use <root>/tsconfig.json
      "typescript": {
        "alwaysTryTypes": true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
      // use <root>/path/to/folder/tsconfig.json
      "typescript": {
        "project": "./tsconfig.json"
      }
    }
  }
};