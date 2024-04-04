import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./ListItem";
import { listStyles } from "./List.styles";

export const customElementName = "kobber-list";

/**
 * Vertical or horizontal display of elements.
 */
@customElement(customElementName)
export class List extends LitElement {
  direction = "vertical";

  public override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute("role", "menu");
  }

  render() {
    return html` <slot></slot> `;
  }

  static styles = listStyles;
}
