import { property } from "lit/decorators.js";
import * as BadgeIconCore from "./BadgeIcon.core";
import { type CSSResultGroup, html, LitElement } from "lit";
import componentStyles from "../base/styles/component.styles";
import { badgeIconStyles } from "./BadgeIcon.styles";
import { customElement } from "../base/utilities/customElementDecorator";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement(BadgeIconCore.badgeIconName)
export class BadgeIcon extends LitElement implements BadgeIconCore.BadgeIconProps {
  static styles: CSSResultGroup = [componentStyles, badgeIconStyles];

  @property({ attribute: "color-theme" })
  colorTheme: BadgeIconCore.BadgeIconProps["colorTheme"] = "brand";

  @property({ attribute: "color-variant" })
  colorVariant: BadgeIconCore.BadgeIconProps["colorVariant"] = "tone-a";

  @property()
  size?: BadgeIconCore.BadgeIconProps["size"] = "medium";

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html` <div
      class="${BadgeIconCore.badgeIconName}"
      data-color-variant="${ifDefined(this.colorVariant)}"
      data-color-theme="${ifDefined(this.colorTheme)}"
      data-size="${ifDefined(this.size)}"
    >
      <slot name="icon"></slot>
      <slot></slot>
    </div>`;
  }
}
