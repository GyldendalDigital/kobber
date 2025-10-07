import { glob } from "glob";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import {
  type ImportDeclaration,
  Project,
  type SourceFile,
  type Project as TsMorphProject,
} from "ts-morph";

interface ImportStatement {
  moduleSpecifier: string;
  namedImports: string[];
}

interface File {
  sourceFile: SourceFile;
  importStatements: ImportStatement[];
}

interface PackageJsonDependency {
  packageName: string;
  version: string;
}

interface PackageJsonInfo {
  name: string;
  dependencies: PackageJsonDependency[];
}

interface TsProject {
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
  const tsconfigPaths = await glob(`${options.repoPath}/**/tsconfig.json`, {
    ignore: [`${options.repoPath}/**/node_modules/**`],
  });
  return {
    repoPath: options.repoPath,
    tsProjects: tsconfigPaths.map(path => getTsProject(path, options)),
  };
};

const getTsProject = (tsProjectPath: string, options: Options): TsProject => {
  const project = new Project({ tsConfigFilePath: tsProjectPath });
  return {
    project,
    path: tsProjectPath,
    packageJsonInfo: getPackageJsonInfo(tsProjectPath),
    files: project
      .getSourceFiles()
      .map(sourceFile => getFile(sourceFile, options))
      .filter(isDefined),
  };
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

const getFile = (sourceFile: SourceFile, options: Options): File => ({
  sourceFile,
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
  moduleSpecifier: string;
  namedImport: string;
  importAst: ImportAst;
  tsProject: TsProject;
  file: File;
}

export const flattenImportAst = (importAst: ImportAst): ImportAstRow[] => {
  return importAst.tsProjects.flatMap(tsProject => {
    return tsProject.files.flatMap(file => {
      return file.importStatements.flatMap(importStatement => {
        return importStatement.namedImports.flatMap(namedImport => {
          return {
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
