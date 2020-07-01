module.exports = {
  ecdc: {
    reportUrl: process.env.ECDC_REPORT_URL
  },
  google: {
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID
  },
  twilio: {
    authToken: process.env.TWILIO_AUTH_TOKEN,
    phoneNumberFrom: process.env.TWILIO_PHONE_NUMBER_FROM,
    phoneNumberTo: process.env.TWILIO_PHONE_NUMBER_TO,
    sid: process.env.TWILIO_SID,
  }
};
