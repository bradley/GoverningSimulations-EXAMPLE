const config = require("config");
const twilio = require("twilio");

/*
 * SmsService
 *
 * Service for sending basic SMS notifications to our developers using Twilio.
 *
 */
class SmsService {
  constructor() {
    this._client = twilio(
      config.twilio.sid,
      config.twilio.authToken
    );
  }

  get client() {
    return this._client;
  }

  set client(client) {
    throw new Error("may not override client value");
  }

  sendSms(message="EMPTY MESSAGE") {
    return new Promise((resolve, reject) => {
      this.client.messages
        .create({
           body: message,
           from: config.twilio.phoneNumberFrom,
           to: config.twilio.phoneNumberTo
         })
        .then(() => {
          console.log("Successfully sent SMS");
          resolve();
        })
        .catch(error => {
          console.log("Error sending SMS:", error.message);
          reject(error);
        });
    });
  }
}

module.exports = SmsService;
