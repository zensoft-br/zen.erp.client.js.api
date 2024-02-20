import resolver from "@rollup/plugin-node-resolve";

export default {
  input: "index.js",
  output: [
    {
      file: "dist/cjs/bundle.js",
      format: "cjs",
    },
    {
      file: "dist/es/bundle.js",
      format: "es",
    },
    {
      // file: "dist/global/zen.bundle.js",
      file: "dist/iife/bundle.js",
      format: "iife",
      name: "zenclient",
      plugins: [
        // terser(),
      ],
    },
  ],
  plugins: [resolver()],
};