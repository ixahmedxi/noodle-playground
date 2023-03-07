import '@/styles/globals.css';
import { trpc } from '@/utils/api';
import { ThemeProvider } from 'next-themes';
import { type AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default trpc.withTRPC(App);
