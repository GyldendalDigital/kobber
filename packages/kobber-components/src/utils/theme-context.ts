import * as tokensDefault from "@gyldendal/kobber-base/themes/default/tokens";
import * as tokensDark from "@gyldendal/kobber-base/themes/dark/tokens";
import { createContext, provide } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { LitElement, html } from "lit";
import { Theme } from "./theme-context.types";

const themes: Theme[] = [
  { id: "kobber-theme-default", tokens: tokensDefault },
  { id: "kobber-theme-dark", tokens: tokensDark },
];

export const themeContext = createContext<Theme>("kobber-theme");

@customElement("kobber-theme-context")
export class ThemeContextProvider extends LitElement {
  connectedCallback(): void {
    this.setTheme(this.themeId);
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
    if (name === "theme-id") {
      this.setTheme(value as Theme["id"]);
    }
  }

  @property({ type: String, attribute: "theme-id", reflect: true })
  public themeId: Theme["id"] = "kobber-theme-default";

  @provide({ context: themeContext })
  @property({ attribute: false })
  public theme: Theme = themes.find(theme => theme.id === this.themeId) || themes[0];

  setTheme(themeId: Theme["id"]) {
    this.themeId = themeId;
    this.theme = themes.find(theme => theme.id === themeId) || themes[0];
    if (themeId === "kobber-theme-dark") {
      this.classList.remove("kobber-theme-default");
      this.classList.add("kobber-theme-dark");
    } else {
      this.classList.remove("kobber-theme-dark");
      this.classList.add("kobber-theme-default");
    }
  }

  render() {
    return html`<slot />`;
  }
}
