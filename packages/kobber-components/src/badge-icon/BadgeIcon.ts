import { property } from "lit/decorators.js";
import { badgeIconName, BadgeIconProps } from "./BadgeIcon.core";
import { CSSResultGroup, html, LitElement } from "lit";
import componentStyles from "../base/styles/component.styles";
import { badgeIconStyles } from "./BadgeIcon.styles";
import { customElement } from "../base/utilities/customElementDecorator";

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
      data-color-variant="${this.colorVariant}"
      data-color-theme="${this.colorTheme}"
      data-size="${this.size}"
    >
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </div>`;
  }
}
