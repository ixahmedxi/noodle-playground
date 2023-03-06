import { defineConfig } from 'tsup';

export default defineConfig((opts) => ({
  entryPoints: ['src/index.ts'],
  format: ['esm', 'cjs'],
  external: ['.prisma/client'],
  outDir: 'dist',
  dts: true,
  treeshake: true,
  clean: !opts.watch,
  splitting: true,
  sourcemap: true,
  minify: !opts.watch,
}));
