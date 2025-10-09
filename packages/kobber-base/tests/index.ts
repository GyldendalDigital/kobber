import type { ThemeConfig } from "../src/types";
import { tokensFromFigma } from "../tokens-from-figma";
import { buildThemeTokensTest } from "./buildThemeTokens.test";
import simpleTokens from "./test-data-simple.json";

const simpleTest: ThemeConfig = {
  figmaMode: "mode 1",
  themeName: "test-simple",
};

await buildThemeTokensTest(simpleTokens, simpleTest);

const fullTest: ThemeConfig = {
  figmaMode: "mode 1",
  themeName: "test-full",
};

await buildThemeTokensTest(tokensFromFigma, fullTest);

await buildThemeTokensTest(
  {
    shouldBeNumber: {
      type: "dimension",
      value: "1",
      description: "number", // description with valid value "number" will override type
    },
    shouldBeRem: {
      type: "dimension",
      value: "1", // will be converted to rem
    },
  },
  {
    figmaMode: "mode 1",
    themeName: "test-description-override",
  },
);
