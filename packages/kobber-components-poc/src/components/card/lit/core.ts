import type { Api } from "@gyldendal/kobber-components-core/toggleButton/toggleButton";
import { clsx } from "clsx";
import { createContext } from "@lit/context";
import * as toggleButton from "@gyldendal/kobber-components-core/toggleButton/toggleButton";

export const getClassNames = (api: Api) => ({
  root: clsx({
    ["a"]: true,
    ["b"]: api.active,
  }),
});

type CardContext = {
  api: toggleButton.Api;
  // link: HTMLAnchorElement | null;
  // registerLink: (link: HTMLAnchorElement | null) => void;
};

export const cardContext = createContext<CardContext>("card-context");

export const genericContext = createContext<any>("generic-context");

export const machineContext = createContext("machine-context");
