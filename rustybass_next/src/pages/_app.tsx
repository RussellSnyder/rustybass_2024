import { Metadata } from "next";
import { FunctionComponent } from "react";

export const metadata: Metadata = {
  title: "Rustybass",
  description: "Home of Russell Snyder",
};

import { AppProps } from "next/app";
import { ReactNode } from "react";
import Layout from "../components/layout";

const SafeHydrate: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => (
  <div suppressHydrationWarning>
    {typeof window === "undefined" ? null : children}
  </div>
);

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} suppressHydrationWarning />
    </Layout>
  );
};

export default App;
