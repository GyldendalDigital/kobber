import { type CSSResultGroup, css, html, LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import { customElement } from "../../base/utilities/customElementDecorator";
import {
  responsiveValueConverter as converter,
  type ResponsiveCssValue,
} from "../../base/utilities/responsiveCssValue";

@customElement("kobber-horizontal-layout-column")
export class HorizontalLayoutColumn extends LitElement {
  @property({ converter })
  span?: ResponsiveCssValue | number | string = 1;

  @property({ attribute: "aria-role-description" })
  ariaRoleDescription = "Kort";

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
    <div class="item" role="group" aria-roledescription="${this.ariaRoleDescription}">
      <slot />
    </div>
  `;
}
