import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { StyledLitElement } from "../utils/StyledLitElement";
import "../button/Button";
import "@gyldendal/kobber-icons/web-components";

@customElement("kobber-carousel-navigation-buttons")
export class NavigationButtons extends StyledLitElement {
  @property({ attribute: "previous-button-disabled" })
  previousButtonDisabled = "";

  @property({ attribute: "next-button-disabled" })
  nextButtonDisabled = "";

  @property()
  handlePreviousClick?: () => object;

  @property()
  handleNextClick?: () => object;

  static styles = css`
    :host {
      z-index: 2;
    }
    .nav {
      --button-width: 1em;
    }
    .button {
      position: absolute;
      top: 50%;
    }

    .button[disabled] {
      visibility: hidden;
    }

    .button--previous {
      left: var(--button-width);
    }
    .button--next {
      right: var(--button-width);
    }
  `;

  render = () => html`
    <div class="nav">
      ${this.previousButtonDisabled === "true"
        ? html`<kobber-button
            aria-label="${this.getAttribute("previous-button-aria-label")}"
            class="button button--previous"
            @click="${this.handlePreviousClick}"
            disabled
            color="thriller"
            variant="main"
            ><kobber-arrow_left slot="icon"
          /></kobber-button>`
        : html`<kobber-button
            aria-label="${this.getAttribute("previous-button-aria-label")}"
            class="button button--previous"
            @click="${this.handlePreviousClick}"
            color="thriller"
            variant="main"
            ><kobber-arrow_left slot="icon"
          /></kobber-button>`}
      ${this.nextButtonDisabled === "true"
        ? html`<kobber-button
            aria-label="${this.getAttribute("next-button-aria-label")}"
            class="button button--next"
            @click="${this.handleNextClick}"
            disabled
            color="thriller"
            variant="main"
            ><kobber-arrow_right slot="icon"
          /></kobber-button>`
        : html`<kobber-button
            aria-label="${this.getAttribute("next-button-aria-label")}"
            class="button button--next"
            @click="${this.handleNextClick}"
            color="thriller"
            variant="main"
            ><kobber-arrow_right slot="icon"
          /></kobber-button>`}
    </div>
  `;
}
