import StyleDictionary, {
  Config,
  TransformedToken,
  transformGroup,
} from "style-dictionary";
import { pxToRem } from "./transforms/pxToRem";

StyleDictionary.registerTransform(pxToRem);

const buildPath = "./themes/";

const invalid = ["font", "effect"];

const filter = (token: TransformedToken) => {
  console.log("token.name", token.path[0]);
  return !invalid.includes(token.path[0]);
};

export const getStyleDictionaryConfig = (
  themeName: string,
  tokensFromFigma: any,
  transforms: string[] = []
): Config => {
  return {
    tokens: tokensFromFigma,
    platforms: {
      scss: {
        transforms: [...transformGroup.scss, ...transforms],
        buildPath,
        files: [
          {
            destination: `${themeName}/tokens.scss`,
            format: "scss/variables",
            filter,
          },
        ],
      },
      css: {
        transforms: [...transformGroup.css, pxToRem.name, ...transforms],
        buildPath,
        prefix: "kobber",
        files: [
          {
            destination: `${themeName}/tokens.css`,
            format: "css/variables",
            filter,
            options: {
              outputReferences: true,
              selector: `.kobber-theme-${themeName}`,
            },
          },
        ],
      },
      js: {
        transforms: [...transformGroup.js, ...transforms],
        buildPath,
        files: [
          {
            destination: `${themeName}/tokens.json`,
            format: "json/nested-v2",
            filter,
          },
        ],
      },
    },
  };
};
