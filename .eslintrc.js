module.exports = {
  root: true,
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }, { usePrettierrc: true }], // Use our .prettierrc file as source
    "no-console": 1,
    camelcase: 0,
  },
  ignorePatterns: ["migrations/*"],
};
