import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import type { CoreComponent as CoreComponentType } from "@gyldendal/kobber-core-component/types";
import htm from "htm";
import { unsafeCSS } from "lit";
import type { HTMLAttributes } from "react";
import vhtml from "vhtml";

const html = htm.bind(vhtml);

interface CustomProps {
  count: number;
  variant?: string;
  children?: string;
}

export type ExampleProps = Partial<HTMLButtonElement> & CustomProps;

export type ExampleReactProps = HTMLAttributes<HTMLButtonElement> & CustomProps;

export const CoreComponent = <P extends CustomProps>(): CoreComponentType<P> => ({
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

  render: ({ count, variant, ...props }) => {
    const result = html`
        <button class="button" ...${props} data-variant="${variant}">
          ${props.children} 
          Count: ${count}
        </button>
      `;
    return Array.isArray(result) ? result.join("") : result;
  },
});

export default CoreComponent;
