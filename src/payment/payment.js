import React from 'react';

const PaymentStatus = ({ status }) => {
  if (status === 'success') {
    return (
      <div>
        <h1>Payment Successful!</h1>
        <p>Thank you for your payment.</p>
      </div>
    );
  } else if (status === 'cancel') {
    return (
      <div>
        <h1>Payment Cancelled</h1>
        <p>Your payment has been cancelled. Please try again.</p>
      </div>
    );
  }
  return null;
};

export default PaymentStatus;
