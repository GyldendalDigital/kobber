import type { Api } from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
import { clsx } from "clsx";
import { active, root } from "./toggleButton.css";

export const getClassNames = (api: Api) => ({
  root: clsx({
    [root]: true,
    [active]: api.active,
  }),
});
