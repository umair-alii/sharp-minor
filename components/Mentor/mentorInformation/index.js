import React, { Fragment } from "react";
import PhoneInput from "react-phone-input-2";

const MentorInformation = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-5">
          <div className="mentor-detail-form">
            <h3>Be A Mentor</h3>
            <h1>Tell Us About Yourself</h1>
            <form>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <div className="login-inputs">
                      <i className="fa fa-grav" aria-hidden="true"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mr *"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group">
                    <div className="login-inputs">
                      <i className="fa fa-user-circle" aria-hidden="true"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name *"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="login-inputs">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address *"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="mentor-phone">
                  <PhoneInput
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: true,
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <select className="form-control custom-select-lg">
                  <option data-hidden="true">
                    Select Highest Education Qualification *
                  </option>
                  <option value="one">Bachelor</option>
                  <option value="two">Master</option>
                  <option value="three">Phd</option>
                </select>
              </div>

              <div className="form-group">
                <div className="login-inputs">
                  <i className="fa fa-laptop" aria-hidden="true"></i>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Do You have A PC/Laptop At Home For Class *"
                  />
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-7">
          <div className="mentor-detail-form-banner">
            <img
              src="../../static/assets/imgs/login-banner.png"
              alt="banner"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-5">
          <div className="buttons-wrapper">
            <button
              type="button"
              className="btn btn-primary internet-speed-btn"
            >
              <i className="fa fa-eye"></i>Do You Visit fast.com & Update
              Internet Speed (Mbps) *
            </button>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="file-wrapper">
                <label for="file-cv">
                  <div className="form-group">
                    <div className="upload-cv">
                      <div className="cv-icon">
                        <i
                          className="fa fa-address-card-o"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <input
                        type="file"
                        className="form-control-file"
                        id="file-cv"
                      />
                      <div className="upload-your-cv">
                        <span>Upload Your CV *</span>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="file-wrapper">
                <label for="file-video">
                  <div className="form-group">
                    <div className="upload-video">
                      <input
                        type="file"
                        className="form-control-file"
                        id="file-video"
                      />
                      <div className="upload-video">
                        <span>Upload Introduction Video *</span>
                        <br />
                        <span className="video-length">Min 30-50 Seconds</span>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="mentor-submit-btn">
            <button type="button" className="btn btn-primary mentor-btn">
              Submit
            </button>
          </div>
        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-6">
              <div className="mentor-reponsibilities-wrapper">
                <div className="best-remuneration-icon">
                  <img
                    src="../../static/assets/imgs/remuneration.png"
                    alt="banner"
                    className="img-fluid"
                    width="135"
                  />
                </div>
                <div className="remuneration-description">
                  <h6>Best Remuneration</h6>
                  <p>
                    Sharpminor offers the best salary package in the industry
                    that incentivizes performance
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mentor-reponsibilities-wrapper">
                <div className="mentor-reponsibilities-icons">
                  <img
                    src="../../static/assets/imgs/home.png"
                    alt="banner"
                    className="img-fluid"
                    width="101"
                  />
                </div>
                <div className="work-from-home-description">
                  <h6>Work From Home</h6>
                  <p>
                    You have the flexibility of working from the comfort of your
                    home
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mentor-reponsibilities-wrapper">
                <div className="mentor-reponsibilities-icons">
                  <img
                    src="../../static/assets/imgs/future.png"
                    alt="banner"
                    className="img-fluid"
                    width="120"
                  />
                </div>
                <div className="build-future-description">
                  <h6>Build The Future</h6>
                  <p>
                    As a tutor with Sharpminor you participate in building the
                    technocrats of future
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mentor-reponsibilities-wrapper">
                <div className="mentor-reponsibilities-icons">
                  <img
                    src="../../static/assets/imgs/balance.png"
                    alt="banner"
                    className="img-fluid"
                    width="135"
                  />
                </div>
                <div className="life-balance-description">
                  <h6>Maintain Work Life Balance</h6>
                  <p>
                    We at Sharpminor believe work life balance is critical for
                    anyone to perform optimally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MentorInformation;
