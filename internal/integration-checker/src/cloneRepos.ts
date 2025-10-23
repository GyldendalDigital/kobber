import { initTemporaryReposDirectory } from "./utils/fileSystem";
import { loadEnv } from "./utils/loadEnv";
import {
  cloneRepo,
  getRepoOptionsFromFile,
  isCloneableRepoOptions,
  type LocalRepo,
} from "./utils/repo";

loadEnv();

const cloneRepos = async () => {
  const temporaryReposDirectory = await initTemporaryReposDirectory();

  const repoOptions = getRepoOptionsFromFile(temporaryReposDirectory);

  console.info(`Found ${repoOptions.length} repos.`);
  console.info(
    `${repoOptions
      .filter(isCloneableRepoOptions)
      .map(options => `  Cloning ${options.name} into ${options.directory}`)
      .join("\n")}\n`,
  );

  const localRepos: LocalRepo[] = repoOptions.map(options =>
    isCloneableRepoOptions(options) ? cloneRepo(options) : options,
  );

  console.info(
    `${localRepos
      .map(localRepo => `  Repo ${localRepo.name} exists at ${localRepo.directory}`)
      .join("\n")}\n`,
  );
};

(async () => {
  await cloneRepos();
})();
