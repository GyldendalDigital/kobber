import * as defaultTokens from "@gyldendal/kobber-base/themes/default/tokens";
import { LitElement, PropertyDeclaration, css, html, unsafeCSS } from "lit";
import { consume } from "@lit/context";
import { themeContext } from "../utils/theme-context";
import { Theme } from "../utils/theme-context.types";

export default class KobberElement extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  tokens = () => (this.theme?.tokens ? this.theme?.tokens : defaultTokens);
}
