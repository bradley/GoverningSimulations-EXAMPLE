const Axios = require("axios");
const config = require("config");

/*
 * fetchReportCsv
 *
 * Utility function to fetch the latest ECDC Covid-19 report from the ECDC. The
 * response will come back as streaming data.
 *
 */
const fetchReportCsv = () => {
  return new Promise((resolve, reject) => {
    const request = Axios.create({});

    request({
      method: "get",
      responseType: "stream",
      url: config.ecdc.reportUrl
    })
      .then(({ data: reportStreamData }) => {
        console.log("Succcessfully fetched ECDC Report");
        resolve(reportStreamData);
      })
      .catch(error => {
        console.log("Error fetching ECDC Report:", error.message);
        reject(error);
      });
  });
};

module.exports = fetchReportCsv;
