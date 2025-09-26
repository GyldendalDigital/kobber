import { html } from "lit";

/** @deprecated Styles used in deprecated components */
export const obsoleteStyles = html`
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
