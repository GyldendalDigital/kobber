import { themeConfigs } from "./buildConfig";
import { buildTypography } from "./src/typography/buildTypography";
import { buildThemeTokens } from "./src/styleDictionary/buildThemeTokens";
import { tokensFromFigma } from "./tokens-from-figma";
import { cleanFolder as clean } from "./src/utils/cleanFolder";

/**
 * Converts json from Figma into css, js, scss ++
 *
 * Run by the build script in package.json
 */
const build = async () => {
  clean();

  for (const themeConfig of themeConfigs) {
    await buildThemeTokens(tokensFromFigma, themeConfig);
    buildTypography(themeConfig);
  }
};

await build();
