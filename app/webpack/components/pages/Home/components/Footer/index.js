import React from "react";
import moment from "moment-timezone";

import { SmallText } from "@app-front-end/UI/Typography";

import StyledFooter from "./views/Footer";

const Footer = props => {
  const { vslReport } = props;

  const updatedAt = Object.values(vslReport)[0].updatedAt;
  const formattedUpdatedAt = moment(new Date(updatedAt))
    .format("DD.MM h:mmA");

  // Extract the current timezone for the user from the Internationalization
  // API and moment to convert it to a user friendly format.
  //   Note: the `[2020, 0]` argument tells moment-timezone to use "fall/winter"
  //   format for timezones like "EST/EDT" (e.g.; EST and not EDT) in this case.
  const userTimezone = moment
    .tz([2020, 0], Intl.DateTimeFormat().resolvedOptions().timeZone)
    .format("z");

  return (
    <StyledFooter>
      <SmallText>
        Updated { formattedUpdatedAt } { userTimezone }
      </SmallText>
    </StyledFooter>
  );
};

export default Footer;
