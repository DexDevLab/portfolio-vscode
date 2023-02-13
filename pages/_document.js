import Document, { Head, Html, Main, NextScript } from "next/document";
import { portfolioSettings } from "../utils/portfolioSettings";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <title>{`${portfolioSettings.devName} - VSCode Portfolio`}</title>
        <Head>
          <meta
            name="description"
            content={portfolioSettings.headMetadata.description}
          />
          <meta
            name="keywords"
            content={portfolioSettings.headMetadata.keywords}
          />
          <meta
            property="og:title"
            content={portfolioSettings.headMetadata.titleTag}
          />
          <meta
            property="og:description"
            content={portfolioSettings.headMetadata.description}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400&display=swap"
            rel="stylesheet"
          />
                    <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap"
            rel="stylesheet"
          />
                    <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
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
