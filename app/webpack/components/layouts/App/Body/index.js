import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import routes from "@app-front-end/Config/appRoutes";

import { Body as BodyView } from "@app-front-end/UI/Chrome";
import { Container } from "@app-front-end/UI/Grid";

const Body = props => {
  return (
    <BodyView>
      <Container>
        <Switch>
          {
            routes.map((route, i) => {
              return (
                <Route
                  exact={route.exact}
                  component={route.component}
                  key={`layout-route-${ i }`}
                  path={route.path}
                  strict={route.strict}
                />
              );
            })
          }
          <Redirect to="/"/>
        </Switch>
      </Container>
    </BodyView>
  );
}

export default Body;
