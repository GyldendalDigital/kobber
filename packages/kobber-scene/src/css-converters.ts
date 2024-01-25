import {
  ActivityHorizontalAlignment,
  ActivityMaxWidth,
  ActivityVerticalAlignment,
  ActivityWhiteSpace,
} from "./types";

export const redapticEnumToColumnGap = (
  activityWhiteSpace: ActivityWhiteSpace,
) => {
  switch (activityWhiteSpace) {
    case ActivityWhiteSpace.Small:
      return 20;
    case ActivityWhiteSpace.Medium:
      return 40;
    case ActivityWhiteSpace.Large:
      return 80;
    case ActivityWhiteSpace.ExtraLarge:
      return 160;
    default:
      return 0;
  }
};

export const redapticEnumToScenePadding = (
  activityWhiteSpace: ActivityWhiteSpace,
) => {
  switch (activityWhiteSpace) {
    case ActivityWhiteSpace.Small:
      return 32;
    case ActivityWhiteSpace.Medium:
      return 64;
    case ActivityWhiteSpace.Large:
      return 128;
    case ActivityWhiteSpace.ExtraLarge:
      return 256;
    default:
      return 32;
  }
};

export const redapticEnumToSceneAlignment = (
  verticalAlignment: ActivityVerticalAlignment,
) => {
  switch (verticalAlignment) {
    case ActivityVerticalAlignment.Center:
      return "center";
    case ActivityVerticalAlignment.Top:
      return "start";
    case ActivityVerticalAlignment.Bottom:
      return "end";
    case ActivityVerticalAlignment.Stretch:
      return "stretch";
  }
};

export const redapticEnumToRowGap = (
  activityWhiteSpace: ActivityWhiteSpace,
) => {
  switch (activityWhiteSpace) {
    case ActivityWhiteSpace.Small:
      return 20;
    case ActivityWhiteSpace.Medium:
      return 40;
    case ActivityWhiteSpace.Large:
      return 80;
    case ActivityWhiteSpace.ExtraLarge:
      return 160;
    default:
      return 0;
  }
};

export const redapticEnumToHorizontalAlignment = (
  maxWidth: ActivityMaxWidth,
  horizontalAlignment: ActivityHorizontalAlignment,
) => {
  if (maxWidth !== ActivityMaxWidth.None) {
    switch (horizontalAlignment) {
      case ActivityHorizontalAlignment.Left:
        return "start";
      case ActivityHorizontalAlignment.Right:
        return "end";
      case ActivityHorizontalAlignment.Center:
        return "center";
    }
  }
};

export const redapticEnumToColumnAlignment = (
  verticalAlignments: ActivityVerticalAlignment,
) => {
  switch (verticalAlignments) {
    case ActivityVerticalAlignment.Center:
      return "center";
    case ActivityVerticalAlignment.Top:
      return "start";
    case ActivityVerticalAlignment.Bottom:
      return "end";
    case ActivityVerticalAlignment.Stretch:
      return "stretch";
  }
};

export const redapticEnumToMaxWidth = (maxWidth: ActivityMaxWidth) => {
  switch (maxWidth) {
    case ActivityMaxWidth.StandardText:
      return 550;
    case ActivityMaxWidth.ExtendedText:
      return 640;
  }
};
