import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  dts: true,
  clean: true,
  splitting: true,
  sourcemap: true,
  minify: true,
});