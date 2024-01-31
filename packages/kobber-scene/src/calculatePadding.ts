import { getPaddings } from "./css-helpers";
import { fluidHorizontalPadding } from "./fluidHorizontalPadding";
import { CmsHorizontalAlignment, CmsWhiteSpace, Padding } from "./types";

export interface CalculatePaddingOptions {
  isFirstRow?: boolean;
  isFullWidth?: boolean;
  applyPaddingBottom?: boolean;
  cmsWhiteSpace?: CmsWhiteSpace;
  cmsHorizontalAlignment?: CmsHorizontalAlignment;
}

export const calculatePadding = ({
  isFirstRow = false,
  isFullWidth = false,
  applyPaddingBottom = true,
  cmsWhiteSpace: sceneWhitespace = CmsWhiteSpace.None,
  cmsHorizontalAlignment:
    sceneHorizontalAlignments = CmsHorizontalAlignment.None,
}: CalculatePaddingOptions): Padding => {
  const padding = getPaddings(sceneWhitespace, sceneHorizontalAlignments);
  return !isFullWidth
    ? [
        padding.top,
        fluidHorizontalPadding(padding.right),
        padding.bottom,
        fluidHorizontalPadding(padding.left),
      ]
    : [
        !isFirstRow ? padding.top : 0,
        0,
        applyPaddingBottom ? padding.bottom : 0,
        0,
      ];
};
