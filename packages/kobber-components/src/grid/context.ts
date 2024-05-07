import { createContext } from "@lit/context";
import { GridConfigId } from "./gridConfig";

export interface Context {
  config?: GridConfigId;
}

export const defaultContext: Context = {};

export const context = createContext<Context>(Symbol("kobber-grid"));
