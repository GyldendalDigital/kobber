#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { createTsReferenceString } from "./utils/createTsReferenceString";
import { temporaryReposDirectory } from "./utils/fileSystem";
import { getCommandLineArguments } from "./utils/getCommandLineArguments";
// biome-ignore lint/style/useImportType: ""
import { type ImportAst } from "./utils/getImportAst";
import { loadEnv } from "./utils/loadEnv";
import { appendImportAst, getRepoOptionsFromFile, type LocalRepo } from "./utils/repo";

loadEnv();

const commandLineArguments = getCommandLineArguments<{
  out: string;
  sourceMap: string;
}>();

if (!commandLineArguments.out) {
  throw new Error("out is required");
}

const destDirectory = process.cwd();

const packageJson = readFileSync(path.join(process.cwd(), "package.json"), "utf8");

const packageNameTarget = JSON.parse(packageJson).name;

const sourceMap = commandLineArguments.sourceMap
  .split(",")
  .map(item => item.split(":"))
  .reduce<Record<string, string>>((acc, [importPath, sourcePath]) => {
    if (importPath && sourcePath) {
      acc[`${packageNameTarget}/${importPath}`] = sourcePath;
    }
    return acc;
  }, {});

const build = async () => {
  const repoOptions = getRepoOptionsFromFile(temporaryReposDirectory);

  const localRepos: LocalRepo[] = repoOptions;

  console.info("");

  const reposWithImportAst = await Promise.all(
    localRepos.map(localRepo => {
      console.info(`Scanning ${localRepo.name} for imports`);
      return appendImportAst(localRepo);
    }),
  );

  await createTsReferenceFile(reposWithImportAst);
};

const createTsReferenceFile = async (reposWithImportAst: RepoWithImportAst[]) => {
  const tsString = await createTsReferenceString(reposWithImportAst, sourceMap);
  await writeFile(path.join(destDirectory, commandLineArguments.out), tsString);
};

interface RepoWithImportAst {
  localRepo: LocalRepo;
  importAst: ImportAst;
}

(async () => {
  await build();
})();
