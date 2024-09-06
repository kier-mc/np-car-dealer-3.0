import antfu from "@antfu/eslint-config";

export default antfu(
  {
    formatters: {
      css: true,
    },
    rules: {
      "antfu/if-newline": "off",
      "no-console": "warn",
      "symbol-description": "off",
      "ts/consistent-type-definitions": "off",
    },
    stylistic: {
      quotes: "double",
      semi: true,
    },
  },
);
