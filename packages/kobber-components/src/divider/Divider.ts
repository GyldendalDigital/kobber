import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { themeContext } from "../utils/theme-context";
import { consume } from "@lit/context";
import { Theme } from "../utils/theme-context.types";
import { DividerVariant } from "./Divider.types";
import { dividerBaseStyles } from "./Divider.styles";

@customElement("kobber-divider")
export class Divider extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  @property({ type: String })
  variant: DividerVariant = "main";

  // Base styles
  static styles: CSSResultGroup = [dividerBaseStyles];

  render() {
    this.applyThemeStyles();
    return html` <div class="divider ${this.variant}"></div> `;
  }

  applyThemeStyles() {
    const tokens = this.theme?.tokens;
    if (!tokens) {
      console.log("Should never occur");
      return css``;
    }

    const style = document.createElement("style");
    // TODO: Wait for tokens
    style.textContent = `
    :host {
        --divider-main-background-color: #e5cfd3;
        --divider-supplemental-background-color: #532d37;
    }
    `;
    this.shadowRoot?.appendChild(style);
  }
}
