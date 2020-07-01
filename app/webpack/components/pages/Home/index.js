import React, { useEffect, useState } from "react";
import uuid from "uuid";

import DeathValue, {
  useFetchVslReport
} from "@app-front-end/Elements/DeathValue";
import { DelayedRender } from "@app-front-end/UI/Loader";
import {
  TransitionView,
  TransitionGroup
} from "@app-front-end/UI/TransitionView";
import { MediumText } from "@app-front-end/UI/Typography";

import coinsTileSrc from "./assets/coins-tile.png";
import coinsTopSrc from "./assets/coins-top.png";

import Footer from "./components/Footer";
import StyledHome from "./views/Home";
import LoadingWrapper from "./views/LoadingWrapper";

// Note: ReactCSSTransitionGroup children _must_ have a key, even when rendering
// only a single item. This is how React will determine which children have
// entered, left, or stayed.
const LOADING_VIEW_KEY = uuid.v4();
const MAIN_VIEW_KEY = uuid.v4();

const Home = props => {
  const {} = props;

  const [
    {
      loading: loadingVslReport,
      vslReport
    },
    fetchVslReport
  ] = useFetchVslReport();

  const [loadingImageOne, setLoadingImageOne] = useState(true);
  const [loadingImageTwo, setLoadingImageTwo] = useState(true);

  useEffect(() => {
    // Only preload images if also preloading VSL report. The logic here is that
    // if they have VSL data in localstorage they should also have images
    // cached already. Preloading images here is just a nicety.
    if (!loadingVslReport) { return; }

    const imageOne = new Image();
    const imageTwo = new Image();

    imageOne.onload = () => {
      setLoadingImageOne(false);
    };

    imageTwo.onload = () => {
      setLoadingImageTwo(false);
    };

    imageOne.src = coinsTopSrc;
    imageTwo.src = coinsTileSrc;
  }, [loadingVslReport]);

  const loading = loadingVslReport;

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
            <StyledHome>
              <DeathValue vslReport={vslReport}/>
              <Footer vslReport={vslReport}/>
            </StyledHome>
          </TransitionView>
        )
      }
    </TransitionGroup>
  );
};

export default Home;
