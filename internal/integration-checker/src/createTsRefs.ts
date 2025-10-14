#!/usr/bin/env node
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
  const sourceMap = await getSourceMap();
  const tsString = await createTsReferenceString(reposWithImportAst, sourceMap);
  await writeFile(path.join(destDirectory, commandLineArguments.out), tsString);
};

const getSourceMap = async () => {
  const entries = await import(`${process.cwd()}/${commandLineArguments.sourceMap}`);
  return entries.sourceMap;
};

interface RepoWithImportAst {
  localRepo: LocalRepo;
  importAst: ImportAst;
}

(async () => {
  await build();
})();
