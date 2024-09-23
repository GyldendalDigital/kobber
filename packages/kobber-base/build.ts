import { themeConfigs } from "./buildConfig";
import { buildTypography } from "./src/typography/buildTypography";
import { buildThemeTokens } from "./src/styleDictionary/buildThemeTokens";
import tokensFromFigma from "./tokens-from-figma";
/**
 * Run by the build script in package.json
 */
themeConfigs.forEach(themeConfig => {
  buildThemeTokens(tokensFromFigma, themeConfig);
  buildTypography(themeConfig);
});
