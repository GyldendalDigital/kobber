import { getIconNames } from ".";

export const makeWebComponent = (symbol: SVGSymbolElement) => {
  const iconNames = getIconNames(symbol.id);

  const constructor = `constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.heightValueFallback = "var(--kobber-global-visual-icon-size-small)";
    this.widthValueFallback = "var(--kobber-global-visual-icon-size-small)";
  }

`;

  const attributes = `
    let _ariaLabel =
      this.getAttribute("aria-label") || 
      ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */
    _ariaLabel = _ariaLabel && _ariaLabel.trim();
    const _ariaHidden = _ariaLabel === "";
    const _role = _ariaHidden ? "presentation" : "img";`;

  const styles =
    "<style>:host { display: flex; align-items: center; justify-content: center; }svg {width: var(--icon-width, ${this.widthValueFallback});height: var(--icon-height, ${this.heightValueFallback});}</style>";

  const svgCode = `<svg viewBox="${symbol.getAttribute("viewBox")}" aria-label="\${_ariaLabel}" aria-hidden="\${_ariaHidden}" role="\${_role}">${symbol.innerHTML}</svg>`;

  const componentCode = `export class ${iconNames.unprefixedCapitalized} extends HTMLElement {
  heightValueFallback: string;
  widthValueFallback: string;

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
