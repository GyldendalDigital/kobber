import * as fs from "fs";
import { themeDirectory } from "../types";

export const cleanFolder = () => {
  if (fs.existsSync(themeDirectory)) {
    fs.rmdirSync(themeDirectory, { recursive: true });
  } else {
    fs.mkdirSync(themeDirectory);
  }
};
