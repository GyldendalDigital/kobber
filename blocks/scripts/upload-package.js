import fs from "node:fs";
import path from "node:path";
// import axios from "axios"
import { readFile } from "fs/promises";
import FormData from "form-data";
import chalk from "chalk";

import { hash, getArgs, baseUrl, getBearerToken } from "./utils.js";

async function main() {
  const args = getArgs();
  const bearerToken = await getBearerToken();
  const packagePath = `../../blocks/${args.package}`;

  if (!fs.existsSync(packagePath)) {
    console.error(`Directory "${packagePath}" does not exist!`);
    process.exit(2);
  }

  const infoUrl = path.join(packagePath, "info.json");

  if (!fs.existsSync(infoUrl)) {
    console.error(chalk.bgYellow(`Missing info.json in ${packagePath}`));
    return undefined;
  }

  const blockInfo = JSON.parse(await readFile(infoUrl));
  const filePackageName = blockInfo.filePackageName;
  const filePackageId = blockInfo.filePackageId;
  const fileName = blockInfo.name;

  // If we did not supply a 'filePackageId' in 'info.json', stop and return an id based on the 'filePackageName'
  if (!filePackageId || filePackageId.trim() === "") {
    let tempFilePackageId = hash(filePackageName);
    console.error(chalk.redBright("ERROR!"));
    console.error(`Missing filePackageId in ${infoUrl}.`);
    console.error(
      `Generated id is ${chalk.magentaBright(
        tempFilePackageId
      )}\nAdd this id to the package's info.json:\n`
    );
    try {
      const data = fs.readFileSync(infoUrl, "utf8");
      const infoJSON = JSON.parse(data);
      console.log(JSON.stringify(infoJSON, null, 2));
    } catch (error) {
      console.error("Error parsing the JSON data", error);
    }
    return;
  }

  // Ensure that we have built the component
  const distPath = path.join(packagePath, "dist");
  const filePath = path.join(distPath, `${fileName}.js`);

  if (!fs.existsSync(filePath)) {
    console.error(
      `File "${fileName}.js" does not exist! Remember to build your package before attempting to upload.`
    );
    return;
  }

  // Ensure that we have generated a schema
  const schema = path.join(packagePath, "schema.json");

  if (!fs.existsSync(schema)) {
    console.error(chalk.redBright("ERROR!"));
    console.error(`"${schema}" does not exist!\nRun ${chalk.magentaBright(`node generate-schema.js --package=${args.package}`)} to generate a schema.`);
    return;
  }

  console.log("Using package name: " + filePackageName);
  console.log("Using package id: " + filePackageId);
  console.log("File to upload: " + filePath);

  const url = `${baseUrl}/tenants/Edu/file-packages/${filePackageId}?name=${filePackageName}`;
  var body = new FormData();
  const buffer = fs.readFileSync(filePath);

  body.append(fileName, buffer, {
    filename: `${fileName}.js`,
    contentType: "application/javascript",
  });

  const response = await axios.put(url, body, {
  	headers: {
  		'Content-Type': 'multipart/form-data',
  		Authorization: `Bearer ${bearerToken}`
  	}
  });

  if (response.status !== 200) {
  	console.error(`Received non-200 status code from CMS: ${response.status}`);
  	console.error(JSON.stringify(response.data));
  	return;
  }

  console.log(`Successfully updated file-package ${filePackageId}. New revision is ${response.data.newRevisionId}`);
}

main();
