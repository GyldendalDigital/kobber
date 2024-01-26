export enum RedapticWhiteSpace {
  None = 0,
  Small = 1,
  Medium = 2,
  Large = 3,
  ExtraLarge = 4,
}

export enum RedapticMaxWidth {
  None = 0,
  StandardText = 1,
  ExtendedText = 2,
}

export enum RedapticHorizontalAlignment {
  None = 0,
  Left = 1,
  Center = 2,
  Right = 3,
}

export enum RedapticVerticalAlignment {
  None = 0,
  Top = 1,
  Center = 2,
  Bottom = 3,
  Stretch = 4,
}

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

export interface RedapticRow {
  id: string;
  columns: RedapticColumn[];
}

interface RedapticColumn {
  activitySections: { element: string }[];
  dynamicContentIds: string[];
}
