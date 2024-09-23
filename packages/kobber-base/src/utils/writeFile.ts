import * as fs from "fs";

export const writeJsonToFile = (filePath: string, json: any) => {
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
};
