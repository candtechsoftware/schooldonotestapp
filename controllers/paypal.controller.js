const request = require('request');
const query = require('querystring');
const Promise = require('bluebird');


class PayPalController {

  static validate(body={}){
    return new Promise((resolve, reject) => {
      let postreq = 'cmd=_notify-validate';

      Object.keys(body).map(key => {
        postreq = `${postreq}&${key}=${body[key]}`;
        return key;
      });

//      postreq = postreq.replace(new RegExp(" ", "g"), '+')
      console.log('request'  ,postreq );

      const options = {
        url: 'https://ipnpb.sandbox.paypal.com/cgi-bin/webscr',
        method: 'POST',
        headers: {
          'Content-Length': postreq.length,
        },
        encoding: 'utf-8',
        body: postreq
      };

      request(options, (err, response, resBody)=> {
        if(err || response.statusCode !== 200){
          console.log(err);
          reject(new Error(err));
          return;
        }
        console.log(resBody);
        if (resBody.substring(0, 8) === 'VERIFIED') {
          resolve(true);
        } else if (resBody.substring(0, 7) === 'INVALID') {
          reject(new Error('Your IPN Message is invalid.'));
        } else {
          reject(new Error('Unexpected response body.'));
        }
      })
    })
  }
}
module.exports = PayPalController;