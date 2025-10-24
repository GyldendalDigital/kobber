import { writeFile } from "node:fs/promises";
import path from "node:path";
import { destDirectory, initDestDirectory, temporaryReposDirectory } from "./utils/fileSystem";
import { flattenImportAst, type ImportAst, type ImportAstRow } from "./utils/getImportAst";
import { loadEnv } from "./utils/loadEnv";
import {
  appendImportAst,
  getRepoOptionsFromFile,
  type LocalRepo,
  type RepoWithImportAst,
} from "./utils/repo";
import { createCsvString } from "./utils/string";

loadEnv();

const csvHeader = ["module", "moduleVersion", "namedImport", "repoPath", "tsProject", "filePath"];

const build = async () => {
  await initDestDirectory();

  const repoOptions = getRepoOptionsFromFile(temporaryReposDirectory);

  console.info(`Found ${repoOptions.length} repos.`);

  const localRepos: LocalRepo[] = repoOptions;

  console.info("");

  const reposWithImportAst = await Promise.all(
    localRepos.map(localRepo => {
      console.info(`Scanning ${localRepo.name} for imports`);
      return appendImportAst(localRepo);
    }),
  );

  await createCsvForEachRepo(reposWithImportAst, destDirectory);

  await createMergedCsv(reposWithImportAst, destDirectory);
};

const createCsvForEachRepo = async (
  reposWithImportAst: RepoWithImportAst[],
  destDirectory: string,
) => {
  const csvStrings = await Promise.all(
    reposWithImportAst.map(({ localRepo, importAst }) => appendCsvString(localRepo, importAst)),
  );

  for (const { localRepo, csvString } of csvStrings) {
    await writeCsv(localRepo.name, csvString, destDirectory);
    console.info(`Created CSV file for ${localRepo.name}`);
  }
};

const createMergedCsv = async (reposWithImportAst: RepoWithImportAst[], destDirectory: string) => {
  const mergedAst = reposWithImportAst.flatMap(({ localRepo, importAst }) =>
    flattenImportAst(localRepo, importAst),
  );

  const mergedCsvString = await createCsvString(csvHeader, mergedAst.map(toCsvRow));

  if (mergedCsvString) {
    await writeCsv("all", mergedCsvString, destDirectory);
    console.info(`Created CSV file for all repos`);
  }
};

const appendCsvString = async (localRepo: LocalRepo, importAst: ImportAst) => {
  const csvString = await createCsvString(
    csvHeader,
    flattenImportAst(localRepo, importAst).map(toCsvRow),
  );
  return {
    localRepo,
    csvString,
  };
};

const writeCsv = async (name: string, csvString: string | undefined, destDirectory: string) => {
  if (!csvString) return;
  const csvFileName = `${name}.csv`;
  const csvPath = path.join(destDirectory, csvFileName);
  await writeFile(csvPath, csvString);
};

const toCsvRow = (row: ImportAstRow): string[] => {
  const absoluteTsProjectPath = path.resolve(row.tsProject.path);
  const absoluteTsProjectDirectory = path.dirname(absoluteTsProjectPath);
  return [
    row.moduleSpecifier,
    getModuleVersionColumn(row),
    row.namedImport,
    row.importAst.repoPath.split("/").pop() ?? row.importAst.repoPath,
    `${row.tsProject.packageJsonInfo.name}`,
    path.relative(absoluteTsProjectDirectory, row.file.originalFileName),
  ];
};

const getModuleVersionColumn = (row: ImportAstRow) => {
  const [packageOwner, packageName] = row.moduleSpecifier.split("/"); // ["@gyldendal", "kobber-base"]
  const match = row.tsProject.packageJsonInfo.dependencies.find(dependency => {
    const [dependencyOwner, dependencyName] = dependency.packageName.split("/");
    return dependencyOwner === packageOwner && dependencyName === packageName;
  });
  return match ? match.version : "Dependency missing in package.json";
};

(async () => {
  await build();
})();
