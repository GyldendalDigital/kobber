import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";

export const card = style({
  all: "unset",
  display: "flex",
  selectors: {
    '&[data-part="card"][data-disabled]': {
      opacity: "50%",
    },
  },
});

export const vertical = style({
  flexDirection: "column",
  gap: `var(${tokens.component["content-card"].gap.prominent})`,
  borderRadius: `var(${tokens.component["content-card"]["image-container"].border.radius.prominent})`,
});

export const horizontal = style({
  flexDirection: "row",
  gap: `var(${tokens.component["content-card"].gap.subtle})`,
  borderRadius: `var(${tokens.component["content-card"]["image-container"].border.radius.subtle})`,
});
