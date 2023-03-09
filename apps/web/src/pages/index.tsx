import { trpc } from '@/utils/trpc';
import { Text } from '@noodle/ui';
import { type NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const { data, isLoading, isError, error } = trpc.greeting.useQuery({
    name: 'Ahmed',
  });

  if (isLoading || status === 'loading')
    return <Text variant="h1">Loading...</Text>;
  if (isError) return <Text variant="h1">{error.message}</Text>;

  if (status === 'unauthenticated' || !session)
    return (
      <main>
        <Text variant="h1">Unauthenticated</Text>
        <button type="button" onClick={() => void signIn('github')}>
          Sign in
        </button>
      </main>
    );

  return (
    <main>
      <Text variant="h1">{data.message}</Text>
      <Text variant="h3">{session.user.name}</Text>
    </main>
  );
};

export default Home;
