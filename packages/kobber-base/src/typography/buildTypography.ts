import * as fs from "fs";
import { writeJsonToFile } from "../utils/writeFile";
import { ThemeConfig, themeDirectory } from "../types";
import { flattenNestedTokens } from "./flattenNestedTokens";
import { getTypographyCssClass } from "./getTypographyCssClass";
import { getTypographyJson } from "./getTypographyJson";
import { trimLineBreaks } from "./stringUtils";

/**
 * Use tokens.json to build specialized typography files
 */
export const buildTypography = (themeConfig: ThemeConfig) => {
  const themeTokensDirectory = `${themeDirectory}/${themeConfig.themeName}`;
  const tokensJson = JSON.parse(fs.readFileSync(`${themeTokensDirectory}/tokens.json`, "utf-8"));

  if (!tokensJson.typography) {
    console.warn("buildTypography failed: no typography in json");
    return;
  }

  console.info("\ntypography");

  const typographyTokensFlattened = flattenNestedTokens(tokensJson.typography);
  writeJsonToFile(`${themeTokensDirectory}/typography-tokens-flattened.json`, typographyTokensFlattened);
  console.info(`✔︎ ${themeTokensDirectory}/typography-tokens-flattened.json`);

  const typographyTokens = typographyTokensFlattened.map(getTypographyJson).reduce((merged, object) => {
    const entry = Object.entries(object)[0];
    if (entry) {
      const [key, value] = entry;
      merged[key] = value;
    }
    return merged;
  }, {});
  writeJsonToFile(`${themeTokensDirectory}/typography-tokens.json`, typographyTokens);
  console.info(`✔︎ ${themeTokensDirectory}/typography-tokens.json`);

  const plainCss = typographyTokensFlattened
    .map(item =>
      getTypographyCssClass(
        ["kobber", "typography", ...item.path, item.fullNameCamelCase?.replace(" ", "-")].join("-"),
        item.styles,
      ),
    )
    .map(trimLineBreaks)
    .join("\n");

  fs.writeFileSync(`${themeTokensDirectory}/typography.css`, plainCss);
  console.info(`✔︎ ${themeTokensDirectory}/typography.css`);

  const moduleCss = typographyTokensFlattened
    .map(item => getTypographyCssClass(item.fullNameCamelCase?.replace(" ", "-"), item.styles))
    .map(trimLineBreaks)
    .join("\n");

  fs.writeFileSync(`${themeTokensDirectory}/typography.module.css`, moduleCss);
  console.info(`✔︎ ${themeTokensDirectory}/typography.module.css`);

  console.info("");
};
