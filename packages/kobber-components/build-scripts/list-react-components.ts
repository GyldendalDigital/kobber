import fs from "node:fs";
import { autogenerateHeader, type ComponentObject } from ".";

export const listReactComponents = (
  reactListFilename: string,
  componentObjects: ComponentObject[],
) => {
  const reactPreamble = `"use client";

import { createComponent } from "@lit/react";
import * as React from "react";
`;

  let reactImports = "";
  let reactExports = `
`;

  componentObjects.forEach(object => {
    reactImports += `
import { ${object.importComponent} } from "${object.importPath}";`;

    reactExports += `
export const ${object.exportName} = createComponent({
  tagName: "${object.exportTagName}",
  elementClass: ${object.exportElementClass},
  react: React,
});
`;
  });

  const reactListString = `${autogenerateHeader(import.meta.url)}${reactPreamble} ${reactImports} ${reactExports}`;
  fs.writeFileSync(reactListFilename, reactListString.replace(/\n/g, "\r\n"));
};
