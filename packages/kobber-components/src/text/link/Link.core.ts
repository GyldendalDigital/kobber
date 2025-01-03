export const linkName = "kobber-link";

export type LinkProps = {
  href?: HTMLAnchorElement["href"];
  /** Defaults to _blank if href is external */
  target?: HTMLAnchorElement["target"];
};

export const isExternalLink = (href?: string) => href && href.startsWith("http");
