import "../styles/globals.css";
import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { configuration } from "../utils/configuration";
import NextNProgress from "nextjs-progressbar";
export default function MyApp({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) {
  return (
    <>
      <NextNProgress
        color="#6444a4"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <NextSeo
        title={configuration.title}
        description={configuration.description}
      />
      <Component {...pageProps} />
    </>
  );
}
