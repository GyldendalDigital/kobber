import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import { html } from "lit/static-html.js";
import componentStyles from "../../base/styles/component.styles";
import { customElement } from "../../base/utilities/customElementDecorator";
import { nestedListSlotName, textListElementName } from "./TextListElement.core";
import { textListElementStyles } from "./TextListElement.styles";
import "../text-body/TextBody";
import { state } from "lit/decorators.js";

@customElement(textListElementName)
export class TextListElement extends LitElement {
  static styles: CSSResultGroup = [componentStyles, textListElementStyles];

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
        <kobber-text-body class="body">
          <slot></slot>
          <slot name="${nestedListSlotName}"></slot>
        </kobber-text-body>
      </div>
    `;
  }
}
