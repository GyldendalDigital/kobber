import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./Container";
import { ContextProvider } from "./ContextProvider";
import "./CssVariableProvider";
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

  @property({ type: Number, attribute: "responsive-breakpoint" })
  responsiveBreakpoint = 640;

  render() {
    return html`
      <kobber-css-variable-provider
        responsive-breakpoint="${this.responsiveBreakpoint}"
      >
        <kobber-scene-container min-height=${this.minHeight}>
          <slot />
        </kobber-scene-container>
      </kobber-css-variable-provider>
    `;
  }
}
