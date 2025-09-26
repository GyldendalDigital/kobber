import { type CSSResultGroup, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import componentStyles from "../base/styles/component.styles";
import { customElement } from "../base/utilities/customElementDecorator";
import { type BadgeProps, badgeClassNames, badgeName } from "./Badge.core";
import { badgeStyles } from "./Badge.styles";

@customElement(badgeName)
export class Badge extends LitElement implements BadgeProps {
  static styles: CSSResultGroup = [componentStyles, badgeStyles];

  @property({ attribute: "color-theme" })
  colorTheme?: BadgeProps["colorTheme"] = "aubergine";

  @property({ attribute: "color-variant" })
  colorVariant?: BadgeProps["colorVariant"] = "main";

  @property()
  size?: BadgeProps["size"] = "medium";

  @property({ type: Boolean, attribute: "show-status-circle" })
  showStatusCircle?: BadgeProps["showStatusCircle"];

  render() {
    return html`<div
      class="${[
        ...badgeClassNames({
          showStatusCircle: this.showStatusCircle,
        }),
        this.className,
      ].join(" ")}"
      data-color-variant="${ifDefined(this.colorVariant)}"
      data-color-theme="${ifDefined(this.colorTheme)}"
      data-size="${ifDefined(this.size)}"
    >
      ${this.showStatusCircle ? html`<div class="status-circle"></div>` : ""}
      <slot></slot>
    </div>`;
  }
}
