import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { type ComplexStyleRule, style } from "@vanilla-extract/css";

const className = (name: string, rule: ComplexStyleRule) => style(rule, name);

export const root = style({
  border: "solid 1px red",
  color: `var(--components-button-primary)`,
  backgroundColor: `var(${tokens.component.button.background.color.brand.primary["tone-a"].fallback})`,
});

export const active = className("active", {
  border: "solid 1px green",
});
