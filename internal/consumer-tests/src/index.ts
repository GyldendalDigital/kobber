import { createElement } from "react";
import ReactDOM from "react-dom/client";
import { mount } from "svelte";
import { AppReact } from "./AppReact";
import "./cssImports";

console.log("###");

const reactContainer = document.getElementById("react");
if (!reactContainer) throw new Error("Could not find react container");

ReactDOM.createRoot(reactContainer).render(createElement(AppReact));
