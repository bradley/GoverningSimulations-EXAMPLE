const path = require("path");
const csv = require("@fast-csv/parse");

/*
 * parseReportCsv
 *
 * Utility function to parse stream data for the fetched ECDC report into a
 * usable CSV.
 *
 */
const parseReportCsv = reportStreamData => {
  return new Promise((resolve, reject) => {
    const csvParseOptions = { headers: true, ignoreEmpty: true };
    const parsedReport = csv.parseStream(reportStreamData, csvParseOptions)
      .on("end", () => {
        console.log("Succcessfully parsed ECDC Report CSV");
      })
      .on("error", error => {
        console.log("Error parsing ECDC Report CSV:", error.message);
        reject(error);
      });

    // Yes, I believe this is correct. We are passing the parsed report stream
    // onward to the Promise's consumer. The "end" function just tells us that
    // this process has completed (from my understanding of fast-csv), therefore
    // resolving here, outside of the callbacks, is appropriate.
    resolve(parsedReport);
  });
};

module.exports = parseReportCsv;
