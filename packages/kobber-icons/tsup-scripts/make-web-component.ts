import { getIconNames } from ".";

export const makeWebComponent = (symbol: SVGSymbolElement) => {
  const iconNames = getIconNames(symbol.id);

  const preamble = `import * as tokens from "@gyldendal/kobber-base/themes/default/tokens.js";
import { SizeType } from "../../types/kobber-icons-types";
import { getConfig } from "../../../base/config";

`;

  const constructor = `constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.size = (this.getAttribute("size") as SizeType) || "medium";
  }

`;

  const attributes = `
    const smallSize = \`\${tokens.semantics.visual.icon.size.small / 16}rem\`;
    const mediumSize = \`\${tokens.semantics.visual.icon.size.medium / 16}rem\`;
    const largeSize = \`\${tokens.semantics.visual.icon.size.large / 16}rem\`;
    const widthAndHeight =
      this.size === "small" ? smallSize : this.size === "medium" ? mediumSize : largeSize;
  
    let _ariaLabel =
      this.getAttribute("aria-label") || 
      ""; /* Do not use aria-labelledby, as IDREFs don't work across light DOM and shadow DOM. */
    _ariaLabel = _ariaLabel && _ariaLabel.trim();
    const _ariaHidden = _ariaLabel === "";
    const _role = _ariaHidden ? "presentation" : "img";`;

  const styles =
    "<style>:host { display: flex; align-items: center; justify-content: center; }svg {width: var(--icon-width, ${widthAndHeight});height: var(--icon-height, ${widthAndHeight});}</style>";

  const svgCode = `<svg viewBox="${symbol.getAttribute("viewBox")}" aria-label="\${_ariaLabel}" aria-hidden="\${_ariaHidden}" role="\${_role}">${symbol.innerHTML}</svg>`;

  const componentCode = `${preamble}export class ${iconNames.unprefixedCapitalized} extends HTMLElement {
    size: SizeType;
  
  ${constructor}  renderComponent() {${attributes}
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = \`
        ${styles}
        ${svgCode}\`;
    }
  }

  connectedCallback() {
    this.renderComponent();
  }
}

export const customElementName = "${symbol.id}";

const register = async () => {
  const config = await getConfig();
  if (!config.autoRegisterWebComponents) return;
  if (!customElements.get(customElementName)) {
    customElements.define(customElementName, ${iconNames.unprefixedCapitalized});
  }
};

register();
`;

  return componentCode;
};
