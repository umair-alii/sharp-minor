import React, { Fragment } from "react";

const Footer = (props) => {
  return (
    <Fragment>
      <section className="upper-footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-wrapper">
                <div className="message-icon">
                  <img
                    src="../../static/assets/imgs/message-icon.png"
                    alt="message"
                    className="img-fluid"
                  />
                </div>
                <div className="contact-info">
                  <h6>Write to us</h6>
                  <h5>admin@sharpminor</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-wrapper">
                <div className="call-icon"></div>
                <div className="contact-info">
                  <h6>Call Us</h6>
                  <h5>1800 000 2233</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-wrapper">
                <div className="call-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="middle-footer-wrapper">
        <div className="container">
          <div className="footer-menu">
            <ul>
              <li>Brand Policy</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>Cookie Policy</li>
              <li>Community Guidelines</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="lower-footer">
        <div className="container">
          <div className="copy-right">
            <span>© Sharp Minor | 2020</span>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
