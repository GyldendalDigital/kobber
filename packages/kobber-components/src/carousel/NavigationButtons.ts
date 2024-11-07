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
  handlePreviousClick: () => {};

  @property()
  handleNextClick: () => {};

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
      left: calc(var(--button-width) * 3);
    }
    .button--next {
      right: calc(var(--button-width) * 3);
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
            ><icon-arrow_left slot="icon"
          /></kobber-button>`
        : html`<kobber-button
            aria-label="${this.getAttribute("previous-button-aria-label")}"
            class="button button--previous"
            @click="${this.handlePreviousClick}"
            color="thriller"
            ><icon-arrow_left slot="icon"
          /></kobber-button>`}
      ${this.nextButtonDisabled === "true"
        ? html`<kobber-button
            aria-label="${this.getAttribute("next-button-aria-label")}"
            class="button button--next"
            @click="${this.handleNextClick}"
            disabled
            color="thriller"
            ><icon-arrow_right slot="icon"
          /></kobber-button>`
        : html`<kobber-button
            aria-label="${this.getAttribute("next-button-aria-label")}"
            class="button button--next"
            @click="${this.handleNextClick}"
            color="thriller"
            ><icon-arrow_right slot="icon"
          /></kobber-button>`}
    </div>
  `;
}
