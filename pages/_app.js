import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import { portfolioSettings } from "../utils/portfolioSettings";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <Layout title={pageProps.title}>
      <Head title={`${portfolioSettings.devName} - VSCode Portfolio`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
