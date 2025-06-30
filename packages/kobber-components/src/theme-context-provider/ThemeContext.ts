import * as tokensDark from "@gyldendal/kobber-base/themes/dark/tokens.js";
import * as tokensDefault from "@gyldendal/kobber-base/themes/default/tokens.js";
import { createContext, provide } from "@lit/context";
import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { Theme } from "./theme-context.types";
import { customElement } from "../base/utilities/customElementDecorator";

const themes: Theme[] = [
  { id: "kobber-theme-default", tokens: tokensDefault },
  { id: "kobber-theme-dark", tokens: tokensDark },
];

export const themeContext = createContext<Theme | undefined>("kobber-theme");

@customElement("kobber-theme-context")
export class ThemeContext extends LitElement {
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
  public theme: Theme | undefined = themes.find(theme => theme.id === this.themeId) || themes[0];

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
