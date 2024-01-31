export enum CmsWhiteSpace {
  None = 0,
  Small = 1,
  Medium = 2,
  Large = 3,
  ExtraLarge = 4,
}

export enum CmsMaxWidth {
  None = 0,
  StandardText = 1,
  ExtendedText = 2,
}

export enum CmsHorizontalAlignment {
  None = 0,
  Left = 1,
  Center = 2,
  Right = 3,
}

export enum CmsVerticalAlignment {
  None = 0,
  Top = 1,
  Center = 2,
  Bottom = 3,
  Stretch = 4,
}

export enum CmsContentBoxFill {
  None = 0,
  White = 1,
  Dark = 2,
}

export enum CmsBackgroundImageStyle {
  Stretch = 0,
  Tile = 1,
  Fit = 2,
}

export interface CmsRow {
  id: string;
  columns: CmsColumn[];
}

interface CmsColumn {
  activitySections: { element: string }[];
  dynamicContentIds: string[];
}

type PaddingValue = string | number;

export type Padding = [
  top: PaddingValue,
  right: PaddingValue,
  bottom: PaddingValue,
  left: PaddingValue,
];
