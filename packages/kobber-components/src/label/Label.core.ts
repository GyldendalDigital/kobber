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
  disabled?: boolean; // When will our label be disabled? Example: Form field?
};

// type BaseLabelProps = {
//   theme?: LabelTheme;
//   variant?: LabelVariant;
//   size?: LabelSize;
//   disabled?: boolean; // When will our label be disabled? Example: Form field?
// };

// // Type for when status circle is allowed
// type StatusCircleAllowedProps = BaseLabelProps & {
//   theme: "aubergine" | "rettsdata";
//   variant: "supplemental";
//   showStatusCircle?: boolean;
// };

// // Type for when status circle is not allowed
// type StatusCircleDisallowedProps = BaseLabelProps & {
//   showStatusCircle?: never;
// };

// export type LabelProps = StatusCircleAllowedProps | StatusCircleDisallowedProps;

// export const isStatusCircleAllowed = (props: BaseLabelProps): boolean => {
//   return (props.theme === "aubergine" || props.theme === "rettsdata") && props.variant === "supplemental";
// };

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
