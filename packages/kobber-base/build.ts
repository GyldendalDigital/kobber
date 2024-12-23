import { themeConfigs } from "./buildConfig";
import { buildTypography } from "./src/typography/buildTypography";
import { buildThemeTokens } from "./src/styleDictionary/buildThemeTokens";
import { tokensFromFigma } from "./tokens-from-figma";
import { cleanThemeDirectory } from "./src/utils/cleanThemeDirectory";
import { invertColorTokens } from "./src/utils/invertColor";

/**
 * Converts json from Figma into css, js, scss ++
 *
 * Run by the build script in package.json
 */
const build = async () => {
  cleanThemeDirectory();

  for (const themeConfig of themeConfigs) {
    // create fake dark theme
    if (themeConfig.themeName === "dark") {
      invertColorTokens(tokensFromFigma);
    }

    await buildThemeTokens(tokensFromFigma, themeConfig);

    buildTypography(themeConfig);
  }
};

await build();
