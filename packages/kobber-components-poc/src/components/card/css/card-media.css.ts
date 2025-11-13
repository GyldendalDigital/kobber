import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style, globalStyle } from "@vanilla-extract/css";

export const cardMedia = style({
  display: "flex",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

export const image = style({});

globalStyle(`${image} > *`, {
  objectFit: "cover",
  width: "100%",
  height: "100%",
});

export const media = style({});

globalStyle(`${media} > *`, {
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
