export const listItemName = "kobber-list-item";

export type ListItemProps = {
  disabled?: boolean;
  active?: boolean;
};

type ListItemClassNames = typeof listItemName | "disabled" | "active";

export const listItemClassNames = (...classNames: ListItemClassNames[]) => classNames?.join(" ");
