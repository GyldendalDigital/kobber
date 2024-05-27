import "@gyldendal/kobber-base/themes/default/tokens.css";

/**
 * @summary An autonomous custom element listing custom bars,
 * to show progress towards a goal.
 *
 * The progress bars themselves are children, preferably progress-bar-item(s).
 * (Ideally, not more than two, as more will convey too much information.)
 *
 * TODO:
 * - make visuallyhidden a shared class
 *
 * @slot - Home of the progress-bar(s).
 *
 */
export class ProgressBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.backgroundColorFallback = "var(--kobber-component-progressbar-color-background-default)";
    this.heightValueLow = "var(--kobber-component-progressbar-size-small)";
    this.heightValueDefault = "var(--kobber-component-progressbar-size-default)";
    this.borderRadiusValue = "var(--kobber-component-progressbar-border-radius)";
  }

  updateSRText(elementToUpdate, numberOfSlotChildren) {
    if (numberOfSlotChildren > 1) {
      elementToUpdate.innerText = "Two progress bars";
    }
  }

  connectedCallback() {
    const height = this.getAttribute("height");
    const spaceBetweenBars = this.hasAttribute("space-between-bars");
    const backgroundColor = this.getAttribute("background-color") || this.backgroundColorFallback;
    const heightValue = height === "low" ? this.heightValueLow : this.heightValueDefault;

    this.shadowRoot.innerHTML = `
     <style>
      
      .visuallyhidden {
        position: absolute;
        margin: -0.1em;
        border: 0;
        padding: 0;
        height: 0.1em;
        width: 0.1em;
        overflow: hidden;
        clip: rect(0 0 0 0);
      }
      
      :host {
        --progress-bar-height: ${heightValue};
        --progress-bar-border-radius: ${this.borderRadiusValue};
        border-radius: var(--progress-bar-border-radius);
      }

      .list {
        border-radius: inherit;
        background-color: ${backgroundColor};
        border: 1px solid;
      }
        
      slot {
        display: flex;
      }

      .space-between {
        justify-content: space-between;
      }
    </style>

    <div class="list">
      <p class="sr-text-if-applicable visuallyhidden"></p>
      <slot class="${spaceBetweenBars ? "space-between" : ""} slot"></slot>
    </div>
   `;

    this.updateSRText(
      this.shadowRoot.querySelector(".sr-text-if-applicable"),
      this.shadowRoot.querySelector(".slot").assignedElements().length,
    );
  }
}

export const customElementName = "kobber-progress-bar";

if (!customElements.get(customElementName)) {
  customElements.define(customElementName, ProgressBar);
}
