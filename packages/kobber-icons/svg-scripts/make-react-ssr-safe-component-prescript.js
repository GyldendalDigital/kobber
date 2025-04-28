import fs from "node:fs";
import { default as paths } from "./paths.cjs";

const tmpOptimizedDirectory = paths.tmpSvgsOptimized;
const tmpSvgsDirectory = paths.tmpSvgsReactSSRSafe;
const componentPrefix = "kobber-";

const cleanDirectory = directory => {
  if (fs.existsSync(directory)) {
    fs.rmSync(directory, { recursive: true });
  }
  fs.mkdirSync(directory);
};

const snakeToKebabCase = word => {
  return word
    .split("/")
    .map(snake => snake.split("_").join("-"))
    .join("/");
};

const copyIconFilesToKebabCaseForReact = () => {
  cleanDirectory(tmpSvgsDirectory);
  const fileNameArray = fs.readdirSync(tmpOptimizedDirectory);

  for (const fileName of fileNameArray) {
    fs.copyFileSync(
      `${tmpOptimizedDirectory}/${fileName}`,
      `${tmpSvgsDirectory}/${snakeToKebabCase(fileName).replace(snakeToKebabCase(componentPrefix), "")}`,
    );
  }
};

copyIconFilesToKebabCaseForReact();
