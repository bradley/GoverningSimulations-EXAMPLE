import React from "react";

import StyledGlobalVslProduct from "./views/GlobalVslProduct";

const GlobalVslProduct = props => {
  const { vslReport } = props;

  const globalVslProduct = Object.values(vslReport)
    .reduce((globalVslProduct, countryData) => {
      const vslProduct = parseFloat(countryData["vslProduct"]);

      globalVslProduct += vslProduct;

      return globalVslProduct;
    }, 0) * 1000000;

  const convertToLargeNumberRepresentation = amount => {
    const absoluteAmount = Math.abs(Number(amount));

    const largeNumbers = {
      Octillion: 1.0e+27,
      Septillion: 1.0e+24,
      Sextillion: 1.0e+21,
      Quintillion: 1.0e+18,
      Quadrillion: 1.0e+15,
      Trillion: 1.0e+12,
      Billion: 1.0e+9,
      Million: 1.0e+6,
      Thousand: 1.0e+3
    };

    // Find the first large number that the given input amount is larger than,
    // if possible.
    const denominator = Object.entries(largeNumbers).find(([key, value]) => {
      return absoluteAmount >= value;
    });

    if (denominator) {
      // Convert amount to quotient of large number.
      const largeAmount = absoluteAmount / denominator[1];
      // Fix decimals of quotient, removing trailing 0's.
      const simplifiedAmount = parseFloat(largeAmount.toFixed(2));

      return `${ simplifiedAmount } ${ denominator[0] }`;
    } else {
      // Return initial amound if not larger than any large number.
      return `${ absoluteAmount }`;
    }
  };

  return (
    <StyledGlobalVslProduct>
      { `${ convertToLargeNumberRepresentation(globalVslProduct) } Dollars` }
    </StyledGlobalVslProduct>
  );
};

export default GlobalVslProduct;
