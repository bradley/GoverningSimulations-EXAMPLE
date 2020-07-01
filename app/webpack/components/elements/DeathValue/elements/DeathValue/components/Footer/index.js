import React from "react";

import { Anchor } from "@app-front-end/UI/Button";

import CopyrightSymbol from "./views/CopyrightSymbol";
import StyledFooter from "./views/Footer";
import FooterCell from "./views/FooterCell";
import FooterText from "./views/FooterText";

const Footer = props => {
  const { forEmbed } = props;

  return (
    <StyledFooter>
      <FooterCell>
        <FooterText weight="semi-bold">
          {
            forEmbed ? (
              <React.Fragment>
                Updated daily at{" "}
                <Anchor
                  href="https://deathvalue.fyi"
                  target="_blank"
                  emphasized
                >
                  deathvalue.fyi
                </Anchor>
              </React.Fragment>
            ) : (
              <React.Fragment>
                Read{" "}
                “
                <Anchor
                  href="https://strelkamag.com/en/article/governing-simulations-intro-to-necroeconomics"
                  target="_blank"
                  emphasized
                >
                  Intro to Necroeconomics
                </Anchor>
                ” at Strelka Mag
              </React.Fragment>
            )
          }
        </FooterText>
      </FooterCell>
      <FooterCell>
        <FooterText weight="semi-bold">
          {
            forEmbed ? (
              <React.Fragment>
                <CopyrightSymbol>©</CopyrightSymbol> TFF 2020
              </React.Fragment>
            ) : (
              <React.Fragment>
                <CopyrightSymbol>©</CopyrightSymbol>{" "}
                The Terraforming 2020 /{" "}
                <Anchor
                  href="http://bradley-griffith.com/"
                  target="_blank"
                >
                  Bradley Griffith
                </Anchor>
              </React.Fragment>
            )
          }
        </FooterText>
      </FooterCell>
    </StyledFooter>
  );
};

export default Footer;
