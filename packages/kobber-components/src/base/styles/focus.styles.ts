import { css, unsafeCSS } from "lit";
import { universal } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";

export default css`
  outline: none;
  box-shadow: 0 0 0 var(${unsafeCSS(universal.focus.border.width)}) var(${unsafeCSS(universal.focus.color)});
  border-radius: var(${unsafeCSS(universal.focus.border.radius.xsmall)});
`;
