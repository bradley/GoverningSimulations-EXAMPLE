import React from "react";
import ReactDOMServer from "react-dom/server";
import {
  Check,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Trash2,
  X
} from "styled-icons/feather";

import { svg } from "@app-front-end/UI/Utils";

const featherIcons = {
  Check,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Trash2,
  X
};

/*
 * IconURL
 *
 * The IconURL object wraps icons provided by Feather to return the icons as
 * simple data URLs. The IconURL object is not a component itself, and should
 * not be used directly. Rather, Feather icons should be referenced by name off
 * this object.
 *
 * Example, for Feather's "Check" icon:
 *
 * // Don't do this:
 * const check = Check;
 *
 * // Do this:
 * const check = IconURL.Check;
 *
 * Note:
 * In order to keep bundle size small, we do _not_ import every feather icon
 * here by default. If you need to use a new feather icon that is not already
 * in use elsewhere in the app, you should both add it to the import statement
 * at the top of this file, and add it to the featherIcons object defined above.
 *
 */
const IconURL = Object.entries(featherIcons)
  .reduce((memo, [name, FeatherIconComponent]) => {
    const RenderedIcon = ReactDOMServer.renderToString(
      <FeatherIconComponent strokeWidth={2}/>
    );

    memo[name] = svg.toDataURL(RenderedIcon);

    return memo;
  }, {});

export default IconURL;
