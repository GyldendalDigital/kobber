import { css } from "lit";

const createIconStyles = () => {
  return css`
    :host {
      display: block;
      transform: translate(1px, 1px); /* Necessary for Safari */
      width: 100%;
      height: 100%;
    }
    svg {
      display: block;
      width: var(--icon-width, 1em);
      height: var(--icon-height, 1em);
    }
  `;
};

export const _formRadioIconStyles = createIconStyles();
