import { CSSResultGroup, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DividerVariant } from "./Divider.types";
import { dividerBaseStyles } from "./Divider.styles";
import KobberElement from "../base/kobber-element";

@customElement("kobber-divider")
export class Divider extends KobberElement {
  @property({ type: String })
  variant: DividerVariant = "main";

  static styles: CSSResultGroup = [dividerBaseStyles];

  render() {
    this.applyThemeStyles();
    return html` <div class="divider ${this.variant}"></div> `;
  }

  applyThemeStyles() {
    const component = this.tokens().component.divider;

    const style = document.createElement("style");

    style.textContent = `
    :host {
        --divider-main-background-color: ${component.background.color.main};
        --divider-supplemental-background-color: ${component.background.color.supplemental};
    }
    `;

    this.shadowRoot?.appendChild(style);
  }
}
