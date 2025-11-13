import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";

export const cardTextBody = style({
  color: `var(${tokens.universal["text-body"].text.color.brand["tone-a"]})`,
  fontFamily: `var(${tokens.universal["text-body"].text.font.brand})`,
  fontSize: `var(${tokens.universal["text-body"].text.size.small})`,
  lineHeight: `var(${tokens.universal["text-body"].text["line-height"].brand.small.short})`,
});
