import React from "react";

import { LargeText } from "@app-front-end/UI/Typography";

import StyledHeader from "./views/Header";
import Title from "./views/Title";

const Header = props => {
  const { forEmbed } = props;

  return (
    <StyledHeader forEmbed={forEmbed}>
      <Title>
        COVID-19 Death Value
      </Title>
    </StyledHeader>
  );
};

export default Header;
