import React from "react";
import { Helmet } from "react-helmet-async";
import { Redirect, Route, Switch } from "react-router-dom";

import routes from "@app-front-end/Config/embedRoutes";

import { Main, ThemeProvider } from "@app-front-end/UI/Themes";

const Body = props => {
  return (
    <ThemeProvider theme={Main}>
      <Helmet>
        <title>COVID-19 Death Value</title>
      </Helmet>
      <Switch>
        {
          routes.map((route, i) => {
            return (
              <Route
                component={route.component}
                exact={route.exact}
                key={`embed-route-${ i }`}
                path={route.path}
                strict={route.strict}
              />
            );
          })
        }
        <Redirect to="/embed/404"/>
      </Switch>
    </ThemeProvider>
  );
}

export default Body;
