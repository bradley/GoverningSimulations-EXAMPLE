import React from "react";

import { MediumText } from "@app-front-end/UI/Typography";

import NotFoundWrapper from "./views/NotFoundWrapper";

const NotFound = props => {
  const {} = props;

  return (
    <NotFoundWrapper>
      <MediumText emphasize>
        Not Found
      </MediumText>
    </NotFoundWrapper>
  );
};

export default NotFound;
