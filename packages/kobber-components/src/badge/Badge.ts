import { type CSSResultGroup, html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import componentStyles from "../base/styles/component.styles";
import { customElement } from "../base/utilities/customElementDecorator";
import {
  type BadgeProps,
  badgeClassNames,
  badgeColorThemes,
  badgeName,
  badgeTokens,
} from "./Badge.core";
import { badgeStyles } from "./Badge.styles";
import "../text/text-label/TextLabel";
import { invertColorVariant } from "../base/utilities/invertColorVariant";
import { objectKeys } from "../base/utilities/objectKeys";

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

  @state()
  protected _showStatusCircle = false;

  connectedCallback() {
    super.connectedCallback();
    if (this.showStatusCircle) {
      this._showStatusCircle = this.validateStatusCircleColors();
    }
  }

  validateStatusCircleColors() {
    const statusCircleColors = objectKeys(badgeTokens["status-circle"].background.color);
    return statusCircleColors.some(statusCircleColor => {
      if (badgeColorThemes.includes(statusCircleColor) && this.colorTheme === statusCircleColor) {
        return (
          objectKeys(
            badgeTokens["status-circle"].background.color[statusCircleColor],
            // biome-ignore lint/suspicious/noExplicitAny: Tokens can be anything.
          ) as any[]
        ).includes(this.colorVariant);
      }
      return false;
    });
  }

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
      ${this._showStatusCircle ? html`<div class="status-circle"></div>` : ""}
      <kobber-text-label
        color=${ifDefined(this.colorTheme)}
        color-variant=${ifDefined(invertColorVariant(this.colorVariant))}
      >
        <slot></slot>
      </kobber-text-label>
    </div>`;
  }
}
