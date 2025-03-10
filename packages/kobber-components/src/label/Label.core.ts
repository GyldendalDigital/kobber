import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables";
import { ReplaceSpaceWithDash, replaceSpaceWithDash } from "../utils/replace";

export const labelName = "kobber-label";

export const labelClassNames = ({
  theme = "aubergine",
  variant = "main",
  size = "medium",
  showStatusCircle = false,
}: LabelProps & LabelComputedProps): LabelClassNames[] => {
  const conditionalClassNames: LabelClassNames[] = [];

  if (showStatusCircle) {
    conditionalClassNames.push("kobber-label--status-circle");
  }

  return [labelName, theme, replaceSpaceWithDash(variant), size, ...conditionalClassNames];
};

export type LabelProps = {
  theme?: LabelTheme;
  variant?: LabelVariant;
  size?: LabelSize;
  showStatusCircle?: boolean;
};

export type LabelComputedProps = {};

export type LabelClassNames =
  | typeof labelName
  | LabelTheme
  | ReplaceSpaceWithDash<LabelVariant>
  | LabelSize
  | LabelText
  | "kobber-label--status-circle";

export type LabelTheme = keyof typeof component.label.background.color;
export type LabelVariant = "main" | "supplemental";
export type LabelSize = "medium" | "small";
export type LabelText = string;

export const labelThemes: LabelTheme[] = Object.keys(component.label.background.color) as LabelTheme[];
export const labelVariants: LabelVariant[] = ["main", "supplemental"];
export const labelSizes: LabelSize[] = ["medium", "small"];
