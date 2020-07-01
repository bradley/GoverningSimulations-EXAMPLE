#!/usr/bin/env node

const google = require("googleapis");

const ALL_ROWS_AFTER_FIRST = "Sheet1!A2:E";

class SheetService {
  constructor() {
    const email = process.env.GOOGLE_CLIENT_EMAIL;
    // Netlify escapes the newlines in the key when stored as an env variable.
    // We need to unescape them for usage here.
    const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

    this._auth = new google.auth.JWT(
      email,
      null,
      privateKey,
      [
        "https://www.googleapis.com/auth/spreadsheets"
      ],
      null
    );

    google.options({ auth: this._auth });

    this._sheets = google.sheets('v4');
  }

  get auth() {
    return this._auth;
  }

  set auth(auth) {
    throw new Error("may not override auth value");
  }

  get sheets() {
    return this._sheets;
  }

  set sheets(sheets) {
    throw new Error("may not override sheets object");
  }

  getValues() {
    return new Promise((resolve, reject) => {
      this.sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: ALL_ROWS_AFTER_FIRST,
      }, (error, res) => {
        if (error) {
          console.log("Error fetching sheet values:", error.message);
          reject(error);
          return;
        } else {
          const vslData = res.data.values;
          console.log("Successfully fetched sheet values");
          resolve(vslData);
        }
      });
    });
  }
}

module.exports = SheetService;
