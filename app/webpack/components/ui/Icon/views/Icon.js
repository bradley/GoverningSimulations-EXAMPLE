import classNames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  FileText
} from "styled-icons/feather";
import { color } from "styled-system";

const VARIANTS = {
  MEDIUM: "medium",
  SMALL: "small"
};

const featherIcons = {
  FileText
};

/*
 * Icon
 *
 * The Icon object wraps icons provided by Feather to add theme-based
 * related configuration through styled-system. The Icon object is not a
 * component itself, and should not be used directly. Rather, Feather icon
 * components should be referenced by name off this object.
 *
 * Example, for Feather's "Check" icon:
 *
 * // Don't do this:
 * <Check/>
 *
 * // Do this:
 * <Icon.Check/>
 *
 * Note:
 * In order to keep bundle size small, we do _not_ import every feather icon
 * here by default. If you need to use a new feather icon that is not already
 * in use elsewhere in the app, you should both add it to the import statement
 * at the top of this file, and add it to the featherIcons object defined above.
 *
 */
const Icon = Object.entries(featherIcons)
  .reduce((memo, [name, FeatherIconComponent]) => {
    const IconView = styled(FeatherIconComponent).attrs(
      props => {
        const {
          variant
        } = props;

        return {
          className: classNames("icon", {
              "icon--variant-medium": variant == VARIANTS.MEDIUM,
              "icon--variant-small": variant == VARIANTS.SMALL,
            })
        };
      }
    )`
      ${ ({ theme: { lineHeights } }) => `
        &.icon--variant-medium {
          height: ${ lineHeights.medium };
        }

        &.icon--variant-small {
          height: ${ lineHeights.small };
        }
      `}

      ${ color }
    `;

    IconView.propTypes = {
      variant: PropTypes.oneOf([
        VARIANTS.MEDIUM,
        VARIANTS.SMALL
      ]).isRequired,

      ...FeatherIconComponent.propTypes,
      ...color.propTypes
    };

    IconView.defaultProps = {
      strokeWidth: 2,
      variant: VARIANTS.MEDIUM,
    };

    memo[name] = IconView;

    return memo;
  }, {});

export default Icon;
