import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '@rebass/preset';
import CssReset from '../components/css-reset';

const THEME = {
  ...theme,
  fonts: {
    primary: 'Public Sans, sans-serif',
    heading: 'Nunito Sans, sans-serif',
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@900&family=Public+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CssReset />
      <ThemeProvider theme={THEME}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
