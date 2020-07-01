import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { wrapHistory } from "oaf-react-router";

import AppLayout from "@app-front-end/Layouts/App";

const history = createBrowserHistory();

// TODO:
// For accessibility reasons, we should really not prevent announcing page
// navigation here. However, the `oaf-react-router` code inserts a 1px by 1px
// element into the body of our document for this feature, and this causes
// scrolling issues after navigating between pages. We should look into
// submitting a PR to `oaf-react-router` to make the insertion element
// configurable (if that remains accessible - we aren't sure right now).
wrapHistory(history, { announcePageNavigation: false });

ReactDOM.render(
  <Router history={history}>
    <React.Fragment>
      <HelmetProvider>
        <AppLayout/>
      </HelmetProvider>
    </React.Fragment>
  </Router>,
  document.getElementById("root")
);
