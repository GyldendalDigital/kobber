import { clsx } from "clsx";
import type { ApiComponent } from "../../core/api/types";
import * as classNames from "./filter.css";

interface Options {
  className?: string;
  count?: number;
  maxCount?: number;
  selected?: boolean;
}

export const filterApi = ({ className, selected }: Options) => {
  return {
    root: {
      className: clsx({
        [classNames.root]: true,
        [classNames.selected]: selected,
        [className ?? ""]: Boolean(className),
      }),
    },
    counter: {
      className: clsx({
        [classNames.counter]: true,
      }),
    },
  } satisfies ApiComponent;
};

export const getDisplayCount = (count: Options["count"], maxCount: Options["maxCount"]): string => {
  if (count === undefined) {
    return "0";
  }

  if (maxCount && count > maxCount) {
    return `${maxCount}+`;
  }

  return `${count}`;
};
