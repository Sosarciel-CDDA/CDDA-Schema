"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dev_utils_1 = require("@zwa73/dev-utils");
const pathe_1 = __importDefault(require("pathe"));
const { generateSchema } = dev_utils_1.UtilDT;
const rootDir = process.cwd();
const schemaDir = pathe_1.default.join(rootDir, 'src', 'Schema');
generateSchema(schemaDir);
(async () => {
    const regex = /"allOf"/;
})();
