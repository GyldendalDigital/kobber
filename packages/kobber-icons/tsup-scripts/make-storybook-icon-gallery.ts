import { getIconNames } from ".";

export const makeIconGallery = (symbols: NodeListOf<SVGSymbolElement>) => {
  let iconGalleryString = "";
  let mainImportsString = "import { ";

  const firstImportString = `import { Meta, Title, IconGallery, IconItem } from "@storybook/blocks";
`;

  const metaString = `<Meta title="Icon/All" />

<IconGallery>`;

  symbols.forEach(symbol => {
    const iconNames = getIconNames(symbol.id);

    mainImportsString += `
  ${iconNames.unprefixedCapitalized}, `;

    iconGalleryString += `
  <IconItem name="${iconNames.unprefixedCapitalized} - <${symbol.id} />">
    <${symbol.id} class="kobber-theme-default" />
  </IconItem>`;
  });

  mainImportsString += `
} from "../index.web-components";

`;

  iconGalleryString += `
</IconGallery>
`;

  return `${firstImportString}${mainImportsString}${metaString}${iconGalleryString}`;
};
