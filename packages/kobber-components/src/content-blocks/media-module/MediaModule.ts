import { type CSSResultGroup, html, unsafeCSS } from "lit";
import { property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import KobberElement from "../../base/kobber-element";
import { customElement } from "../../base/utilities/customElementDecorator";
import {
  colorVariantFallback,
  type MediaModuleProps,
  mediaModuleClassnames,
  mediaModuleCreditPlacementFallback,
  mediaModuleobjectFitFallback,
} from "./MediaModule.core";
import { mediaModuleStyles } from "./MediaModule.styles";
import "../../text/text-label/TextLabel";
import { component } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { layout } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

import { invertColorVariant } from "../../base/utilities/invertColorVariant";

@customElement("kobber-media-module")
export class MediaModule extends KobberElement implements MediaModuleProps {
  static styles: CSSResultGroup = [mediaModuleStyles];

  @property({ attribute: "color" })
  color: MediaModuleProps["color"] = "brand";

  @property({ attribute: "color-variant" })
  colorVariant: MediaModuleProps["colorVariant"] = colorVariantFallback;

  @property({ attribute: "credit-placement" })
  creditPlacement: MediaModuleProps["creditPlacement"] = mediaModuleCreditPlacementFallback;

  @property({ attribute: "object-fit" })
  objectFit: MediaModuleProps["objectFit"] = mediaModuleobjectFitFallback;

  @state()
  protected _numberOfMediaElements = 0;

  @state()
  protected _childTagName: string | undefined;

  @state()
  protected _creditPlacement: MediaModuleProps["creditPlacement"] =
    mediaModuleCreditPlacementFallback;

  connectedCallback() {
    super.connectedCallback();
    this._childTagName = this.shadowRoot?.host.querySelector("[slot=media]")?.tagName; //VIDEO or IMG
    this._numberOfMediaElements =
      this.shadowRoot?.host.querySelectorAll("[slot=media]").length || 0;
    if (this._numberOfMediaElements > 1 || this._numberOfMediaElements < 1) {
      this._creditPlacement = "none";
    } else {
      this._creditPlacement = this.creditPlacement;
    }
  }

  getImageContainer() {
    const radius =
      component["media-module"]["inner-inner-credit-container"]["border-radius"]["bottom-right"][
        "right-align"
      ];

    return html`
      <svg class="symbols" aria-hidden="true">
        <symbol id="curve" viewBox="0 0 ${radius} ${radius}">
          <path d="
          M 0 ${radius}  
          L ${radius} ${radius}
          L ${radius} 0
          C ${radius} ${radius / 2} ${radius / 2} ${radius} 0 ${radius}
          Z" />
        </symbol>
      </svg>
      <figure>
        <slot name="media"></slot>
        <figcaption style="--credit-fill-color: var(${unsafeCSS(layout["content-wrapper"].background.color.brand[this.colorVariant || "tone-a"])});">
          <svg class="curve">
            <use href="#curve" />
          </svg>
          <kobber-text-label size="small" color="${ifDefined(this.color)}" color-variant="${ifDefined(invertColorVariant(this.colorVariant))}">
            <slot name="credit"></slot>
          </kobber-text-label>
          <svg class="curve">
            <use href="#curve" />
          </svg>
        </figcaption>
      </figure>`;
  }

  getVideoContainer() {
    return html`
      <figure>
        <slot name="media"></slot>
      </figure>`;
  }

  render() {
    let mediaContainer: unknown;
    if (this._childTagName === "VIDEO") {
      mediaContainer = this.getVideoContainer();
    } else if (this._childTagName === "IMG") {
      mediaContainer = this.getImageContainer();
    } else {
      mediaContainer = console.info("No media element found in kobber-media-module");
    }

    return html`<div class="${mediaModuleClassnames().join(" ")}"
      data-credit-placement="${ifDefined(this._creditPlacement)}"
      data-media-object-fit="${ifDefined(this.objectFit)}"
      data-number-of-media-elements="${this._numberOfMediaElements}"
      data-color="${ifDefined(this.color)}"
      data-color-variant="${ifDefined(this.colorVariant)}">
      ${mediaContainer}
      <slot></slot>
    </div>
    `;
  }
}
