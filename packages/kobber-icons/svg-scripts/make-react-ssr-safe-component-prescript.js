import fs from "node:fs";

const assetsSvgsDirectory = "src/assets/svgs";
const tmpOptimizedDirectory = "src/tmp/svgs-optimized";
const tmpSvgsDirectory = "src/tmp/svgs-react-ssr-safe";
const tmpIconsDirectory = "src/tmp/icons-react-ssr-safe";
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
  cleanDirectory(tmpIconsDirectory);
  const fileNameArray = fs.readdirSync(assetsSvgsDirectory);

  for (const fileName of fileNameArray) {
    fs.copyFileSync(
      `${tmpOptimizedDirectory}/${fileName}`,
      `${tmpSvgsDirectory}/${snakeToKebabCase(fileName).replace(snakeToKebabCase(componentPrefix), "")}`,
    );
  }
  cleanDirectory(tmpOptimizedDirectory);
};

copyIconFilesToKebabCaseForReact();
