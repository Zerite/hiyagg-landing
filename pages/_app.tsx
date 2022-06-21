import "../styles/globals.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo titleTemplate="Hiya! | %s" />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
export default App;
