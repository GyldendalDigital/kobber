import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./ListItem";
import { consume } from "@lit/context";
import { Theme } from "../utils/theme-context.types";
import { themeContext } from "../utils/theme-context";

export const customElementName = "kobber-wiki-list";

type ListOrientation = "vertical" | "horizontal" | undefined;

/**
 * Vertical or horizontal display of elements.
 */
@customElement(customElementName)
export class List extends LitElement {
  @consume({ context: themeContext, subscribe: true })
  theme?: Theme;

  @property()
  orientation?: ListOrientation;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute("role", this.role ?? "menubar");
    if (this.orientation) {
      this.setAttribute("aria-orientation", this.orientation);
    }
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
        display: flex;
        flex-direction: column;
        align-items: stretch;
        list-style-type: none;
        gap: ${component.container.gap}px;
        width: 100%;
      }

      :host([aria-orientation="horizontal"]) {
        flex-direction: row;
      }
    `;
  };
}
