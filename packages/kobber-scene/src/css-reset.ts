import { css } from "lit";

export const cssReset = css`
  :host,
  * {
    box-sizing: border-box;
  }

  :host:before,
  :host:after,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;
