declare module 'rollup-plugin-javascript-obfuscator' {
  import type { Plugin } from 'vite';
  
  interface ObfuscatorOptions {
    compact?: boolean;
    controlFlowFlattening?: boolean;
    controlFlowFlatteningThreshold?: number;
    deadCodeInjection?: boolean;
    deadCodeInjectionThreshold?: number;
    debugProtection?: boolean;
    debugProtectionInterval?: number;
    disableConsoleOutput?: boolean;
    identifierNamesGenerator?: string;
    log?: boolean;
    numbersToExpressions?: boolean;
    renameGlobals?: boolean;
    rotateStringArray?: boolean;
    selfDefending?: boolean;
    shuffleStringArray?: boolean;
    splitStrings?: boolean;
    splitStringsChunkLength?: number;
    stringArray?: boolean;
    stringArrayEncoding?: string[];
    stringArrayThreshold?: number;
    transformObjectKeys?: boolean;
    unicodeEscapeSequence?: boolean;
  }

  function javascriptObfuscator(options?: ObfuscatorOptions): Plugin;
  export default javascriptObfuscator;
}