import { execSync } from "node:child_process";

export interface RepoOptions {
  name: string;
  url: string;
  branch: string;
  directory: string;
}

export const cloneRepo = (options: RepoOptions) => {
  const { url, branch, directory } = options;
  execSync(`git clone --depth 1 --branch ${branch} ${url} ${directory}`, { stdio: "inherit" });
  return {
    ...options,
    directory,
  };
};
