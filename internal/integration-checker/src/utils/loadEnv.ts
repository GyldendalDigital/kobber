import path from "node:path";
import dotenv from "dotenv";

const pathToThisPackage = path.join(__dirname, "../../");

export const loadEnv = () => dotenv.config({ path: path.join(pathToThisPackage, ".env") });
