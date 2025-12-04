import * as tokens from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { style } from "@vanilla-extract/css";

export const button = style({
  padding: `0 var(${tokens.component.button.padding.inline})`,
  borderRadius: `var(${tokens.component.button.border.radius})`,
  height: `var(${tokens.component.button.size.height})`,
  border: "none",
});

export const error = style({
  backgroundColor: `magenta`,
  color: `cyan`,
});

export const brandPrimaryToneA = style({
  backgroundColor: `var(${tokens.component.button.background.color.brand.primary["tone-a"].fallback})`,
  color: `var(${tokens.universal["text-label"].text.color.brand["tone-b"]})`,
  selectors: {
    "&:hover:not(:disabled)": {
      background: `linear-gradient(0deg,
        var(${tokens.component.button.background.color.brand.primary["tone-a"].hover}) 0%,
        var(${tokens.component.button.background.color.brand.primary["tone-a"].hover}) 100%),
        var(${tokens.component.button.background.color.brand.primary["tone-a"].fallback})`,
    },
    "&:active:not(:disabled)": {
      background: "none",
      backgroundColor: `var(${tokens.component.button.background.color.brand.primary["tone-a"].fallback})`,
    },
  },
  ":disabled": { opacity: "50%" },
});

export const brandSecondaryToneA = style({
  backgroundColor: `var(${tokens.component.button.background.color.brand.secondary["tone-a"].fallback})`,
  color: `var(${tokens.universal["text-label"].text.color.brand["tone-b"]})`,
  selectors: {
    "&:hover:not(:disabled)": {
      background: `linear-gradient(0deg,
        var(${tokens.component.button.background.color.brand.secondary["tone-a"].hover}) 0%,
        var(${tokens.component.button.background.color.brand.secondary["tone-a"].hover}) 100%),
        var(${tokens.component.button.background.color.brand.secondary["tone-a"].fallback})`,
    },
    "&:active:not(:disabled)": {
      background: "none",
      backgroundColor: `var(${tokens.component.button.background.color.brand.secondary["tone-a"].fallback})`,
    },
  },
  ":disabled": { opacity: "50%" },
});

export const brandSecondaryToneB = style({
  backgroundColor: `var(${tokens.component.button.background.color.brand.secondary["tone-b"].fallback})`,
  color: `var(${tokens.universal["text-label"].text.color.brand["tone-a"]})`,
  selectors: {
    "&:hover:not(:disabled)": {
      background: `linear-gradient(0deg,
        var(${tokens.component.button.background.color.brand.secondary["tone-b"].hover}) 0%,
        var(${tokens.component.button.background.color.brand.secondary["tone-b"].hover}) 100%),
        var(${tokens.component.button.background.color.brand.secondary["tone-b"].fallback})`,
    },
    "&:active:not(:disabled)": {
      background: "none",
      backgroundColor: `var(${tokens.component.button.background.color.brand.secondary["tone-b"].fallback})`,
    },
  },
  ":disabled": { opacity: "50%" },
});

export const brandTertiaryToneA = style({
  backgroundColor: "transparent",
  color: `var(${tokens.universal["text-label"].text.color.brand["tone-a"]})`,
  ":disabled": { opacity: "50%" },
});

export const brandTertiaryToneB = style({
  backgroundColor: "transparent",
  color: `var(${tokens.universal["text-label"].text.color.brand["tone-b"]})`,
  ":disabled": { opacity: "50%" },
});

//
// RETTSDATA
//
export const rettsdataPrimaryToneA = style({
  backgroundColor: `var(${tokens.component.button.background.color.rettsdata.primary["tone-a"].fallback})`,
  color: `var(${tokens.universal["text-label"].text.color.rettsdata["tone-b"]})`,
  selectors: {
    "&:hover:not(:disabled)": {
      background: `linear-gradient(0deg,
        var(${tokens.component.button.background.color.rettsdata.primary["tone-a"].hover}) 0%,
        var(${tokens.component.button.background.color.rettsdata.primary["tone-a"].hover}) 100%),
        var(${tokens.component.button.background.color.rettsdata.primary["tone-a"].fallback})`,
    },
    "&:active:not(:disabled)": {
      background: "none",
      backgroundColor: `var(${tokens.component.button.background.color.rettsdata.primary["tone-a"].fallback})`,
    },
  },
  ":disabled": { opacity: "50%" },
});

