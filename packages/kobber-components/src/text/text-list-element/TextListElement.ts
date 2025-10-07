import { LitElement } from "lit";
import type { CSSResultGroup } from "lit";
import { html } from "lit/static-html.js";
import componentStyles from "../../base/styles/component.styles";
import { textListElementStyles } from "./TextListElement.styles";
import { nestedListSlotName, textListElementName } from "./TextListElement.core";
import { customElement } from "../../base/utilities/customElementDecorator";
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
        <div class="body">
          <slot></slot>
          <slot name="${nestedListSlotName}"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [textListElementName]: TextListElement;
  }
}
