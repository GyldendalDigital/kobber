import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";

export const badgeText = style({
  color: `var(${tokens.universal["text-label"].text.color.accent["tone-b"]})`,
  fontFamily: `var(${tokens.universal["text-label"].text.font})`,
  fontSize: `var(${tokens.universal["text-label"].text.size.medium})`,
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
});
