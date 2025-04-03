import { html } from "lit";
import { semantics } from "@gyldendal/kobber-base/themes/default/tokens.js";

type Props = {
  summary: string;
  code?: string;
};

export const storySummary = ({ summary, code }: Props) => {
  return html`<div
    style="position: absolute; top: 1rem; left: 1rem; font-family: monospace; cursor: pointer; background-color: ${semantics
      .color.identity.base["aubergine-25"]};"
  >
    <details>
      <summary>${summary}</summary>
      <pre>${code}</pre>
    </details>
  </div>`;
};
