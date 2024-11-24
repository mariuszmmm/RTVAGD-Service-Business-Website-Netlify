import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Normalize } from 'styled-normalize';
import GlobalStyle from '../styles/GlobalStyle';
import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HelmetProvider } from 'react-helmet-async';

function App({ Component, pageProps }) {
  return (
    <>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Normalize />
            <GlobalStyle />
            <Background />
            <Header />
            <Component {...pageProps} />
            <Footer />
          </HelmetProvider>
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
}

export default App;