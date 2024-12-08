import { viteHandlebarsEmbedSvgPlugin } from  './.esbuild/plugins/handlebarsEmbedSvgPlugin.js'
import { scssOutputPlugin } from './.esbuild/plugins/vite-plugin-scss-output.js';
import {resolve} from 'path';

/** @type {import('vite').UserConfig} */
export default {
    server: {
        watch: {
            include: ['./dist/**/*'], // Watch for changes in the source files
            clearScreen: false,     // Prevent clearing the console
            usePolling: true,                // Enable polling for Docker/VM environments if needed
        },
    },
  // server: {
  //     watch: {
  //         paths: './dist/assets/css/*.css',  // Watch compiled CSS output
  //         usePolling: true,                // Enable polling for Docker/VM environments if needed
  //     },
  // },
  plugins: [
    {
      name: "html-transform",
      transform(src, id) {
        if (id.endsWith(".mustache") || id.endsWith(".html") || id.endsWith(".hbs")) {
          // Transform your HTML files here (src is the file content as a string)
          return src;
        }
      },
    },
      viteHandlebarsEmbedSvgPlugin(),
      scssOutputPlugin(),
  ],
};
