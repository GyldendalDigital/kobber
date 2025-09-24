export const listName = "kobber-list";

export type ListProps = {
  orientation?: ListOrientation;
};

type ListOrientation = (typeof ListOrientations)[number];

export const ListOrientations = ["vertical", "horizontal"] as const;
