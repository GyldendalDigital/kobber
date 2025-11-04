// src/main.js
import { createElement } from "react";
import ReactDOM from "react-dom/client";
import { mount } from "svelte";
//import type { App } from "./App";
import { AppReact } from "./AppReact"; // Your React main component
import AppSvelte from "./AppSvelte.svelte"; // Your Svelte main component
import "./cssImports";

const reactContainer = document.getElementById("react");
if (!reactContainer) throw new Error("Could not find react container");

ReactDOM.createRoot(reactContainer).render(createElement(AppReact));

// Mount Svelte app

const svelteContainer = document.getElementById("svelte");
if (!svelteContainer) throw new Error("Could not find svelte container");
mount(AppSvelte, { target: svelteContainer });
