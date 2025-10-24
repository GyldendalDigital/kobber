export const linkName = "kobber-link";

export type LinkProps = {
  type?: LinkType;
  iconFirst?: boolean;
  href?: HTMLAnchorElement["href"];
  /** Defaults to _blank if href is external */
  target?: HTMLAnchorElement["target"];
};

export type LinkComputedProps = {
  hasIcon?: boolean;
  iconOnly?: boolean;
};

export const linkClassNames = ({
  type = "navigation",
  hasIcon = false,
  iconOnly = false,
  iconFirst = false,
}: LinkProps & LinkComputedProps): LinkClassNames[] => {
  const conditionalClassNames: LinkClassNames[] = [];

  if (hasIcon) {
    conditionalClassNames.push("kobber-link--icon");
    if (iconOnly) {
      conditionalClassNames.push("kobber-link--icon-only");
    } else if (iconFirst) {
      conditionalClassNames.push("kobber-link--icon-left");
    }
  }

  return [linkName, type, ...conditionalClassNames];
};

export type LinkClassNames =
  | typeof linkName
  | LinkType
  | "kobber-link--icon"
  | "kobber-link--icon-left"
  | "kobber-link--icon-only";

export type LinkType = (typeof linkTypes)[number];
export const linkTypes = ["prominent", "navigation", "subtle"] as const;

// TODO: awaiting tokens
// export type LinkType = keyof typeof component.link.text.color;
// export const linkTypes: LinkType[] = Object.keys(component.link.text.color) as LinkType[];

export const isButton = (href?: string, onclick?: unknown) => !!(!href && onclick);
