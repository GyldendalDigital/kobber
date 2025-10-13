import dotenv from "dotenv";
import path from "node:path";

const pathToThisPackage = path.join(__dirname, "../../");

export const loadEnv = () =>
  dotenv.config({ path: path.join(pathToThisPackage, ".env") });
