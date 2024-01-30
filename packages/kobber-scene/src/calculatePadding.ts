import {
  CssDimensionTransformer,
  defaultCssDimensionTransformer,
} from "./context";
import { getPaddings } from "./css-helpers";
import { fluidHorizontalPadding } from "./fluidHorizontalPadding";
import { CmsHorizontalAlignment, CmsWhiteSpace, Padding } from "./types";

export interface CalculatePaddingOptions {
  cssDimensionTransformer?: CssDimensionTransformer;
  isFirstRow?: boolean;
  isFullWidth?: boolean;
  applyPaddingBottom?: boolean;
  sceneWhitespace?: CmsWhiteSpace;
  sceneHorizontalAlignments?: CmsHorizontalAlignment;
}

export const calculatePadding = ({
  cssDimensionTransformer = defaultCssDimensionTransformer,
  isFirstRow = false,
  isFullWidth = false,
  applyPaddingBottom = true,
  sceneWhitespace = CmsWhiteSpace.None,
  sceneHorizontalAlignments = CmsHorizontalAlignment.None,
}: CalculatePaddingOptions): Padding => {
  const padding = getPaddings(sceneWhitespace, sceneHorizontalAlignments);
  const transform = cssDimensionTransformer;
  return !isFullWidth
    ? [
        transform(padding.top).cssText,
        fluidHorizontalPadding(padding.right),
        transform(padding.bottom).cssText,
        fluidHorizontalPadding(padding.left),
      ]
    : [
        transform(!isFirstRow ? padding.top : 0).cssText,
        undefined,
        transform(applyPaddingBottom ? padding.bottom : 0).cssText,
        undefined,
      ];
};
