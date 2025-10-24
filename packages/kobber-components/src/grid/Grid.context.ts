import { createContext } from "@lit/context";
import type { GridConfig } from "./config/types";

export interface Context {
  config?: GridConfig;
}

export const defaultContext: Context = {};

export const context = createContext<Context>(Symbol("kobber-grid"));
