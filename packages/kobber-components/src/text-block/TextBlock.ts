import { type CSSResultGroup, html } from "lit";
import { property } from "lit/decorators.js";
import { textBlockClassnames, type TextBlockProps } from "./TextBlock.core";
import { textBlockStyles } from "./TextBlock.styles";
import KobberElement from "../base/kobber-element";
import { customElement } from "../base/utilities/customElementDecorator";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement("kobber-text-block")
export class TextBlock extends KobberElement implements TextBlockProps {
  @property({ type: String, attribute: "color-theme" })
  colorTheme: TextBlockProps["colorTheme"] = "brand";

  @property({ type: String, attribute: "color-theme-variant" })
  colorThemeVariant: TextBlockProps["colorThemeVariant"] = "tone-a";

  static styles: CSSResultGroup = [textBlockStyles];

  render() {
    return html`<div class="${textBlockClassnames().join(" ")}" data-color-theme="${ifDefined(this.colorTheme)}" data-color-theme-variant="${ifDefined(this.colorThemeVariant)}">
      <slot name="badge"></slot>
      <slot></slot>
    </div> `;
  }
}
