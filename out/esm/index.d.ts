import { preprocess } from 'svelte/compiler';
declare type PreprocessFn = typeof preprocess;
declare type PreprocessParams = Parameters<PreprocessFn>;
declare type PreprocessorGroup = Exclude<PreprocessParams[1], unknown[]>;
/**
 * Run any svelte preprocessor in the markup phase.
 * @param preprocessors The preprocessors to run.
 */
export declare function asMarkupPreprocessor(preprocessors: PreprocessorGroup | PreprocessorGroup[]): PreprocessorGroup;
export {};
