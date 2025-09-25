import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "./checkbox-input/CheckboxInput";
import "./checkbox-group/CheckboxGroup";
import "../theme-context-provider/ThemeContext";
import { html } from "lit";
import { init as initComponents } from "../base/init";
import { type CheckboxState, checkboxColorThemes, type InputProps } from "./Checkbox.core";

initComponents();

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
  title: "Base/Inputs/Checkbox",
  component: "kobber-checkbox",
  decorators: [
    (Story, context) => html`
      <kobber-theme-context theme-id=${context.globals.theme}> ${Story()} </kobber-theme-context>
    `,
  ],
};

export default meta;
type Story = StoryObj;

export const Themes: Story = {
  render: args => {
    return html`
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
        ${checkboxColorThemes.map(colorTheme =>
          renderColorTheme({
            colorTheme,
            state: "idle",
            text: "idle",
            showHelpText: args.showHelpText,
            showLabel: args.showLabel,
          }),
        )}
      </ol>
    `;
  },
};

// colorTheme = "success" | "aubergine"
const renderColorTheme = (args: Args) => {
  const { colorTheme } = args;
  const checkedOrNot = [false, true, "indeterminate"];

  if (!colorTheme) {
    return;
  }

  return html`<li>
    ${colorTheme}
    <ol class="focusedOrNot">
      ${states.map(focusState =>
        Object.keys(focusState).map(key => {
          let focus = "";
          const focusedOrNot = key;
          if (focusedOrNot === "focus") {
            focus = "focus";
          }
          return html`<li class="states">
            <span class="focusedOrNot-title">${focusedOrNot}:</span> ${checkedOrNot.map(checked => {
              if (typeof focusState[focusedOrNot] === "undefined") return undefined;
              const length = focusState[focusedOrNot].length;

              return focusState[focusedOrNot].map((state, index) => {
                let last = false;
                if (index === length - 1) {
                  last = true;
                }
                return renderButton({ ...args, focus, state, text: state, checked, last });
              });
            })}
          </li>`;
        }),
      )}
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
  const { colorTheme, focus, state, text, checked, last } = args;
  const className = `${focus} ${state}`;
  const lastStyles = last ? `grid-column: -1` : "";
  return html`
    <kobber-checkbox-input
      style="${lastStyles}"
      class="${className}"
      color-theme="${colorTheme}"
      ${checked ? (checked === "indeterminate" ? "indeterminate" : "checked") : ""}
      ${state === "disabled" ? "disabled" : ""}
    >
      ${text}
    </kobber-checkbox-input>
  `;
};

/**
 * For some reason, page need to be reloaded for controls to come into effect.
 */
export const Checkbox: Story = {
  render: args => {
    return html`
      <kobber-checkbox-input 
        color-theme="success" 
        ${args.disabled ? "disabled" : ""}
        ${args.checked}
        name="studentoption"
        id-value="totalpoints"
      >
        <span>Vis ukas totalpoeng</span>
        ${args.showHelpText ? html`<span slot="help-text" style="font-style: italic;color:gray;">Læreren din har skrudd ${args.disabled ? "av" : "på"} denne innstillingen.</span>` : ""}
        ${args.showAlert ? html`<div slot="alert" style="background-color:#CBFBDB;padding: 0.5em;border-radius:0.5em;"><p class="badge">TODO: Use badge component.</p></div>` : ""}
      </kobber-checkbox-input>
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

export const GNOExample: Story = {
  render: args => {
    return html`
      <style>
        :root {
          padding: 0.5rem;
        }
        .wrapper-theme {
          display: flex;
          flex-direction: column;
          gap: 3rem;
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
        <kobber-checkbox-group name="categories" orientation="${args.orientation}" type="${args.type}" hierarchical-checkboxbox-label="Alle">
          <p slot="label">Kategori</p>
          <kobber-checkbox-input id-value="fiction">Skjønnlitteratur</kobber-checkbox-input>
          <kobber-checkbox-input id-value="non-fiction" disabled>Sakprosa</kobber-checkbox-input>
          <kobber-checkbox-input id-value="childrens-books">Barnebøker</kobber-checkbox-input>
          <kobber-checkbox-input id-value="syllabi">Pensumbøker</kobber-checkbox-input>
          <kobber-checkbox-input id-value="professional">Profesjonsbøker</kobber-checkbox-input>
        ${args.showGroupHelpText ? html`<span slot="help-text">Velg noe, da.</span>` : ""}
        </kobber-checkbox-group>
      </div>
    `;
  },
  args: {
    showGroupHelpText: true,
    type: "hierarchical",
    orientation: "vertical",
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horisontal", "vertical"],
    },
    type: {
      control: "inline-radio",
      options: ["equal", "hierarchical"],
    },
  },
};
