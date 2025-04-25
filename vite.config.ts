
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/**
 * Vite Configuration
 * 
 * This configuration file serves as the central point for customizing the build
 * and development process of our React application.
 * 
 * Key Features:
 * - Development server configuration
 * - Plugin management
 * - Path aliasing
 * - Build optimizations
 * 
 * Data Flow:
 * 1. Vite reads this configuration during both development and build processes
 * 2. Plugins are applied in the order they are defined
 * 3. Path aliases are resolved during import statements
 * 
 * Integration Points:
 * - React SWC plugin for fast refresh and JSX transformation
 * - Lovable component tagger for development environment
 * - Path aliasing for cleaner imports using '@' prefix
 * 
 * Usage:
 * - Development: 'npm run dev' uses this config for the dev server
 * - Production: 'npm run build' uses this for optimized builds
 */
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",  // Allows connections from all network interfaces
    port: 8080,  // Default development server port
  },
  plugins: [
    react(),  // Enable React SWC compilation and fast refresh
    componentTagger(),  // Lovable component tagger plugin
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // Enable '@' imports from src directory
    },
  },
}));
