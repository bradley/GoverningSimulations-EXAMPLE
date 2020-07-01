import PropTypes from "prop-types";
import classNames from "classnames";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

import coinsTileSrc from "../assets/coins-tile.png";
import coinsTopSrc from "../assets/coins-top.png";

const Home = styled.div.attrs(
  props => ({
    className: classNames("home")
  })
)`
  min-height: 100vh;
  padding-top: 6rem;
  position: relative;
  transform-style: preserve-3d;
  width: 100%;

  &:before {
    background-attachment: fixed;
    background-image: url(${ coinsTopSrc });
    background-origin: border-box;
    background-repeat: no-repeat;
    bottom: 0;
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateZ(-1px);
    z-index: 0;
  }

  &:after {
    background-attachment: fixed;
    background-image: url(${ coinsTileSrc });
    background-origin: border-box;
    background-repeat: repeat-y;
    bottom: 0;
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateZ(-1px);
    z-index: 0;
  }

  ${media.xs`
    padding-left: 1.5rem;
    padding-top: 3rem;

    &:before {
      background-position-x: 50%;
      background-position-y: calc(100% + 15rem);
      background-size: 14rem auto;
      content: "";
    }
  `}

  ${media.sm`
    padding-left: 3rem;
    padding-top: 3rem;

    &:before {
      background-position-x: 50%;
      background-position-y: calc(100% + 11rem);
      background-size: 18rem auto;
      content: "";
    }
  `}

  ${media.md`
    padding-left: 10.5rem;
    padding-top: 6rem;

    &:before {
      background-position-x: 50%;
      background-position-y: calc(100% + 6rem);
      background-size: 18rem auto;
      content: "";
    }
  `}

  ${media.lg`
    padding-left: 27rem;
    padding-top: 12rem;

    &:before {
      background-position-x: calc(27rem * 0.25);
      background-position-y: 13.5rem;
      background-size: calc(27rem * 0.5) auto;
      content: "";
    }

    &:after {
      // The 'coins-top.png' image has the following dimensions:
      //   width: 410px
      //   height: 746px
      //
      // Any time we want to adjust the vertical position or calculated height
      // (e.g.; using 'auto' when adjusting width) of the 'coins-top.png' image,
      // we need to account for the change of scale for positioning our
      // 'coins-tile.png' image container. This ensures that the tiled coin
      // background images begin at the right position against the top coin
      // image.
      //
      // The calculation that gives us the vertical offset is the following:
      //   (<'coins-top.png' height> * (<change in 'coins-top.png' width) / <'coins-top.png' width>)
      //
      // Hence, in this CSS, we have:
      //   (746 * ((27rem * 0.5) / 410)) = 393.014px = 24.563375rem
      //
      background-position-x: calc(27rem * 0.25);
      background-position-y: calc(13.5rem + 24.563375rem);
      background-size: calc(27rem * 0.5) auto;
      content: "";
      top: calc(13.5rem + 24.563375rem);
    }
  `}

  ${media.xxl`
    padding-left: 33rem;
    padding-top: 12rem;

    &:before {
      background-position-x: calc(33rem * 0.25);
      background-position-y: 13.5rem;
      background-size: calc(33rem * 0.5) auto;
      content: "";
    }

    &:after {
      // The 'coins-top.png' image has the following dimensions:
      //   width: 410px
      //   height: 746px
      //
      // Any time we want to adjust the vertical position or calculated height
      // (e.g.; using 'auto' when adjusting width) of the 'coins-top.png' image,
      // we need to account for the change of scale for positioning our
      // 'coins-tile.png' image container. This ensures that the tiled coin
      // background images begin at the right position against the top coin
      // image.
      //
      // The calculation that gives us the vertical offset is the following:
      //   (<'coins-top.png' height> * (<change in 'coins-top.png' width) / <'coins-top.png' width>)
      //
      // Hence, in this CSS, we have:
      //   (746 * ((33rem * 0.5) / 410)) = 480.35px = 30.021875rem
      //
      background-position-x: calc(33rem * 0.25);
      background-position-y: calc(13.5rem + 30.021875rem);
      background-size: calc(33rem * 0.5) auto;
      content: "";
      top: calc(13.5rem + 30.021875rem);
    }
  `}
`;

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
