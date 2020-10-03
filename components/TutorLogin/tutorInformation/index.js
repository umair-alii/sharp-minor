import React from "react";

const TutorInformation = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="tutor-information-wrapper">
          <div className="contact-us-icon">
            <i class="fa fa-undo" aria-hidden="true"></i>
          </div>
          <div className="tutor-safe">
            <h3>100% Tutor's Safe</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="tutor-information-wrapper">
          <div className="contact-us-icon">
            <i class="fa fa-undo" aria-hidden="true"></i>
          </div>
          <div className="data-secure">
            <h3>100% Data Secure</h3>
            <p>
              Our platform has high security standards, all your information is
              safe and secure with us
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="tutor-information-wrapper">
          <div className="contact-us-icon">
            <i class="fa fa-undo" aria-hidden="true"></i>
          </div>
          <div className="contact-us">
            <h3>Contact Us 24X7</h3>
            <p>
              Having trouble login in, we are available 24x7 to help fix your
              issue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorInformation;
