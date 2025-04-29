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

/*
 * Copy optimized svgs from svg-sprite output directory to temporary directory,
 * that acts as input directory for svg-jsx-converter.
 * Also, filenames remove their "kobber-" prefix (which is not needed for
 * react), and convert to kebab-case (which is required for svg-jsx-converter).
 */
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
