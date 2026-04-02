import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = Array.isArray(nextCoreWebVitals)
  ? nextCoreWebVitals
  : nextCoreWebVitals.default;

export default [
  {
    ignores: [".next/**", "node_modules/**", "public/**"],
  },
  ...config,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
];
