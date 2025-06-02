import fs from "node:fs";
import { ComponentObject } from ".";

export const listReactComponents = (reactListFilename: string, componentObjects: ComponentObject[]) => {
  const reactPreamble = `"use client";

import { createComponent } from "@lit/react";
import * as React from "react";
`;

  let reactImports = "";
  let reactExports = `
`;

  componentObjects.map(object => {
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

  const reactListString = `${reactPreamble} ${reactImports} ${reactExports}`;
  fs.writeFileSync(reactListFilename, reactListString);
};
