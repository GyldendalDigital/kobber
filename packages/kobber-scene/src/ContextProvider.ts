import { ContextProvider as LitContextProvider } from "@lit/context";
import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./Container";
import { context, defaultContext } from "./context";
import { getFluidHorizontalPadding } from "./fluidHorizontalPadding";

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

  @property({ type: Number, attribute: "responsive-breakpoint" })
  responsiveBreakpoint = 640;

  private _resizeObserver: ResizeObserver;

  constructor() {
    super();
    this._resizeObserver = new window.ResizeObserver((entries) => {
      this._updateCssColumns(this._resizeObserverEntriesToWidth(entries));
      this._updateHorizontalPadding();
    });
  }

  private _resizeObserverEntriesToWidth = (entries: ResizeObserverEntry[]) =>
    entries.length > 0 ? entries[0].contentRect.width : undefined;

  connectedCallback() {
    super.connectedCallback();
    this._resizeObserver.observe(this);
    this._updateCssColumns();
    this._updateHorizontalPadding();
  }

  private _updateCssColumns = (currentSceneWidth?: number) => {
    const width = currentSceneWidth ?? this.getBoundingClientRect().width;
    if (width < this.responsiveBreakpoint) {
      this.style.setProperty("--responsive-grid-template-columns", "1fr");
    } else {
      this.style.removeProperty("--responsive-grid-template-columns");
    }
  };

  private _updateHorizontalPadding = (currentSceneWidth?: number) => {
    const width = currentSceneWidth ?? this.getBoundingClientRect().width;
    const [cssVariableName, value] = getFluidHorizontalPadding(width);
    this.style.setProperty(cssVariableName, value.toString());
  };

  disconnectedCallback() {
    this._resizeObserver.unobserve(this);
    super.disconnectedCallback();
  }

  render() {
    return html`<slot />`;
  }
}
