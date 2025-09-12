import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "src/index.html"),
                locationInspector: path.resolve(
                    __dirname,
                    "src/location-inspector.html"
                ),
                urlManipulator: path.resolve(
                    __dirname,
                    "src/url-manipulator.html"
                ),
                spaNavigation: path.resolve(
                    __dirname,
                    "src/spa-navigation.html"
                ),
                clipboardManager: path.resolve(
                    __dirname,
                    "src/clipboard-manager.html"
                ),
                cameraCapture: path.resolve(
                    __dirname,
                    "src/camera-capture.html"
                ),
            },
        },
    },
    plugins: [ViteEjsPlugin()],
});
