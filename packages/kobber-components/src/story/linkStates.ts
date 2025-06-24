import { unsafeStatic, StaticValue } from "lit/static-html.js";

const notPseudoClassStates = ["idle"];
export const linkStates = ["idle", "active", "hover", "focus", "disabled"];
export const getPrintedState = (state: string) =>
  notPseudoClassStates.indexOf(state) ? (unsafeStatic(`<code>:${state}</code>`) as StaticValue) : state;
