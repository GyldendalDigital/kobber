export const linkName = "kobber-link";

export type LinkProps = {
  extendedColor?: LinkExtendedColor;
  href?: HTMLAnchorElement["href"];
  /** Defaults to _blank if href is external */
  target?: HTMLAnchorElement["target"];
};

export const linkClassNames = ({ extendedColor }: LinkProps) => {
  const conditionalClassNames = [];

  if (extendedColor === "text") {
    conditionalClassNames.push("color-text");
  } else if (extendedColor === "heading") {
    conditionalClassNames.push("color-heading");
  }

  return [linkName, ...conditionalClassNames];
};

export const isExternalLink = (href?: string) => href && href.startsWith("http");

export const isButton = (href?: string, onclick?: any) => (!href && onclick ? true : false);

export type LinkExtendedColor = (typeof linkExtendedColors)[number];
export const linkExtendedColors = ["default", "text", "heading"] as const;
