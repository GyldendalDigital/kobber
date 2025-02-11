import { component } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";

export const linkName = "kobber-link";

export type LinkProps = {
  type?: LinkType;
  href?: HTMLAnchorElement["href"];
  /** Defaults to _blank if href is external */
  target?: HTMLAnchorElement["target"];
};

export const linkClassNames = ({ type }: LinkProps) => {
  return [linkName, type];
};

export const isButton = (href?: string, onclick?: unknown) => (!href && onclick ? true : false);

export type LinkType = keyof typeof component.link.text.color;
export const linkTypes: LinkType[] = Object.keys(component.link.text.color) as LinkType[];
