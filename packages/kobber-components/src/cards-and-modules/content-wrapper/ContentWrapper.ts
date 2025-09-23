import { type CSSResultGroup, html } from "lit";
import { property, state } from "lit/decorators.js";
import { contentWrapperClassnames, type ContentWrapperProps } from "./ContentWrapper.core";
import { contentWrapperStyles } from "./ContentWrapper.styles";
import KobberElement from "../../base/kobber-element";
import { customElement } from "../../base/utilities/customElementDecorator";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement("kobber-content-wrapper")
export class ContentWrapper extends KobberElement implements ContentWrapperProps {
  @property()
  color: ContentWrapperProps["color"] = "brand";

  @property({ attribute: "color-variant" })
  colorVariant: ContentWrapperProps["colorVariant"] = "tone-a";

  @property({ type: Boolean, attribute: "full-width" })
  fullWidth: ContentWrapperProps["fullWidth"];

  @property({ type: Number, attribute: "max-height-in-px" })
  maxHeightInPx: ContentWrapperProps["maxHeightInPx"];

  @state()
  protected _noHeading = false;

  static styles: CSSResultGroup = [contentWrapperStyles];

  connectedCallback() {
    super.connectedCallback();
    this._noHeading = this.shadowRoot?.host.querySelector("[slot=heading]") === null;
  }

  render() {
    return html`
      <div class="${contentWrapperClassnames({
        fullWidth: this.fullWidth || undefined,
      }).join(" ")}"
        data-color="${ifDefined(this.color)}" 
        data-color-variant="${ifDefined(this.colorVariant)}"
        style="${ifDefined(this.maxHeightInPx) ? `max-height: ${this.maxHeightInPx}px` : ""}"
      >
        <div class="content-wrapper-inner">
          ${
            this._noHeading
              ? html`
                <div>
                  <slot name="badge"></slot>
                  <slot></slot>
                </div>
              `
              : html`
                <header class="top-block">
                  <slot name="badge"></slot>
                  <slot name="heading"></slot>
                  <slot name="heading-lead"></slot>
                  <slot name="heading-text"></slot>
                </header>
                <slot></slot>
              `
          }
        </div>
      </div>`;
  }
}
