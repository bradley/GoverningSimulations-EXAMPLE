#!/usr/bin/env node

const vslSerializer = (vslData=[]) => {
  const serializedVslData = vslData.reduce((memo, countryData) => {
    const country = countryData[0];
    const serializedCountry = {
      country: country,
      vsl: countryData[1],
      totalDeaths: countryData[2],
      vslProduct: countryData[3],
      updatedAt: countryData[4]
    };

    memo[country] = serializedCountry;

    return memo;
  }, {});

  console.log("Successfully serialized VSL values");

  return serializedVslData;
};

module.exports = vslSerializer;
