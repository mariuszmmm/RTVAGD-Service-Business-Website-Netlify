import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';
import { baseUrl } from '../utils/urls';
import { serwis } from '../utils/serwis';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='pl'>
        <Head>
          {/* Performance optimizations */}
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

          {/* Favicons - kompletny zestaw */}
          <link rel="icon" type="image/png" href={baseUrl + "/images/favicon-96x96.png"} sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href={baseUrl + "/images/favicon.svg"} />
          <link rel="shortcut icon" href={baseUrl + "/images/favicon.ico"} />
          <link rel="apple-touch-icon" sizes="180x180" href={baseUrl + "/images/apple-touch-icon.png"} />
          <link rel="manifest" href={baseUrl + "/site.webmanifest"} />

          {/* Additional favicon sizes for better support */}
          <link rel="icon" type="image/png" sizes="32x32" href={baseUrl + "/images/favicon-32x32.png"} />
          <link rel="icon" type="image/png" sizes="16x16" href={baseUrl + "/images/favicon-16x16.png"} />

          {/* Basic meta tags */}
          <meta key="robots" name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

          {/* ustawić na https://developers.facebook.com/ */}
          {/* <meta key="fb:app_id" property="fb:app_id" content={serwis.url.fb_app_id} /> */}

          <meta key="Content-Language" httpEquiv="Content-Language" content="pl" />
          <meta key="theme-color" name="theme-color" content="#141111" />

          {/* Security headers */}
          <meta key="X-Content-Type-Options" httpEquiv="X-Content-Type-Options" content="nosniff" />
          <meta key="Referrer-Policy" httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

          {/* GTM Script */}
          <Script
            id="gtm-script"
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
            strategy="afterInteractive"
          />

          {/* testowy prywatny - Meta Pixel Code */}
          {/* <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '3182193465264695');
      fbq('track', 'PageView');
    `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=3182193465264695&ev=PageView&noscript=1"
              alt=""
            />
          </noscript> */}
          {/* End Meta Pixel Code */}

        </Head>
        <body>
          {/* GTM NoScript */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-P52JLLB7"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />

          {/* przykładowy pixel  Facebooka - nie używany, ale zostawiam na przyszłość */}
          {/* <Script                                                  
            id="facebook-sdk"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.fbAsyncInit = function() {
                  FB.init({
                    appId      : '721822667104912',
                    xfbml      : true,
                    version    : 'v23.0'
                  });
                  FB.AppEvents.logPageView();
                };

                (function(d, s, id){
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) {return;}
                  js = d.createElement(s); js.id = id;
                  js.src = "https://connect.facebook.net/en_US/sdk.js";
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
              `,
            }}
          /> */}
        </body>
      </Html>
    );
  }
}