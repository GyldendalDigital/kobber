import * as fs from "fs";
import { ThemeConfig, themeDirectory } from "../src/types";
import { buildTypography } from "../src/typography/buildTypography";

export const buildTypographyTest = (themeConfig: ThemeConfig) => {
  buildTypography(themeConfig);

  assertTypographyFilesExists(themeConfig);
};

const assertTypographyFilesExists = (themeConfig: ThemeConfig) => {
  const tokenDirectory = `${themeDirectory}/${themeConfig.themeName}`;
  ["typography-tokens-flattened.json", "typography-tokens.json", "typography.css", "typography.module.css"].forEach(
    fileName => {
      if (!fs.existsSync(`${tokenDirectory}/${fileName}`)) {
        console.error(`Build typography failed. File ${fileName} does not exist in ${tokenDirectory}`);
      }
    },
  );
};
