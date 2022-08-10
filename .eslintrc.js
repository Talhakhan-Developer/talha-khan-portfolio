module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "google", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-unused-vars": [1, { args: "after-used", argsIgnorePattern: "^_" }],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "off",
    "@next/next/no-img-element": "off",
    "import/extensions": "off",
    "arrow-body-style": "off",
    "react/function-component-definition": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-underscore-dangle": "off",
    "react/jsx-props-no-spreading": "off",
    "no-console": "warn",
    "require-jsdoc": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
