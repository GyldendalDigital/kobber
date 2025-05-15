import * as tokens from "@gyldendal/kobber-base/themes/default/tokens.js";
import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement } from "../../utils/customElementDecorator";

@customElement("kobber-example-surface")
export class ExampleSurface extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
      display: block;
      border-radius: 16px;
      padding: ${unsafeCSS(tokens.layout.gap["16-32"])};
      font-family: Inter, "Inter Variable";
      background-color: ${unsafeCSS(tokens.primitives.color.nostalgia[600])};
    }

    :host *,
    :host *:before,
    :host *:after {
      box-sizing: inherit;
    }
  `;

  render = () => html`<slot />`;
}
