import Document, {
    Html, Head, Main, NextScript,
  } from 'next/document';

  
  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }
  
    render() {
      return (
        <Html lang="en" >
          <Head>
            <meta name="description" content="Spotify Clone" author="Omodot EtukudoS" />
            <link rel="icon" href="/spotify.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;