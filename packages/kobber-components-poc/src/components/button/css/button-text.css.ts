import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";

// color: var(--text-label-text-color-accent-tone-b, #FBEAEA);
// font-family: var(--text-label-text-font, "PP Mori");
// font-size: var(--text-ui-size-label-large, 16px);
// font-style: normal;
// font-weight: 400;
// line-height: normal;

export const buttonText = style({
  display: "flex",
  alignItems: "center",
  fontFamily: `var(${tokens.universal["text-label"].text.font})`,
  fontSize: `var(${tokens.universal["text-label"].text.size.large})`,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});

// color: var(--text-label-text-color-accent-tone-b, #FBEAEA);

export const brandPrimaryToneA = style({
  color: `var(${tokens.universal["text-label"].text.color.accent["tone-b"]})`,
});

export const brandSecondaryToneA = style({
  //color: var(--text-label-text-color-brand-tone-a, #691837);

  color: `var(${tokens.universal["text-label"].text.color.brand["tone-a"]})`,
});

export const brandSecondaryToneB = style({
  backgroundColor: `var(${tokens.component.button.background.color.brand.secondary["tone-b"].fallback})`,
});

export const rettsdataPrimaryToneA = style({
  backgroundColor: `var(${tokens.component.button.background.color.rettsdata.primary["tone-a"].fallback})`,
  selectors: {
    '&[data-part="text"][data-hover]': {
      backgroundColor: `var(${tokens.component.button.background.color.rettsdata.primary["tone-a"].hover})`,
    },
  },
});

export const rettsdataSecondaryToneA = style({
  backgroundColor: `var(${tokens.component.button.background.color.rettsdata.secondary["tone-a"].fallback})`,
  selectors: {
    '&[data-part="text"][data-hover]': {
      backgroundColor: `var(${tokens.component.button.background.color.rettsdata.secondary["tone-a"].hover})`,
    },
  },
});

export const rettsdataSecondaryToneB = style({
  backgroundColor: `var(${tokens.component.button.background.color.rettsdata.secondary["tone-b"].fallback})`,
  selectors: {
    '&[data-part="text"][data-hover]': {
      backgroundColor: `var(${tokens.component.button.background.color.rettsdata.secondary["tone-b"].hover})`,
    },
  },
});

export const neutralPrimaryToneA = style({
  backgroundColor: `var(${tokens.component.button.background.color.neutral.primary["tone-a"].fallback})`,
  selectors: {
    '&[data-part="text"][data-hover]': {
      backgroundColor: `var(${tokens.component.button.background.color.neutral.primary["tone-a"].hover})`,
    },
  },
});

export const neutralSecondaryToneB = style({
  backgroundColor: `var(${tokens.component.button.background.color.neutral.secondary["tone-b"].fallback})`,
  selectors: {
    '&[data-part="text"][data-hover]': {
      backgroundColor: `var(${tokens.component.button.background.color.neutral.secondary["tone-b"].hover})`,
    },
  },
});

export const successToneA = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.success["tone-a"].fallback})`,
  selectors: {
    '&[data-part="text"][data-hover]': {
      backgroundColor: `var(${tokens.component["ui-button"].background.color.success["tone-a"].hover})`,
    },
  },
});

export const successToneB = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.success["tone-b"].fallback})`,
  selectors: {
    '&[data-part="text"][data-hover]': {
      backgroundColor: `var(${tokens.component["ui-button"].background.color.success["tone-b"].hover})`,
    },
  },
});

export const informativeToneA = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.informative["tone-a"].fallback})`,
  selectors: {
    '&[data-part="text"][data-hover]': {
      backgroundColor: `var(${tokens.component["ui-button"].background.color.informative["tone-a"].hover})`,
    },
  },
});

export const informativeToneB = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.informative["tone-b"].fallback})`,
  selectors: {
    '&[data-part="text"][data-hover]': {
      backgroundColor: `var(${tokens.component["ui-button"].background.color.informative["tone-b"].hover})`,
    },
  },
});

export const warningToneA = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.warning["tone-a"].fallback})`,
  selectors: {
    '&[data-part="text"][data-hover]': {
      backgroundColor: `var(${tokens.component["ui-button"].background.color.warning["tone-a"].hover})`,
    },
  },
});

export const warningToneB = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.warning["tone-b"].fallback})`,
  selectors: {
    '&[data-part="text"][data-hover]': {
      backgroundColor: `var(${tokens.component["ui-button"].background.color.warning["tone-b"].hover})`,
    },
  },
});
