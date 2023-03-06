import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src/index.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  dts: true,
  treeshake: true,
  clean: true,
  splitting: true,
  sourcemap: true,
  minify: true,
});
