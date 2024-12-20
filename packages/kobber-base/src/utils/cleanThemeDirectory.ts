import * as fs from "fs";
import { themeDirectory } from "../types";

export const cleanThemeDirectory = () => {
  if (fs.existsSync(themeDirectory)) {
    fs.rmSync(themeDirectory, { recursive: true });
  } else {
    fs.mkdirSync(themeDirectory);
  }
};
