import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text'],
    },
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
