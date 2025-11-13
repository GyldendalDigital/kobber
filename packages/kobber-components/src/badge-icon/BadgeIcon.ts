import { type CSSResultGroup, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import componentStyles from "../base/styles/component.styles";
import { customElement } from "../base/utilities/customElementDecorator";
import * as BadgeIconCore from "./BadgeIcon.core";
import { badgeIconStyles } from "./BadgeIcon.styles";
import "../text/text-label/TextLabel";

@customElement(BadgeIconCore.badgeIconName)
export class BadgeIcon extends LitElement implements BadgeIconCore.BadgeIconProps {
  static styles: CSSResultGroup = [componentStyles, badgeIconStyles];

  @property({ attribute: "color" })
  color: BadgeIconCore.BadgeIconProps["color"] = "brand";

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
      data-color="${ifDefined(this.color)}"
      data-size="${ifDefined(this.size)}"
    >
      <slot name="icon" class="icon"></slot>
      <kobber-text-label
        color=${ifDefined(this.color)}
        color-variant=${ifDefined(this.colorVariant)}
      >
        <slot></slot>
      </kobber-text-label>
      
    </div>`;
  }
}
