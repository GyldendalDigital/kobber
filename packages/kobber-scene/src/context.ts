import { createContext } from "@lit/context";
import { CSSResult, unsafeCSS } from "lit";

export type CssDimensionTransformer = (value: string | number) => CSSResult;

export const defaultCssDimensionTransformer: CssDimensionTransformer = (
  value,
) => {
  const string = typeof value === "number" ? `${value}px` : value;
  return unsafeCSS(string);
};

export interface Context {
  cssDimensionTransformer: CssDimensionTransformer;
}

export const defaultContext: Context = {
  cssDimensionTransformer: defaultCssDimensionTransformer,
};

export const context = createContext<Context>(Symbol("kobber-scene"));
