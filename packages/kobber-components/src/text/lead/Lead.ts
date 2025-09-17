import { type CSSResultGroup, html, LitElement } from "lit";
import componentStyles from "../../base/styles/component.styles";
import { leadStyles } from "./Lead.styles";
import { customElement } from "../../base/utilities/customElementDecorator";
import { leadName, type LeadProps } from "./Lead.core";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement(leadName)
export class Lead extends LitElement implements LeadProps {
  static styles: CSSResultGroup = [componentStyles, leadStyles];

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
