import { type CSSResultGroup, html } from "lit";
import { property } from "lit/decorators.js";
import { contentWrapperClassnames, type ContentWrapperProps } from "./ContentWrapper.core";
import { contentWrapperStyles } from "./ContentWrapper.styles";
import KobberElement from "../../base/kobber-element";
import { customElement } from "../../base/utilities/customElementDecorator";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement("kobber-content-wrapper")
export class ContentWrapper extends KobberElement implements ContentWrapperProps {
  @property({ attribute: "color-variant" })
  colorVariant: ContentWrapperProps["colorVariant"] = "tone-a";

  @property({ type: String })
  type: ContentWrapperProps["type"] = "overlay";

  @property({ type: Number, attribute: "max-height-in-px" })
  maxHeightInPx: ContentWrapperProps["maxHeightInPx"];

  static styles: CSSResultGroup = [contentWrapperStyles];

  render() {
    return html`
      <div class="${contentWrapperClassnames().join(" ")}"
        data-color-variant="${ifDefined(this.colorVariant)}"
        data-type="${ifDefined(this.type)}"
        style="${ifDefined(this.maxHeightInPx) ? `max-height: ${this.maxHeightInPx}px` : ""}"
        tabindex="0"
      >
        <div class="inner-container">
          ${html`
            <slot name="content-top-block"></slot>
            <slot></slot>
              `}
        </div>
      </div>`;
  }
}
