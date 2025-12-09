import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";

export const buttonText = style({
  display: "flex",
  alignItems: "center",
  fontFamily: `var(${tokens.universal["text-label"].text.font})`,
  fontSize: `var(${tokens.universal["text-label"].text.size.large})`,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});
