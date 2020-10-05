import React, { Fragment } from "react";

const TutorLogin = (props) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="tutor-login-form">
          <h3>Tutor's Login</h3>
          <h1>Login As A Tutor</h1>
          <form>
            <div className="form-group">
              <div className="login-inputs">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="User ID (Tutor's ID) *"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="login-inputs">
                <i className="fa fa-keyboard-o" aria-hidden="true"></i>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password *"
                />
              </div>
            </div>
            <div className="remember-forgot-wrapper">
              <div className="form-group">
                <input className="form-check-input" type="checkbox" value="" />
                <label
                  className="form-check-label remember-me"
                  htmlFor="defaultCheck1"
                >
                  Remember only
                </label>
              </div>
              <div className="forgor-password">
                <span>Forgot Password</span>
              </div>
            </div>
            <div className="button-wrapper">
              <button type="button" className="btn btn-primary login-btn">
                Login To Your Account
              </button>
              <button type="button" className="btn btn-primary register-btn">
                Register Your Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-6">
        <div className="login-banner">
          <img
            src="../../static/assets/imgs/login-banner.png"
            alt="banner"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default TutorLogin;
