import resolver from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/iife/zenerpclient.js",
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
      // compilerOptions: {
      //   target: "es2022",
      //   // allowSyntheticDefaultImports: true,
      //   esModuleInterop: true,
      // },
    }),
  ],
  // onwarn(warning) {
  //   if (warning.code !== "CIRCULAR_DEPENDENCY") {
  //     console.error(`(!) ${warning.message}`);
  //   }
  // },
};