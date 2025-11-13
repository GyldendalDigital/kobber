import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";

export const cardTextWrapper = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  gap: `var(${tokens.component["content-card"]["text-container"].gap})`,

  /* no token, but guessing subtle */
  paddingLeft: `var(${tokens.component["content-card"]["text-container"].gap})`,
  paddingRight: `var(${tokens.component["content-card"]["text-container"].gap})`,
});
