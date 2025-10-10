import { type CSSResultGroup, html } from "lit";
import { property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import KobberElement from "../../base/kobber-element";
import { customElement } from "../../base/utilities/customElementDecorator";
import { type TextModuleProps, textModuleClassnames } from "./TextModule.core";
import { textModuleStyles } from "./TextModule.styles";

@customElement("kobber-text-module")
export class TextModule extends KobberElement implements TextModuleProps {
  @property()
  color: TextModuleProps["color"] = "brand";

  @property({ attribute: "color-variant" })
  colorVariant: TextModuleProps["colorVariant"] = "tone-a";

  @state()
  protected _noHeading = false;

  static styles: CSSResultGroup = [textModuleStyles];

  connectedCallback() {
    super.connectedCallback();
    this._noHeading = this.shadowRoot?.host.querySelector("[slot=heading]") === null;
  }

  render() {
    return html`<div class="${textModuleClassnames().join(" ")}" data-color="${ifDefined(this.color)}" data-color-variant="${ifDefined(this.colorVariant)}">
      ${
        this._noHeading
          ? html`
            <div class="div">
              <slot name="badge"></slot>
              <slot></slot>
            </div>
          `
          : html`
            <header class="header">
              <slot name="badge"></slot>
              <slot name="heading"></slot>
            </header>
            <slot></slot>
      `
      }
    </div> `;
  }
}
