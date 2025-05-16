import { LitElement, css, html, unsafeCSS } from "lit";
import { property, state } from "lit/decorators.js";
import * as tokens from "@gyldendal/kobber-base/themes/default/tokens.js";
import { customElement } from "../utils/customElementDecorator";

const paddingBlock = "16px";

const paddingInline = "16px";

@customElement("kobber-example-card")
export class ExampleCard extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-areas:
        "media"
        "heading"
        "body";
      grid-template-rows: 68% auto 1fr;
      background-color: ${unsafeCSS(tokens.primitives.color.nostalgia[25])};
      border-radius: 16px;
      overflow: hidden;

      font-family: Inter, "Inter Variable";
    }

    .media {
      grid-area: media;
      background-color: ${unsafeCSS(tokens.primitives.color.nostalgia[600])};
    }

    .badge {
      grid-area: media;
      justify-self: start;
      align-self: start;
      border-radius: 16px;
      padding: 4px 8px;
      margin: 8px;
      font-size: 11px;
      background-color: ${unsafeCSS(tokens.primitives.color.nostalgia[850])};
      color: white;
    }

    .dimensions {
      grid-area: media;
      justify-self: end;
      align-self: start;
      border-radius: 16px;
      padding: 4px 8px;
      margin: 8px;
      font-size: 11px;
      border: solid 1px ${unsafeCSS(tokens.primitives.color.nostalgia[850])};
      color: ${unsafeCSS(tokens.primitives.color.nostalgia[850])};
    }

    .heading {
      grid-area: heading;
      padding-top: ${unsafeCSS(paddingBlock)};
      padding-inline: ${unsafeCSS(paddingInline)};
      font-size: 14px;
      font-weight: 500;
    }

    .body {
      grid-area: body;
      padding-block: ${unsafeCSS(paddingBlock)};
      padding-inline: ${unsafeCSS(paddingInline)};
      font-size: 14px;
      font-weight: 200;
    }
  `;

  @property()
  image?: string;

  @property()
  badge?: string;

  @property()
  heading?: string;

  @property()
  body?: string;

  private _resizeObserver: ResizeObserver;

  @state()
  private _dimensions?: [number, number];

  constructor() {
    super();
    this._resizeObserver = new window.ResizeObserver(entries => {
      const contentRect = this._firstResizeObserverContentRect(entries);
      this._dimensions = contentRect ? [contentRect.width, contentRect.height] : undefined;
    });
  }

  private _firstResizeObserverContentRect = (entries: ResizeObserverEntry[]) =>
    entries.length > 0 ? entries[0].contentRect : undefined;

  connectedCallback() {
    this._resizeObserver.observe(this);
    super.connectedCallback();
  }

  disconnectedCallback() {
    this._resizeObserver.unobserve(this);
    super.disconnectedCallback();
  }

  private _renderDimensions = () => {
    const dimensions = this._dimensions;
    if (!dimensions) return "";
    const [width, height] = dimensions;
    return `${Math.round(width)}x${Math.round(height)}`;
  };

  render() {
    return html`
      <div class="media">
        <img src="${this.image}" alt="" />
      </div>
      <div class="badge">${this.badge}</div>
      <div class="dimensions">${this._renderDimensions()}</div>
      <div class="heading">${this.heading}</div>
      ${this.body && html`<div class="body">${this.body}</div>`}
    `;
  }
}
