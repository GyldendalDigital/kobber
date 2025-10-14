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
  protected _creditPlacement = this.creditPlacement;

  @state()
  protected _figcaptionWidth = 0;

  connectedCallback() {
    super.connectedCallback();

    this._numberOfMediaElements =
      this.shadowRoot?.host.querySelectorAll("[slot=media]").length || 0;
    if (this._numberOfMediaElements > 1 || this._numberOfMediaElements < 1) {
      this._creditPlacement = "none";
    }

    setTimeout(() => {
      const figcaption = this.shadowRoot?.querySelector("figcaption");
      this._figcaptionWidth = figcaption?.clientWidth || 0;
    }, 0);
  }

  render() {
    const getLeft = (val: number) => {
      return val - this._figcaptionWidth;
    };
    const startX = 22;
    const startY = 36;
    const svgWidth = 479 - startX;
    const svgHeight = 440 - startY;
    const imageWidth = svgWidth - startX;
    const imageHeight = svgHeight - startY;
    return html`<div class="${mediaModuleClassnames().join(" ")}"
      data-credit-placement="${ifDefined(this._creditPlacement)}"
      data-media-object-fit="${ifDefined(this.objectFit)}"
      data-number-of-media-elements="${this._numberOfMediaElements}"
    >
      <figure style="--image-width: ${imageWidth}px; --image-height: ${imageHeight}px;">
        <svg viewBox="${startX} ${startY} ${svgWidth} ${svgHeight}">
          <defs style="position: absolute;">
            <clipPath id="clip-media-module">
              <path d="
M 443.892 36.158
C 450.721 36.139 456.256 43.288 456.256 52.124
L 456.256 325.124
C 456.256 333.961 450.721 341.139 443.892 341.158
L ${getLeft(450)} 341.438
C ${getLeft(443)} 341.457 ${getLeft(437)} 348.636 ${getLeft(437)} 357.473
L ${getLeft(437)} 386.473
C ${getLeft(437)} 395.31 ${getLeft(432)} 402.488 ${getLeft(425)} 402.508
L 36.647 403.302
C 29.819 403.321 24.283 396.173 24.283 387.336
L 24.283 53.336
C 24.283 44.5 29.819 37.321 36.647 37.302
L 443.892 36.158
Z" />
          </clipPath>
          </defs>
          <foreignObject x="${startX}" y="${startY}" clip-path="url(#clip-media-module)" width="${svgWidth}" height="${svgHeight}">
            <slot name="media"></slot>
          </foreignObject>
        </svg>
        <figcaption>
          <kobber-text-label class="credit" size="small" color="brand" color-variant="${ifDefined(this.colorVariant)}">
            <slot name="credit"></slot>
          </kobber-text-label>
        </figcaption>
      </figure>
      <slot name="description"></slot>
    </div>
    `;
  }
}
