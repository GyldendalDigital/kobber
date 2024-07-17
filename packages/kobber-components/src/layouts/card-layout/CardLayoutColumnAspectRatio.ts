import { CSSResultGroup, LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { aspectRatioHeight, gap, minColumnWidth } from "./config";
import { ResponsiveCssValue, responsiveValueConverter as converter } from "../../utils/responsiveCssValue";

@customElement("kobber-card-layout-column-aspect-ratio")
export class CardLayoutColumnAspectRatio extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      box-sizing: border-box;
      display: grid;
      min-width: 0;
      min-width: ${unsafeCSS(minColumnWidth)};
      grid-column: span var(--span);
      --aspect-ratio: 1;
    }

    :host *,
    :host *:before,
    :host *:after {
      box-sizing: inherit;
    }

    .aspect-ratio {
      position: relative;
      padding-top: calc(${aspectRatioHeight} / calc(var(--aspect-ratio-width)) * 100%);
    }

    .aspect-ratio-absolute {
      display: grid;
      position: absolute;
      inset: 0;
      padding: ${unsafeCSS(gap)};
    }
  `;

  @property({ converter })
  span?: ResponsiveCssValue | number | string = 1;

  private getSpanCssVariable = () => css`
    :host {
      --span: ${unsafeCSS(this.span ? this.span.toString() : "1")};
    }
  `;

  render = () => html`
    <style>
      ${this.getSpanCssVariable()}
    </style>
    <div class="aspect-ratio">
      <div class="aspect-ratio-absolute">
        <slot />
      </div>
    </div>
  `;
}
