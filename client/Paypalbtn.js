import React from "react";
import { PaypalButton } from "react-paypal-button-v2";

const PayPalBtn = ({ amount, currency }) => {
  return <PaypalButton 
    amount={amount} 
    currency={currency}
    onSuccess={(details, data) => console.log(details, data)}
    options={{
      clientId: "AaLgWT2mzVerEuCHGSyE_xbg_V1vTdKYNyCd6mdQSaOx0iJ4sYkoBOPCbUGGTTW0K7VG0oLHEN8kdQHI"
    }}
    />;
};

export default PayPalBtn; 
