import fs from "node:fs";

const assetsDirectory = "src/assets";
const assetsSvgsDirectory = `${assetsDirectory}/svgs`;
const tmpAssetsDirectory = `${assetsDirectory}/tmp-svgs-react-ssr-safe`;
const tmpIconsDirectory = "src/icon/tmp-icons-react-ssr-safe";

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
  cleanDirectory(tmpAssetsDirectory);
  cleanDirectory(tmpIconsDirectory);
  const fileNameArray = fs.readdirSync(assetsSvgsDirectory);

  for (const fileName of fileNameArray) {
    const symbolName = fileName.substring(0, fileName.indexOf(".svg"));

    fs.copyFileSync(
      `${assetsSvgsDirectory}/${symbolName}.svg`,
      `${tmpAssetsDirectory}/${snakeToKebabCase(symbolName)}.svg`,
    );
  }
};

copyIconFilesToKebabCaseForReact();
