import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";

export const cardTextTitle = style({
  color: `var(${tokens.universal["text-title"].text.color.brand["tone-a"]})`,
  fontFamily: `var(${tokens.universal["text-title"].text.font.brand})`,
  fontSize: `var(${tokens.universal["text-title"].text.size.medium})`,
  lineHeight: `var(${tokens.universal["text-title"].text["line-height"].brand.medium})`,
});

export const active = style({
  textDecoration: "underline",
});
