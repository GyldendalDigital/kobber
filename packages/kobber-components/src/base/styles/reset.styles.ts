import { css } from "lit";

export const resetButton = () => css`
  appearance: none;
  width: auto;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  text-align: inherit;
  font-size: 1em;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  color: inherit;
  cursor: pointer;

  ::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;
