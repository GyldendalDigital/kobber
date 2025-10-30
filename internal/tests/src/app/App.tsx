import { init } from "@gyldendal/kobber-components/init";
import { Example } from "@gyldendal/kobber-components/react";
import "@gyldendal/kobber-components/web-components";
import React from "react";
import { useEffect, useRef, useState } from "react";

(globalThis as any).React = React;

init();

export function App() {
  const count = useCounter();
  return (
    <div className="kobber-theme-default">
      <WebComponent count={count} />
      <br />
      <br />
      <Example
        count={count}
        variant="secondary"
        onClick={() => console.log("React")}
        onCustomEvent={() => console.log("React custom event")}
        aria-label="123"
      >
        <strong>React</strong> component
      </Example>
      <SsrHtmlViewer />
    </div>
  );
}

interface WebComponentProps {
  count: number;
}

const WebComponent = ({ count }: WebComponentProps) => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    (el as any).onCustomEvent = () => console.log("Custom via property");
  }, []);
  return (
    <>
      {/* @ts-ignore */}
      <kobber-example
        ref={ref}
        count={count}
        variant="secondary"
        onClick={() => console.log("Wc")}
        onCustomEvent={() => console.log("Wc custom event")}
        aria-label="123"
      >
        <strong>Web</strong> component
        {/* @ts-ignore */}
      </kobber-example>
    </>
  );
};

const useCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = setInterval(() => setCount((c) => c + 1), 10000);
    return () => clearInterval(id);
  }, []);
  return count;
};

const SsrHtmlViewer = () => {
  const ref = useRef<HTMLPreElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    showSsrHtml(ref.current);
  }, [ref]);
  return (
    <div>
      Serverside rendered HTML
      <pre ref={ref} />
    </div>
  );
};

const showSsrHtml = async (element: HTMLElement) => {
  const response = await fetch("/");
  const temp = document.createElement("div");
  temp.innerHTML = await response.text();
  const root = temp.querySelector("#root");
  if (!root) return;
  const html = root.innerHTML;
  element.innerText = html.replaceAll(">", ">\n").replaceAll("</", "\n</");
};
