import type { Meta, StoryObj } from "@storybook/web-components";
import "./Checkbox";
import "../utils/theme-context";
import { CheckboxProps, checkboxVariants } from "./Checkbox.core";

const states: { [key: string]: string[] }[] = [
  { "not focus": ["idle", "hover", "active", "disabled"] },
  { focus: ["idle", "hover", "active"] },
] as const;

interface Args extends CheckboxProps {
  text: string;
  state: string;
  showHelpText: boolean;
  showLabel: boolean;
}

const meta: Meta = {
  title: "In development 🧪/Checkbox",
  component: "kobber-checkbox",
  tags: ["autodocs"],
  decorators: [
    (Story, context) => `
      <kobber-theme-context theme-id=${context.globals.theme}> ${Story()} </kobber-theme-context>
    `,
  ],
};

export default meta;
type Story = StoryObj;

export const OldVariants: Story = {
  render: () => `
    <fieldset>
      <legend>Test-checkbox</legend>
      <kobber-checkbox>Unchecked</kobber-checkbox>
      <kobber-checkbox checked>Checked</kobber-checkbox>
      <kobber-checkbox indeterminate>Indeterminate</kobber-checkbox>
      <kobber-checkbox disabled>Disabled</kobber-checkbox>
      <kobber-checkbox disabled checked>Checked + Disabled</kobber-checkbox>
      <kobber-checkbox disabled indeterminate>Indeterminate + Disabled</kobber-checkbox>
    </fieldset>
  `,
};

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
  const checkedOrNot = [false, true];

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
    checked: boolean;
    last: boolean;
  },
) => {
  const { variant, focus, state, text, checked, last } = args;
  console.info(`checked: ${checked}`);
  const className = `${focus} ${state}`;
  const lastStyles = last ? `grid-column: -1` : "";
  return `
    <kobber-checkbox
      style="${lastStyles}"
      class="${className}"
      variant="${variant}"
      ${checked ? "checked" : ""}
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
      <kobber-checkbox help-text="Læreren din har skrudd ${args.disabled ? "av" : "på"} denne innstillingen."
        >${args.checked}</kobber-checkbox
      >
      <script>
        const checkbox = document.querySelector("kobber-checkbox");
        checkbox.checked = ${args.checked === "checked"};
        checkbox.indeterminate = ${args.checked === "indeterminate"};
        checkbox.disabled = ${args.disabled};

        const showCustomStyling = ${args.showCustomStyling};

        if (showCustomStyling) {
          const sheet = new CSSStyleSheet();
          sheet.replaceSync(
            ".form-control__help-text { color: ${
              args.disabled
                ? "var(--kobber-regional-action-color-default-disabled-foreground)"
                : "var(--kobber-regional-action-color-default-default-foreground)"
            };font-style: italic;}",
          );

          const elemStyleSheets = checkbox.shadowRoot.adoptedStyleSheets;
          checkbox.shadowRoot.adoptedStyleSheets = [...elemStyleSheets, sheet];
        }
      </script>
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
    showCustomStyling: true,
  },
};
