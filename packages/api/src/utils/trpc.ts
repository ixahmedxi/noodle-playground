import { initTRPC } from '@trpc/server';
import SuperJSON from 'superjson';
import { type Context } from './context';

export const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
});

export const publicProcedure = t.procedure;

export const createRouter = t.router;
