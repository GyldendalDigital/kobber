import ts from "typescript";
import { reduceToObject } from "./array";
import {
  flattenImportAst,
  type PackageJsonDependency,
  type TsProject,
  type ImportAst,
  type ImportAstRow,
} from "./getImportAst";
// biome-ignore lint/style/useImportType: ""
import { type LocalRepo } from "./repo";
import { toFixedWidth } from "./string";

interface RepoWithImportAst {
  localRepo: LocalRepo;
  importAst: ImportAst;
}

type SourceMap = Record<string, string>;

type ImportVariableNames = Record<string, string>;

export const createTsReferenceString = async (
  repos: RepoWithImportAst[],
  sourceMap: SourceMap
) => {
  const rows = repos.flatMap(({ localRepo, importAst }) =>
    flattenImportAst(localRepo, importAst)
  );

  const importVariableNames: ImportVariableNames = Object.keys(sourceMap)
    .map((moduleSpecifier, index) => ({
      [moduleSpecifier]: `m${index}`,
    }))
    .reduce(reduceToObject, {});

  const importDeclarationsMap = getImportDeclarationsMap(rows);

  const referenceMap = getReferenceMap(rows, sourceMap);

  const importDeclarationsCode = [...importDeclarationsMap.entries()]
    .filter(([, namedImports]) => namedImports.length > 0)
    .filter(([moduleName]) => moduleName in sourceMap)
    .map(([moduleName]) =>
      importStatementTemplate(moduleName, sourceMap, importVariableNames)
    )
    .join("\n");

  const stringifiedTsObjects = [...referenceMap.entries()].map(
    ([namedImport, rows]) =>
      referenceRecordTemplate(namedImport, rows, importVariableNames)
  );

  const code = `
${importDeclarationsCode}
${referenceVariableTemplate(stringifiedTsObjects, repos, sourceMap)}  
  `;
  return formatTsWithTsPrinter(code);
};

const getImportDeclarationsMap = (rows: ImportAstRow[]) => {
  const map = new Map<string, string[]>();
  for (const row of rows) {
    upsertMap(map, row.moduleSpecifier, [row.namedImport], (existing) => [
      ...existing,
      row.namedImport,
    ]);
  }
  return map;
};

const getReferenceMap = (rows: ImportAstRow[], sourceMap: SourceMap) => {
  const map = new Map<string, ImportAstRow[]>();
  for (const row of rows) {
    if (!(row.moduleSpecifier in sourceMap)) {
      continue;
    }
    upsertMap(map, row.namedImport, [row], (existing) => [...existing, row]);
  }
  return map;
};

// Example return value:
// import * as m1 from "@gyldendal/kobber-components/react";

const importStatementTemplate = (
  moduleName: string,
  sourceMap: SourceMap,
  importVariableNames: ImportVariableNames
) => {
  const source = sourceMap[moduleName as keyof typeof sourceMap] ?? moduleName;
  const importVariableName = importVariableNames[moduleName];
  return `import * as ${importVariableName} from "${source}";`;
};

// Return value:
// const references = { ... };

const referenceVariableTemplate = (
  objects: string[],
  repos: RepoWithImportAst[],
  sourceMap: SourceMap
) => {
  const stringifiedSummary = repos
    .map((repo) => summarizeDependencies(repo, sourceMap))
    .join("\n")
    .trim();
  return `
/**
 * References:
 * 
 ${stringifiedSummary}
 */

export const references = {
  ${objects.join("\n")}
}
`;
};

const summarizeDependencies = (
  { localRepo, importAst }: RepoWithImportAst,
  sourceMap: SourceMap
) => {
  const dependencyStrings = importAst.tsProjects.flatMap((tsProject) =>
    tsProject.packageJsonInfo.dependencies
      .filter((dependency) => dependencyIsInSourceMap(dependency, sourceMap))
      .map((dependency) =>
        summarizeDependency(localRepo, tsProject, dependency)
      )
  );
  if (dependencyStrings.length === 0) return "";
  return dependencyStrings.join("\n");
};

const summarizeDependency = (
  localRepo: LocalRepo,
  tsProject: TsProject,
  dependency: PackageJsonDependency
) =>
  ` * ${toFixedWidth(localRepo.name, 16)} -> ${toFixedWidth(
    tsProject.packageJsonInfo.name,
    16
  )} -> ${dependency.packageName}@${dependency.version}`;

const dependencyIsInSourceMap = (
  dependency: PackageJsonDependency,
  sourceMap: SourceMap
) =>
  Object.keys(sourceMap).some((key) => key.startsWith(dependency.packageName));

// Return value:
// const {"Button": { symbol: m1.Button } };

const referenceRecordTemplate = (
  namedImport: string,
  rows: ImportAstRow[],
  importVariableNames: ImportVariableNames
) => `
"${namedImport}": [${rows
  .map((row) => referenceObjectTemplate(row, importVariableNames))
  .join(",\n")}],
`;

// Return value:
// const { symbol: m1.Button } };

const referenceObjectTemplate = (
  row: ImportAstRow,
  importVariableNames: ImportVariableNames
) => {
  const symbol = row.namedImport;
  const repoName = row.localRepo.name;
  const packageName = row.tsProject.packageJsonInfo.name;
  const importVariableName = importVariableNames[row.moduleSpecifier];
  const dependency = row.tsProject.packageJsonInfo.dependencies.find(
    (dependency) => row.moduleSpecifier.startsWith(dependency.packageName)
  );
  return `
/**
 * Imported symbol:   ${symbol}
 * Installed package: ${dependency?.packageName}@${dependency?.version}
 * Repo:              ${repoName}
 * Repo package:      ${packageName}
 * 
 * @see file://${row.file.originalFileName}
 */
{
  symbol: ${importVariableName}.${symbol}
}`;
};

const formatTsWithTsPrinter = (code: string): string => {
  const sf = ts.createSourceFile(
    "temp.ts",
    code,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  );
  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.CarriageReturnLineFeed,
  });
  return printer.printFile(sf);
};

const upsertMap = <K, V>(
  map: Map<K, V>,
  key: K,
  insert: V,
  upsert: (existing: V) => V
): V => {
  const existing = map.get(key);
  const nextValue = existing ? upsert(existing) : insert;
  map.set(key, nextValue);
  return nextValue;
};
