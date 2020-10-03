import React, { Fragment } from "react";

// import components

import TutorInformation from "../../components/TutorLogin/tutorInformation";
import TutorLogin from "../../components/TutorLogin/tutorLoginForm";

const LogIn = (props) => {
  return (
    <Fragment>
      <TutorLogin />
      <TutorInformation />
    </Fragment>
  );
};

export default LogIn;
