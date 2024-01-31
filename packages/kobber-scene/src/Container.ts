import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cssReset } from "./css-reset";

@customElement("kobber-scene-container")
export class SceneContainer extends LitElement {
  static styles = [
    cssReset,
    css`
      :host {
        display: grid;
        position: relative;
      }
    `,
  ];

  @property({ type: String, attribute: "min-height" })
  minHeight?: string;

  hostStyles = () => css`
    :host {
      min-height: ${unsafeCSS(this.minHeight)};

      @media (display-mode: fullscreen) {
        min-height: ${unsafeCSS(this.minHeight !== undefined ? "100vh" : "")};
      }
    }
  `;

  render() {
    return html`
      <style>
        ${this.hostStyles()}
      </style>
      <slot />
    `;
  }
}
