import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr'

const babelPlugins = [];

if (process.env.MIGHTYMELD) {
  babelPlugins.push("@mightymeld/runtime/babel-plugin-mightymeld");
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(),
    react({
      babel: {
        plugins: babelPlugins,
      },
    }),
  ],
});
