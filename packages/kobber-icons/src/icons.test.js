import fs from "node:fs";

if (fs.existsSync("./react/index.js")) {
  console.info(`✔︎ react icons created`);
} else {
  throw new Error("❌ react icons not created correctly");
}

if (fs.existsSync("./web-components/index.js")) {
  console.info(`✔︎ web component icons created`);
} else {
  throw new Error("❌ web component icons not created correctly");
}
