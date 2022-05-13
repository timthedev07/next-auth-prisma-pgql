import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <Layout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
};

export default App;
