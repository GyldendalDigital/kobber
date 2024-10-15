import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./ListItem";
import { listStyles } from "./List.styles";
import { consume } from "@lit/context";
import { Theme } from "../utils/theme-context.types";
import { themeContext } from "../utils/theme-context";

export const customElementName = "kobber-wiki-list";

/**
 * Vertical or horizontal display of elements.
 */
@customElement(customElementName)
export class List extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

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
