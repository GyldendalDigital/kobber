import { existsSync } from "node:fs";
import { mkdir, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const rootDirectory = path.join(__dirname, "../", "../");

export const initDirectories = async () => ({
  dest: await createDirectory(path.join(rootDirectory, "dest")),
  temporaryRepos: await createDirectory(path.join(os.tmpdir(), "temporary-repos")),
});

const createDirectory = async (directoryName: string) => {
  if (existsSync(directoryName)) {
    await rm(directoryName, { recursive: true, force: true });
  }
  await mkdir(directoryName);
  return directoryName;
};
