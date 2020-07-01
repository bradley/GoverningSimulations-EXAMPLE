import React from "react";
import { Helmet } from "react-helmet-async";
import { Route } from "react-router-dom";

import { Chrome } from "@app-front-end/UI/Chrome";
import { Main, ThemeProvider } from "@app-front-end/UI/Themes";

import Body from "./Body";

const Layout = props => {
  return (
    <ThemeProvider theme={Main}>
      <Helmet>
        <title>COVID-19 Death Value</title>
      </Helmet>
      <Chrome>
        <Body/>
      </Chrome>
    </ThemeProvider>
  );
}

export default Layout;
