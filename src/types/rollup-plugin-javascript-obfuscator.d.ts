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
    identifierNamesGenerator?: 'hexadecimal' | 'mangled';
    log?: boolean;
    numbersToExpressions?: boolean;
    optionsPreset?: string;
    renameGlobals?: boolean;
    rotateStringArray?: boolean;
    selfDefending?: boolean;
    shuffleStringArray?: boolean;
    simplify?: boolean;
    splitStrings?: boolean;
    splitStringsChunkLength?: number;
    stringArray?: boolean;
    stringArrayEncoding?: Array<'none' | 'base64' | 'rc4'>;
    stringArrayThreshold?: number;
    target?: 'browser' | 'browser-no-eval' | 'node';
    transformObjectKeys?: boolean;
    unicodeEscapeSequence?: boolean;
  }

  function javascriptObfuscator(options?: ObfuscatorOptions): Plugin;
  export default javascriptObfuscator;
}