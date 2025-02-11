export const textLinkName = "kobber-text-link";

export type TextLinkProps = {
  href?: HTMLAnchorElement["href"];
  /** Defaults to _blank if href is external */
  target?: HTMLAnchorElement["target"];
};
