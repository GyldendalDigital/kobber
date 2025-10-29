import htm from "htm";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";
import vhtml from "vhtml";

const html = htm.bind(vhtml);

export function createElement(tag: string, props: Record<string, any> = {}, ...children: any[]) {
  const Tag = unsafeStatic(tag);

  console.log("createElement", {
    tag,
    props,
    children,
  });
  const attrs = getAttributes(props);
  const events = getEvents(props);
  return staticHtml`<${Tag} ${unsafeStatic(attrs)} ${events}>${children}</${Tag}>`;
}

const getAttributes = (props: Record<string, any> = {}) => {
  if (!props) return "";
  return Object.entries(props)
    .filter(([key, value]) => !key.startsWith("on") && typeof value !== "function")
    .map(([key, value]) => `${key}="${String(value)}"`)
    .join(" ");
};

const getEvents = (props: Record<string, any> = {}) => {
  if (!props) return "";
  Object.entries(props)
    .filter(([key]) => key.startsWith("on") && typeof props[key] === "function")
    .map(([key, handler]) => {
      const eventName = key.slice(2).toLowerCase();
      return html` @${unsafeStatic(eventName)}=${handler}`;
    });
};

export const litHtml = htm.bind(createElement);
