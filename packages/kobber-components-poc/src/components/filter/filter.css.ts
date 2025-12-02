import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";
import { className } from "../../cssProcessing/className";

export const root = style({
  all: "unset",
  display: "flex",
  height: `var(${tokens.component.filter.size.height})`,
  padding: `0 var(${tokens.component.filter.padding.inline})`,
  justifyContent: "center",
  alignItems: "center",
  gap: `var(${tokens.component.filter.gap})`,
  borderRadius: `var(${tokens.component.filter.border.radius})`,
  backgroundColor: `var(${tokens.component.filter.background.color.fallback})`,
  ":hover": {
    background: `linear-gradient(0deg, var(${tokens.component.filter.background.color.hover}) 0%, var(${tokens.component.filter.background.color.hover}) 100%), var(${tokens.component.filter.background.color.fallback})`,
  },
  ":active": {
    background: `var(${tokens.component.filter.background.color.fallback})`,
  },
  ":focus-visible": {
    outline: "none",
    boxShadow: `0 0 0 var(${tokens.universal.focus.border.width}) var(${tokens.universal.focus.border.color})`,
  },
  ":disabled": {
    cursor: "not-allowed",
    opacity: `var(${tokens.universal.disabled.container.opacity})`,
    background: `var(${tokens.component.filter.background.color.fallback})`,
  },
  selectors: {
    '&[aria-disabled="true"], &.disabled': {
      opacity: `var(${tokens.universal.disabled.container.opacity})`,
    },
  },
});

export const selected = className("selected", {
  background: `var(${tokens.component.filter.background.color.active})`,
  color: `var(${tokens.universal["text-label"].text.color.brand["tone-b"]})`,
  ":hover": {
    background: `linear-gradient(0deg, var(${tokens.component.filter.background.color.hover}) 0%, var(${tokens.component.filter.background.color.hover}) 100%), var(${tokens.component.filter.background.color.active})`,
  },
  ":active": {
    background: `var(${tokens.component.filter.background.color.active})`,
  },
});

export const counter = className("counter", {
  display: "flex",
  color: `var(${tokens.universal["text-label"].text.color.brand["tone-a"]})`,
  height: `var(${tokens.component.filter.counter.size.height})`,
  minWidth: 24,
  padding: `0 var(${tokens.component.filter.counter.padding.inline})`,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: `var(${tokens.component.filter.counter.border.radius})`,
  backgroundColor: `var(${tokens.component.filter.counter.background.color.fallback})`,
});
