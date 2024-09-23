import * as defaultTokens from "@gyldendal/kobber-base/themes/default/tokens.js";
import * as darkTokens from "@gyldendal/kobber-base/themes/dark/tokens.js";

export interface Theme {
  id: "kobber-theme-default" | "kobber-theme-dark";
  tokens: typeof defaultTokens | typeof darkTokens;
}
