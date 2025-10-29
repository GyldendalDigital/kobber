import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { render } from "@gyldendal/kobber-core-component/render";
import type { CoreComponent as CoreComponentType } from "@gyldendal/kobber-core-component/types";
import { unsafeCSS } from "lit";
import type { HTMLAttributes, ReactNode } from "react";

interface CustomProps {
  count: number;
  variant?: string;
  onCustomEvent: () => void;
}

export type ExampleProps = Partial<HTMLButtonElement> &
  CustomProps & {
    children?: string;
  };

export type ExampleReactProps = HTMLAttributes<HTMLButtonElement> &
  CustomProps & {
    children?: ReactNode;
  };

interface Options {
  type: "lit" | "react";
}

export const CoreComponent = <P extends ExampleProps | ExampleReactProps>(
  options: Options,
): CoreComponentType<P> => ({
  customElementTagName: "kobber-example",

  styles: `
    .button {
      background-color: red;
    }

    .button[data-variant="secondary"] {
      background-color: var(${unsafeCSS(component.button.background.color.brand.secondary["tone-a"].fallback)});
      color: white;
    }
  `,

  onMount: () => {
    console.log("onmount");
  },

  onUnmount: () => {
    console.log("onUnmount");
  },

  /*
  <button class="button" ...${props} data-variant="${variant}">
          ${children}
          Count: ${count}
        </button>
          <button onClick=${onCustomEvent}>
          Call custom event handler
        </button>
  */

  render: ({ count, variant, children, onCustomEvent, ...props }) => {
    const result = render(options.type)`
      <div>
      Count: ${count}
          ${children}
      </div>
    `;
    return result;
  },
});

export default CoreComponent;
