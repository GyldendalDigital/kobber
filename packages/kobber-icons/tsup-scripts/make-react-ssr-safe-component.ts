import { getIconNames } from ".";

export const makeSSRSafeReactComponent = (symbol: SVGSymbolElement) => {
  const iconNames = getIconNames(symbol.id);

  let componentCode = `import { FunctionComponent, HTMLProps } from "react";
export const ${iconNames.unprefixedCapitalized}: FunctionComponent<HTMLProps<SVGElement>> = props => {
  let _label = props["aria-label"];
  _label = _label && _label.trim();
  const ariaHidden = !_label;
  const role = ariaHidden ? "presentation" : "img";`;

  const svgCode = `<svg 
      className={props.className}
      viewBox="${symbol.getAttribute("viewBox")}"
      aria-label={_label}
      aria-hidden={ariaHidden}
      role={role}
      style={{
        height: "var(--icon-height)",
        width: "var(--icon-width)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      ${symbol.innerHTML}
    </svg>`;

  componentCode += `
  return (
    ${svgCode}
  );
};
`;

  return componentCode;
};
