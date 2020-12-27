import React from 'react';
import Head from 'next/head';
import CssReset from '../components/css-reset';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CssReset />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