export const rettsdataSecondaryToneA = style({
  backgroundColor: `var(${tokens.component.button.background.color.rettsdata.secondary["tone-a"].fallback})`,
  color: `var(${tokens.universal["text-label"].text.color.rettsdata["tone-b"]})`,
  selectors: {
    "&:hover:not(:disabled)": {
      background: `linear-gradient(0deg,
        var(${tokens.component.button.background.color.rettsdata.secondary["tone-a"].hover}) 0%,
        var(${tokens.component.button.background.color.rettsdata.secondary["tone-a"].hover}) 100%),
        var(${tokens.component.button.background.color.rettsdata.secondary["tone-a"].fallback})`,
    },
    "&:active:not(:disabled)": {
      background: "none",
      backgroundColor: `var(${tokens.component.button.background.color.rettsdata.secondary["tone-a"].fallback})`,
    },
  },
  ":disabled": { opacity: "50%" },
});

export const rettsdataSecondaryToneB = style({
  backgroundColor: `var(${tokens.component.button.background.color.rettsdata.secondary["tone-b"].fallback})`,
  color: `var(${tokens.universal["text-label"].text.color.rettsdata["tone-a"]})`,
  selectors: {
    "&:hover:not(:disabled)": {
      background: `linear-gradient(0deg,
        var(${tokens.component.button.background.color.rettsdata.secondary["tone-b"].hover}) 0%,
        var(${tokens.component.button.background.color.rettsdata.secondary["tone-b"].hover}) 100%),
        var(${tokens.component.button.background.color.rettsdata.secondary["tone-b"].fallback})`,
    },
    "&:active:not(:disabled)": {
      background: "none",
      backgroundColor: `var(${tokens.component.button.background.color.rettsdata.secondary["tone-b"].fallback})`,
    },
  },
  ":disabled": { opacity: "50%" },
});

export const rettsdataTertiaryToneA = style({
  backgroundColor: "transparent",
  color: `var(${tokens.universal["text-label"].text.color.rettsdata["tone-a"]})`,
  ":disabled": { opacity: "50%" },
});

export const rettsdataTertiaryToneB = style({
  backgroundColor: "transparent",
  color: `var(${tokens.universal["text-label"].text.color.rettsdata["tone-b"]})`,
  ":disabled": { opacity: "50%" },
});

//
// NEUTRAL
//
export const neutralPrimaryToneA = style({
  backgroundColor: `var(${tokens.component.button.background.color.neutral.primary["tone-a"].fallback})`,
  color: `var(${tokens.universal["text-label"].text.color.neutral["tone-b"]})`,
  selectors: {
    "&:hover:not(:disabled)": {
      background: `linear-gradient(0deg,
        var(${tokens.component.button.background.color.neutral.primary["tone-a"].hover}) 0%,
        var(${tokens.component.button.background.color.neutral.primary["tone-a"].hover}) 100%),
        var(${tokens.component.button.background.color.neutral.primary["tone-a"].fallback})`,
    },
    "&:active:not(:disabled)": {
      background: "none",
      backgroundColor: `var(${tokens.component.button.background.color.neutral.primary["tone-a"].fallback})`,
    },
  },
  ":disabled": { opacity: "50%" },
});

