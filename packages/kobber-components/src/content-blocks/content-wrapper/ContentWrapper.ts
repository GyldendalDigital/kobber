import { type CSSResultGroup, css, html } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import KobberElement from "../../base/kobber-element";
import { customElement } from "../../base/utilities/customElementDecorator";
import { type ContentWrapperProps, contentWrapperClassnames } from "./ContentWrapper.core";
import { contentWrapperStyles } from "./ContentWrapper.styles";

@customElement("kobber-content-wrapper")
export class ContentWrapper extends KobberElement implements ContentWrapperProps {
  static styles: CSSResultGroup = [
    contentWrapperStyles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property({ attribute: "color" })
  color: ContentWrapperProps["color"] = "brand";

  @property({ attribute: "color-variant" })
  colorVariant: ContentWrapperProps["colorVariant"] = "tone-a";

  @property({ type: String })
  type: ContentWrapperProps["type"] = "overlay";

  render() {
    return html`
      <div class="${contentWrapperClassnames().join(" ")}"
        data-color-variant="${ifDefined(this.colorVariant)}"
        data-type="${ifDefined(this.type)}"
        tabindex="0"
      >
        <div class="inner-container">
          ${html`
            <slot></slot>
              `}
        </div>
      </div>`;
  }
}
