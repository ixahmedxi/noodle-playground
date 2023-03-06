import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@noodle/database';
import { type AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import './declaration';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env['GITHUB_CLIENT_ID'] as string,
      clientSecret: process.env['GITHUB_CLIENT_SECRET'] as string,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};
