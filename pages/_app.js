import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Normalize } from 'styled-normalize';
import GlobalStyle from '../styles/GlobalStyle';
import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script';

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

      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P52JLLB7');
          `,
        }}
      />
    </React.StrictMode>
  );
}

export default App;