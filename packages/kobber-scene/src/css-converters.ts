import {
  RedapticHorizontalAlignment,
  RedapticMaxWidth,
  RedapticVerticalAlignment,
  RedapticWhiteSpace,
} from "./types";

export const redapticEnumToColumnGap = (
  activityWhiteSpace: RedapticWhiteSpace,
) => {
  switch (activityWhiteSpace) {
    case RedapticWhiteSpace.Small:
      return 20;
    case RedapticWhiteSpace.Medium:
      return 40;
    case RedapticWhiteSpace.Large:
      return 80;
    case RedapticWhiteSpace.ExtraLarge:
      return 160;
    default:
      return 0;
  }
};

export const redapticEnumToScenePadding = (
  activityWhiteSpace: RedapticWhiteSpace,
) => {
  switch (activityWhiteSpace) {
    case RedapticWhiteSpace.Small:
      return 32;
    case RedapticWhiteSpace.Medium:
      return 64;
    case RedapticWhiteSpace.Large:
      return 128;
    case RedapticWhiteSpace.ExtraLarge:
      return 256;
    default:
      return 32;
  }
};

export const redapticEnumToSceneAlignment = (
  verticalAlignment: RedapticVerticalAlignment,
) => {
  switch (verticalAlignment) {
    case RedapticVerticalAlignment.Center:
      return "center";
    case RedapticVerticalAlignment.Top:
      return "start";
    case RedapticVerticalAlignment.Bottom:
      return "end";
    case RedapticVerticalAlignment.Stretch:
      return "stretch";
  }
};

export const redapticEnumToRowGap = (
  activityWhiteSpace: RedapticWhiteSpace,
) => {
  switch (activityWhiteSpace) {
    case RedapticWhiteSpace.Small:
      return 20;
    case RedapticWhiteSpace.Medium:
      return 40;
    case RedapticWhiteSpace.Large:
      return 80;
    case RedapticWhiteSpace.ExtraLarge:
      return 160;
    default:
      return 0;
  }
};

export const redapticEnumToHorizontalAlignment = (
  maxWidth: RedapticMaxWidth,
  horizontalAlignment: RedapticHorizontalAlignment,
) => {
  if (maxWidth !== RedapticMaxWidth.None) {
    switch (horizontalAlignment) {
      case RedapticHorizontalAlignment.Left:
        return "start";
      case RedapticHorizontalAlignment.Right:
        return "end";
      case RedapticHorizontalAlignment.Center:
        return "center";
    }
  }
};

export const redapticEnumToColumnAlignment = (
  verticalAlignments: RedapticVerticalAlignment,
) => {
  switch (verticalAlignments) {
    case RedapticVerticalAlignment.Center:
      return "center";
    case RedapticVerticalAlignment.Top:
      return "start";
    case RedapticVerticalAlignment.Bottom:
      return "end";
    case RedapticVerticalAlignment.Stretch:
      return "stretch";
  }
};

export const redapticEnumToMaxWidth = (maxWidth: RedapticMaxWidth) => {
  switch (maxWidth) {
    case RedapticMaxWidth.StandardText:
      return 550;
    case RedapticMaxWidth.ExtendedText:
      return 640;
  }
};
