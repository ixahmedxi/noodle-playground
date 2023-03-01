import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  test: {
    dir: 'src',
    globals: true,
    coverage: {
      provider: 'c8',
      reporter: ['text'],
    },
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
