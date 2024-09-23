import { createContext, provide } from "@lit/context";
import * as defaultTokens from "@gyldendal/kobber-base/themes/default/tokens.js";
import * as darkTokens from "@gyldendal/kobber-base/themes/dark/tokens.js";
import { customElement, property } from "lit/decorators.js";
import { LitElement, PropertyValueMap, html } from "lit";
import { Theme } from "./theme-context.types";

export const themeContext = createContext<Theme>("kobber-theme");

@customElement("kobber-theme-context")
export class ThemeContextProvider extends LitElement {
  private themes: Theme[] = [
    { id: "kobber-theme-default", tokens: defaultTokens },
    { id: "kobber-theme-dark", tokens: darkTokens },
  ];

  @property({ type: String, attribute: "theme-id" })
  public themeId: Theme["id"] = "kobber-theme-default";

  @provide({ context: themeContext })
  @property({ attribute: false })
  public theme: Theme = this.themes[0];

  update(changedProperties: PropertyValueMap<ThemeContextProvider> | Map<PropertyKey, unknown>): void {
    if (changedProperties.has("themeId")) {
      this.theme = this.themes.find(theme => theme.id === this.themeId) || this.themes[0];
    }
    super.update(changedProperties);
  }

  render() {
    return html`<slot />`;
  }
}
