import dotenv from "dotenv";
import { glob } from "glob";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { type ImportDeclaration, Project, type SourceFile } from "ts-morph";
import { cloneRepo, type RepoOptions } from "./utils/cloneRepo";
import { createCsvString } from "./utils/createCsvString";
import { initDirectories } from "./utils/initDirectories";

dotenv.config();

interface Reference {
  moduleSpecifier: string;
  namedImport: string;
  repoPath: string;
  tsProjectPath: string;
  filePath: string;
}

const csvHeader: (keyof Reference)[] = [
  "moduleSpecifier",
  "namedImport",
  "tsProjectPath",
  "filePath",
];

const scanRepo = async (repoPath: string) => {
  const tsconfigPaths = await glob(`${repoPath}/**/tsconfig.json`, {
    ignore: [`${repoPath}/**/node_modules/**`],
  });
  return tsconfigPaths.flatMap(path => scanRepoPackage(path, { repoPath }));
};

const scanRepoPackage = (tsProjectPath: string, reference: Pick<Reference, "repoPath">) => {
  const project = new Project({ tsConfigFilePath: tsProjectPath });
  return project
    .getSourceFiles()
    .flatMap(file =>
      scanFile(file, {
        ...reference,
        tsProjectPath: tsProjectPath.replace(reference.repoPath, "").replace("tsconfig.json", ""),
      }),
    )
    .filter(isDefined);
};

const scanFile = (file: SourceFile, reference: Pick<Reference, "repoPath" | "tsProjectPath">) => {
  return file
    .getImportDeclarations()
    .flatMap(importDeclaration =>
      scanImports(importDeclaration, {
        ...reference,
        filePath: file.getFilePath().replace(reference.repoPath, ""),
      }),
    )
    .filter(isDefined);
};

const scanImports = (
  importDeclaration: ImportDeclaration,
  reference: Pick<Reference, "repoPath" | "tsProjectPath" | "filePath">,
) => {
  const moduleSpecifier = importDeclaration.getModuleSpecifierValue();
  if (moduleSpecifier.startsWith("@gyldendal/kobber")) {
    const namedImports = importDeclaration.getNamedImports().map(n => n.getName());
    return namedImports.map(namedImport =>
      toReference(namedImport, {
        ...reference,
        moduleSpecifier,
      }),
    );
  }
};

const toReference = (
  namedImport: string,
  reference: Pick<Reference, "repoPath" | "tsProjectPath" | "filePath" | "moduleSpecifier">,
): Reference => ({
  ...reference,
  namedImport,
});

const isDefined = <T>(value: T | undefined): value is T => value !== undefined;

const run = async () => {
  const directories = await initDirectories();

  if (!process.env.AZURE_USERNAME || !process.env.AZURE_ACCESS_TOKEN) {
    throw new Error("Azure environment variables missing");
  }

  const repoOptions: RepoOptions[] = [
    {
      name: "skolestudio",
      url: `https://${process.env.AZURE_USERNAME}:${encodeURIComponent(process.env.AZURE_ACCESS_TOKEN)}@dev.azure.com/gyldendaldigital/Skolestudio/_git/Skolestudio`,
      branch: "master",
      directory: path.join(directories.temporaryRepos, "skolestudio"),
    },
  ];

  console.info(`Cloning ${repoOptions.length} repos`);

  for (const options of repoOptions) {
    console.info(`Cloning ${options.name}...`);

    const clonedRepo = cloneRepo(options);

    console.info(`Scanning ${clonedRepo.name} for imports`);

    const result = await scanRepo(clonedRepo.directory);

    const csv = await createCsvString(csvHeader, result);

    if (csv) {
      const csvFileName = `${clonedRepo.name}.csv`;
      const csvPath = path.join(directories.dest, csvFileName);
      await writeFile(csvPath, csv);
      console.info(`Created CSV file for ${clonedRepo.name}: ${csvFileName}`);
    }
  }
};

(async () => {
  await run();
})();
