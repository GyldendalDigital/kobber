import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/atom-one-dark.css";
import type { FunctionComponent } from "react";
import { pre } from "./codeFormatter.css";

hljs.registerLanguage("json", json);

interface Props {
  children?: string;
}

export const CodeFormatter: FunctionComponent<Props> = ({ children }) =>
  children ? (
    <pre className={pre}>
      <div
        className="hljs"
        dangerouslySetInnerHTML={{
          __html: hljs.highlight("json", children).value,
        }}
      />
    </pre>
  ) : null;
