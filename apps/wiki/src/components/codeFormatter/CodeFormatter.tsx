import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import json from "highlight.js/lib/languages/json";
import ts from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/atom-one-dark.css";
import type { FunctionComponent } from "react";
import { pre } from "./codeFormatter.module.css";

hljs.registerLanguage("json", json);

hljs.registerLanguage("ts", ts);

hljs.registerLanguage("css", css);

interface Props {
  language: "json" | "ts" | "css";
  code?: string;
}

export const CodeFormatter: FunctionComponent<Props> = ({ language, code }) =>
  code ? (
    <pre className={pre}>
      <div
        className="hljs"
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(code, {
            language,
          }).value,
        }}
      />
    </pre>
  ) : null;
