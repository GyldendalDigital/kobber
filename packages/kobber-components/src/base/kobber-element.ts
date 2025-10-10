import * as defaultTokens from "@gyldendal/kobber-base/themes/default/tokens.js";
import { consume } from "@lit/context";
import { LitElement } from "lit";
import { themeContext } from "../theme-context-provider/ThemeContext";
import type { Theme } from "../theme-context-provider/theme-context.types";

export default class KobberElement extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  tokens = () => (this.theme?.tokens ? this.theme?.tokens : defaultTokens);
}
