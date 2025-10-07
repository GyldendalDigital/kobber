import dotenv from "dotenv";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { createCsvString } from "./utils/createCsvString";
import { getCommandLineArguments } from "./utils/getCommandLineArguments";
import {
  flattenImportAst,
  getImportAst,
  type ImportAst,
  type ImportAstRow,
} from "./utils/getImportAst";
import { initDirectories } from "./utils/initDirectories";
import {
  cloneRepo,
  getRepoOptionsFromFile,
  isCloneableRepoOptions,
  type LocalRepo,
} from "./utils/repo";

dotenv.config();

interface CommandLineArguments {
  reposConfig: string;
}

const commandLineArguments: CommandLineArguments = getCommandLineArguments();

const csvHeader = ["module", "moduleVersion", "namedImport", "repoPath", "tsProject", "filePath"];

const findUsage = async () => {
  const directories = await initDirectories();

  const repoOptions = getRepoOptionsFromFile(
    commandLineArguments.reposConfig,
    directories.temporaryRepos,
  );

  console.info(`${commandLineArguments.reposConfig} contains ${repoOptions.length} repos.`);
  console.info(
    `${repoOptions
      .filter(isCloneableRepoOptions)
      .map(options => `  Cloning ${options.name} into ${options.directory}`)
      .join("\n")}\n`,
  );

  const localRepos: LocalRepo[] = repoOptions.map(options =>
    isCloneableRepoOptions(options) ? cloneRepo(options) : options,
  );

  console.info("");

  const reposWithImportAst = await Promise.all(
    localRepos.map(localRepo => {
      console.info(`Scanning ${localRepo.name} for imports`);
      return appendImportAst(localRepo);
    }),
  );

  createCsvForEachRepo(reposWithImportAst, directories.dest);

  createMergedCsv(reposWithImportAst, directories.dest);
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
  const mergedAst = reposWithImportAst.flatMap(({ importAst }) => flattenImportAst(importAst));

  const mergedCsvString = await createCsvString(csvHeader, mergedAst.map(toCsvRow));

  if (mergedCsvString) {
    await writeCsv("all", mergedCsvString, destDirectory);
    console.info(`Created CSV file for all repos`);
  }
};

interface RepoWithImportAst {
  localRepo: LocalRepo;
  importAst: ImportAst;
}

const appendImportAst = async (localRepo: LocalRepo): Promise<RepoWithImportAst> => {
  const importAst = await getImportAst({
    repoPath: localRepo.directory,
    moduleSpecifierFilter: moduleSpecifier => moduleSpecifier.startsWith("@gyldendal/kobber"),
  });
  return { localRepo, importAst };
};

const appendCsvString = async (localRepo: LocalRepo, importAst: ImportAst) => {
  const csvString = await createCsvString(csvHeader, flattenImportAst(importAst).map(toCsvRow));
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
    path.relative(absoluteTsProjectDirectory, row.file.sourceFile.getFilePath()),
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
  await findUsage();
})();
