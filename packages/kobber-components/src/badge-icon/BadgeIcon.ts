/**
 * Kobber Label Icon web-component
 */

import { customElement, property, state } from "lit/decorators.js";
import { badgeIconName, BadgeIconProps } from "./BadgeIcon.core";
import { CSSResultGroup, html, LitElement } from "lit";
import componentStyles from "../base/styles/component.styles";
import { badgeIconStyles } from "./BadgeIcon.styles";
import { badgeClassNames } from "../badge-new/Badge.core";

@customElement(badgeIconName)
export class BadgeIcon extends LitElement implements BadgeIconProps {
  static styles: CSSResultGroup = [componentStyles, badgeIconStyles];

  @property({ type: Boolean })
  disabled?: BadgeIconProps["disabled"];

  @state()
  private label?: string | null;

  connectedCallback() {
    super.connectedCallback();

    this.label = this.getAttribute("aria-label");
    this.removeAttribute("aria-label");
  }

  return() {
    return html` <div
      class="${[...badgeClassNames({}), this.className].join(" ")}"
      aria-label=${this.label}
      aria-disabled=${this.disabled ? "true" : "false"}
    >
      <slot name="badgeIcon"></slot>
      <slot></slot>
    </div>`;
  }
}
