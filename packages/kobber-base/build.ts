import { themeConfigs } from "./buildConfig";
import { buildThemeTokens } from "./src/styleDictionary/buildThemeTokens";
import { invertColorTokens } from "./src/utils/invertColor";
import { findUnusedTokens } from "./tests/buildThemeTokens.test";
import { tokensFromFigma } from "./tokens-from-figma";

/**
 * Converts json from Figma into css, js, scss ++
 *
 * Run by the build script in package.json
 */
const build = async () => {
  for (const themeConfig of themeConfigs) {
    // create fake dark theme
    if (themeConfig.themeName === "dark") {
      invertColorTokens(tokensFromFigma);
    }

    await buildThemeTokens(tokensFromFigma, themeConfig);
  }

  themeConfigs[0] && findUnusedTokens(themeConfigs[0]);
};

await build();
