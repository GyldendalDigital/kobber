import { ContextProvider } from "@lit/context";
import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./Container";
import { context, defaultContext } from "./context";
import { cssReset } from "./css-reset";

@customElement("kobber-scene")
export class Scene extends LitElement {
  static styles = [
    cssReset,
    css`
      :host {
        display: block;
      }
    `,
  ];

  @state()
  @property({ attribute: false })
  provider = new ContextProvider(this, {
    context,
    initialValue: defaultContext,
  });

  @property()
  set cssDimensionTransformer(
    cssDimensionTransformer: (value: string | number) => string,
  ) {
    this.provider.setValue({
      cssDimensionTransformer: (value: string | number) =>
        unsafeCSS(cssDimensionTransformer(value)),
    });
  }

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
