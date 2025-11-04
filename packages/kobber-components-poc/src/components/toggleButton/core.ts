import type { ToggleButtonApi } from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
import { clsx } from "clsx";
import * as styles from "./toggleButton.module.css";

export const getClassNames = (api: ToggleButtonApi) => ({
  root: clsx({
    [styles.root]: true,
    [styles.active]: api.active,
  }),
});
