import { basename } from "node:path";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export const getVanillaExtractPlugin = () => {
  return vanillaExtractPlugin({
    identifiers: ({ filePath, debugId: customPrefix, hash }) =>
      getPrettyClassName(filePath, customPrefix ?? hash),
  });
};

const getPrettyClassName = (filePath: string, customPrefix: string) => {
  const [fileNameRoot] = basename(filePath).split(".");
  const dashedString = fileNameRoot ?? "";
  const hashed = `${dashedString}-${customPrefix}`;
  return `kobber-${camelCaseToDashed(hashed)}`;
};

const camelCaseToDashed = (value: string) => value.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);
