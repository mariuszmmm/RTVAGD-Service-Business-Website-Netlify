import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

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
      <Html lang="pl-PL">
        <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#000000" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preload" href="https://fonts.googleapis.com/css?family=Lato:200,400,400italic,600&display=swap" as="style" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:200,400,400italic,600&display=swap" media="all" />

          <link rel="icon" type="image/png" href="https://naprawaprzemysl.pl/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="https://naprawaprzemysl.pl/favicon.svg" />
          <link rel="shortcut icon" href="https://naprawaprzemysl.pl/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://naprawaprzemysl.pl/apple-touch-icon.png" />
          <link rel="manifest" href="https://naprawaprzemysl.pl/site.webmanifest" />

          <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />

          <meta property="fb:app_id" content="100063811592941" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
