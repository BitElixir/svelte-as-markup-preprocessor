"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asMarkupPreprocessor = void 0;
const compiler_1 = require("svelte/compiler");
/**
 * Run any svelte preprocessor in the markup phase.
 * @param preprocessors The preprocessors to run.
 */
// eslint-disable-next-line max-len
function asMarkupPreprocessor(preprocessors) {
    return {
        async markup({ content, filename }) {
            return compiler_1.preprocess(content, preprocessors, { filename });
        }
    };
}
exports.asMarkupPreprocessor = asMarkupPreprocessor;
