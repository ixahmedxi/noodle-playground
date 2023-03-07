import { trpc } from '@/utils/api';
import { Text } from '@noodle/ui';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  const { data } = trpc.hello.useQuery({ name: 'Ahmed' });
  return (
    <main>
      <Text variant="h1">{data?.message}</Text>
    </main>
  );
};

export default Home;
