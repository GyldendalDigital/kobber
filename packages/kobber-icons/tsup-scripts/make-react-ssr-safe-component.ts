import { getIconNames } from ".";

export const makeSSRSafeReactComponent = (symbol: SVGSymbolElement) => {
  const iconNames = getIconNames(symbol.id);

  let componentCode = `import { FunctionComponent, HTMLProps } from "react";
export const ${iconNames.unprefixedCapitalized}: FunctionComponent<HTMLProps<SVGElement>> = props => {
  let _ariaLabel = props["aria-label"];
  _ariaLabel = _ariaLabel && _ariaLabel.trim();
  const _ariaHidden = !_ariaLabel;
  const _role = _ariaHidden ? "presentation" : "img";`;

  const svgCode = `<svg 
      className={props.className}
      viewBox="${symbol.getAttribute("viewBox")}"
      aria-label={_ariaLabel}
      aria-hidden={_ariaHidden}
      role={_role}
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
