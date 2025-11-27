import { type ComplexStyleRule, style } from "@vanilla-extract/css";

export const className = (name: string, rule: ComplexStyleRule) => style(rule, name);
