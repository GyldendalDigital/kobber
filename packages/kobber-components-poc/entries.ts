import { readdirSync } from "node:fs";
import { relative } from "node:path";
import packageJson from "./package.json" with { type: "json" };

const componentsDirectory = "./src/components";

const getFrameworkEntries = (indexFileName: string, destination: string): [string, string][] =>
  readdirSync(componentsDirectory, { withFileTypes: true, recursive: true })
    .filter(file => file.isFile())
    .filter(file => file.name === indexFileName)
    .map(file => [
      `${destination}/${relative(componentsDirectory, file.parentPath)}/index`,
      `./${file.parentPath}/${file.name}`,
    ]);

const componentEntries = [
  ...getFrameworkEntries("index.api.ts", "api"),
  ...getFrameworkEntries("index.react.tsx", "react"),
  ...getFrameworkEntries("index.svelte.ts", "svelte"),
  ...getFrameworkEntries("index.vanilla.ts", "vanilla"),
  ...getFrameworkEntries("index.lit.ts", "lit"),
];

export const entries = Object.fromEntries(componentEntries);

export const cssEntries = [
  ["api/index.css", "./dist/api"],
  ["react/index.css", "./dist/react"],
  ["svelte/index.css", "./dist/svelte"],
  ["vanilla/index.css", "./dist/vanilla"],
  ["lit/index.css", "./dist/lit"],
] as const;

// Source map used by integration checker.
// - Looks for import statements like "@gyldendal/kobber-components/react/card" in consumer repos
// - Links .references.mts to the source file, for example "./src/components/card/index.react.tsx"

export const sourceMap = componentEntries.map(([destination, source]) => {
  const destinationPath = destination.replace("/index", "");
  return [`${packageJson.name}/${destinationPath}`, source];
});
