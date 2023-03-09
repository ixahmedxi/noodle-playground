import { z } from 'zod';
import { protectedProcedure } from '../middlewares/protectedProcedure';
import { createRouter, publicProcedure } from '../utils/trpc';

export const appRouter = createRouter({
  greeting: publicProcedure
    .input(z.object({ name: z.string().optional() }).optional())
    .query(({ input }) => {
      return {
        message: `Hello ${input?.name ?? 'world'}!`,
      };
    }),
  protected: protectedProcedure.query(
    () => 'You are seeing a protected message',
  ),
});

export type AppRouter = typeof appRouter;
