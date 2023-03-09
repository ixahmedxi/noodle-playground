import { type inferAsyncReturnType } from '@trpc/server';
import { type CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getServerSession, type Session } from 'next-auth';
import { authOptions } from './auth';
import { prisma } from './db';

export type ContextOptions = {
  session: Session | null;
};

export const createInnerContext = (opts: ContextOptions) => {
  return {
    session: opts.session,
    prisma,
  };
};

export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getServerSession(opts.req, opts.res, authOptions);

  return createInnerContext({
    session,
  });
};

export type Context = inferAsyncReturnType<typeof createContext>;
