import { preprocess } from 'svelte/compiler';
/**
 * Run any svelte preprocessor in the markup phase.
 * @param preprocessors The preprocessors to run.
 */
// eslint-disable-next-line max-len
export function asMarkupPreprocessor(preprocessors) {
    return {
        async markup({ content, filename }) {
            return preprocess(content, preprocessors, { filename });
        }
    };
}
