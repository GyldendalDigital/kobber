import { html } from "lit";

const notPseudoClassStates = ["idle"];
export const linkStates = ["idle", "active", "hover", "focus", "disabled"];
export const getPrintedState = (state: string) =>
  notPseudoClassStates.indexOf(state) ? html`<code>:${state}</code>` : "";
