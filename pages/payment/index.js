import React, { Fragment } from "react";

import Header from "../../components/layout/header";

import Footer from "../../components/layout/footer";
import PaymentDeatilForm from "../../components/Payment/payment_detail_form";

const Payment = (props) => {
  return (
    <Fragment>
      <div className="container">
        <Header />
        <PaymentDeatilForm />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Payment;
