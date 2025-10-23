import packageJson from "./package.json" with { type: "json" };

const reactDirectory = "react";

const webComponentsDirectory = "web-components";

export const reactListFile = "index.react.ts";

export const webComponentListFile = "index.web-components.ts";

export const entries = {
  "init/index": "src/base/init.ts",
  [`${reactDirectory}/index`]: `src/${reactListFile}`,
  [`${webComponentsDirectory}/index`]: `src/${webComponentListFile}`,
};

export const sourceMap = {
  [`${packageJson.name}/init`]: "./src/base/init.js",
  [`${packageJson.name}/react`]: "./src/index.react.js",
  [`${packageJson.name}/web-components`]: "./src/index.web-components.js",
};
