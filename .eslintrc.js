module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    legacyDecorators: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  plugins: ["prettier", "react-hooks"],
  rules: {
    "prettier/prettier": "error",
    "linebreak-style": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prefer-stateless-function": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react-hooks/rules-of-hooks": "error",
    "no-console": "warn",
    "react/jsx-filename-extension": 1,
    "react/react-in-jsx-scope": 1,
    "consistent-return": 0,
    "import/prefer-default-export": 0
  },
};
