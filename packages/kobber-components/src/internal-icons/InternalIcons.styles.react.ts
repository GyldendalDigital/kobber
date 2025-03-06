import { css } from "lit";

const createIconStyles = () => {
  return css`
    svg {
      display: block;
      width: var(--icon-width, 1em);
      height: var(--icon-height, 1em);
    }
  `;
};

export const internalIconsStyles = createIconStyles();
