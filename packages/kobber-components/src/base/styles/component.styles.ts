import { css } from "lit";

export default css`
  :root {
    box-sizing: border-box;
  }

  :root *,
  :root *::before,
  :root *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;
