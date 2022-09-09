module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node":true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:lit/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "no-multiple-empty-lines": ["error", {"max":2}],
    "eol-last": ["error", "always"],
    "indent": ['error', 2],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-types": "off",
    "regexp/no-useless-escape": "off"
  }
}
