import { type CSSResultGroup, html } from "lit";
import { mediaModuleClassnames, type MediaModuleProps } from "./MediaModule.core";
import { mediaModuleStyles } from "./MediaModule.styles";
import KobberElement from "../../base/kobber-element";
import { customElement } from "../../base/utilities/customElementDecorator";
import { property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement("kobber-media-module")
export class MediaModule extends KobberElement implements MediaModuleProps {
  static styles: CSSResultGroup = [mediaModuleStyles];

  @property({ attribute: "credits-placement-left", type: Boolean })
  creditsPlacementLeft: MediaModuleProps["creditsPlacementLeft"] = false;

  @property({ attribute: "color-variant" })
  colorVariant: MediaModuleProps["colorVariant"] = "tone-a";

  @state()
  protected _hasCredit = false;

  connectedCallback() {
    super.connectedCallback();

    this._hasCredit = this.shadowRoot?.host.querySelector("[slot=credit]") !== null;
  }

  render() {
    return html`<div class="${mediaModuleClassnames().join(" ")}"
      data-has-credit="${this._hasCredit}"
      data-credit-placement-left="${ifDefined(this.creditsPlacementLeft)}"
    >
      <figure>
        <slot name="media"></slot>
        <figcaption>
          <kobber-text-label color-variant="${ifDefined(this.colorVariant)}">
            <slot name="credit"></slot>
          </kobber-text-label>
        </figcaption>
      </figure>
      <slot name="description"></slot>
    </div>
    `;
  }
}
