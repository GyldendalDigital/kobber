/**
 * Kobber Label Icon web-component
 */

import { customElement, property, state } from "lit/decorators.js";
import { badgeIconClassNames, badgeIconName, BadgeIconProps } from "./BadgeIcon.core";
import { CSSResultGroup, html, LitElement } from "lit";
import componentStyles from "../base/styles/component.styles";
import { badgeIconStyles } from "./BadgeIcon.styles";

@customElement(badgeIconName)
export class BadgeIcon extends LitElement implements BadgeIconProps {
  static styles: CSSResultGroup = [componentStyles, badgeIconStyles];

  @property({ type: String })
  variant?: BadgeIconProps["variant"] = "main";

  @property({ type: String })
  theme?: BadgeIconProps["theme"] = "nature";

  @property({ type: String })
  size?: BadgeIconProps["size"] = "medium";

  @property({ type: Boolean })
  disabled?: BadgeIconProps["disabled"];

  @state()
  private label?: string | null;

  @state()
  private _hasIcon = false;

  connectedCallback() {
    super.connectedCallback();

    this._hasIcon = this.shadowRoot?.host.querySelector("[slot=icon]") !== null;

    this.label = this.getAttribute("aria-label");
    this.removeAttribute("aria-label");
  }

  render() {
    return html` <div
      class="${[
        ...badgeIconClassNames({
          variant: this.variant,
          theme: this.theme,
          size: this.size,
        }),
        this.className,
      ].join(" ")}"
      aria-label=${this.label}
      aria-disabled=${this.disabled ? "true" : "false"}
    >
      <slot name="icon"></slot>
      <slot></slot>
    </div>`;
  }
}
