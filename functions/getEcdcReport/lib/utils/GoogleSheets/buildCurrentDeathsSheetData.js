const moment = require("moment");
const path = require("path");

const vslCountriesToVsl =
  require(path.resolve(__dirname, "../../data/VSL/vsl_countries_to_vsl.json"));

/*
 * buildCurrentDeathsSheetData
 *
 * Utility function to map data extracted from the fetched ECDC report to
 * the countries represented in our Google Sheet, "Current Deaths by Country".
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
 * For injection into our sheet, these columns are injected as an array of
 * arrays of data, where each inner-array represents a row of data in the Sheet:
 *   [
 *     [...country 1 data],
 *     [...country 2 data],
 *     so forth...
 *   ]
 *
 */
const buildCurrentDeathsSheetData = totalDeathsByVslCountry => {
  return new Promise((resolve, reject) => {
    const roundProduct = product => {
      return Math.round( product * 1e11 ) / 1e11;
    };
    const updatedAt = moment().utc();

    const currentDeathsSheetData = Object.keys(vslCountriesToVsl)
      .reduce((memo, country) => {
        const vsl = vslCountriesToVsl[country];
        const totalDeaths = totalDeathsByVslCountry[country] || 0;
        const vslProduct = roundProduct(vsl * totalDeaths);

        memo.push([country, vsl, totalDeaths, vslProduct, updatedAt]);

        return memo;
      }, []);

    console.log(
      "Successfully built data for 'Current Deaths by Country' sheet"
    );
    resolve(currentDeathsSheetData);
  });
};

module.exports = buildCurrentDeathsSheetData;
