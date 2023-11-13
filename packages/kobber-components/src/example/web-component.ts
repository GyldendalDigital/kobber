/* eslint-disable @typescript-eslint/no-explicit-any */
import r2wc from "@r2wc/react-to-web-component";
import { ExampleProps, Example as ReactExample, propNames } from "./Example";

const Example = r2wc<ExampleProps>(ReactExample, {
  props: propNames as any,
  shadow: "open",
}) as {
  new (...params: any[]): HTMLElement & ExampleProps;
};

window.customElements.define("kobber-example", Example);

export { Example };
