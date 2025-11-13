import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style, globalStyle } from "@vanilla-extract/css";

export const cardMediaLayer = style({
  gridRow: 1,
  gridColumn: 1,
  width: "100%",
  height: "100%",
});

export const vertical = style({});

globalStyle(`${vertical} > *`, {
  borderRadius: `var(${tokens.component["content-card"]["image-container"].border.radius.prominent})`,
});

export const horizontal = style({});

globalStyle(`${horizontal} > *`, {
  borderRadius: `var(${tokens.component["content-card"]["image-container"].border.radius.subtle})`,
});
