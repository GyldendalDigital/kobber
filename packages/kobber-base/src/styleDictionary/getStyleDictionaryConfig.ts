import StyleDictionary, {
  Config,
  TransformedToken,
  transformGroup,
} from "style-dictionary";
import { jsonNested } from "./jsonNestedFormat";
import { pxToRemTransform } from "./pxToRemTransform";

StyleDictionary.registerTransform(pxToRemTransform);

const buildPath = "./themes/";

const invalid = ["font", "effect"];

const filter = (token: TransformedToken) => !invalid.includes(token.path[0]);

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
        transforms: [
          ...transformGroup.css,
          pxToRemTransform.name,
          ...transforms,
        ],
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
            format: jsonNested.name,
            filter,
          },
        ],
      },
    },
  };
};
