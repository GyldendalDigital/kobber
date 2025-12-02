import { clsx } from "clsx";
import type { ApiComponent } from "../../core/api/types";
import * as classNames from "./navBar.css";

interface Options {
  className?: string;
  isContextual?: boolean;
}

export const navBarApi = ({ className, isContextual }: Options) => {
  return {
    root: {
      className: clsx({
        [classNames.root]: true,
        [classNames.isContextual]: isContextual,
        [className ?? ""]: Boolean(className),
      }),
    },
  } satisfies ApiComponent;
};
