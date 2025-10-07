import dotenv from "dotenv";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { execAsync, getConsoleOutput } from "./utils/execAsync";
import { getCommandLineArguments } from "./utils/getCommandLineArguments";
import { getImportAst } from "./utils/getImportAst";
import { getSimpleDiffForConsole } from "./utils/getSimpleDiffForConsole";
import { initDirectories } from "./utils/initDirectories";
import {
  cloneRepo,
  getRepoOptionsFromFile,
  isCloneableRepoOptions,
  runCommandInRepo,
  type LocalRepo,
  type RepoTestCommands,
} from "./utils/repo";

dotenv.config();

interface CommandLineArguments {
  reposConfig: string;
}

const commandLineArguments: CommandLineArguments = getCommandLineArguments();

const commands = {
  buildThisRepo:
    "cd ../ && yarn build --filter=@gyldendal/kobber-components --filter=@gyldendal/kobber-icons",
};

interface PackageToTest {
  find: string;
  replace: string;
}

const packagesToTest = [
  {
    find: "@gyldendal/kobber-components",
    replace: "../kobber-components",
  },
  {
    find: "@gyldendal/kobber-icons",
    replace: "../kobber-icons",
  },
];

const testIntegrations = async () => {
  const directories = await initDirectories();

  console.info("[testIntegration] Getting consumer repos and building Kobber...");

  const [localRepos] = await Promise.all([
    getLocalRepos(directories.temporaryRepos),
    execAsync(commands.buildThisRepo, { cwd: "../" }),
  ]);

  for (const localRepo of localRepos) {
    if (!localRepo.testCommands) {
      console.info(
        `[testIntegration] Cannot test consumer repo "${localRepo.name}", missing test commands`,
      );
      continue;
    }
    console.info(`[testIntegration] Testing consumer repo "${localRepo.name}"...`);

    const result = await testRepo(localRepo, localRepo.testCommands);

    console.info(
      `[testIntegration] Diff for repo "${result.localRepo.name}" after installing the latest version\n`,
    );
    console.info(result.diff);
  }

  writeFileSync(`${directories.dest}/console-output.log`, getConsoleOutput());
};

const getLocalRepos = async (temporaryRepoDirectory: string): Promise<LocalRepo[]> => {
  const repoOptions = getRepoOptionsFromFile(
    commandLineArguments.reposConfig,
    temporaryRepoDirectory,
  );
  return repoOptions.map(options =>
    isCloneableRepoOptions(options) ? cloneRepo(options) : options,
  );
};

const testRepo = async (localRepo: LocalRepo, testCommands: RepoTestCommands) => {
  await installRepoDependencies(localRepo, testCommands.install);

  await logDependenciesInConsumerRepo(localRepo);

  if (testCommands.prepare) {
    console.info(
      `[testIntegration] Running prepare command for "${localRepo.name}": "${testCommands.prepare}"`,
    );
    await runCommandInRepo(localRepo, testCommands.prepare);
  }

  console.info(
    `[testIntegration] Running test command for "${localRepo.name}": "${testCommands.test}"`,
  );
  const firstOutput = await runCommandInRepo(localRepo, testCommands.test);

  const restoreLocalRepo = await installKobberInLocalRepo(localRepo, testCommands);

  await logDependenciesInConsumerRepo(localRepo);

  console.info(
    `[testIntegration] Running test command again for "${localRepo.name}": "${testCommands.test}"`,
  );
  const secondOutput = await runCommandInRepo(localRepo, testCommands.test);

  await restoreLocalRepo();

  return {
    localRepo,
    diff:
      firstOutput && secondOutput
        ? getSimpleDiffForConsole(secondOutput.stdout, firstOutput.stdout, true)
        : "",
    firstOutput,
    secondOutput: "",
  };
};

const logDependenciesInConsumerRepo = async (localRepo: LocalRepo) => {
  const ast = await getImportAst({
    repoPath: localRepo.directory,
    moduleSpecifierFilter: moduleSpecifier => moduleSpecifier.startsWith("@gyldendal/kobber"),
  });
  const deps = ast.tsProjects
    .map(({ packageJsonInfo }) => {
      const deps = packageJsonInfo.dependencies
        .filter(dependency => dependency.packageName.startsWith("@gyldendal/kobber"))
        .map(dependency => `    ${dependency.packageName}@${dependency.version}`)
        .join("\n");
      return deps ? `  ${packageJsonInfo.name}:\n${deps}` : undefined;
    })
    .filter(string => string !== undefined)
    .join("\n");
  console.info(`[testIntegration] Kobber dependencies in "${localRepo.name}":\n${deps}`);
};

const installKobberInLocalRepo = async (localRepo: LocalRepo, testCommands: RepoTestCommands) => {
  const ast = await getImportAst({
    repoPath: localRepo.directory,
    moduleSpecifierFilter: moduleSpecifier => moduleSpecifier.startsWith("@gyldendal/kobber"),
  });

  const restorePackageJsons = ast.tsProjects.map(project =>
    temporarilyInjectIntoTsProject(path.dirname(project.path), packagesToTest),
  );

  await installRepoDependencies(localRepo, testCommands.install);

  const restore = async () => {
    restorePackageJsons.forEach(restore => {
      restore?.();
    });
    await runCommandInRepo(localRepo, testCommands.install);
  };

  return restore;
};

const installRepoDependencies = async (localRepo: LocalRepo, installCommand: string) => {
  console.info(
    `[testIntegration] Running install command for "${localRepo.name}": "${installCommand}"`,
  );
  await runCommandInRepo(localRepo, installCommand);
};

const temporarilyInjectIntoTsProject = (projectPath: string, packagesToTest: PackageToTest[]) => {
  const packageJsonPath = path.join(projectPath, "package.json");
  if (!existsSync(packageJsonPath)) {
    return;
  }

  const packageJsonBackup = readFileSync(packageJsonPath, "utf-8");

  const packageJson = JSON.parse(packageJsonBackup);
  packageJson.dependencies = packageJson.dependencies || {};

  packagesToTest.forEach(packageToTest => {
    replacePackage(packageJson, packageToTest, projectPath);
  });

  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  const restore = () => {
    writeFileSync(packageJsonPath, packageJsonBackup);
  };

  return restore;
};

const replacePackage = (
  packageJson: { dependencies: Record<string, string | undefined> },
  { find, replace }: PackageToTest,
  projectPath: string,
) => {
  if (packageJson.dependencies?.[find]) {
    packageJson.dependencies[find] = `file:${path.relative(projectPath, replace)}`;
  }
};

(async () => {
  await testIntegrations();
})();
