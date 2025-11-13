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

export const cssEntries = Object.fromEntries(getFrameworkEntries("css.ts", "css"));

export const reactListFile = "index.react.ts";

const reactEntries = getFrameworkEntries("index.react.tsx", "react");

const svelteEntries = getFrameworkEntries("index.svelte.ts", "svelte");

export const entries = Object.fromEntries([...reactEntries, ...svelteEntries]);
