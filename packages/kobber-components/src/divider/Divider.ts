import { type CSSResultGroup, css, html } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import KobberElement from "../base/kobber-element";
import { customElement } from "../base/utilities/customElementDecorator";
import { type DividerProps, dividerClassnames } from "./Divider.core";
import { dividerStyles } from "./Divider.styles";

@customElement("kobber-divider")
export class Divider extends KobberElement implements DividerProps {
  static styles: CSSResultGroup = [
    dividerStyles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property({ type: String, attribute: "color-variant" })
  colorVariant: DividerProps["colorVariant"] = "tone-a";

  render() {
    return html`<div class="${dividerClassnames().join(" ")}" data-color-variant="${ifDefined(this.colorVariant)}"></div> `;
  }
}
