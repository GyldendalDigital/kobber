import { createContext } from "@lit/context";

export interface Context {
  previous: () => void;
  next: () => void;
  previousIsEnabled: boolean;
  nextIsEnabled: boolean;
}

export const defaultContext: Context = {
  previous: () => undefined,
  next: () => undefined,
  previousIsEnabled: true,
  nextIsEnabled: true,
};

export const context = createContext<Context>(Symbol("kobber-carousel"));
