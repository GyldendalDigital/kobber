import type { Api } from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
import { clsx } from "clsx";

export const getClassNames = (api: Api) => ({
  root: clsx({
    ["a"]: true,
    ["b"]: api.active,
  }),
});
