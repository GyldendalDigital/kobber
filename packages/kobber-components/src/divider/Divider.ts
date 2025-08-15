import { CSSResultGroup, html } from "lit";
import { property } from "lit/decorators.js";
import { dividerClassnames, DividerProps, DividerVariant } from "./Divider.core";
import { dividerStyles } from "./Divider.styles";
import KobberElement from "../base/kobber-element";
import { customElement } from "../base/utilities/customElementDecorator";

@customElement("kobber-divider")
export class Divider extends KobberElement implements DividerProps {
  @property({ type: String, attribute: "color-variant" })
  colorVariant: DividerProps["colorVariant"] = "main";

  static styles: CSSResultGroup = [dividerStyles];

  render() {
    return html`<div class="${dividerClassnames().join(" ")}" data-color-variant="${this.colorVariant}"></div> `;
  }
}
