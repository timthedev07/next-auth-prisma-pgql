import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { SessionProvider } from "next-auth/react";
import { OAuthButtonProvider } from "react-auth-provider-buttons";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <OAuthButtonProvider>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </OAuthButtonProvider>
  );
};

export default App;
