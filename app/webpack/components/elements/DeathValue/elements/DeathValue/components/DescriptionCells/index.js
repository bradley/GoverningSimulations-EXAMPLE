import React from "react";

import CountrySpecificVsl from "./components/CountrySpecificVsl";
import GlobalDeathsBreakdown from "./components/GlobalDeathsBreakdown";
import VslPaperDetails from "./components/VslPaperDetails";
import StyledDescriptionCells from "./views/DescriptionCells";
import DescriptionCellWrapCap from "./views/DescriptionCellWrapCap";

const DescriptionCells = props => {
  const { vslReport } = props;

  return (
    <StyledDescriptionCells>
      <GlobalDeathsBreakdown vslReport={vslReport}/>
      <CountrySpecificVsl vslReport={vslReport}/>
      <VslPaperDetails vslReport={vslReport}/>
      <DescriptionCellWrapCap/>
    </StyledDescriptionCells>
  );
};

export default DescriptionCells;
