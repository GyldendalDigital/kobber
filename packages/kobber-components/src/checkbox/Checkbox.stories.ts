import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "./checkbox-input/CheckboxInput";
import "./checkbox-group/CheckboxGroup";
import "../text/text-label/TextLabel";
import "../theme-context-provider/ThemeContext";
import { html } from "lit";
import { init as initComponents } from "../base/init";
import { type CheckboxState, checkboxColorThemes, type InputProps } from "./Checkbox.core";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeStatic } from "lit/static-html.js";
import { invertColorVariant } from "../base/utilities/invertColorVariant";

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
};

export default meta;

export const Themes: StoryObj<Args> = {
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
      color-theme="${ifDefined(colorTheme)}"
      ?indeterminate=${checked === "indeterminate"}
      ?checked=${checked === true}
      ?disabled=${state === "disabled"}
    >
      <kobber-text-label color=${ifDefined(colorTheme)}>
        ${text}
      </kobber-text-label>
    </kobber-checkbox-input>
  `;
};

/**
 * For some reason, page need to be reloaded for controls to come into effect.
 */
export const Checkbox: StoryObj<Args & { showAlert: boolean }> = {
  render: args => {
    return html`
      <kobber-checkbox-input 
        name="studentoption"
        id-value="totalpoints"
        color-theme="success" 
        ?indeterminate=${args.checked === "indeterminate"}
        ?checked=${args.checked === "checked"}
        ?disabled=${args.disabled}
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

export const GNOExample: StoryObj<
  Args & { showGroupHelpText: boolean; orientation: string; type: string }
> = {
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
