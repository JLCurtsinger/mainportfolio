/**
 * Vite Configuration File
 * 
 * This configuration file sets up the build process for the application,
 * including development server settings, build optimizations, and code obfuscation.
 * 
 * Key Features:
 * - Development server configuration
 * - Path aliases for improved imports
 * - Production build optimization
 * - Code obfuscation for production builds
 * 
 * Integration Points:
 * - Used by Vite CLI for both development and production builds
 * - Configures plugins that process code during build
 * - Sets up path aliases used throughout the application
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import javascriptObfuscator from 'rollup-plugin-javascript-obfuscator';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    // JavaScript Obfuscator Plugin
    // Only applies during production builds to protect source code
    javascriptObfuscator({
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.75,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 0.4,
      debugProtection: true,
      debugProtectionInterval: 2000,
      disableConsoleOutput: true,
      identifierNamesGenerator: 'hexadecimal',
      log: false,
      numbersToExpressions: true,
      renameGlobals: false,
      rotateStringArray: true,
      selfDefending: true,
      shuffleStringArray: true,
      splitStrings: true,
      splitStringsChunkLength: 10,
      stringArray: true,
      stringArrayEncoding: ['base64'],
      stringArrayThreshold: 0.75,
      transformObjectKeys: true,
      unicodeEscapeSequence: false
    })
  ],

  // Development Server Configuration
  server: {
    host: "::",
    port: 8080
  },

  // Path Aliases Configuration
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Build Configuration
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
});