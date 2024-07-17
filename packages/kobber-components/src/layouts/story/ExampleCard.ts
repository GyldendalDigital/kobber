import * as tokens from "@gyldendal/kobber-base/themes/default/tokens";
import { ResizeController } from "@lit-labs/observers/resize-controller.js";
import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

const paddingBlock = "16px";

const paddingInline = "16px";

@customElement("kobber-example-card")
export class ExampleCard extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
      display: grid;
      grid-template-areas:
        "media"
        "heading"
        "body";
      grid-template-rows: 68% auto 1fr;
      background-color: ${unsafeCSS(tokens.primitives.color.gray[100])};
      border-radius: 16px;
      overflow: hidden;
      font-family: Inter, "Inter Variable";
    }

    :host *,
    :host *:before,
    :host *:after {
      box-sizing: inherit;
    }

    .media {
      grid-area: media;
      background-color: ${unsafeCSS(tokens.primitives.color.gray[400])};
    }

    .badge {
      grid-area: media;
      justify-self: start;
      align-self: start;
      border-radius: 16px;
      padding: 4px 8px;
      margin: 8px;
      font-size: 11px;
      background-color: ${unsafeCSS(tokens.primitives.color.gray[900])};
      color: ${unsafeCSS(tokens.primitives.color.white)};
    }

    .dimensions {
      grid-area: media;
      justify-self: end;
      align-self: start;
      border-radius: 16px;
      padding: 4px 8px;
      margin: 8px;
      font-size: 11px;
      border: solid 1px ${unsafeCSS(tokens.primitives.color.gray[900])};
      color: ${unsafeCSS(tokens.primitives.color.gray[900])};
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

  private _resizeController = new ResizeController(this, {
    callback: ([entry]) => entry?.contentRect,
  });

  private _renderDimensions = () => {
    const rect = this._resizeController.value;
    return rect ? `${Math.round(rect.width)}x${Math.round(rect.height)}` : "";
  };

  render = () => html`
    <div class="media">
      <img src="${this.image}" alt="" />
    </div>
    <div class="badge">${this.badge}</div>
    <div class="dimensions">${this._renderDimensions()}</div>
    <div class="heading">${this.heading}</div>
    ${this.body && html`<div class="body">${this.body}</div>`}
  `;
}
