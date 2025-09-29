import { type CSSResultGroup, html } from "lit";
import KobberElement from "../../../base/kobber-element";
import { customElement } from "../../../base/utilities/customElementDecorator";
import { textBlockStyles } from "./TextBlock.styles";

@customElement("kobber-text-block")
export class TextBlock extends KobberElement {
  static styles: CSSResultGroup = [textBlockStyles];

  render() {
    return html`<div class="kobber-text-block">
      <slot name="title"></slot>
      <slot></slot>
    </div> `;
  }
}
