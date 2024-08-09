import { html } from "lit";

export const globalStyles = html`
  <style>
    html {
      box-sizing: border-box;
    }

    html *,
    html *:before,
    html *:after {
      box-sizing: inherit;
    }

    body {
      min-width: 320px;
    }
  </style>
`;
