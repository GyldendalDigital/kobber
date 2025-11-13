import { createElement } from "react";
import ReactDOM from "react-dom/client";
import { mount } from "svelte";
import { AppReact } from "./AppReact";
import AppSvelte from "./AppSvelte.svelte";
import "./cssImports";

const reactContainer = document.getElementById("react");
if (!reactContainer) throw new Error("Could not find react container");

ReactDOM.createRoot(reactContainer).render(createElement(AppReact));

const svelteContainer = document.getElementById("svelte");
if (!svelteContainer) throw new Error("Could not find svelte container");
mount(AppSvelte, { target: svelteContainer });
