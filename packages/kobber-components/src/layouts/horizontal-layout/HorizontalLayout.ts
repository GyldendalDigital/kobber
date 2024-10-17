import { css, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { StyledLitElement } from "../../utils/StyledLitElement";
import { carouselTeaserWidth } from "./config";

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
      --teaser-width: ${unsafeCSS(carouselTeaserWidth)};
      width: calc(((100% / var(--max-span)) * var(--span)) - var(--teaser-width));
      flex-shrink: 0;
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
