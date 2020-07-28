import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";

//sandbox: "AaLgWT2mzVerEuCHGSyE_xbg_V1vTdKYNyCd6mdQSaOx0iJ4sYkoBOPCbUGGTTW0K7VG0oLHEN8kdQHI",

class PayPalBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { showLoading: true };
  }

  render() {
    const buttonStyles = {
      textAlign: "center",
      padding: "1rem",
      margin: "1rem"
    };

    const { showLoading } = this.state;
    const { total } = this.props;

    return (
      <div style={buttonStyles}>
        {showLoading ? <span> Loading... </span> : null}
        <PayPalButton
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: { total }
                  }
                }
              ],
              application_context: {
                shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
              }
            });
          }}
          onApprove={(data, actions) => {
            // Capture the funds from the transaction
            return actions.order.capture().then(function(details) {
              // Show a success message to your buyer
              alert("Transaction completed by " + details.payer);
            });
          }}
          onButtonReady={() => this.setState({ showLoading: false })}
          options={{
            clientId:
              "AaLgWT2mzVerEuCHGSyE_xbg_V1vTdKYNyCd6mdQSaOx0iJ4sYkoBOPCbUGGTTW0K7VG0oLHEN8kdQHI"
          }}
        />
      </div>
    );
  }
}

export { PayPalBtn };
