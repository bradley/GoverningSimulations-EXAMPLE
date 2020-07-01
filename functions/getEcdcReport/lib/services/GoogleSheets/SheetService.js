const config = require("config");
const google = require("googleapis");
const path = require("path");

const credentials =
  require(path.resolve(__dirname, "../../../.data/google_sheets_credentials.json"));

const ALL_ROWS_AFTER_FIRST = "Sheet1!A2:E";

/*
 * SheetService
 *
 * Service with access to our Google Sheets Sheet for the purposes of performing
 * updates.
 *
 * Our sheets VSL Sheet has the following columns, listed according to
 * Google's "A1 Notation", where columns are referenced alphabetically,
 * from A, to B, to C, and so forth:
 *   A: country
 *   B: vsl
 *   C: totalDeaths
 *   D: vslProduct
 *   E: updatedAt
 *
 * All updates should take place after the first row of data, as the first row
 * stores column headers.
 *
 * The A1 formatted range value, `ALL_ROWS_AFTER_FIRST`, represents all data
 * within the range beginning at row 1, column A, and until the end of column
 * E. Thinking of this as a giant rectangle of data probably helps.
 *
 */
class SheetService {
  constructor() {
    this._auth = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
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

  clearValues() {
    return new Promise((resolve, reject) => {
      this.sheets.spreadsheets.values.clear({
        spreadsheetId: config.google.spreadsheetId,
        range: ALL_ROWS_AFTER_FIRST
      }, (error, response) => {
        if (error) {
          console.log("Error clearing 'Current Deaths by Country' sheet:", error.message);
          reject(error);
          return;
        } else {
          console.log("Successfully cleared 'Current Deaths by Country' sheet");
          resolve();
        }
      });
    });
  }

  setValues(values=[]) {
    return new Promise((resolve, reject) => {
      this.clearValues()
        .then(() => {
          this.sheets.spreadsheets.values.update({
            spreadsheetId: config.google.spreadsheetId,
            range: ALL_ROWS_AFTER_FIRST,
            valueInputOption: "RAW",
            includeValuesInResponse: false,
            resource: { values: values }
          }, (error, response) => {
            if (error) {
              console.log("Error setting 'Current Deaths by Country' sheet values:", error.message);
              reject(error);
              return;
            } else {
              console.log("Successfully set 'Current Deaths by Country' sheet values");
              resolve();
            }
          });
        })
        .catch(reject);
    });
  }
}

module.exports = SheetService;
