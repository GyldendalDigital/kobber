import type { Meta, StoryObj } from "@storybook/web-components";
import "./radioInput/RadioInput";
import "./radioGroup/RadioGroup";
import { primitives } from "@gyldendal/kobber-base/themes/default/tokens";
import { inputVariants, InputProps, radioInputName } from "./Radio.core";
import "../text/heading/Heading";
import "../utils/theme-context";

const formats = ["hardcover", "pocket", "ebook", "audiobook"] as const;
const states: { [key: string]: string[] }[] = [
  { "not focus": ["idle", "hover", "active", "disabled"] },
  { focus: ["idle", "hover", "active"] },
] as const;
enum Direction {
  horizontal = "horizontal",
  vertical = "vertical",
}

const helpTextElement = `<p slot="help-text">
  Vi anbefaler <em>lydbok</em> (ref <a href="https://vg.no">VG</a>).
</p>`;

interface Args extends InputProps {
  text: string;
  state: string;
  link: boolean;
  currentValue: (typeof formats)[number];
  direction: Direction;
  showHelpText: boolean;
  showLabel: boolean;
}

const meta: Meta<Args> = {
  title: "Radio",
  component: radioInputName,
  decorators: [
    (Story, context) => `
      <kobber-theme-context theme-id=${context.globals.theme}>
        ${Story()}
      </kobber-theme-context>
      `,
  ],
};
export default meta;
type Story = StoryObj;

export const Variants: Story = {
  render: args => {
    return `
      <style>
        :root {
          padding: 0.5rem;
        }

        ol { 
          margin: 0; 
          padding: 0; 
          list-style-position: inside; 
        }
          
        .focusedOrNot {
          display: flex;
          gap: 1em;
          flex-wrap: wrap;
        }

        .focusedOrNot-title {
          grid-row: 1 / 3;
        }
          
        .states {
          display: grid;
          grid-template-columns: 5em repeat(3, auto);
          align-items: baseline;
          gap: 1em;
          margin: 0 0 2em; 
          border: 1px solid ${primitives.color.wine[250]};
          border-radius: 1rem;
          width: fit-content;
          padding: 1em;
        }
      </style>

      <ol>
        ${inputVariants
          .map(variant =>
            renderVariant({
              variant,
              state: "idle",
              text: "idle",
              link: false,
              currentValue: args.currentValue,
              direction: args.direction,
              showHelpText: args.showHelpText,
              showLabel: args.showLabel,
            }),
          )
          .join("")}
        </ol>
    `;
  },
};

// variant = "success" | "aubergine"
const renderVariant = (args: Args) => {
  const { variant } = args;
  const checkedOrNot = [false, true];

  if (!variant) {
    return;
  }

  return `<li>${variant}
  <ol class="focusedOrNot">${states
    .map(focusState =>
      Object.keys(focusState).map(key => {
        let focus = "";
        const focusedOrNot = key;
        if (focusedOrNot === "focus") {
          focus = "focus";
        }
        return `<li class="states"><span class="focusedOrNot-title">${focusedOrNot}:</span> ${checkedOrNot
          .map(checked => {
            if (typeof focusState[focusedOrNot] === "undefined") return;
            const length = focusState[focusedOrNot].length;

            return `${focusState[focusedOrNot]
              .map((state, index) => {
                let last = false;
                if (index === length - 1) {
                  last = true;
                }
                return renderButton({ ...args, focus, state, text: state, checked, last });
              })
              .join("")}`;
          })
          .join("")}
          </li>`;
      }),
    )
    .join("")}
  </ol></li>`;
};

const renderButton = (
  args: Args & {
    focus: string;
    checked: boolean;
    last: boolean;
  },
) => {
  const { variant, focus, state, text, link, checked, last } = args;
  const className = `${focus} ${state}`;
  const lastStyles = last ? `grid-column: -1` : "";
  return `
<kobber-radio-input 
  style="${lastStyles}"
  class="${className}" 
  variant="${variant}" 
  ${checked ? "checked" : ""} 
  ${state === "disabled" ? "disabled" : ""} 
  ${link ? "href='#'" : ""}
  style="position: relative;">
  ${text}
</kobber-radio-input>
`;
};

