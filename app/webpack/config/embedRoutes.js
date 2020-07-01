import DeathValue from "@app-front-end/Embeds/DeathValue";
import NotFound from "@app-front-end/Embeds/NotFound";

export const DeathValueRoute = {
  component: DeathValue,
  exact: true,
  path: "/embed/death_value",
  strict: true
};

export const NotFoundRoute = {
  component: NotFound,
  exact: true,
  path: "/embed/404",
  strict: true
};

// Note:
// Be sure to keep the right order here. React router gives routes presedence
// given the order they are defined in, which can lead to problems if you are
// using query params in routes that are closely similar to routes that dont
// use query params, as reach router may think the exactly defined path matches
// a query param and not the expected route.
//
// Don't do this (order returned):
// 1. "/libraries/:id"
// 2. "/libraries/new"
//
// Do this (order returned):
// 1. "/libraries/new"
// 2. "/libraries/:id"
//
export default [
  DeathValueRoute,
  NotFoundRoute
];
