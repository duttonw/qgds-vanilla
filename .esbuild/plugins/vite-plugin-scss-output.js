import fs from 'fs';
import path from 'path';
import sass from 'sass';

const cssEntries = [
    { in: "./src/css/main-campaign-neon.scss", out: "./dist/assets/css/main-campaign-neon.css" },
    { in: "./src/css/main-campaign-neon-invert.scss", out: "./dist/assets/css/main-campaign-neon-invert.css" },
    { in: "./src/css/main-qld-corporate.scss", out: "./dist/assets/css/main-qld-corporate.css" },
    { in: "./src/css/main-qld-corporate-invert.scss", out: "./dist/assets/css/main-qld-corporate-invert.css" },
    { in: "./src/css/main.scss", out: "./dist/assets/css/main.css" },
    { in: "./src/css/main-invert.scss", out: "./dist/assets/css/main-invert.css" },
    { in: "./src/css/main-qld-high-contrast.scss", out: "./dist/assets/css/main-qld-high-contrast.css" },
    { in: "./src/css/main-qld-high-contrast-invert.scss", out: "./dist/assets/css/main-qld-high-contrast-invert.css" },
    { in: "./src/css/main-qld-maroon.scss", out: "./dist/assets/css/main-qld-maroon.css" },
    { in: "./src/css/main-qld-maroon-invert.scss", out: "./dist/assets/css/main-qld-maroon-invert.css" },
];

function compileSCSS(entry) {
    const result = sass.renderSync({
        file: path.resolve(entry.in),
        //outputStyle: "compressed",
    });
    fs.mkdirSync(path.dirname(entry.out), { recursive: true });
    fs.writeFileSync(path.resolve(entry.out), result.css);
}

export function scssOutputPlugin() {
    return {
        name: "vite-plugin-scss-output",
        apply: "serve",
        configureServer(server) {
            cssEntries.forEach((entry) => {
                server.watcher.add(path.resolve(entry.in));
            });

            server.watcher.on("change", (file) => {
                const matchingEntry = cssEntries.find((entry) => path.resolve(entry.in) === file);
                if (matchingEntry) {
                    console.log(`Recompiling: ${matchingEntry.in}`);
                    compileSCSS(matchingEntry);
                }
            });
        },
        buildStart() {
            console.log("Building SCSS...");
            cssEntries.forEach(compileSCSS);
        },
    };
}
