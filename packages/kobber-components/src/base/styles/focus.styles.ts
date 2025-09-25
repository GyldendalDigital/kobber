import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";

export default css`
  outline: none;
  box-shadow: 0 0 0 var(${unsafeCSS(universal.focus.border.width)}) var(${unsafeCSS(universal.focus.border.color)});
  border-radius: var(${unsafeCSS(universal.focus.border.radius.xsmall)});
`;
