import { createContext } from "react";
import { defaults } from "../core/config";

export interface Context {
  columnAspectRatio?: number;
  modernCss: boolean;
}

export const Context = createContext<Context>({
  modernCss: defaults.modernCss,
});
