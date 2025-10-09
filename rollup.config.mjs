import { defineConfig } from "rollup";
import css from "rollup-plugin-css-only";

export default defineConfig([
  {
    input: "src/fresh.js",
    output: [
      { file: "dist/fresh.js", format: "umd", name: "fresh" },
      { file: "dist/fresh.esm.js", format: "esm" },
    ],
    plugins: [css({ output: "fresh.css" })],
  },
]);
