import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Normalize } from 'styled-normalize';
import GlobalStyle from '../styles/GlobalStyle';
import React from 'react';
import dynamic from 'next/dynamic';
// Load Background on the client to avoid bundling heavy image/third-party helpers into _app
const Background = dynamic(() => import('../components/Background'), { ssr: false, loading: () => null });
import Header from '../components/Header';
import Footer from '../components/Footer';

function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <Background />
        <Header {...pageProps} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;