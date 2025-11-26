import { clsx } from "clsx";
import type { ApiComponent } from "../../api/types";
import * as classNames from "./root/toggleButton.css";

interface Options {
  isActive: boolean;
}

export const toggleButtonApi = ({ isActive }: Options) => {
  return {
    // The root button element
    root: {
      // Class names merged into one string
      className: clsx({
        [classNames.root]: true,
        [classNames.active]: isActive,
      }),

      // CSS variables can be added here if used by toggleButton.css.
      // style: {
      //   "--background-color": isActive ? "green" : "red"
      // },
    },

    // Using satisfies here because:
    // - The consumer will see that this object has a property called "root"
    // - The consumer will see that root.className cannot be undefined
    // - Prevents having to type the toggleButtonApi-object manually
    // - Makes sure that this object implements the Api type
  } satisfies ApiComponent;
};
