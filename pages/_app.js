import Head from "next/head";
import React from "react";

// import styles
import "../styles/header.css";
import "../styles/tutor-login.css";
import "../styles/tutor-information.css";
import "../styles/footer.css";
import "../styles/payment-detail.css";
import "../styles/global.css";

// import react phone package css
import "react-phone-input-2/lib/style.css";

// import components
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />

        <title>Sharp Minor</title>
      </Head>
      <div className="container">
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default MyApp;
