import { type CSSResultGroup, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import componentStyles from "../base/styles/component.styles";
import { customElement } from "../base/utilities/customElementDecorator";
import { type BadgeProps, badgeClassNames, badgeName } from "./Badge.core";
import { badgeStyles } from "./Badge.styles";
import "../text/text-label/TextLabel";
import { invertColorVariant } from "../base/utilities/invertColorVariant";

@customElement(badgeName)
export class Badge extends LitElement implements BadgeProps {
  static styles: CSSResultGroup = [componentStyles, badgeStyles];

  @property({ attribute: "color-theme" })
  colorTheme?: BadgeProps["colorTheme"] = "brand";

  @property({ attribute: "color-variant" })
  colorVariant?: BadgeProps["colorVariant"] = "tone-a";

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
      data-color="${ifDefined(this.colorTheme)}"
      data-size="${ifDefined(this.size)}"
    >
      ${this.showStatusCircle ? html`<div class="status-circle"></div>` : ""}
      <kobber-text-label
        color=${ifDefined(this.colorTheme)}
        color-variant=${ifDefined(invertColorVariant(this.colorVariant))}
      >
        <slot></slot>
      </kobber-text-label>
    </div>`;
  }
}
