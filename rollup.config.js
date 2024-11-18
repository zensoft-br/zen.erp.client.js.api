import resolver from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "bundle/zenerpclient.js",
      format: "iife",
      sourcemap: true,
      name: "zenerpclient",
      plugins: [
      ],
    },
    {
      file: "bundle/zenerpclient.min.js",
      format: "iife",
      sourcemap: true,
      name: "zenerpclient",
      plugins: [
        terser(),
      ],
    },
  ],
  plugins: [
    resolver({
      extensions: [".js", ".ts"],
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.base.json",
    }),
  ],
};