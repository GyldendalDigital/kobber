import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../../base/utilities/objectKeys";

export const leadTokens = universal["text-lead"].text;

export const leadName = "kobber-lead";

export type LeadProps = {
  color?: LeadColor;
  colorVariant?: LeadColorVariant;
};

type LeadColor = (typeof leadColors)[number];
type LeadColorVariant = (typeof leadColorVariants)[number];
export const leadColors = objectKeys(leadTokens.color);
export const leadColorVariants = objectKeys(leadTokens.color.brand);
