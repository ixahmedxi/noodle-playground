import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';
import { type AppRouter } from '.';

export function getBaseUrl(defaultPort = 3000) {
  if (typeof window !== 'undefined') return '';
  if (process.env['VERCEL_URL']) return `https://${process.env['VERCEL_URL']}`;
  return `http://localhost:${process.env['PORT'] ?? defaultPort}`;
}

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
