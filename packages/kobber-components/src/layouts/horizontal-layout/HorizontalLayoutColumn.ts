import { CSSResultGroup, LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ResponsiveCssValue, responsiveValueConverter as converter } from "../../utils/responsiveCssValue";

@customElement("kobber-horizontal-layout-column")
export class HorizontalLayoutColumn extends LitElement {
  @property({ converter })
  span?: ResponsiveCssValue | number | string = 1;

  @property({ attribute: "aria-role-description" })
  ariaRoleDescription = "Kort";

  private _getSpanCssVariable = () => css`
    :host {
      --span: ${unsafeCSS(this.span ? this.span.toString() : "1")};
    }
  `;

  static styles: CSSResultGroup = css`
    :host {
      box-sizing: border-box;
      padding: var(--padding);
    }

    :host *,
    :host *:before,
    :host *:after {
      box-sizing: inherit;
    }
  `;

  render = () => html`
    <style>
      ${this._getSpanCssVariable()}
    </style>
    <div class="item" role="group" aria-roledescription="${this.ariaRoleDescription}">
      <slot />
    </div>
  `;
}
