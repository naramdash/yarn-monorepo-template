import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: ["es2022", "edge119", "chrome119", "firefox120"],
    sourcemap: true,
    lib: {
      name: "library",
      formats: ["es"],
      entry: [resolve(__dirname, "src/index.ts")],
      fileName: (format, entryname) => {
        return `${entryname}.js`;
      },
    },
  },
  plugins: [dts()],
});
