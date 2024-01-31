import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./Container";
import { cssReset } from "./css-reset";
import { getFluidHorizontalPadding } from "./fluidHorizontalPadding";

@customElement("kobber-css-variable-provider")
export class CssVariableProvider extends LitElement {
  static styles = [
    cssReset,
    css`
      :host {
        display: block;
      }
    `,
  ];

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
