import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";
import { className } from "../../cssProcessing/className";

export const root = style({
  border: "solid 1px red",
  fontSize: 16,
  color: `var(--components-button-primary)`,
  backgroundColor: `var(${tokens.component.button.background.color.brand.primary["tone-a"].fallback})`,
});

export const active = className("active", {
  border: "solid 1px green",
});
