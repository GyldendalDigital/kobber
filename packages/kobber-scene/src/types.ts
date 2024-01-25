export enum ActivityWhiteSpace {
  None = 0,
  Small = 1,
  Medium = 2,
  Large = 3,
  ExtraLarge = 4,
}

// export enum ActivityWhiteSpace {
//   None = "none",
//   Small = "small",
//   Medium = "medium",
//   Large = "large",
//   ExtraLarge = "extra-large",
// }

export enum ActivityMaxWidth {
  None = 0,
  StandardText = 1,
  ExtendedText = 2,
}

// export enum ActivityMaxWidth {
//   None = "none",
//   StandardText = "standard-text",
//   ExtendedText = "extended-text",
// }

export enum ActivityHorizontalAlignment {
  None = 0,
  Left = 1,
  Center = 2,
  Right = 3,
}

// export enum ActivityHorizontalAlignment {
//   None = "none",
//   Left = "left",
//   Center = "center",
//   Right = "right",
// }

export enum ActivityVerticalAlignment {
  None = 0,
  Top = 1,
  Center = 2,
  Bottom = 3,
  Stretch = 4,
}

// export enum ActivityVerticalAlignment {
//   None = "none",
//   Top = "top",
//   Center = "center",
//   Bottom = "bottom",
//   Stretch = "stretch",
// }

export interface SceneBoundaryPadding {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export enum ActivityContentBoxFill {
  None = 0,
  White = 1,
  Dark = 2,
}

export interface ActivityRow {
  id: string;
  rowWhitespace: ActivityWhiteSpace;
  sectionWhitespace: ActivityWhiteSpace;
  maxWidth: ActivityMaxWidth;
  horizontalAlignment: ActivityHorizontalAlignment;
  columns: ActivityColumn[];
}

export interface ActivityColumn {
  sizeRelation: number;
  // activitySections: ActivitySection[];
  activitySections: any[];
  dynamicContentIds: string[];
  verticalAlignments: ActivityVerticalAlignment;
}

export enum SectionElement {
  AudioRecorder = "sc-audio-recorder",
  CardCarousel = "sc-card-carousel",
  FeatureHeader = "sc-feature-header",
  Blackboard = "sc-blackboard-prototype",
}
