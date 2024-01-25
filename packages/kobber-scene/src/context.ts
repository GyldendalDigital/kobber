import { createContext } from "@lit/context";
import { CSSResult, unsafeCSS } from "lit";

export type CssDimensionTransformer = (value: string | number) => CSSResult;

export interface Context {
  cssDimensionTransformer: CssDimensionTransformer;
}

export const defaultContext: Context = {
  cssDimensionTransformer: (value) => {
    const string = typeof value === "number" ? `${value}px` : value;
    return unsafeCSS(string);
  },
};

export const context = createContext<Context>(Symbol("kobber-scene"));
