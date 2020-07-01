#!/usr/bin/env node
require("dotenv").config();

const path = require("path");

const SheetService =
  require(path.resolve(__dirname, "lib/services/GoogleSheets/SheetService.js"));
const SmsService =
  require(path.resolve(__dirname, "lib/services/Twilio/SmsService.js"));
const extractDeathsByVslCountry =
  require(path.resolve(__dirname, "lib/utils/ECDC/extractDeathsByVslCountry.js"));
const fetchReportCsv =
  require(path.resolve(__dirname, "lib/utils/ECDC/fetchReportCsv.js"));
const parseReportCsv =
  require(path.resolve(__dirname, "lib/utils/ECDC/parseReportCsv.js"));
const buildCurrentDeathsSheetData =
  require(path.resolve(__dirname, "lib/utils/GoogleSheets/buildCurrentDeathsSheetData.js"));

const getEcdcReport = async (event, context) => {
  return new Promise((resolve, reject) => {
    const sheetService = new SheetService();
    const smsService = new SmsService();

    fetchReportCsv()
      .then(reportStreamData => {
        return parseReportCsv(reportStreamData);
      })
      .then(parsedReport => {
        return extractDeathsByVslCountry(parsedReport);
      })
      .then(totalDeathsByVslCountry => {
        return buildCurrentDeathsSheetData(totalDeathsByVslCountry)
      })
      .then(currentDeathsSheetData => {
        return sheetService.setValues(currentDeathsSheetData);
      })
      .then(() => {
        smsService.sendSms("Successfully completed update from ECDC Report.")
          .then(resolve)
          .catch(reject);
      })
      .catch(error => {
        smsService.sendSms("Failed to update from ECDC Report!")
          .then(() => {
            // We still reject here, as this is the error block.
            reject(error);
          })
          .catch(reject);
      });
  });
};

exports.handler = getEcdcReport
