import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables";
import { ReplaceSpaceWithDash, replaceSpaceWithDash } from "../utils/replace";

export const labelName = "kobber-label";

export const labelClassNames = ({
  theme = "aubergine",
  variant = "main",
  size = "medium",
  showStatusCircle = false,
}: LabelProps): LabelClassNames[] => {
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
  disabled?: boolean; // When will our label be disabled? Example: Form field?
};

export type LabelClassNames =
  | typeof labelName
  | LabelTheme
  | ReplaceSpaceWithDash<LabelVariant>
  | LabelSize
  | LabelText
  | "kobber-label--status-circle";

type LabelTheme = keyof typeof component.label.background.color;
type LabelVariant = "main" | "supplemental";
type LabelSize = "medium" | "small";
type LabelText = string;

export const labelThemes: LabelTheme[] = Object.keys(component.label.background.color) as LabelTheme[];
export const labelVariants: LabelVariant[] = ["main", "supplemental"];
export const labelSizes: LabelSize[] = ["medium", "small"];
