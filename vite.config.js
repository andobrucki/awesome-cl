import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig(({ mode }) => {
  if (mode === "build-library") {
    return {
      build: {
        lib: {
          entry: "./src/library/exports.js", // Entry point for the library
          name: "AwesomeCL",
          formats: ["es", "cjs"],
          fileName: (format) => `awesomecl.${format}.js`,
        },
        cssCodeSplit: true,
        emptyOutDir: true,
        publicDir: false,
        rollupOptions: {
          input: "./src/library/exports.js",
          external: ["react", "react-dom"],
          output: {
            assetFileNames: "exports.css",
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
      plugins: [react()],
      css: {
        preprocessorOptions: {
          scss: {
            api: "modern-compiler",
          },
        },
      },
      postcss: {
        plugins: [
          postcssPresetEnv({
            stage: 0,
            features: {
              "custom-properties": true,
            },
          }),
        ],
      },
    };
  }

  return {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
    build: {
      outDir: "docs-dist", // Output folder for the documentation site
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
      },
    },
  };
});
