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

  @property({ type: String })
  variant?: BadgeProps["variant"] = "main";

  @property({ type: String })
  theme?: BadgeProps["theme"] = "aubergine";

  @property({ type: String })
  size?: BadgeProps["size"] = "medium";

  @property({ type: Boolean })
  showStatusCircle?: BadgeProps["showStatusCircle"];

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html` <div
      class="${[
        ...badgeClassNames({
          variant: this.variant,
          theme: this.theme,
          size: this.size,
          showStatusCircle: this.showStatusCircle,
        }),
        this.className,
      ].join(" ")}"
    >
      ${this.showStatusCircle ? html`<div class="status-circle"></div>` : ""}
      <slot></slot>
    </div>`;
  }
}
