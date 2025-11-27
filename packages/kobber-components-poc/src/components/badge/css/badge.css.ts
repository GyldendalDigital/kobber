import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";

export const badge = style({
  display: "inline-flex",
  flexShrink: "0",
  padding: `var(${tokens.component.badge.padding.medium})`,
  justifyContent: "center",
  alignItems: "center",
  gap: `var(${tokens.component.badge.gap.medium})`,
  backgroundColor: `var(${tokens.component.badge.background.color.brand["tone-a"]})`,
  borderRadius: `var(${tokens.component.badge.border.radius})`,
});
