import { type Dirent, readdirSync, readFileSync, writeFileSync } from "node:fs";
import cssnano from "cssnano";
import postcss from "postcss";
import pxtorem from "postcss-pxtorem";

type File = Dirent<string>;

type Env = "production" | "development";

export const postProcessCss = async (env: Env) => {
  const stylesheetFiles = readdirSync("./dist/react", {
    withFileTypes: true,
    recursive: true,
  }).filter(isStylesheet);

  const processedStylesheets = await Promise.all(
    stylesheetFiles.map(file => processCss(file, env)),
  );

  return processedStylesheets.map(([, css]) => css).join("\n");
};

const isStylesheet = (file: File) => file.name.endsWith(".css");

const developmentPlugins = [pxtorem()];

const productionPlugins = [pxtorem(), cssnano({ preset: "default" })];

const processCss = async (file: File, env?: Env): Promise<[File, string]> => {
  const raw = read(file);
  const processed = (
    await postcss(env === "production" ? productionPlugins : developmentPlugins).process(raw, {
      from: undefined,
    })
  ).css;
  write(file, processed);
  return [file, processed];
};

const read = (file: File) => readFileSync(`${file.parentPath}/${file.name}`, "utf-8");

const write = (file: File, css: string) => writeFileSync(`${file.parentPath}/${file.name}`, css);
