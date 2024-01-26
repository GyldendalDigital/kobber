import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./Container";
import { ContextProvider } from "./ContextProvider";
import { cssReset } from "./css-reset";

@customElement("kobber-scene")
export class Scene extends ContextProvider {
  static styles = [
    cssReset,
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property({ type: String, attribute: "min-height" })
  minHeight?: string;

  render() {
    return html`
      <kobber-scene-container min-height=${this.minHeight}>
        <slot />
      </kobber-scene-container>
    `;
  }
}
