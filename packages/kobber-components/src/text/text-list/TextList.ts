import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html } from "lit/static-html.js";
import componentStyles from "../../base/styles/component.styles";
import { customElement } from "../../base/utilities/customElementDecorator";
import {
  type TextListProps,
  textListName,
  textListSizeFallback,
  textListTypeFallback,
} from "./TextList.core";
import { textListStyles } from "./TextList.styles";

@customElement(textListName)
export class TextList extends LitElement implements TextListProps {
  static styles: CSSResultGroup = [componentStyles, textListStyles];

  @property()
  size: TextListProps["size"] = textListSizeFallback;

  @property()
  type: TextListProps["type"] = textListTypeFallback;

  render() {
    return html`
      <div
        role="list"
        class="${textListName}"
        data-size="${ifDefined(this.size)}"
        data-type="${ifDefined(this.type)}"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [textListName]: TextList;
  }
}
