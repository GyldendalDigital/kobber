import "@gyldendal/kobber-base/themes/default/tokens.css";

/**
 * @summary An autonomous custom progress bar element.
 *
 * The progress bar is not native <progress> elements, due to poor
 * tweakability of the native element (both semantically and styling).
 *
 */
export class ProgressBarItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.fillColorFallback = "var(--kobber-component-progressbar-color-foreground-default-primary)";
    this.heightValueFallback = "var(--kobber-component-progressbar-color-background-default)";
    this.borderRadiusValueFallback = "var(--kobber-component-progressbar-border-radius)";
  }

  connectedCallback() {
    const ariaLabel = this.getAttribute("ariaLabel") || "";
    const ariaLabelledby = this.getAttribute("ariaLabelledby") || "";
    const explainOtherUnitThanPercentage = this.getAttribute("explainOtherUnitThanPercentage") || "";
    const valueNow = this.getAttribute("value-now");
    const valueMin = this.getAttribute("value-min") || "0";
    const valueMax = this.getAttribute("value-max") || "100";
    const fillColor = this.getAttribute("fill-color") || this.fillColorFallback;
    const filledColor = this.getAttribute("filled-color") || "";

    const fillColorValue = valueNow === valueMax && filledColor !== "" ? filledColor : fillColor;

    this.shadowRoot.innerHTML = `
    <style>
      :host {
        --progress-bar-item-width: ${valueNow}%;
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
      aria-valuenow="${valueNow}"
      aria-valuemin="${valueMin}"
      aria-label="${ariaLabel}"
      aria-labelledby="${ariaLabelledby}"
      aria-valuetext="${explainOtherUnitThanPercentage}"
      aria-valuemax="${valueMax}"
    ></div>
  `;
  }
}

export const customElementName = "kobber-progress-bar-item";

if (!customElements.get(customElementName)) {
  customElements.define(customElementName, ProgressBarItem);
}
