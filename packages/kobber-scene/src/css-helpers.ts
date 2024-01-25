import { redapticEnumToScenePadding } from "./css-converters";
import { ActivityHorizontalAlignment, ActivityWhiteSpace } from "./types";

const margin = 10;

export const getPaddings = (
  activityWhiteSpace: ActivityWhiteSpace,
  horizontalAlignment: ActivityHorizontalAlignment,
) => {
  const pixels = redapticEnumToScenePadding(activityWhiteSpace);
  switch (horizontalAlignment) {
    case ActivityHorizontalAlignment.Left:
      return {
        top: pixels,
        right: pixels * 2 - margin,
        bottom: pixels,
        left: margin,
      };
    case ActivityHorizontalAlignment.Center:
      return {
        top: pixels,
        right: pixels,
        bottom: pixels,
        left: pixels,
      };
    case ActivityHorizontalAlignment.Right:
      return {
        top: pixels,
        right: margin,
        bottom: pixels,
        left: pixels * 2 - margin,
      };
    default:
      return {
        top: 32,
        right: 32,
        bottom: 32,
        left: 32,
      };
  }
};

const cssVariableName = "--white-space-scale";

export const whiteSpaceScale = (pixelValue: number) => {
  return `calc(var(${cssVariableName}, 1) * ${pixelValue}px)`;
};
