import React from "react";
import { withTheme } from "styled-components";
import uuid from "uuid";

import DeathValueElement, {
  useFetchVslReport
} from "@app-front-end/Elements/DeathValue";
import { DelayedRender } from "@app-front-end/UI/Loader";
import {
  TransitionView,
  TransitionGroup
} from "@app-front-end/UI/TransitionView";
import { MediumText } from "@app-front-end/UI/Typography";

import DeathValueWrapper from "./views/DeathValueWrapper";
import LoadingWrapper from "./views/LoadingWrapper";

// Note: ReactCSSTransitionGroup children _must_ have a key, even when rendering
// only a single item. This is how React will determine which children have
// entered, left, or stayed.
const LOADING_VIEW_KEY = uuid.v4();
const MAIN_VIEW_KEY = uuid.v4();

const DeathValue = props => {
  const { theme } = props;

  const [
    {
      loading,
      vslReport
    },
    fetchVslReport
  ] = useFetchVslReport();

  return (
    <TransitionGroup>
      {
        loading ? (
          <TransitionView key={LOADING_VIEW_KEY}>
            <LoadingWrapper>
              <DelayedRender delayMs={500}>
                <MediumText emphasize>
                  Loading...
                </MediumText>
              </DelayedRender>
            </LoadingWrapper>
          </TransitionView>
        ) : (
          <TransitionView key={MAIN_VIEW_KEY}>
            <DeathValueWrapper>
              <DeathValueElement forEmbed vslReport={vslReport}/>
            </DeathValueWrapper>
          </TransitionView>
        )
      }
    </TransitionGroup>
  );
};

export default DeathValue;
