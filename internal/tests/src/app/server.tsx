import "./domShim.js";
import { renderToString } from "react-dom/server";
import { App } from "./App.js";
import { readFileSync } from "node:fs";

const htmlTemplate = readFileSync("./src/app/index.html", "utf-8");

export const render = () => {
  const html = renderToString(<App />);
  return htmlTemplate.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );
};
