import * as fs from "fs";
import { flattenNestedTokens } from "./utils/flattenNestedTokens";
import { getTypographyCssClass } from "./utils/getTypographyCssClass";
import { getTypographyJson } from "./utils/getTypographyJson";
import { trimLineBreaks } from "./utils/string-utils";

const buildPath = "./themes";

const themeDirectories = fs.readdirSync("./themes");

themeDirectories.forEach((directory) => {
  const tokens = JSON.parse(
    fs.readFileSync(`${buildPath}/${directory}/tokens.json`, "utf-8")
  );
  const typographyTokensFlattened = flattenNestedTokens(tokens.typography);

  fs.writeFileSync(
    `${buildPath}/${directory}/typography-tokens-flattened.json`,
    JSON.stringify(typographyTokensFlattened, null, 2)
  );

  const typographyTokens = typographyTokensFlattened
    .map(getTypographyJson)
    .reduce((merged, object) => {
      const [key, value] = Object.entries(object)[0];
      merged[key] = value;
      return merged;
    }, {});

  fs.writeFileSync(
    `${buildPath}/${directory}/typography-tokens.json`,
    JSON.stringify(typographyTokens, null, 2)
  );

  const plainCss = typographyTokensFlattened
    .map((item) =>
      getTypographyCssClass([...item.path, item.name].join("-"), item.styles)
    )
    .map(trimLineBreaks)
    .join("\n");

  fs.writeFileSync(`${buildPath}/${directory}/typography.css`, plainCss);

  const moduleCss = typographyTokensFlattened
    .map((item) => getTypographyCssClass(item.fullNameCamelCase, item.styles))
    .map(trimLineBreaks)
    .join("\n");

  fs.writeFileSync(
    `${buildPath}/${directory}/typography.module.css`,
    moduleCss
  );
});
