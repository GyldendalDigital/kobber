import { property } from "lit/decorators.js";
import { badgeIconName, BadgeIconProps } from "./BadgeIcon.core";
import { CSSResultGroup, html, LitElement } from "lit";
import componentStyles from "../base/styles/component.styles";
import { badgeIconStyles } from "./BadgeIcon.styles";
import { customElement } from "../base/utilities/customElementDecorator";

@customElement(badgeIconName)
export class BadgeIcon extends LitElement implements BadgeIconProps {
  static styles: CSSResultGroup = [componentStyles, badgeIconStyles];

  @property({ type: String })
  variant?: BadgeIconProps["variant"] = "main";

  @property({ type: String })
  theme?: BadgeIconProps["theme"] = "nature";

  @property({ type: String })
  size?: BadgeIconProps["size"] = "medium";

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html` <div
      class="${badgeIconName}"
      data-variant="${this.variant}"
      data-size="${this.size}"
      data-theme="${this.theme}"
    >
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </div>`;
  }
}
