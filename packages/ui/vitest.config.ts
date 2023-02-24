import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text'],
    },
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
