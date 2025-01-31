import { html } from "lit";
import { regional } from "@gyldendal/kobber-base/themes/default/tokens";

type Props = {
  summary: string;
  code?: string;
};

export const storySummary = ({ summary, code }: Props) => {
  return html`<div
    style="position: absolute; top: 1rem; left: 1rem; font-family: monospace; cursor: pointer; background-color: ${regional
      .navigation.color.brightest};"
  >
    <details>
      <summary>${summary}</summary>
      <pre>${code}</pre>
    </details>
  </div>`;
};
