import { CSSResultGroup, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import KobberElement from "../base/kobber-element";
import { listItemClassNames, listItemName } from "./ListItem.core";
import { ifDefined } from "lit/directives/if-defined.js";
import componentStyles from "../base/styles/component.styles";
import { listItemStyles } from "./ListItem.styles";

/**
 * Used as a child of the `kobber-list` and `kobber-accordion` components.
 *
 * Deduces `role` from the parent:
 * @example parent role="menubar" => item role="menuitem"
 */
@customElement(listItemName)
export class ListItem extends KobberElement {
  static styles: CSSResultGroup = [componentStyles, listItemStyles];

  @property({ reflect: true })
  active?: boolean;

  @property({ reflect: true })
  disabled?: boolean;

  override render() {
    const role = this.role ?? (this.parentElement?.getAttribute("role")?.includes("menu") ? "menuitem" : null);

    return html`
      <div
        class="${[listItemClassNames(listItemName), this.className].join(" ")}"
        role=${ifDefined(role)}
        ?active=${ifDefined(this.active)}
        ?disabled=${ifDefined(this.disabled)}
        ?inert=${ifDefined(this.disabled)}
      >
        <span class="text">
          <slot></slot>
        </span>
        <slot name="icon"></slot>
      </div>
    `;
  }
}
