import React from "react";

import { Anchor } from "@app-front-end/UI/Button";

import DescriptionCell from "../../views/DescriptionCell";
import DescriptionText from "../../views/DescriptionText";

const GlobalDeathsBreakdown = props => {
  const { vslReport } = props;

  const globalValues = Object.values(vslReport)
    .reduce((globalValues, countryData) => {
      const totalDeaths = parseInt(countryData["totalDeaths"]);
      const vslProduct = parseFloat(countryData["vslProduct"]);

      globalValues.totalDeaths += totalDeaths;
      globalValues.vsl += vslProduct;

      return globalValues;
    }, { totalDeaths: 0, vsl: 0 });

  const globalVsl = Math.round(globalValues.vsl * 1000000);

  const vslAsDollarAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(globalVsl).replace(/\.\d\d/, "");

  const formattedDeaths = globalValues.totalDeaths.toLocaleString();

  return (
    <DescriptionCell>
      <DescriptionText weight="semi-bold">
        There are{" "}
        <Anchor
          href="https://docs.google.com/spreadsheets/d/13lqxC4N8Kj-4N44HWtF8SqJI9uZExV-qfh-M02254lk/edit?usp=sharing"
          target="_blank"
        >
          { `${ formattedDeaths } confirmed deaths` }
        </Anchor>
        {" "} due to COVID-19 thus far. One model values these lives at
        {" "}{ vslAsDollarAmount }.
      </DescriptionText>
    </DescriptionCell>
  );
};

export default GlobalDeathsBreakdown;
