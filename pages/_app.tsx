import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import type { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <Layout>
        <>
          <Global styles={globalStyles} />
          <ApolloSetting>
            <Component {...pageProps} />
          </ApolloSetting>
        </>
      </Layout>
    </div>
  );
}

export default App;
