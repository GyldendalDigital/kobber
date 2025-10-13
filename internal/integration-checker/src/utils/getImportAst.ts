import { reduceToObject } from "./array";
import { glob } from "glob";
import { existsSync, readFileSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { svelte2tsx } from "svelte2tsx";
import {
  type ImportDeclaration,
  Project,
  type SourceFile,
  type Project as TsMorphProject,
} from "ts-morph";
import type { LocalRepo } from "./repo";

interface ImportStatement {
  moduleSpecifier: string;
  namedImports: string[];
}

interface File {
  sourceFile: SourceFile;
  originalFileName: string;
  importStatements: ImportStatement[];
}

export interface PackageJsonDependency {
  packageName: string;
  version: string;
}

interface PackageJsonInfo {
  name: string;
  dependencies: PackageJsonDependency[];
}

export interface TsProject {
  project: TsMorphProject;
  path: string;
  packageJsonInfo: PackageJsonInfo;
  files: File[];
}

export interface ImportAst {
  repoPath: string;
  tsProjects: TsProject[];
}

interface Options {
  repoPath: string;
  moduleSpecifierFilter: (moduleSpecifier: string) => boolean;
}

// Builds an abstract syntax tree of module imports

export const getImportAst = async (options: Options): Promise<ImportAst> => {
  if (!existsSync(options.repoPath)) {
    throw new Error(`Repo path ${options.repoPath} does not exist`);
  }
  const tsconfigPaths = await glob(`${options.repoPath}/**/tsconfig.json`, {
    ignore: [`${options.repoPath}/**/node_modules/**`],
  });
  return {
    repoPath: options.repoPath,
    tsProjects: await Promise.all(
      tsconfigPaths.map(path => getTsProject(options.repoPath, path, options)),
    ),
  };
};

const getTsProject = async (
  repoPath: string,
  tsProjectPath: string,
  options: Options,
): Promise<TsProject> => {
  const project = new Project({ tsConfigFilePath: tsProjectPath });
  const appendedFiles = await appendSvelteFiles(repoPath, project);
  return {
    project,
    path: tsProjectPath,
    packageJsonInfo: getPackageJsonInfo(tsProjectPath),
    files: project
      .getSourceFiles()
      .map(sourceFile => getFile(sourceFile, options, appendedFiles[sourceFile.getFilePath()]))
      .filter(isDefined),
  };
};

// Svelte files are not parsed by default.
// They must be added manually to the ts project.

const appendSvelteFiles = async (repoPath: string, project: Project) => {
  const appendedFiles = await Promise.all(
    glob.sync("**/*.svelte", { cwd: repoPath, absolute: true }).map(async filePath => {
      try {
        const svelteSource = await readFile(filePath, "utf8");
        const tsx = svelte2tsx(svelteSource).code;
        const rel = path.relative(repoPath, filePath).replace(/\.svelte$/, ".tsx");
        const outDir = path.join(os.tmpdir(), repoPath, "converted-svelte");
        const tempPath = path.join(outDir, rel);
        await mkdir(path.dirname(tempPath), { recursive: true });
        await writeFile(tempPath, tsx, "utf8");
        project.addSourceFileAtPath(tempPath);
        return { [tempPath]: filePath };
      } catch {
        console.error(`Error converting ${filePath} to TSX`);
      }
    }),
  );
  return appendedFiles.filter(isDefined).reduce(reduceToObject, {});
};

const getPackageJsonInfo = (tsProjectPath: string): PackageJsonInfo => {
  const projectDirectory = path.dirname(tsProjectPath);
  const packageJsonPath = path.join(projectDirectory, "package.json");
  if (!existsSync(packageJsonPath)) {
    return {
      name: "",
      dependencies: [],
    };
  }
  const string = readFileSync(packageJsonPath, "utf8");
  const packageJson = JSON.parse(string);
  return {
    name: packageJson.name ?? "",
    dependencies: Object.entries(packageJson.dependencies ?? []).map(([packageName, version]) => ({
      packageName,
      version: typeof version === "string" ? version : "",
    })),
  };
};

const getFile = (sourceFile: SourceFile, options: Options, originalFileName?: string): File => ({
  sourceFile,
  originalFileName: originalFileName ?? sourceFile.getFilePath(),
  importStatements: sourceFile
    .getImportDeclarations()
    .map(importDeclaration => getImportStatement(importDeclaration, options))
    .filter(isDefined),
});

const getImportStatement = (
  importDeclaration: ImportDeclaration,
  options: Options,
): ImportStatement | undefined => {
  const moduleSpecifier = importDeclaration.getModuleSpecifierValue();
  if (options.moduleSpecifierFilter(moduleSpecifier)) {
    const namedImports = importDeclaration.getNamedImports().map(n => n.getName());
    return {
      moduleSpecifier,
      namedImports,
    };
  }
};

export interface ImportAstRow {
  localRepo: LocalRepo;
  moduleSpecifier: string;
  namedImport: string;
  importAst: ImportAst;
  tsProject: TsProject;
  file: File;
}

export const flattenImportAst = (localRepo: LocalRepo, importAst: ImportAst): ImportAstRow[] => {
  return importAst.tsProjects.flatMap(tsProject => {
    return tsProject.files.flatMap(file => {
      return file.importStatements.flatMap(importStatement => {
        return importStatement.namedImports.flatMap(namedImport => {
          return {
            localRepo,
            importAst,
            tsProject,
            file,
            moduleSpecifier: importStatement.moduleSpecifier,
            namedImport,
          };
        });
      });
    });
  });
};

const isDefined = <T>(value: T | undefined): value is T => value !== undefined;
