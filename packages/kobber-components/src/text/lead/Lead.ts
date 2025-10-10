import { type CSSResultGroup, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import componentStyles from "../../base/styles/component.styles";
import { customElement } from "../../base/utilities/customElementDecorator";
import { type LeadProps, leadName } from "./Lead.core";
import { leadStyles } from "./Lead.styles";

@customElement(leadName)
export class Lead extends LitElement implements LeadProps {
  static styles: CSSResultGroup = [componentStyles, leadStyles];

  @property()
  font: LeadProps["font"] = "brand";

  @property({ attribute: "color" })
  color: LeadProps["color"] = "brand";

  @property({ attribute: "color-variant" })
  colorVariant: LeadProps["colorVariant"] = "tone-a";

  render() {
    return html`
      <div
        class="${leadName}"
        data-color="${ifDefined(this.color)}"
        data-color-variant="${ifDefined(this.colorVariant)}"
      >
        <slot></slot>
      </div>
    `;
  }
}
