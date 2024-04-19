import { getPaddings } from "./css-helpers";
import { fluidHorizontalPadding } from "./fluidHorizontalPadding";
import { RowGroupPresentation } from "./groupRowsByPresentation";
import { CmsHorizontalAlignment, CmsWhiteSpace, Padding } from "./types";

export interface CalculatePaddingOptions {
  isFirstRow?: boolean;
  presentation?: RowGroupPresentation;
  applyPaddingBottom?: boolean;
  cmsWhiteSpace?: CmsWhiteSpace;
  cmsHorizontalAlignment?: CmsHorizontalAlignment;
}

export const calculatePadding = ({
  isFirstRow = false,
  presentation = "normal",
  applyPaddingBottom = true,
  cmsWhiteSpace: sceneWhitespace = CmsWhiteSpace.None,
  cmsHorizontalAlignment: sceneHorizontalAlignments = CmsHorizontalAlignment.None,
}: CalculatePaddingOptions): Padding => {
  const padding = getPaddings(sceneWhitespace, sceneHorizontalAlignments);
  switch (presentation) {
    case "normal":
      return [padding.top, fluidHorizontalPadding(padding.right), padding.bottom, fluidHorizontalPadding(padding.left)];
    case "fullWidth":
      return [!isFirstRow ? padding.top : 0, 0, applyPaddingBottom ? padding.bottom : 0, 0];
    case "fullSize":
      return [padding.top, padding.right, padding.bottom, padding.left];
    default:
      return [padding.top, padding.right, padding.bottom, padding.left];
  }
};
