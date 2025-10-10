import { type CSSResultGroup, html } from "lit";
import { property } from "lit/decorators.js";
import "./ListItem";
import { ifDefined } from "lit/directives/if-defined.js";
import KobberElement from "../base/kobber-element";
import componentStyles from "../base/styles/component.styles";
import { customElement } from "../base/utilities/customElementDecorator";
import { type ListProps, listName } from "./List.core";
import { listStyles } from "./List.styles";

/**
 * Vertical or horizontal display of elements.
 *
 * @param role menubar is default because a list is usually visually persistant. See {@link https://www.w3.org/WAI/ARIA/apg/patterns/menubar|docs}.
 * 
 * @param orientation sets aria-orientation vertical/horizontal and flex-direction column/row.
 * 
 * @param ariaLabel should be set if ariaLabeledBy is not set. See {@link https://www.w3.org/WAI/ARIA/apg/patterns/menubar/#wai-ariaroles,states,andproperties|docs}:
 *
 * An element with role menu either has:
  - aria-labelledby set to a value that refers to the menuitem or button that controls its display.
  - A label provided by aria-label.

  If a menubar has a visible label, the element with role menubar has aria-labelledby set to a value that refers to the labelling element. Otherwise, the menubar element has a label provided by aria-label.
 */
@customElement(listName)
export class List extends KobberElement implements ListProps {
  static styles: CSSResultGroup = [componentStyles, listStyles];

  @property()
  orientation?: ListProps["orientation"];

  // perhaps we need to set role on the host to let list items inherit roles

  override render() {
    return html`
      <div
        class="${listName}"
        role="${this.role ?? "menubar"}"
        aria-orientation="${ifDefined(this.orientation)}"
        tabindex="-1"
      >
        <slot></slot>
      </div>
    `;
  }
}
