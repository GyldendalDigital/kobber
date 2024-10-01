import { css } from "lit";

export const dividerBaseStyles = css`
  host: {
    display: block;
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: var(--divider-main-background-color, #ccc);
  }

  .divider.main {
    background-color: var(--divider-main-background-color);
  }

  .divider.supplemental {
    background-color: var(--divider-supplemental-background-color);
  }
`;
