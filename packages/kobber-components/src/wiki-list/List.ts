import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./ListItem";
import { consume } from "@lit/context";
import { Theme } from "../utils/theme-context.types";
import { themeContext } from "../utils/theme-context";

export const customElementName = "kobber-wiki-list";

type ListDirection = "vertical" | "horizontal";

/**
 * Vertical or horizontal display of elements.
 */
@customElement(customElementName)
export class List extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  @property()
  direction: ListDirection = "vertical";

  public override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute("role", "menu");
  }

  render() {
    return html` <style>
        ${this.themedStyles()}
      </style>
      <slot></slot>`;
  }

  themedStyles = () => {
    const tokens = this.theme?.tokens;
    if (!tokens) {
      console.debug("theme context not found");
      return css``;
    }

    const component = tokens.component["wiki-side-menu"];

    return css`
      :host {
        display: inline-flex;
        align-items: flex-start;
        align-content: flex-start;
        list-style-type: none;
        flex-direction: ${unsafeCSS(this.direction === "vertical" ? "column" : "row")};
        gap: ${component.container.gap}px;
        width: 100%;
      }
    `;
  };
}
