import { css } from "lit";

const createIconStyles = () => {
  return css`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
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

export const formCheckedIconStyles = createIconStyles();
