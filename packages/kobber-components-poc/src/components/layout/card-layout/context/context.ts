import { createContext } from "react";

export interface Context {
  columnAspectRatio?: number;
  modernCss: boolean;
}

export const Context = createContext<Context>({
  modernCss: CSS.supports("container-type: inline-size") && CSS.supports("aspect-ratio: 1 / 1"),
});
