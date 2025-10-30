import { hydrateRoot } from "react-dom/client";
import { App } from "./App.js";
import "@gyldendal/kobber-base/themes/default/tokens.css";
import "@gyldendal/kobber-base/themes/dark/tokens.css";
import "@gyldendal/kobber-components/core.css";

const container = document.getElementById("root");

if (container) {
  hydrateRoot(container, <App />);
}
