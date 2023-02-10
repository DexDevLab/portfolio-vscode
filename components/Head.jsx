import Head from "next/head";
import { portfolioSettings } from "../utils/portfolioSettings";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={portfolioSettings.headMetadata.description}
      />
      <meta name="keywords" content={portfolioSettings.headMetadata.keywords} />
      <meta
        property="og:title"
        content={portfolioSettings.headMetadata.titleTag}
      />
      <meta
        property="og:description"
        content={portfolioSettings.headMetadata.description}
      />
      {/* <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" /> */}
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: portfolioSettings.headMetadata.titleTag,
};
