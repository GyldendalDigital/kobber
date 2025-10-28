import { createCoreComponent } from "@gyldendal/kobber-core-component/createCoreComponent";
import htm from "htm";
import type { HTMLAttributes } from "react";
import vhtml from "vhtml";

const html = htm.bind(vhtml);

interface Props {
  customProperty: string;
}

export type ExampleProps = Partial<HTMLButtonElement> & Props;

export type ExampleReactProps = HTMLAttributes<HTMLButtonElement> & Props;

export const createExampleCore = <P extends Props>() =>
  createCoreComponent<P>({
    customElementTagName: "kobber-example",

    render: ({ customProperty, ...props }) => {
      return html`
        <button ...${props}>
          Custom property: ${customProperty}
        </button>
      `;
    },
  });
