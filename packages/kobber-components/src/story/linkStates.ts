const notPseudoClassStates = ["idle"];
export const linkStates = ["idle", "active", "hover", "focus", "disabled"];
export const getPrintedState = (state: string) =>
  notPseudoClassStates.indexOf(state) ? `<code>:${state}</code>` : state;
