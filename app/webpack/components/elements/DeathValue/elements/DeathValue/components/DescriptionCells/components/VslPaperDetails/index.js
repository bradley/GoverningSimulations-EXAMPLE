import React from "react";

import { Anchor } from "@app-front-end/UI/Button";

import DescriptionText from "../../views/DescriptionText";

import DescriptionCell from "./views/DescriptionCell";

const VslPaperDetails = props => {

  return (
    <DescriptionCell>
      <DescriptionText>
        Governments have many models for death, one being the Value of a
        Statistical Life, as used here for 192 countries per {" "}
        <DescriptionText as="span" weight="semi-bold">
          <Anchor
            href="https://www.are.na/block/6783613"
            target="_blank"
            emphasized
          >
            this
          </Anchor>
        </DescriptionText> paper.
      </DescriptionText>
    </DescriptionCell>
  )
};

export default VslPaperDetails;
