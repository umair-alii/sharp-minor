import React, { Fragment } from "react";
import PhoneInput from "react-phone-input-2";

const PaymentDetailForm = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6">
          <div className="payment-detail-form">
            <h3>Payment Details</h3>
            <h1>Pay Us Securily</h1>
            <h6>Basic Information</h6>
            <form>
              <div className="form-group">
                <div className="login-inputs">
                  <i className="fa fa-grav" aria-hidden="true"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Kids Name *"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="login-inputs">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Parents Email *"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="payment-phone">
                  <PhoneInput
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: true,
                    }}
                  />
                </div>
              </div>
              <h4>Standard 8 Weeks Course - 2 Months Package</h4>
              <div className="packages-wrapper">
                <ul>
                  <li>Monthly Payment For 8 Classes</li>
                  <li>£ 7000</li>
                </ul>
                <ul>
                  <li>
                    Special discount applied <span>Change</span>
                  </li>
                  <li>£ 1000</li>
                </ul>
                <ul>
                  <li>Order Total / Month</li>
                  <li>£ 6000</li>
                </ul>
              </div>
              <p>Charges will be auto deducted every month</p>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="payment-detail-form-banner">
            <img
              src="../../static/assets/imgs/image-screen-2.png"
              alt="banner"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="wrapper-payment-options">
            <p>Payment Options Available</p>
            <div className="row">
              <div className="col-md-3">
                <div className="payment-card-icon">
                  <img
                    src="../../static/assets/imgs/visa-card.png"
                    alt="visa"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="payment-card-icon">
                  <img
                    src="../../static/assets/imgs/master-card.png"
                    alt="visa"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="payment-card-icon">
                  <img
                    src="../../static/assets/imgs/net-banking.png"
                    alt="visa"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="payment-card-icon">
                  <img
                    src="../../static/assets/imgs/upi.png"
                    alt="visa"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="buttons-wrapper">
            <button type="button" className="btn btn-primary total-btn">
              <i className="fa fa-money" aria-hidden="true"></i>Your Total £
              6000 / Month
            </button>

            <button type="button" className="btn btn-primary pay-securily-btn">
              Pay Securely
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <div className="secure-payment-refund-policy">
                <div className="contact-us-icon">
                  <i className="fa fa-undo" aria-hidden="true"></i>
                </div>
                <div className="secure-payment-desccription">
                  <h3>100% Secure payment</h3>
                  <p>
                    Our payments are safe and secure, we take all precautions to
                    protect your data
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="secure-payment-refund-policy">
                <div className="contact-us-icon">
                  <i className="fa fa-undo" aria-hidden="true"></i>
                </div>
                <div className="refund-policy-desccription">
                  <h3>Refund Policy</h3>
                  <p>
                    If you choose to cancel we will refund your money on the
                    same day, no questions asked
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
      </div>
    </Fragment>
  );
};

export default PaymentDetailForm;
