"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const node_path_1 = require("node:path");
const config_1 = require("vitest/config");
// import './src/infra/container/index.ts'
exports.default = (0, config_1.defineConfig)({
    resolve: {
        alias: [{ find: '@', replacement: (0, node_path_1.resolve)(__dirname, './src') }]
    }
});
//# sourceMappingURL=vite.config.js.map