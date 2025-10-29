import htm from "htm";
import { html as reactHtml } from "htm/react";
import vhtml from "vhtml";
import { litHtml } from "./utils/litHtm";

const stringHtml = htm.bind(vhtml);

export const render = (type: string) => getRenderer(type);

const getRenderer = (type: string) => {
  switch (type) {
    case "string":
      return stringHtml;
    case "react":
      return reactHtml;
    case "lit":
      return litHtml;
    default:
      return stringHtml;
  }
};
