import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { StyledLitElement } from "../../utils/StyledLitElement";
import { minCardWidth } from "./config";

@customElement("kobber-horizontal-layout")
export class HorizontalLayout extends StyledLitElement {
  static styles = css`
    :host *,
    :host *:before,
    :host *:after {
      box-sizing: inherit;
    }

    .list {
      --padding: 1rem;
      display: flex;
      justify-content: start; /* Applicable when one or few items */
    }

    ::slotted(kobber-horizontal-layout-column) {
      width: max(
        calc(((var(--horizontal-layout-column-width-calc-base) / var(--max-span)) * var(--span))),
        ${minCardWidth}
      );
      flex-shrink: var(--horizontal-layout-column-shrink, 0);
    }

    :host {
      width: 100vw;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
  }

  render = () => html`
    <div class="list">
      <slot></slot>
    </div>
  `;
}
