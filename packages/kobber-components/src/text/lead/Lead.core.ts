import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

const tokens = {
  text: {
    "lead-text": {
      color: {
        brand: {
          "tone-a": "#691837",
          "tone-b": "#F9EAED",
        },
        neutral: {
          "tone-a": "#333a41",
          "tone-b": "#ECEEF1",
        },
        thriller: {
          "tone-a": "#0B2E3A",
          "tone-b": "#AEC3C3",
        },
        fantasy: {
          "tone-a": "#28222A",
          "tone-b": "#C1B9C4",
        },
        nature: {
          "tone-a": "#343A32",
          "tone-b": "#D9E7D5",
        },
        nostalgia: {
          "tone-a": "#705B4A",
          "tone-b": "#FDF9F6",
        },
        vactaion: {
          "tone-a": "#B02C13",
          "tone-b": "#FAEBE6",
        },
        romance: {
          "tone-a": "#8A224A",
          "tone-b": "#F9EAEC",
        },
      },
      font: "PP Mori",
      size: "20px",
      "line-height": "28px",
    },
  },
};

//const leadTokens = universal.text;
export const leadTokens = tokens.text["lead-text"];

export const leadName = "kobber-lead";

export type LeadProps = {
  colorTheme?: LeadColorTheme;
  colorVariant?: LeadColorVariant;
};

type LeadColorTheme = (typeof leadColorThemes)[number];
type LeadColorVariant = (typeof leadColorVariants)[number];
export const leadColorThemes = objectKeys(leadTokens.color);
export const leadColorVariants = objectKeys(leadTokens.color.brand);
