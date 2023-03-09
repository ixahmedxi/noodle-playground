import '@/styles/globals.css';
import { trpc } from '@/utils/trpc';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { type AppProps } from 'next/app';

interface MyAppProps extends AppProps {
  pageProps: {
    session: Session;
  };
}

const App = ({ Component, pageProps }: MyAppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(App);
