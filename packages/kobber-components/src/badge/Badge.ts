import { property, state } from "lit/decorators.js";
import { badgeClassNames, badgeName, BadgeProps } from "./Badge.core";
import { CSSResultGroup, html, LitElement } from "lit";
import componentStyles from "../base/styles/component.styles";
import { badgeStyles } from "./Badge.styles";
import { customElement } from "../base/utilities/customElementDecorator";

/**
 * Kobber Badge web-component
 */

@customElement(badgeName)
export class Badge extends LitElement implements BadgeProps {
  static styles: CSSResultGroup = [componentStyles, badgeStyles];

  @property({ attribute: "color-theme" })
  colorTheme?: BadgeProps["colorTheme"] = "aubergine";

  @property({ attribute: "color-variant" })
  colorVariant?: BadgeProps["colorVariant"] = "main";

  @property()
  size?: BadgeProps["size"] = "medium";

  @property()
  showStatusCircle?: BadgeProps["showStatusCircle"];

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html` <div
      class="${[
        ...badgeClassNames({
          showStatusCircle: this.showStatusCircle,
        }),
        this.className,
      ].join(" ")}"
      data-color-variant="${this.colorVariant}"
      data-color-theme="${this.colorTheme}"
      data-size="${this.size}"
    >
      ${this.showStatusCircle ? html`<div class="status-circle"></div>` : ""}
      <slot></slot>
    </div>`;
  }
}
