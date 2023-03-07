import { type AppRouter } from '@noodle/api';
import { getBaseUrl } from '@noodle/api/utils';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import SuperJSON from 'superjson';

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: SuperJSON,
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: false,
});
