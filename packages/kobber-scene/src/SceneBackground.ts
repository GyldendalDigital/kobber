import { LitElement, css, html } from "lit";
import { cssReset } from "./css-reset";

const zIndexFixedBackground = 0;

export class SceneBackground extends LitElement {
  private static _preventFlickeringElementsInSections = () => css`
    backface-visibility: hidden;
  `;

  static styles = [
    cssReset,
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

  connectedCallback() {
    this._forceRepaint();
    super.connectedCallback();
  }

  disconnectedCallback() {
    this._stopForcingRepaint();
    super.disconnectedCallback();
  }

  // Force Chrome to repaint the background image by updating the layout of the element.
  // Without this fix Chrome will sometimes not render the background image.

  private _intervalId?: number;

  private _forceRepaint = () => {
    let padding = 1;
    this._intervalId = window.setInterval(() => {
      padding = padding === 1 ? 2 : 1;
      this.style.setProperty("padding-top", `${padding}px`);
    }, 1000);
  };

  private _stopForcingRepaint = () => {
    clearInterval(this._intervalId);
  };

  render() {
    return html`<slot /> `;
  }
}
