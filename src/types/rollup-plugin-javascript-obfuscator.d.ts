/**
 * Type definitions for rollup-plugin-javascript-obfuscator
 * 
 * This file provides TypeScript type definitions for the JavaScript obfuscator plugin
 * used in the Vite build process. The plugin helps protect source code by transforming
 * it into a new representation that's harder to understand and reverse engineer.
 * 
 * Integration Points:
 * - Used by vite.config.ts to configure build-time code obfuscation
 * - Only applies during production builds (npm run build)
 * - Does not affect development builds for better debugging experience
 */

declare module 'rollup-plugin-javascript-obfuscator' {
  import type { Plugin } from 'vite';
  
  /**
   * Configuration options for JavaScript obfuscation
   * @see https://github.com/javascript-obfuscator/javascript-obfuscator#javascript-obfuscator-options
   */
  interface ObfuscatorOptions {
    /** Enables code compacting */
    compact?: boolean;
    /** Enables control flow flattening */
    controlFlowFlattening?: boolean;
    /** Probability of control flow flattening transformations */
    controlFlowFlatteningThreshold?: number;
    /** Enables dead code injection */
    deadCodeInjection?: boolean;
    /** Amount of dead code */
    deadCodeInjectionThreshold?: number;
    /** Enables debug protection */
    debugProtection?: boolean;
    /** Interval for debug protection */
    debugProtectionInterval?: number;
    /** Disables console.log, console.info, console.error */
    disableConsoleOutput?: boolean;
    /** Type of identifier names generator */
    identifierNamesGenerator?: 'hexadecimal' | 'mangled';
    /** Enables logging */
    log?: boolean;
    /** Enables converting literal numbers to expressions */
    numbersToExpressions?: boolean;
    /** Enables renaming of global identifiers */
    renameGlobals?: boolean;
    /** Enables rotation of string array */
    rotateStringArray?: boolean;
    /** Enables self defending */
    selfDefending?: boolean;
    /** Enables shuffling of string array */
    shuffleStringArray?: boolean;
    /** Enables splitting strings */
    splitStrings?: boolean;
    /** Length of chunks when splitting strings */
    splitStringsChunkLength?: number;
    /** Enables string array encoding */
    stringArray?: boolean;
    /** Type of string array encoding */
    stringArrayEncoding?: Array<'none' | 'base64' | 'rc4'>;
    /** Probability of string array generation for literal */
    stringArrayThreshold?: number;
    /** Enables transformation of object keys */
    transformObjectKeys?: boolean;
    /** Enables unicode escape sequence */
    unicodeEscapeSequence?: boolean;
  }

  /**
   * Creates a Vite/Rollup plugin for JavaScript obfuscation
   * @param options Configuration options for the obfuscator
   * @returns A Vite plugin that handles code obfuscation during build
   */
  function javascriptObfuscator(options?: ObfuscatorOptions): Plugin;
  export default javascriptObfuscator;
}