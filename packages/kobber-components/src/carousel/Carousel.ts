import { ResizeController } from "@lit-labs/observers/resize-controller.js";
import { css, html, unsafeCSS } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";
import { gap, minCardWidth } from "./config";
import { StyledLitElement } from "../utils/StyledLitElement";

@customElement("kobber-carousel")
export class Carousel extends StyledLitElement {
  @property({ attribute: "aria-role-description" })
  ariaRoleDescription = "Karusell";

  @state()
  private _numberOfChildren: number;

  @state()
  private _getTooFewItems = () => this._numberOfChildren < 3;

  @state()
  private _getItemShrinkValue = () => (this._getTooFewItems() ? -1 : 0);

  @state()
  private _getItemShrinkWidthCalcBase = () => (this._getTooFewItems() ? "50%" : "78%");

  @queryAssignedElements() _elementsContainer!: Array<HTMLElement>;

  private _resizeController = new ResizeController(this, {
    callback: ([entry]) => entry,
  });

  firstUpdated() {
    this._observeAllItemsForTeaserWidth();
  }

  private _observeAllItemsForTeaserWidth = () => {
    const elementList = this._elementsContainer[0].children;

    const allItemsObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            entry.target.setAttribute("aria-hidden", "false");
            entry.target.removeAttribute("tabindex");
          } else {
            entry.target.classList.remove("active");
            entry.target.setAttribute("aria-hidden", "true");
            entry.target.setAttribute("tabindex", "-1");
          }
        });
      },
      { threshold: 0.1 },
    );

    for (let i = 0; i < elementList.length; i++) {
      allItemsObserver.observe(elementList[i]);
    }
  };

  private _getHostWidth = () => {
    const entry = this._resizeController.value;
    if (entry) {
      if (entry.borderBoxSize?.[0]?.inlineSize) {
        return entry.borderBoxSize[0].inlineSize;
      }

      // Using legacy contentRect for browsers that don't support borderBoxSize
      return entry.contentRect.width;
    }

    return this.getBoundingClientRect()?.width;
  };

  // When CSS container queries are supported everywhere, we can replace this with CSS.
  // Add `container-type: inline-size` to :host

  private _getMaxSpans = () => {
    const hostWidth = this._getHostWidth();
    if (hostWidth < minCardWidth * 2 * 3) {
      return 1;
    }
    if (hostWidth < minCardWidth * 3 * 4) {
      return 2;
    }
    if (hostWidth < minCardWidth * 4 * 5) {
      return 3;
    }
    if (hostWidth < minCardWidth * 5 * 6) {
      return 4;
    }
    if (hostWidth < minCardWidth * 6 * 7) {
      return 5;
    }
    return 6;
  };

  static styles = css`
    :host {
      box-sizing: border-box;
      display: grid;
      justify-items: center;
    }

    :host *,
    :host *:before,
    :host *:after {
      box-sizing: inherit;
    }

    .wrapper {
      display: grid;
    }

    .carousel {
      display: grid;
      overflow: visible;
      position: relative;
      min-width: calc(${minCardWidth / 16}rem + (2 * ${unsafeCSS(gap)}));
      max-width: 86rem;
    }
  `;

  render = () => html`
    <div class="wrapper">
      <div
        class="carousel"
        role="group"
        aria-roledescription="${this.ariaRoleDescription}"
        style="
          --horizontal-layout-column-shrink: ${this._getItemShrinkValue()};
          --horizontal-layout-column-width-calc-base: ${this._getItemShrinkWidthCalcBase()};
          --max-span: ${this._getMaxSpans()}; 
        "
      >
        <slot></slot>
      </div>
    </div>
  `;
}
