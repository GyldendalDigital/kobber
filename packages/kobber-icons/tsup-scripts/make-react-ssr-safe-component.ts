import { getIconNames } from ".";

export const makeSSRSafeReactComponent = (symbol: SVGSymbolElement) => {
  const iconNames = getIconNames(symbol.id);

  let componentCode = `import { FunctionComponent, HTMLProps } from "react";
import * as tokens from "@gyldendal/kobber-base/themes/default/tokens.js";
import { SizeType } from "../../types/kobber-icons-types";

type IconProps = {
  iconSize?: SizeType;
};

export const ${iconNames.unprefixedCapitalized}: FunctionComponent<HTMLProps<SVGElement> & IconProps> = props => {
  const smallSize = \`\${tokens.semantics.visual.icon.size.small / 16}rem\`;
  const mediumSize = \`\${tokens.semantics.visual.icon.size.medium / 16}rem\`;
  const largeSize = \`\${tokens.semantics.visual.icon.size.large / 16}rem\`;
  const widthAndHeight =
    props.iconSize === "small" ? smallSize : props.iconSize === "medium" ? mediumSize : largeSize;

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
        height: \`var(--icon-height, \${widthAndHeight})\`,
        width: \`var(--icon-width, \${widthAndHeight})\`,
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
