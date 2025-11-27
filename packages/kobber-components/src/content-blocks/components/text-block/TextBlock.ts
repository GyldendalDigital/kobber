import { type CSSResultGroup, css, html } from "lit";
import KobberElement from "../../../base/kobber-element";
import { customElement } from "../../../base/utilities/customElementDecorator";
import { textBlockStyles } from "./TextBlock.styles";

@customElement("kobber-text-block")
export class TextBlock extends KobberElement {
  static styles: CSSResultGroup = [
    textBlockStyles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`<div class="kobber-text-block">
      <slot></slot>
    </div> `;
  }
}