export const neutralSecondaryToneB = style({
  backgroundColor: `var(${tokens.component.button.background.color.neutral.secondary["tone-b"].fallback})`,
  color: `var(${tokens.universal["text-label"].text.color.neutral["tone-a"]})`,
  selectors: {
    "&:hover:not(:disabled)": {
      background: `linear-gradient(0deg,
        var(${tokens.component.button.background.color.neutral.secondary["tone-b"].hover}) 0%,
        var(${tokens.component.button.background.color.neutral.secondary["tone-b"].hover}) 100%),
        var(${tokens.component.button.background.color.neutral.secondary["tone-b"].fallback})`,
    },
    "&:active:not(:disabled)": {
      background: "none",
      backgroundColor: `var(${tokens.component.button.background.color.neutral.secondary["tone-b"].fallback})`,
    },
  },
  ":disabled": { opacity: "50%" },
});

export const neutralTertiaryToneB = style({
  backgroundColor: "transparent",
  color: `var(${tokens.universal["text-label"].text.color.neutral["tone-a"]})`,
  ":disabled": { opacity: "50%" },
});

//
// SEMANTIC BUTTONS
//
export const successToneA = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.success["tone-a"].fallback})`,
  color: `var(${tokens.universal["text-label"].text.color.success["tone-b"]})`,
  selectors: {
    "&:hover:not(:disabled)": {
      background: `linear-gradient(0deg,
        var(${tokens.component["ui-button"].background.color.success["tone-a"].hover}) 0%,
        var(${tokens.component["ui-button"].background.color.success["tone-a"].hover}) 100%),
        var(${tokens.component["ui-button"].background.color.success["tone-a"].fallback})`,
    },
    "&:active:not(:disabled)": {
      background: "none",
      backgroundColor: `var(${tokens.component["ui-button"].background.color.success["tone-a"].fallback})`,
    },
  },
  ":disabled": { opacity: "50%" },
});

export const successToneB = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.success["tone-b"].fallback})`,
  color: `var(${tokens.universal["text-label"].text.color.success["tone-a"]})`,
  selectors: {
    "&:hover:not(:disabled)": {
      background: `linear-gradient(0deg,
        var(${tokens.component["ui-button"].background.color.success["tone-b"].hover}) 0%,
        var(${tokens.component["ui-button"].background.color.success["tone-b"].hover}) 100%),
        var(${tokens.component["ui-button"].background.color.success["tone-b"].fallback})`,
    },
    "&:active:not(:disabled)": {
      background: "none",
      backgroundColor: `var(${tokens.component["ui-button"].background.color.success["tone-b"].fallback})`,
    },
  },
  ":disabled": { opacity: "50%" },
});

export const informativeToneA = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.informative["tone-a"].fallback})`,
  color: `var(${tokens.universal["text-label"].text.color.informative["tone-b"]})`,
  selectors: {
    "&:hover:not(:disabled)": {
      background: `linear-gradient(0deg,
        var(${tokens.component["ui-button"].background.color.informative["tone-a"].hover}) 0%,
        var(${tokens.component["ui-button"].background.color.informative["tone-a"].hover}) 100%),
        var(${tokens.component["ui-button"].background.color.informative["tone-a"].fallback})`,
    },
    "&:active:not(:disabled)": {
      background: "none",
      backgroundColor: `var(${tokens.component["ui-button"].background.color.informative["tone-a"].fallback})`,
    },
  },
  ":disabled": { opacity: "50%" },
});

export const informativeToneB = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.informative["tone-b"].fallback})`,
  color: `var(${tokens.universal["text-label"].text.color.informative["tone-a"]})`,
  selectors: {
    "&:hover:not(:disabled)": {
      background: `linear-gradient(0deg,
        var(${tokens.component["ui-button"].background.color.informative["tone-b"].hover}) 0%,
        var(${tokens.component["ui-button"].background.color.informative["tone-b"].hover}) 100%),
        var(${tokens.component["ui-button"].background.color.informative["tone-b"].fallback})`,
    },
    "&:active:not(:disabled)": {
      background: "none",
      backgroundColor: `var(${tokens.component["ui-button"].background.color.informative["tone-b"].fallback})`,
    },
  },
  ":disabled": { opacity: "50%" },
});

