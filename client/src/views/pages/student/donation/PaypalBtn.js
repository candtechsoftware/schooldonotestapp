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
//       <div style={buttonStyles}>
//       <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
//       <input type="hidden" name="business"
//     value="http://www.helloworld.com"/>

// <input type="hidden" name="cmd" value="_donations"/>
// <input type="hidden" name="item_name" value="Friends of the Park"/>
// <input type="hidden" name="item_number" value="Fall Cleanup Campaign"/>
// <input type="hidden" name="currency_code" value="USD"/>
// <input type="image" name="submit"
// src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
// alt="Donate"/>
// <img alt="" width="1" height="1"
// src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />
//       </form>

//       </div>
<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="33" />
<input type="hidden" name="item_name" value="candelarioac@gmail.com"/>

<input type="hidden" name="hosted_button_id" value="7MFV5GC6L6ZQQ" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>
    );
  }
}

export { PayPalBtn };
