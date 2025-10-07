import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";
import { execAsync } from "./execAsync";

export interface RepoTestCommands {
  prepare?: string;
  install: string;
  test: string;
}

export interface LocalRepoOptions {
  name: string;
  directory: string;
  testCommands?: RepoTestCommands;
}

export interface CloneableRepoOptions {
  name: string;
  url: string;
  branch: string;
  directory: string;
  clone: boolean;
  testCommands?: RepoTestCommands;
}

export interface LocalRepo {
  name: string;
  directory: string;
  testCommands?: RepoTestCommands;
}

export const getRepoOptionsFromFile = (
  filePath: string,
  temporaryReposDirectory: string,
): (LocalRepoOptions | CloneableRepoOptions)[] => {
  const jsonString = readFileSync(filePath, "utf-8");
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
        testCommands: template.testCommands,
      };
    }
    return {
      name: template.name,
      directory: template.directory,
      testCommands: template.testCommands,
    };
  });
};

export const cloneRepo = (options: CloneableRepoOptions): LocalRepo => {
  const { name, url, branch, directory } = options;
  execSync(`git clone --depth 1 --branch ${branch} ${url} ${directory}`, { stdio: "inherit" });
  return {
    name,
    directory,
    testCommands: options.testCommands,
  };
};

export const isCloneableRepoOptions = (
  repo: LocalRepoOptions | CloneableRepoOptions,
): repo is CloneableRepoOptions => (repo as CloneableRepoOptions).url !== undefined;

export const runCommandInRepo = async (localRepo: LocalRepo, command: string) => {
  const fullCommand = `
    cd ${localRepo.directory} &&
    ${command}
    `;
  return await execAsync(fullCommand);
};