export const warningToneA = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.warning["tone-a"].fallback})`,
  color: `var(${tokens.universal["text-label"].text.color.warning["tone-b"]})`,
  selectors: {
    "&:hover:not(:disabled)": {
      background: `linear-gradient(0deg,
        var(${tokens.component["ui-button"].background.color.warning["tone-a"].hover}) 0%,
        var(${tokens.component["ui-button"].background.color.warning["tone-a"].hover}) 100%),
        var(${tokens.component["ui-button"].background.color.warning["tone-a"].fallback})`,
    },
    "&:active:not(:disabled)": {
      background: "none",
      backgroundColor: `var(${tokens.component["ui-button"].background.color.warning["tone-a"].fallback})`,
    },
  },
  ":disabled": { opacity: "50%" },
});

export const warningToneB = style({
  backgroundColor: `var(${tokens.component["ui-button"].background.color.warning["tone-b"].fallback})`,
  color: `var(${tokens.universal["text-label"].text.color.warning["tone-a"]})`,
  selectors: {
    "&:hover:not(:disabled)": {
      background: `linear-gradient(0deg,
        var(${tokens.component["ui-button"].background.color.warning["tone-b"].hover}) 0%,
        var(${tokens.component["ui-button"].background.color.warning["tone-b"].hover}) 100%),
        var(${tokens.component["ui-button"].background.color.warning["tone-b"].fallback})`,
    },
    "&:active:not(:disabled)": {
      background: "none",
      backgroundColor: `var(${tokens.component["ui-button"].background.color.warning["tone-b"].fallback})`,
    },
  },
  ":disabled": { opacity: "50%" },
});

export const buttonContainer = style({
  display: "inline-flex",
  gap: `var(${tokens.component.button.gap})`,
  padding: `var(${tokens.component.button.underline.padding.bottom}) 0`,
  boxSizing: "border-box",

  selectors: {
    [`${brandTertiaryToneA}:hover:not(:disabled) &`]: {
      // extra margin negates movement from border
      marginTop: "1px",
      borderBottom: `1px solid var(${tokens.universal["text-label"].text.color.brand["tone-a"]})`,
    },
    [`${brandTertiaryToneA}:active:not(:disabled) &`]: {
      marginTop: 0,
      borderBottom: "none",
    },
    [`${brandTertiaryToneB}:hover:not(:disabled) &`]: {
      marginTop: "1px",
      borderBottom: `1px solid var(${tokens.universal["text-label"].text.color.brand["tone-b"]})`,
    },
    [`${brandTertiaryToneB}:active:not(:disabled) &`]: {
      marginTop: 0,
      borderBottom: "none",
    },
    [`${rettsdataTertiaryToneA}:hover:not(:disabled) &`]: {
      marginTop: "1px",
      borderBottom: `1px solid var(${tokens.universal["text-label"].text.color.rettsdata["tone-a"]})`,
    },
    [`${rettsdataTertiaryToneA}:active:not(:disabled) &`]: {
      marginTop: 0,
      borderBottom: "none",
    },
    [`${rettsdataTertiaryToneB}:hover:not(:disabled) &`]: {
      marginTop: "1px",
      borderBottom: `1px solid var(${tokens.universal["text-label"].text.color.rettsdata["tone-b"]})`,
    },
    [`${rettsdataTertiaryToneB}:active:not(:disabled) &`]: {
      marginTop: 0,
      borderBottom: "none",
    },
    [`${neutralTertiaryToneB}:hover:not(:disabled) &`]: {
      marginTop: "1px",
      borderBottom: `1px solid var(${tokens.universal["text-label"].text.color.neutral["tone-a"]})`,
    },
    [`${neutralTertiaryToneB}:active:not(:disabled) &`]: {
      marginTop: 0,
      borderBottom: "none",
    },
  },
});
