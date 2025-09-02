import { CSSResultGroup, html, LitElement } from "lit";
import componentStyles from "../../base/styles/component.styles";
import { leadStyles } from "./Lead.styles";
import { customElement } from "../../base/utilities/customElementDecorator";
import { leadName, LeadProps } from "./Lead.core";
import { property } from "lit/decorators.js";

@customElement(leadName)
export class Lead extends LitElement implements LeadProps {
  static styles: CSSResultGroup = [componentStyles, leadStyles];

  @property({ attribute: "color-theme" })
  colorTheme: LeadProps["colorTheme"] = "brand";

  @property({ attribute: "color-variant" })
  colorVariant: LeadProps["colorVariant"] = "tone-a";

  render() {
    return html`
      <div class="${leadName} ${this.className}" 
        data-color-theme="${this.colorTheme}"
        data-color-variant="${this.colorVariant}"">
        <slot></slot>
      </div>
    `;
  }
}
