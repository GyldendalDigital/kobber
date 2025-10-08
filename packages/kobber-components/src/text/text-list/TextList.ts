import { LitElement } from "lit";
import type { CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import componentStyles from "../../base/styles/component.styles";
import { textListStyles } from "./TextList.styles";
import {
  textListName,
  type TextListProps,
  textListTypeFallback,
  textListSizeFallback,
} from "./TextList.core";
import { customElement } from "../../base/utilities/customElementDecorator";
import { ifDefined } from "lit/directives/if-defined.js";

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
