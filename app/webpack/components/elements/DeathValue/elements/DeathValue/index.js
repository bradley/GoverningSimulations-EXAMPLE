import React from "react";

import DescriptionCells from "./components/DescriptionCells";
import Footer from "./components/Footer";
import GlobalVslProduct from "./components/GlobalVslProduct";
import Header from "./components/Header";
import StyledDeathValue from "./views/DeathValue";

const DeathValue = props => {
  const { forEmbed, vslReport } = props;

  return (
    <StyledDeathValue>
      <Header forEmbed={forEmbed}/>
      <GlobalVslProduct vslReport={vslReport}/>
      <DescriptionCells vslReport={vslReport}/>
      <Footer forEmbed={forEmbed}/>
    </StyledDeathValue>
  );
};

export default DeathValue;
