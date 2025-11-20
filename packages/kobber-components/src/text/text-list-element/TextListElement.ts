import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import { html } from "lit/static-html.js";
import componentStyles from "../../base/styles/component.styles";
import { customElement } from "../../base/utilities/customElementDecorator";
import {
  nestedListSlotName,
  type TextListElementProps,
  textListElementName,
} from "./TextListElement.core";
import { textListElementStyles } from "./TextListElement.styles";
import "../text-body/TextBody";
import { property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement(textListElementName)
export class TextListElement extends LitElement {
  static styles: CSSResultGroup = [componentStyles, textListElementStyles];

  @property({ attribute: "color" })
  color: TextListElementProps["color"] = "brand";

  @property({ attribute: "color-variant" })
  colorVariant: TextListElementProps["colorVariant"] = "tone-a";

  @state()
  protected _hasNestedList = false;

  connectedCallback() {
    super.connectedCallback();
    this._hasNestedList =
      this.shadowRoot?.host.querySelector(`[slot=${nestedListSlotName}]`) !== null;
  }

  render() {
    return html`
      <div role="listitem" class="${textListElementName}"
        data-has-nested-list="${this._hasNestedList}"
      >
        <kobber-text-body class="body" color="${ifDefined(this.color)}" color-variant="${ifDefined(this.colorVariant)}">
          <slot></slot>
          <slot name="${nestedListSlotName}"></slot>
        </kobber-text-body>
      </div>
    `;
  }
}
