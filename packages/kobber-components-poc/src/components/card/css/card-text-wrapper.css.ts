import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";

export const cardTextWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  gap: `var(${tokens.component["content-card"]["text-container"].gap})`,

  /* no token, but guessing subtle */
  paddingLeft: `var(${tokens.component["content-card"]["text-container"].gap})`,
  paddingRight: `var(${tokens.component["content-card"]["text-container"].gap})`,
  paddingBottom: `var(${tokens.component["content-card"]["text-container"].gap})`,
});

export const horizontal = style({
  /* no token, but guessing subtle */
  paddingTop: `var(${tokens.component["content-card"]["text-container"].gap})`,
});
