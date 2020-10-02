import React, { Fragment } from "react";

import Header from "../../components/layout/header";
import TutorInformation from "../../components/Tutor-Login/tutor-information";
import TutorLogin from "../../components/Tutor-Login/tutor_login_form";
import Footer from "../../components/layout/footer";

const LogIn = (props) => {
  return (
    <Fragment>
      <div className="container">
        <Header />
        <TutorLogin />
        <TutorInformation />
      </div>
      <Footer />
    </Fragment>
  );
};

export default LogIn;
