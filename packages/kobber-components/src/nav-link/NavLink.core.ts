import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { objectKeys } from "../base/utilities/objectKeys";

export const navLinkName = "kobber-nav-link";

export const navLinkTokens = component["nav-link"];

export type NavLinkProps = Partial<NavLinkDataAttributes> & {
  href?: HTMLAnchorElement["href"];
  target?: HTMLAnchorElement["target"];
  rel?: HTMLAnchorElement["rel"];
  disabled?: boolean;
};

export type NavLinkDataAttributes = {
  type: NavLinkType;
};

export type NavLinkType = (typeof navLinkTypes)[number];

export const navLinkTypes = objectKeys(navLinkTokens.border.color.hover);

export const isButton = (href?: string, onclick?: unknown) => !!(!href && onclick);