export const GNOExample: Story = {
  render: args => {
    return `
      <style>
        :root {
          padding: 0.5rem;
        }
        .wrapper-theme {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .wrapper-variant {
          display: flex;
          gap: 0.5em;
          border: 1px solid ${primitives.color.wine[250]};
          border-radius: 1rem;
          margin-bottom: 1rem;
          padding: 1rem;
        }
        
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      </style>

      <div class="wrapper-theme">
        <kobber-radio-group current-value="${args.currentValue}" direction="${args.direction}">
        <p slot="label" class="${!args.showLabel ? "visually-hidden" : ""}">
          Formater (ref <a href="https://en.wikipedia.org/wiki/Paperback">Wikipedia</a>):
        </p>
        
          <kobber-radio-input value="hardcover" ${args.link ? `href="#format-innbundet"` : ""}
             variant="${args.variant}"><div>Innbundet – <em style="text-wrap: nowrap">kr 2 339,-</em></div></kobber-radio-input
          >
          <kobber-radio-input value="pocket" ${args.link ? `href="#format-pocket"` : ""} disabled
             variant="${args.variant}"><div>Pocket – <em style="text-wrap: nowrap">kr 339,-</em><p class="alert">Utsolgt</p></div></kobber-radio-input
          >
          <kobber-radio-input value="ebook" ${args.link ? `href="#format-ebok"` : ""}
             variant="${args.variant}"><div>Ebok (med label som er så lang <br />
            at den går over flere linjer) – <em style="text-wrap: nowrap">kr 39,-</em></div></kobber-radio-input
          >
          <kobber-radio-input value="audiobook" ${args.link ? `href="#format-lydbok"` : ""}
             variant="${args.variant}"><div>Lydbok – <em style="text-wrap: nowrap">kr 339,-</em></div></kobber-radio-input
          >
          ${args.showHelpText ? helpTextElement : ""}
        </kobber-radio-group>
      </div>
    `;
  },
  argTypes: {
    variant: {
      name: "variant (visible only in hover and active states)",
      options: inputVariants,
      control: { type: "radio" },
    },
    link: {
      control: { type: "boolean" },
    },
    currentValue: {
      control: "inline-radio",
      options: ["hardcover", "ebook", "audiobook"],
    },
    direction: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    currentValue: "ebook",
    direction: "horizontal",
    showHelpText: true,
    showLabel: true,
    link: true,
    variant: inputVariants[0],
  },
};

export const SkolestudioExamples: Story = {
  render: args => {
    return `
      <style>
        :root {
          padding: 0.5rem;
        }
        .wrapper-theme {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .wrapper-variant {
          display: flex;
          gap: 0.5em;
          border: 1px solid ${primitives.color.wine[250]};
          border-radius: 1rem;
          margin-bottom: 1rem;
          padding: 1rem;
        }
      </style>

      <div class="wrapper-theme">
        <kobber-radio-group direction="horizontal" current-value="no-bm">
        <p slot="label">Målform</p>
          <kobber-radio-input value="no-bm" variant="${args.variant}">Bokmål</kobber-radio-input>
          <kobber-radio-input value="no-nn" variant="${args.variant}">Nynorsk</kobber-radio-input>
        </kobber-radio-group>

        <kobber-radio-group direction="horizontal" current-value="level11-13">
        <p slot="label">Trinn</p>
          <kobber-radio-input value="level1-7" variant="${args.variant}">1.–7. trinn</kobber-radio-input>
          <kobber-radio-input value="level8-10" variant="${args.variant}">8.–10. trinn</kobber-radio-input>
          <kobber-radio-input value="level11-13" variant="${args.variant}">VG1–VG3</kobber-radio-input>
        </kobber-radio-group>
      </div>
    `;
  },
  argTypes: {
    variant: {
      name: "variant (visible only in hover and active states)",
      options: inputVariants,
      control: { type: "radio" },
    },
  },
  args: {
    variant: inputVariants[0],
  },
  parameters: {
    actions: {
      handles: ["input"],
    },
  },
};
