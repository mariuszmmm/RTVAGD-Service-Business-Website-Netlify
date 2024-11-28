import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Normalize } from 'styled-normalize';
import GlobalStyle from '../styles/GlobalStyle';
import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GoogleTagManager } from '@next/third-parties/google';

function App({ Component, pageProps }) {
  return (
    <>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Normalize />
          <GlobalStyle />
          <Background />
          <Header />
          <Component {...pageProps} />
          <GoogleTagManager gtmId="GTM-P52JLLB7" />
          <Footer />
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
}

export default App;