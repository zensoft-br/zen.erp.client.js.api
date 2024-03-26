import resolver from "@rollup/plugin-node-resolve";
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
    typescript({
      compilerOptions: {
        target: "es2022",
      },
    }),
  ],
  // onwarn(warning) {
  //   if (warning.code !== "CIRCULAR_DEPENDENCY") {
  //     console.error(`(!) ${warning.message}`);
  //   }
  // },
};