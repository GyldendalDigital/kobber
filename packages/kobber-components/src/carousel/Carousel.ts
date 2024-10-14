import { ResizeController } from "@lit-labs/observers/resize-controller.js";
import { css, html, unsafeCSS } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { gap, minCardWidth } from "./config";
import { StyledLitElement } from "../utils/StyledLitElement";
import "./NavigationButtons";

@customElement("kobber-carousel")
export class Carousel extends StyledLitElement {
  @property({ attribute: "aria-role-description" })
  ariaRoleDescription = "Karusell";

  /** Whether to move items one by one, or full width. */
  @property({ type: Boolean, attribute: "click-moves-full-width" })
  clickMovesFullWidth = false;

  @state()
  private _previousButtonDisabled = true;

  @state()
  private _nextButtonDisabled = true;

  @state()
  private _scrolledToLeft = 0;

  @state()
  private _widthToScroll = 0;

  @state()
  private _carouselFullWidth = 0;

  @state()
  private _numberOfChildren: number;

  @state()
  private _getTooFewItems = () => this._numberOfChildren < 3;

  @state()
  private _getItemShrinkValue = () => (this._getTooFewItems() ? -1 : 0);

  @state()
  private _getItemShrinkWidthCalcBase = () => (this._getTooFewItems() ? "50%" : "78%");

  @state()
  private _currentlyIntersecting: IntersectionObserverEntry[] = [];

  @queryAssignedElements() _elementsContainer!: Array<HTMLElement>;

  private _resizeController = new ResizeController(this, {
    callback: ([entry]) => entry,
  });

  firstUpdated() {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflowX = "hidden";
    }

    this._widthToScroll = this._getHostWidth();

    this._observeAllItemsForTeaserWidth();

    this._observeSingleItemWithCallback(this._elementsContainer[0].children[0], () => {
      this._previousButtonDisabled = true;
      this._nextButtonDisabled = false;
    });

    this._observeSingleItemWithCallback(
      this._elementsContainer[0].children[this._elementsContainer[0].children.length - 1],
      () => {
        this._previousButtonDisabled = false;
        this._nextButtonDisabled = true;
      },
    );
  }

  private _observeAllItemsForTeaserWidth = () => {
    const elementList = this._elementsContainer[0].children;

    const allItemsObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          let indexInList;
          if (!this.clickMovesFullWidth) {
            indexInList = Array.from(elementList).indexOf(entry.target);
          }
          if (entry.isIntersecting) {
            if (!this.clickMovesFullWidth && indexInList) {
              this._currentlyIntersecting[indexInList] = entry;
            }
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

  private _observeSingleItemWithCallback = (item: Element, callback: () => void) => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio === 1) {
            callback();
          }
        });
      },
      { threshold: 1 },
    );

    io.observe(item);
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

  private _handlePreviousClick = () => {
    const newScrolledToLeftValue = this._scrolledToLeft - this._widthToScroll;
    const minMovedToLeftValue = 0;
    if (newScrolledToLeftValue < minMovedToLeftValue) {
      this._scrolledToLeft = minMovedToLeftValue;
    } else {
      this._scrolledToLeft = newScrolledToLeftValue;
    }
    this._nextButtonDisabled = false;
  };

  private _handleNextClick = () => {
    const maxScrolledToLeftValue = this._carouselFullWidth - this._widthToScroll;
    const newScrolledToLeftValue = this._scrolledToLeft + this._widthToScroll;

    if (newScrolledToLeftValue > maxScrolledToLeftValue) {
      this._scrolledToLeft = maxScrolledToLeftValue;
    } else {
      this._scrolledToLeft = newScrolledToLeftValue;
    }
    this._previousButtonDisabled = false;
  };

  private _handleSlotchange = (e: { target: { assignedElements: () => any } }) => {
    const childNodes = e.target.assignedElements();
    this._numberOfChildren = childNodes[0].children.length;
    const carousel = this.shadowRoot?.querySelector(".carousel");
    this._carouselFullWidth = carousel!.scrollWidth;
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

    .carousel:before {
      position: absolute;
      z-index: 1; /* More than 0 to show, less than 2 to let previous button be clickable. */
      top: 0;
      right: 100%;
      bottom: -1em;
      left: -100%;
      content: "";
      backdrop-filter: grayscale(1);
    }

    .carousel:after {
      position: absolute;
      z-index: 0; /* More than -1 to show, less than 1 to let previous button be clickable. */
      top: 0;
      right: -100%;
      bottom: 0;
      left: 100%;
      content: "";
      backdrop-filter: grayscale(1);
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
          --scrolled-to-left: -${this._scrolledToLeft}px;
        "
      >
        <slot @slotchange=${this._handleSlotchange}></slot>
        ${this._getTooFewItems()
          ? html``
          : html`<kobber-carousel-navigation-buttons
              previous-button-disabled="${this._previousButtonDisabled}"
              .handlePreviousClick="${this._handlePreviousClick}"
              next-button-disabled="${this._nextButtonDisabled}"
              .handleNextClick="${this._handleNextClick}"
            >
            </kobber-carousel-navigation-buttons>`}
      </div>
    </div>
  `;
}
