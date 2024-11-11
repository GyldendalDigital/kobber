import { css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import KobberElement from "../base/kobber-element";

export const customElementName = "kobber-wiki-list-item";

/**
 * Used as a child of the `kobber-list` and `kobber-accordion` components.
 *
 * Deduces `role` from the parent:
 * @example parent role="menubar" => item role="menuitem"
 */
@customElement(customElementName)
export class ListItem extends KobberElement {
  @property({ reflect: true })
  active?: boolean;

  @property({ reflect: true })
  disabled?: boolean;

  public override connectedCallback(): void {
    super.connectedCallback();

    if (this.hasAttribute("disabled")) {
      this.toggleAttribute("inert");
    }

    const role = this.role ?? (this.parentElement?.getAttribute("role")?.includes("menu") ? "menuitem" : null);
    if (role) {
      this.setAttribute("role", role);
    }
  }

  render() {
    return html` <style>
        ${this.themedStyles()}
      </style>
      <span class="text">
        <slot></slot>
      </span>
      <slot name="icon"></slot>`;
  }

  themedStyles() {
    const component = this.tokens().component["wiki-list-item"];
    const typography = this.tokens().typography.ui;
    const global = this.tokens().global;

    return css`
      :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        gap: ${component.container.gap}px;
        padding: ${component.container.padding.bottom}px;
        border-radius: ${component.container.border.radius}px;
        color: ${unsafeCSS(component.text.color)};
        font-size: ${typography["label large - single line"].fontSize / 16}rem;

        .text {
          align-self: center;
          line-height: calc(1rem + ${component["border-bottom"].padding.top}px);
        }
      }

      :host([active]) {
        .text {
          box-shadow: 0 ${component["border-bottom"].width.active}px 0 0
            ${unsafeCSS(component["border-bottom"].color.active)};
        }
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.7;
      }

      :host(:hover) {
        background-color: ${unsafeCSS(component.background.color.hover)};
      }

      :host(:active) {
        /* on click effect? */
      }

      :host(:focus-visible) {
        outline: none;
        box-shadow: 0 0 0 ${global.focus.border.width}px ${unsafeCSS(global.focus.color)};
      }

      ::slotted([slot="icon"]) {
        color: ${unsafeCSS(component.icon.color)};
        --icon-width: ${typography["label large - single line"].fontSize / 16}rem;
        --icon-height: ${typography["label large - single line"].fontSize / 16}rem;
        height: ${typography["label large - single line"].fontSize / 16}rem;
      }
    `;
  }
}
