import resolver from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.js",
  output: [
    // {
    //   file: "dist/cjs/bundle.js",
    //   format: "cjs",
    // },
    {
      dir: "dist/es",
      format: "es",
      sourcemap: true,
      // plugins: [
      //   typescript(),
      //   resolver({
      //     extensions: [".js", ".ts"],
      //   }),
      //   // terser(), // Optional, for minification
      // ],
    },
    // {
    //   // file: "dist/global/zen.bundle.js",
    //   file: "dist/iife/bundle.js",
    //   format: "iife",
    //   name: "zenerpclient",
    //   plugins: [
    //     // terser(),
    //   ],
    // },
  ],
  plugins: [
    typescript(),
    resolver({
      extensions: [".js", ".ts"],
    }),
    // terser(), // Optional, for minification
  ],
};