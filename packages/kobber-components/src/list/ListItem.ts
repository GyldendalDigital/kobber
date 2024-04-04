import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { listItemStyles } from "./ListItem.styles";

export const customElementName = "kobber-list-item";

/**
 * Used as a child of the `kobber-list` component.
 *
 * Inherits the `direction` attribute from the parent.
 *
 * @todo handle image
 * @todo handle icon
 */
@customElement(customElementName)
export class ListItem extends LitElement {
  public override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute("role", "menuitem");
    this.setAttribute("direction", this.parentElement?.getAttribute("direction") ?? "vertical");
  }

  render() {
    return html` <slot></slot> `;
  }

  static styles = listItemStyles;
}
