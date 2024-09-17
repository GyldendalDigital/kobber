export type RouteType = {
  title: string;
  href: string;
  disabled?: boolean;
  isComing?: boolean;
  subRoutes?: RouteType[];
};

export type RouteDataType = {
  headerImage?: string;
  topicTitle?: string;
  title: string;
  description: string;
  text: string;
  href: string;
  hrefTitle: string;
};

export type FeatureBoxType = {
  title: string;
  image?: string;
  href?: string;
  onClick?: () => void;
};

export type NewsType = {
  date: Date;
  title: string;
};

export type SideMenuBarType = {
  groupTitle: string;
  routes: RouteType[];
};

export type ColorItemType = {
  name: string;
  hex: string;
  rgb: string;
  hasBorder?: boolean;
};

export type ColorThemeType = {
  title: string;
  description?: string;
  colors: ColorItemType[];
};

export type TypographyItemType = {
  name: string;
  weight: "Regular" | "Bold" | "Light" | "Book" | "Semi Bold";
  rem: number;
  px: number;
  lineHeight: number;
  display: string;
};
