import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { cssReset } from "./css-reset";

const zIndexFixedBackground = 0;

export class SceneBackground extends LitElement {
  private static _preventFlickeringElementsInSections = () => css`
    backface-visibility: hidden;
  `;

  static styles = [
    cssReset,
    // TODO: ForceBrowserRepaint
    css`
      :host {
        position: absolute;
        z-index: ${zIndexFixedBackground};
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        ${SceneBackground._preventFlickeringElementsInSections()};
      }
    `,
  ];

  @property({ type: String, attribute: "aria-label" })
  ["aria-label"]?: string;

  render() {
    return html`<slot /> `;
  }
}
