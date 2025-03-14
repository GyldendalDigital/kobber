import { getIconNames } from ".";

export const makeWebComponent = (symbol: SVGSymbolElement) => {
  const iconNames = getIconNames(symbol.id);

  const constructor = `constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

`;

  const attributes = `
    const ariaLabel =
      this.getAttribute("aria-label") || 
      ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */
    const ariaHidden = ariaLabel === "";
    const role = ariaHidden ? "presentation" : "img";`;

  const styles =
    "<style>:host { display: flex; align-items: center; justify-content: center; }svg {width: var(--icon-width, 1em);height: var(--icon-height, 1em);}</style>";

  const svgCode = `<svg viewBox="${symbol.getAttribute("viewBox")}" aria-label="\${ariaLabel}" aria-hidden="\${ariaHidden}" role="\${role}">${symbol.innerHTML}</svg>`;

  const componentCode = `export class ${iconNames.unprefixedCapitalized} extends HTMLElement {
  ${constructor}  renderComponent() {${attributes}
    if(this.shadowRoot) { this.shadowRoot.innerHTML = \`
        ${styles}
        ${svgCode}\`;
    }
  }

  connectedCallback() {
    this.renderComponent();
  }
}

export const customElementName = "${symbol.id}";

if (!customElements.get(customElementName)) {
  customElements.define(customElementName, ${iconNames.unprefixedCapitalized});
}
`;

  return componentCode;
};
