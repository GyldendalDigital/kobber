import { readdirSync } from "node:fs";
import { relative } from "node:path";

const componentsDirectory = "./src/components";

const getFrameworkEntries = (indexFileName: string, destination: string) =>
  readdirSync(componentsDirectory, { withFileTypes: true, recursive: true })
    .filter(file => file.isFile())
    .filter(file => file.name === indexFileName)
    .map(file => [
      `${destination}/${relative(componentsDirectory, file.parentPath)}/index`,
      `./${file.parentPath}/${file.name}`,
    ]);

const componentEntries = [
  ...getFrameworkEntries("index.react.tsx", "react"),
  ...getFrameworkEntries("index.svelte.ts", "svelte"),
  ...getFrameworkEntries("index.vanilla.ts", "vanilla"),
  ...getFrameworkEntries("index.lit.ts", "lit"),
];

export const entries = Object.fromEntries(componentEntries);

export const cssEntries = [
  ["react/index.css", "./dist/react"],
  ["svelte/index.css", "./dist/svelte"],
  ["vanilla/index.css", "./dist/vanilla"],
  ["lit/index.css", "./dist/lit"],
] as const;
