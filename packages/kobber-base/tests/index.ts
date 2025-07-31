import { buildThemeTokensTest } from "./buildThemeTokens.test";
import { tokensFromFigma } from "../tokens-from-figma";
import simpleTokens from "./test-data-simple.json";
import { ThemeConfig } from "../src/types";

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
