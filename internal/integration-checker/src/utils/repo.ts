import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { getImportAst, type ImportAst } from "./getImportAst";

const pathToThisPackage = path.join(__dirname, "../../");

interface LocalRepoOptions {
  name: string;
  directory: string;
}

interface CloneableRepoOptions {
  name: string;
  url: string;
  branch: string;
  directory: string;
  clone: boolean;
}

export interface LocalRepo {
  name: string;
  directory: string;
}

export const getRepoOptionsFromFile = (
  temporaryReposDirectory: string,
): (LocalRepoOptions | CloneableRepoOptions)[] => {
  const jsonString = readFileSync(getConfigFilePath(), "utf-8");
  const json = JSON.parse(jsonString) as (CloneableRepoOptions | LocalRepoOptions)[];

  return json.map(template => {
    if (
      typeof process.env.AZURE_USERNAME !== "string" ||
      typeof process.env.AZURE_ACCESS_TOKEN !== "string" ||
      typeof process.env.GITHUB_USERNAME !== "string" ||
      typeof process.env.GITHUB_ACCESS_TOKEN !== "string"
    ) {
      throw new Error("Credentails are missing");
    }

    if (isCloneableRepoOptions(template)) {
      return {
        name: template.name,
        url: template.url
          .replaceAll("AZURE_USERNAME", process.env.AZURE_USERNAME)
          .replaceAll("AZURE_ACCESS_TOKEN", process.env.AZURE_ACCESS_TOKEN)
          .replaceAll("GITHUB_USERNAME", process.env.GITHUB_USERNAME)
          .replaceAll("GITHUB_ACCESS_TOKEN", process.env.GITHUB_ACCESS_TOKEN),
        branch: template.branch,
        directory: path.join(temporaryReposDirectory, template.directory),
      };
    }
    return {
      name: template.name,
      directory: template.directory,
    };
  });
};

const getConfigFilePath = () => {
  if (typeof process.env.REPOS_JSON !== "string") {
    throw new Error("Repo json file is missing");
  }

  const configFilePath = `${pathToThisPackage}/${process.env.REPOS_JSON}`;

  if (!existsSync(configFilePath)) {
    throw new Error(`Could not find ${configFilePath}`);
  }

  return configFilePath;
};

export const cloneRepo = (options: CloneableRepoOptions): LocalRepo => {
  const { name, url, branch, directory } = options;
  execSync(`git clone --depth 1 --branch ${branch} ${url} ${directory}`, {
    stdio: "inherit",
  });
  return {
    name,
    directory,
  };
};

export const isCloneableRepoOptions = (
  repo: LocalRepoOptions | CloneableRepoOptions,
): repo is CloneableRepoOptions => (repo as CloneableRepoOptions).url !== undefined;

export interface RepoWithImportAst {
  localRepo: LocalRepo;
  importAst: ImportAst;
}

export const appendImportAst = async (localRepo: LocalRepo): Promise<RepoWithImportAst> => {
  const importAst = await getImportAst({
    repoPath: localRepo.directory,
    moduleSpecifierFilter: moduleSpecifier => moduleSpecifier.startsWith("@gyldendal/kobber"),
  });
  return { localRepo, importAst };
};
