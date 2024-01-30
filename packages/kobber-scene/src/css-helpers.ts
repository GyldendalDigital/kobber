import { cmsEnumToScenePadding } from "./css-converters";
import { CmsHorizontalAlignment, CmsWhiteSpace } from "./types";

const margin = 10;

export const getPaddings = (
  activityWhiteSpace: CmsWhiteSpace,
  horizontalAlignment: CmsHorizontalAlignment,
) => {
  const pixels = cmsEnumToScenePadding(activityWhiteSpace);
  switch (horizontalAlignment) {
    case CmsHorizontalAlignment.Left:
      return {
        top: pixels,
        right: pixels * 2 - margin,
        bottom: pixels,
        left: margin,
      };
    case CmsHorizontalAlignment.Center:
      return {
        top: pixels,
        right: pixels,
        bottom: pixels,
        left: pixels,
      };
    case CmsHorizontalAlignment.Right:
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
