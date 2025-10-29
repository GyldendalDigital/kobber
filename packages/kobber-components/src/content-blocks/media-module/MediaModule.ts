import { type CSSResultGroup, html } from "lit";
import { property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import KobberElement from "../../base/kobber-element";
import { customElement } from "../../base/utilities/customElementDecorator";
import {
  type MediaModuleProps,
  mediaModuleClassnames,
  mediaModuleCreditPlacementFallback,
  mediaModuleobjectFitFallback,
} from "./MediaModule.core";
import { mediaModuleStyles } from "./MediaModule.styles";
import "../../text/text-label/TextLabel";

@customElement("kobber-media-module")
export class MediaModule extends KobberElement implements MediaModuleProps {
  static styles: CSSResultGroup = [mediaModuleStyles];

  @property({ attribute: "color-variant" })
  colorVariant: MediaModuleProps["colorVariant"] = "tone-a";

  @property({ attribute: "credit-placement" })
  creditPlacement: MediaModuleProps["creditPlacement"] = mediaModuleCreditPlacementFallback;

  @property({ attribute: "object-fit" })
  objectFit: MediaModuleProps["objectFit"] = mediaModuleobjectFitFallback;

  @state()
  protected _numberOfMediaElements = 0;

  @state()
  protected _creditPlacement = mediaModuleCreditPlacementFallback;

  connectedCallback() {
    super.connectedCallback();
    this._numberOfMediaElements =
      this.shadowRoot?.host.querySelectorAll("[slot=media]").length || 0;
    if (this._numberOfMediaElements > 1 || this._numberOfMediaElements < 1) {
      this._creditPlacement = "none";
    }
  }

  render() {
    return html`<div class="${mediaModuleClassnames().join(" ")}"
      data-credit-placement="${ifDefined(this._creditPlacement)}"
      data-media-object-fit="${ifDefined(this.objectFit)}"
      data-number-of-media-elements="${this._numberOfMediaElements}"
    >
      <figure>
        <slot name="media"></slot>
        <figcaption>
          <kobber-text-label size="small" color="brand" color-variant="${ifDefined(this.colorVariant)}">
            <slot name="credit"></slot>
          </kobber-text-label>
        </figcaption>
      </figure>
      <slot name="description"></slot>
    </div>
    `;
  }
}
