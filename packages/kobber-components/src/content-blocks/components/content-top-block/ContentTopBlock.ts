import { type CSSResultGroup, css, html } from "lit";
import KobberElement from "../../../base/kobber-element";
import { customElement } from "../../../base/utilities/customElementDecorator";
import { contentTopBlockStyles } from "./ContentTopBlock.styles";

@customElement("kobber-content-top-block")
export class ContentTopBlock extends KobberElement {
  static styles: CSSResultGroup = [
    contentTopBlockStyles,
    css`
        :host {
          display: block;
        }
      `,
  ];

  render() {
    return html`<header class="kobber-content-top-block">
      <slot></slot>
    </header> `;
  }
}
