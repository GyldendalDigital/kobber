import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";

export const cardMediaLayer = style({
  gridRow: 1,
  gridColumn: 1,
  width: "100%",
  height: "100%",
});

export const vertical = style({
  padding: `var(${tokens.component["content-card"]["image-container"].padding.prominent})`,
});

export const horizontal = style({
  padding: `var(${tokens.component["content-card"]["image-container"].padding.subtle})`,
});
