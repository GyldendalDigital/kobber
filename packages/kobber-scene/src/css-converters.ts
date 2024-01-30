import {
  CmsHorizontalAlignment,
  CmsMaxWidth,
  CmsVerticalAlignment,
  CmsWhiteSpace,
} from "./types";

export const cmsEnumToColumnGap = (activityWhiteSpace: CmsWhiteSpace) => {
  switch (activityWhiteSpace) {
    case CmsWhiteSpace.Small:
      return 20;
    case CmsWhiteSpace.Medium:
      return 40;
    case CmsWhiteSpace.Large:
      return 80;
    case CmsWhiteSpace.ExtraLarge:
      return 160;
    default:
      return 0;
  }
};

export const cmsEnumToScenePadding = (activityWhiteSpace: CmsWhiteSpace) => {
  switch (activityWhiteSpace) {
    case CmsWhiteSpace.Small:
      return 32;
    case CmsWhiteSpace.Medium:
      return 64;
    case CmsWhiteSpace.Large:
      return 128;
    case CmsWhiteSpace.ExtraLarge:
      return 256;
    default:
      return 32;
  }
};

export const cmsEnumToSceneAlignment = (
  verticalAlignment: CmsVerticalAlignment,
) => {
  switch (verticalAlignment) {
    case CmsVerticalAlignment.Center:
      return "center";
    case CmsVerticalAlignment.Top:
      return "start";
    case CmsVerticalAlignment.Bottom:
      return "end";
    case CmsVerticalAlignment.Stretch:
      return "stretch";
  }
};

export const cmsEnumToRowGap = (activityWhiteSpace: CmsWhiteSpace) => {
  switch (activityWhiteSpace) {
    case CmsWhiteSpace.Small:
      return 20;
    case CmsWhiteSpace.Medium:
      return 40;
    case CmsWhiteSpace.Large:
      return 80;
    case CmsWhiteSpace.ExtraLarge:
      return 160;
    default:
      return 0;
  }
};

export const cmsEnumToHorizontalAlignment = (
  maxWidth: CmsMaxWidth,
  horizontalAlignment: CmsHorizontalAlignment,
) => {
  if (maxWidth !== CmsMaxWidth.None) {
    switch (horizontalAlignment) {
      case CmsHorizontalAlignment.Left:
        return "start";
      case CmsHorizontalAlignment.Right:
        return "end";
      case CmsHorizontalAlignment.Center:
        return "center";
    }
  }
};

export const cmsEnumToColumnAlignment = (
  verticalAlignments: CmsVerticalAlignment,
) => {
  switch (verticalAlignments) {
    case CmsVerticalAlignment.Center:
      return "center";
    case CmsVerticalAlignment.Top:
      return "start";
    case CmsVerticalAlignment.Bottom:
      return "end";
    case CmsVerticalAlignment.Stretch:
      return "stretch";
  }
};

export const cmsEnumToMaxWidth = (maxWidth: CmsMaxWidth) => {
  switch (maxWidth) {
    case CmsMaxWidth.StandardText:
      return 550;
    case CmsMaxWidth.ExtendedText:
      return 640;
  }
};
