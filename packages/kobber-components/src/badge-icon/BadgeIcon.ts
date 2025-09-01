import { property } from "lit/decorators.js";
import { badgeIconName, BadgeIconProps } from "./BadgeIcon.core";
import { CSSResultGroup, html, LitElement } from "lit";
import componentStyles from "../base/styles/component.styles";
import { badgeIconStyles } from "./BadgeIcon.styles";
import { customElement } from "../base/utilities/customElementDecorator";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement(badgeIconName)
export class BadgeIcon extends LitElement implements BadgeIconProps {
  static styles: CSSResultGroup = [componentStyles, badgeIconStyles];

  @property({ attribute: "color-theme" })
  colorTheme: BadgeIconProps["colorTheme"] = "aubergine";

  @property({ attribute: "color-variant" })
  colorVariant: BadgeIconProps["colorVariant"] = "main";

  @property()
  size?: BadgeIconProps["size"] = "medium";

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html` <div
      class="${badgeIconName}"
      data-color-variant="${ifDefined(this.colorVariant)}"
      data-color-theme="${ifDefined(this.colorTheme)}"
      data-size="${ifDefined(this.size)}"
    >
      <slot name="icon"></slot>
      <slot></slot>
    </div>`;
  }
}
