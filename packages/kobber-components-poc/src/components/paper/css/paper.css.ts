import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style, globalStyle } from "@vanilla-extract/css";

export const paper = style({
  //all: "unset",
  // padding: 0,
  // margin: 0,
  // border: "none",
  // textAlign: "inherit",
  backgroundColor: `var(${tokens.groups["cards-and-modules"].color["aubergine-25"]})`,
  // borderRadius: `var${tokens.groups["cards-and-modules"].radius.small}`,
  borderRadius: "16px",
});
