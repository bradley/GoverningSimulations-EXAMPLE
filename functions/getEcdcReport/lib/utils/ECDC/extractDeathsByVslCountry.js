const csv = require("@fast-csv/parse");
const highland = require("highland");
const path = require("path");

const ecdcCountriesToVslCountries =
  require(path.resolve(__dirname, "../../data/ECDC/ecdc_countries_to_vsl_countries.json"));

/*
 * extractDeathsByVslCountry
 *
 * Utility function to parse relevant data from fetched ECDC report CSV. The
 * primary goal here is the following:
 *   1. Filter out data for countries not represented in our VSL data.
 *   2. Filter out data for days on which there were no deaths for the given
 *      country.
 *   3. Modify all kept data so that country names reflect names used in VSL
 *      data.
 *   4. Group all data by the country it represents.
 *   5. Convert final data to be a total count of deaths per country.
 *
 */
const extractDeathsByVslCountry = reportData => {
  return new Promise((resolve, reject) => {
    highland(reportData)
      // Batch into groups of 500 for parallel processing.
      .batch(500)
      // Convert each batch of data to a highland stream.
      .map(highland)
      // Run a maximum of 10 parallel processes at the same time.
      .parallel(10)
      // Filter out rows that don't meet inclusion criteria. Filter operates
      // in parallel.
      .filter(report => {
        // Checks if the row's country ("countriesAndTerritories" in ECDC data)
        // is represented in our VSL data.
        const isVslCountry = ecdcCountriesToVslCountries
          .hasOwnProperty(report["countriesAndTerritories"]);
        // Checks if row's data reports any deaths.
        const hasDeaths = !!(+report["deaths"]);

        return isVslCountry && hasDeaths;
      })
      // Map rows, trimming unused data and translating the row's country (
      // "countriesAndTerritories" in ECDC data) to the country name used in our
      // VSL data. Map operates in parallel.
      .map(report => {
        const ecdcCountry = report["countriesAndTerritories"];

        return {
          vslCountry: ecdcCountriesToVslCountries[ecdcCountry],
          deaths: (+report["deaths"]) // Convert deaths from string to number.
        };
      })
      // Reduce rows, grouping all data under its VSL country name.
      .group("vslCountry")
      // Coerce highland stream into Promise, returning final stream data.
      .toPromise(Promise)
      // Reduce full `deathsByVslCountry` object into more streamlined object,
      // mapping calculated _total_ deaths to VSL country name.
      .then(allDeathsByVslCountry => {
        const totalDeathsByVslCountry = Object.keys(allDeathsByVslCountry)
          .reduce((totalDeathsByVslCountry, vslCountry) => {
            const totalDeaths = allDeathsByVslCountry[vslCountry]
              .reduce((totalDeaths, record) => {
                totalDeaths += record.deaths;
                return totalDeaths;
              }, 0);

            totalDeathsByVslCountry[vslCountry] = totalDeaths;
            return totalDeathsByVslCountry;
          }, {});

        return totalDeathsByVslCountry;
      })
      .then(totalDeathsByVslCountry => {
        // TODO: Thinking we may want to include most recent "dateRep" from the
        // actual ECDC data, in order to know when they last updated the data.
        // Unsure. This seems like a nice to have for now.

        // TODO: Thinking we should do a little validation of the output data
        // here.

        console.log(
          "Succcessfully extracted deaths by VSL country from ECDC Report"
        );
        resolve(totalDeathsByVslCountry);
      })
      .catch(error => {
        console.log(
          "Error extracting deaths by VSL country from ECDC Report:",
          error.message
        );
        reject(error);
      });
  });
};

module.exports = extractDeathsByVslCountry;
