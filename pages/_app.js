import Head from "next/head";
import React from "react";
import styles from "../styles/header.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <title>Youth and Family Services of Virginia YFSVA ASSET</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
