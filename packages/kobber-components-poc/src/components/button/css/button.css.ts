import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";

export const button = style({
  display: "inline-flex",
  flexShrink: "0",
  padding: `0 var(${tokens.component.button.padding.inline})`,
  justifyContent: "center",
  alignItems: "center",
  gap: `var(${tokens.component.button.gap})`,
  borderRadius: `var(${tokens.component.button.border.radius})`,
  height: `var(${tokens.component.button.size.height})`,

  border: "none",
});

export const brandPrimaryToneA = style({
  backgroundColor: `var(${tokens.component.button.background.color.brand.primary["tone-a"].fallback})`,
  selectors: {
    '&[data-part="button"][data-hover]': {
      backgroundColor: `var(${tokens.component.button.background.color.brand.primary["tone-a"].hover})`,
    },
  },
});

export const brandSecondaryToneA = style({
  backgroundColor: `var(${tokens.component.button.background.color.brand.secondary["tone-a"].fallback})`,
  selectors: {
    '&[data-part="button"][data-hover]': {
      backgroundColor: `var(${tokens.component.button.background.color.brand.secondary["tone-a"].hover})`,
    },
  },
});

export const brandSecondaryToneB = style({
  backgroundColor: `var(${tokens.component.button.background.color.brand.secondary["tone-b"].fallback})`,
  selectors: {
    '&[data-part="button"][data-hover]': {
      backgroundColor: `var(${tokens.component.button.background.color.brand.secondary["tone-b"].hover})`,
    },
  },
});

export const rettsdataPrimaryToneA = style({
  backgroundColor: `var(${tokens.component.button.background.color.rettsdata.primary["tone-a"].fallback})`,
  selectors: {
    '&[data-part="button"][data-hover]': {
      backgroundColor: `var(${tokens.component.button.background.color.rettsdata.primary["tone-a"].hover})`,
    },
  },
});

export const rettsdataSecondaryToneA = style({
  backgroundColor: `var(${tokens.component.button.background.color.rettsdata.secondary["tone-a"].fallback})`,
  selectors: {
    '&[data-part="button"][data-hover]': {
      backgroundColor: `var(${tokens.component.button.background.color.rettsdata.secondary["tone-a"].hover})`,
    },
  },
});

export const rettsdataSecondaryToneB = style({
  backgroundColor: `var(${tokens.component.button.background.color.rettsdata.secondary["tone-b"].fallback})`,
  selectors: {
    '&[data-part="button"][data-hover]': {
      backgroundColor: `var(${tokens.component.button.background.color.rettsdata.secondary["tone-b"].hover})`,
    },
  },
});

export const neutralPrimaryToneA = style({
  backgroundColor: `var(${tokens.component.button.background.color.neutral.primary["tone-a"].fallback})`,
  selectors: {
    '&[data-part="button"][data-hover]': {
      backgroundColor: `var(${tokens.component.button.background.color.neutral.primary["tone-a"].hover})`,
    },
  },
});

export const neutralSecondaryToneB = style({
  backgroundColor: `var(${tokens.component.button.background.color.neutral.secondary["tone-b"].fallback})`,
  selectors: {
    '&[data-part="button"][data-hover]': {
      backgroundColor: `var(${tokens.component.button.background.color.neutral.secondary["tone-b"].hover})`,
    },
  },
});

export const successToneA = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.success["tone-a"].fallback})`,
  selectors: {
    '&[data-part="button"][data-hover]': {
      backgroundColor: `var(${tokens.component["ui-button"].background.color.success["tone-a"].hover})`,
    },
  },
});

export const successToneB = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.success["tone-b"].fallback})`,
  selectors: {
    '&[data-part="button"][data-hover]': {
      backgroundColor: `var(${tokens.component["ui-button"].background.color.success["tone-b"].hover})`,
    },
  },
});

export const informativeToneA = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.informative["tone-a"].fallback})`,
  selectors: {
    '&[data-part="button"][data-hover]': {
      backgroundColor: `var(${tokens.component["ui-button"].background.color.informative["tone-a"].hover})`,
    },
  },
});

export const informativeToneB = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.informative["tone-b"].fallback})`,
  selectors: {
    '&[data-part="button"][data-hover]': {
      backgroundColor: `var(${tokens.component["ui-button"].background.color.informative["tone-b"].hover})`,
    },
  },
});

export const warningToneA = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.warning["tone-a"].fallback})`,
  selectors: {
    '&[data-part="button"][data-hover]': {
      backgroundColor: `var(${tokens.component["ui-button"].background.color.warning["tone-a"].hover})`,
    },
  },
});

export const warningToneB = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.warning["tone-b"].fallback})`,
  selectors: {
    '&[data-part="button"][data-hover]': {
      backgroundColor: `var(${tokens.component["ui-button"].background.color.warning["tone-b"].hover})`,
    },
  },
});
