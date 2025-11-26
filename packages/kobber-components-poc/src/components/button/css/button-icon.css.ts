import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";

export const buttonIcon = style({
  width: `var(${tokens.component.button.icon.size})`,
  height: `var(${tokens.component.button.icon.size})`,
});
