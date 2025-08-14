import { getIconNames } from ".";

export const makeIconGallery = (symbols: NodeListOf<SVGSymbolElement>) => {
  let iconGalleryString = "";

  const importString = `import { Meta, Title, IconGallery, IconItem } from "@storybook/addon-docs/blocks";
import "../index.web-components";
import { init as initIcons } from "../base/init";

{initIcons()}
`;

  const metaString = `<Meta title="Icon/All" />

<IconGallery>`;

  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);

    iconGalleryString += `
  <IconItem name="${iconNames.unprefixedCapitalized} - <${symbol.id} />">
    <${symbol.id} class="kobber-theme-default" />
  </IconItem>`;
  });

  iconGalleryString += `
</IconGallery>
`;

  return `${importString}${metaString}${iconGalleryString}`;
};
