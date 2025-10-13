import { existsSync } from "node:fs";
import { mkdir, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const rootDirectory = path.join(__dirname, "../", "../");

export const temporaryReposDirectory = path.join(os.tmpdir(), "temporary-repos");

export const destDirectory = path.join(rootDirectory, "dest");

export const initTemporaryReposDirectory = async () => {
  return await createDirectory(temporaryReposDirectory);
};

export const initDestDirectory = async () => {
  return await createDirectory(destDirectory);
};

const createDirectory = async (directoryName: string) => {
  if (existsSync(directoryName)) {
    await rm(directoryName, { recursive: true, force: true });
  }
  await mkdir(directoryName);
  return directoryName;
};
