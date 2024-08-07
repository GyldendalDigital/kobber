import "@gyldendal/kobber-base/themes/default/tokens.css";

/**
 * @summary An autonomous custom progress bar element.
 *
 * The progress bar is not native <progress> elements, due to poor
 * tweakability of the native element (both semantically and styling).
 *
 * Attention: Use only aria-label, not aria-labelledby (as IDREFs don't work across light DOM and shadow DOM). Ref https://coryrylan.com/blog/accessibility-with-id-referencing-and-shadow-dom.
 *
 */
export class ProgressBarItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.valueNow;
    this.fillColorFallback = "var(--kobber-component-progressbar-color-foreground-default-primary)";
    this.heightValueFallback = "var(--kobber-component-progressbar-size-default)";
    this.borderRadiusValueFallback = "var(--kobber-component-progressbar-border-radius)";
  }

  renderComponent() {
    const ariaLabel =
      this.getAttribute("ariaLabel") ||
      ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */
    const explainOtherUnitThanPercentage = this.getAttribute("explainOtherUnitThanPercentage") || "";
    const valueMin = this.getAttribute("value-min") || "0";
    const valueMax = this.getAttribute("value-max") || "100";
    const fillColor = this.getAttribute("fill-color") || this.fillColorFallback;
    const filledColor = this.getAttribute("filled-color") || "";

    const widthInPercent = (100.0 * this.valueNow) / (valueMax - valueMin);
    const fillColorValue = this.valueNow === valueMax && filledColor !== "" ? filledColor : fillColor;

    this.shadowRoot.innerHTML = `
    <style>
      :host {
        --progress-bar-item-width: ${widthInPercent}%;
        --progress-bar-fill-color: ${fillColorValue};
        width: var(--progress-bar-item-width);
        height: var(--progress-bar-height, ${this.heightValueFallback}); 
      }

      .fill {
        border-radius: var(--progress-bar-border-radius, ${this.borderRadiusValueFallback});
        height: 100%;

        /* Necessary for iPad */
        background-color: var(--progress-bar-fill-color);
        transition: width 0.2s ease-in;
      }
    </style>

    <div 
      class="fill"
      role="progressbar"
      aria-valuenow="${this.valueNow}"
      aria-valuemin="${valueMin}"
      aria-label="${ariaLabel}"
      aria-valuetext="${explainOtherUnitThanPercentage}"
      aria-valuemax="${valueMax}"
    ></div>
  `;
  }

  connectedCallback() {
    this.valueNow = this.getAttribute("value-now");
    this.renderComponent();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const progressBar = this.shadowRoot.querySelector("[role='progressbar']");
    if (progressBar) {
      if (name === "value-now") {
        this.valueNow = newValue;
      }
      this.renderComponent();
    }
  }

  static get observedAttributes() {
    return ["value-now"];
  }
}

export const customElementName = "kobber-progress-bar-item";

if (!customElements.get(customElementName)) {
  customElements.define(customElementName, ProgressBarItem);
}
