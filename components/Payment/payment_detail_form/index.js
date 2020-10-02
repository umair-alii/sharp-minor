import React, { Fragment } from "react";
import PhoneInput from "react-phone-input-2";

const PaymentDeatilForm = (props) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="payment-detail-form">
          <h3>Payment Details</h3>
          <h1>Pay Us Securily</h1>
          <h6>Basic Information</h6>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Kids Name *"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Parents Email *"
              />
            </div>
            <div className="row">
              <div className="col-md-4">
                <PhoneInput
                  onlyCountries={["gr", "fr", "us"]}
                  areaCodes={{
                    gr: ["2694", "2647"],
                    fr: ["369", "463"],
                    us: ["300"],
                  }}
                />
              </div>
            </div>
            <h4>Standard 8 Weeks Course - 2 Months Package</h4>
            <div className="packges-wrapper">
              <ul>
                <li>Monthly Payment For 8 Classes</li>
                <li>7000</li>
              </ul>
              <ul>
                <li>
                  Special discount applied <span>Change</span>
                </li>
                <li>1000</li>
              </ul>
              <ul>
                <li>Order Total / Month</li>
                <li>6000</li>
              </ul>
            </div>
            <h6>Charges will be auto deducted every month</h6>
            <h4>Payment Options Available</h4>
          </form>
        </div>
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
        <div className="buttons-wrapper">
          <button type="button" className="btn btn-primary total-btn">
            Your Total  6000 / Month
          </button>

          <button type="button" className="btn btn-primary pay-securily-btn">
            Pay Securely
          </button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="payment-detail-form-banner">
          <img
            src="../../static/assets/imgs/login-banner.png"
            alt="banner"
            className="img-fluid"
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="secure-payment-refund-policy">
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
              <div className="refund-policy-desccription">
                <h3>Refund Policy</h3>
                <p>
                  If you choose to cancel we will refund your money on the same
                  day, no questions asked
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDeatilForm;
