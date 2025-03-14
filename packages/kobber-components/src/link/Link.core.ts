export const linkName = "kobber-link";

export type LinkProps = {
  type?: LinkType;
  icon?: LinkIcon;
  iconPosition?: LinkIconPosition;
  href?: HTMLAnchorElement["href"];
  /** Defaults to _blank if href is external */
  target?: HTMLAnchorElement["target"];
};

export const linkClassNames = ({ type = "navigation", icon, iconPosition }: LinkProps): LinkClassNames[] => {
  const conditionalClassNames: LinkClassNames[] = [];

  if (icon) {
    conditionalClassNames.push("kobber-link--icon");
    if (iconPosition === "left") {
      conditionalClassNames.push("kobber-link--icon-left");
    }
  }

  return [linkName, type, ...conditionalClassNames];
};

export type LinkClassNames = typeof linkName | LinkType | "kobber-link--icon" | "kobber-link--icon-left";

export type LinkIcon = undefined | (typeof linkIcons)[number];
export const linkIcons = ["external_link_arrow", "download"] as const;

export type LinkIconPosition = undefined | (typeof linkIconPositions)[number];
export const linkIconPositions = ["left", "right"] as const;

export type LinkType = (typeof linkTypes)[number];
export const linkTypes = ["prominent", "navigation", "subtle"] as const;

// TODO: awaiting tokens
// export type LinkType = keyof typeof component.link.text.color;
// export const linkTypes: LinkType[] = Object.keys(component.link.text.color) as LinkType[];

export const isButton = (href?: string, onclick?: unknown) => (!href && onclick ? true : false);
