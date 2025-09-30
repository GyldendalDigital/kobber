import { type CSSResultGroup, html } from "lit";
import KobberElement from "../../../base/kobber-element";
import { customElement } from "../../../base/utilities/customElementDecorator";
import { contentTopBlockStyles } from "./ContentTopBlock.styles";

@customElement("kobber-content-top-block")
export class ContentTopBlock extends KobberElement {
  static styles: CSSResultGroup = [contentTopBlockStyles];

  render() {
    return html`<header class="kobber-content-top-block">
      <slot name="title"></slot>
      <slot></slot>
    </header> `;
  }
}
