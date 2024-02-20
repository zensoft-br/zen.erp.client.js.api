import resolver from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.es.js",
    format: "es",
  },
  plugins: [resolver()],
};