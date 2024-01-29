import { ContextProvider as LitContextProvider } from "@lit/context";
import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./Container";
import { context, defaultContext } from "./context";

@customElement("kobber-scene-context-provider")
export class ContextProvider extends LitElement {
  @state()
  @property({ attribute: false })
  provider = new LitContextProvider(this, {
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

  render() {
    return html`<slot />`;
  }
}
