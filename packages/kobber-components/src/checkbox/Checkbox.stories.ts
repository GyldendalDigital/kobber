import type { Meta, StoryObj } from "@storybook/web-components";
import "./checkboxInput/CheckboxInput";
import "../theme-context-provider/ThemeContext";
import { InputProps, CheckboxState, checkboxVariants } from "./Checkbox.core";

const states: { [key: string]: CheckboxState[] }[] = [
  { "not focus": ["idle", "hover", "active", "disabled"] },
  { focus: ["idle", "hover", "active"] },
] as const;

interface Args extends Omit<InputProps, "checked"> {
  text: string;
  state: CheckboxState;
  showHelpText: boolean;
  showLabel: boolean;
  checked?: boolean | string;
}

const meta: Meta = {
  title: "In development 🧪/Checkbox",
  component: "kobber-checkbox",
  decorators: [
    (Story, context) => `
      <kobber-theme-context theme-id=${context.globals.theme}> ${Story()} </kobber-theme-context>
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
          grid-row: 1 / 4;
        }

        .states {
          display: grid;
          grid-template-columns: 5em repeat(3, auto);
          align-items: baseline;
          gap: 1em;
          margin: 0 0 2em;
          border: 1px solid;
          border-radius: 1rem;
          width: fit-content;
          padding: 1em;
        }
      </style>

      <ol>
        ${checkboxVariants
          .map(variant =>
            renderVariant({
              variant,
              state: "idle",
              text: "idle",
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
  const checkedOrNot = [false, true, "indeterminate"];

  if (!variant) {
    return;
  }

  return `<li>
    ${variant}
    <ol class="focusedOrNot">
      ${states
        .map(focusState =>
          Object.keys(focusState).map(key => {
            let focus = "";
            const focusedOrNot = key;
            if (focusedOrNot === "focus") {
              focus = "focus";
            }
            return `<li class="states">
            <span class="focusedOrNot-title">${focusedOrNot}:</span> ${checkedOrNot
              .map(checked => {
                if (typeof focusState[focusedOrNot] === "undefined") return;
                const length = focusState[focusedOrNot].length;

                return focusState[focusedOrNot]
                  .map((state, index) => {
                    let last = false;
                    if (index === length - 1) {
                      last = true;
                    }
                    return renderButton({ ...args, focus, state, text: state, checked, last });
                  })
                  .join("");
              })
              .join("")}
          </li>`;
          }),
        )
        .join("")}
    </ol>
  </li>`;
};

const renderButton = (
  args: Args & {
    focus: string;
    checked: boolean | string;
    last: boolean;
  },
) => {
  const { variant, focus, state, text, checked, last } = args;
  const className = `${focus} ${state}`;
  const lastStyles = last ? `grid-column: -1` : "";
  return `
    <kobber-checkbox
      style="${lastStyles}"
      class="${className}"
      variant="${variant}"
      ${checked ? (checked === "indeterminate" ? "indeterminate" : "checked") : ""}
      ${state === "disabled" ? "disabled" : ""}
    >
      ${text}
    </kobber-checkbox>
  `;
};

/**
 * For some reason, page need to be reloaded for controls to come into effect.
 */
export const Checkbox: Story = {
  render: args => {
    return `
      <kobber-checkbox 
        variant="success" 
        ${args.disabled ? "disabled" : ""}
        ${args.checked}
        id="studentoption"
        value="totalpoints"
      >
        <span>Vis ukas totalpoeng</span>
        ${args.showHelpText ? `<span slot="help-text" style="font-style: italic;color:gray;">Læreren din har skrudd ${args.disabled ? "av" : "på"} denne innstillingen.</span>` : ""}
        ${args.showAlert ? `<div slot="alert" style="background-color:#CBFBDB;padding: 0.5em;border-radius:0.5em;"><p class="badge">TODO: Use badge component.</p></div>` : ""}
      </kobber-checkbox>
    `;
  },
  argTypes: {
    checked: {
      control: "inline-radio",
      options: ["unchecked", "checked", "indeterminate"],
    },
  },
  args: {
    checked: "checked",
    disabled: false,
    showHelpText: true,
    showAlert: true,
  },
};
