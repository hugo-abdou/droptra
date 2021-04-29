const { createVuePlugin } = require("vite-plugin-vue2");
import alias from "@rollup/plugin-alias";
import path from "path";

module.exports = {
  plugins: [
    createVuePlugin(),
    alias({
      entries: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "./src/"),
        },
        {
          find: "@themeConfig",
          replacement: path.resolve(__dirname, "./src/themeConfig.js"),
        },
        { find: "@core", replacement: path.resolve(__dirname, "/src/@core") },
        {
          find: "@validations",
          replacement: path.resolve(
            __dirname,
            "./src/@core/utils/validations/validations.js"
          ),
        },
        {
          find: "@axios",
          replacement: path.resolve(__dirname, "./src/libs/axios"),
        },
      ],
    }),
  ],
};
