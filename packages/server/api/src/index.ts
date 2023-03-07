export * from '@trpc/server';
import { initTRPC } from '@trpc/server';
import SuperJSON from 'superjson';
import { z } from 'zod';

export const t = initTRPC.create({
  transformer: SuperJSON,
});

export const appRouter = t.router({
  hello: t.procedure
    .input(z.object({ name: z.string().optional() }).optional())
    .query(({ input }) => {
      return {
        message: `Hello ${input?.name ?? 'world'}!`,
      };
    }),
});

export type AppRouter = typeof appRouter;
