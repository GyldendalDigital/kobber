export const listName = "kobber-list";

export type ListProps = {
  orientation?: ListOrientation;
};

type ListOrientation = "vertical" | "horizontal";

type ListClassNames = typeof listName | ListOrientation;

export const listClassNames = (...classNames: ListClassNames[]) => classNames?.join(" ");
