import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style, globalStyle } from "@vanilla-extract/css";

export const paper = style({
  all: "inherit",
  backgroundColor: `var(${tokens.semantics.color.identity.base["aubergine-25"]})`,
  // backgroundColor: `var(${tokens.groups["cards-and-modules"].color["aubergine-25"]})`,
  //borderRadius: "16px",
  //selectors: {
  // 'class*="card" && class*="vertical"': {
  //   borderRadius: `var(${tokens.component["content-card"]["image-container"].border.radius.prominent})`,
  // },
  // 'class*="card"': {
  //   borderRadius: `var(${tokens.component["content-card"]["image-container"].border.radius.subtle})`,
  // },
  // },
});
