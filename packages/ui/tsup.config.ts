import { defineConfig } from 'tsup';

export default defineConfig((opts) => ({
  entryPoints: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  dts: true,
  treeshake: true,
  clean: !opts.watch,
  splitting: true,
  sourcemap: true,
  minify: !opts.watch,
}));
