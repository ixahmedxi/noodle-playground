import { appRouter } from '@noodle/api';
import * as trpcNext from '@noodle/api/next';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
