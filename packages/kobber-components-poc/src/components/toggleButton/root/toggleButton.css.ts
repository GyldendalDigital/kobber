import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";
import { className } from "../../../cssProcessing/className";

export const root = style({
  fontSize: 16,
  backgroundColor: `var(${tokens.primitives.color.orange[75]})`,
});

export const active = className("active", {
  backgroundColor: `var(${tokens.primitives.color.orange[450]})`,
});
