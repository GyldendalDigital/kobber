import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "./checkbox-input/CheckboxInput";
import "./checkbox-group/CheckboxGroup";
import "../theme-context-provider/ThemeContext";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { init as initComponents } from "../base/init";
import {
  checkboxColors,
  checkedStates,
  type GroupProps,
  type InputProps,
  type indicatorTokens,
} from "./Checkbox.core";

initComponents();

type CheckboxState = keyof typeof indicatorTokens.border.color.success | "disabled";

const states: { [key: string]: CheckboxState[] }[] = [
  { "not focus": ["idle", "hover", "active", "disabled"] },
  { focus: ["idle", "hover", "active"] },
] as const;

interface InputArgs extends InputProps {
  class?: string
  state: CheckboxState;
  style?: string; 
  text: string;
}

interface GroupArgs extends GroupProps {}

const meta: Meta = {
  title: "Base/Inputs/Checkbox",
  component: "kobber-checkbox",
};

export default meta;

export const Listing: StoryObj<InputArgs> = {
  render: () => {
    return html`
      <style>
        ol {
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
        ${checkboxColors.map(color =>
          renderColor({
            color,
            singleInputName: "idle",
            state: "idle",
            text: "idle",
            singleInputValue: "storybook-demo",
          }),
        )}
      </ol>
    `;
  },
};

const renderColor = (args: InputArgs) => {
  if (!args.color) {
    return;
  }

  return html`<li>
    ${args.color}
    <ol class="focusedOrNot">
      ${states.map(focusState =>
        Object.keys(focusState).map(key => {
          let focus = "";
          const focusedOrNot = key;
          if (focusedOrNot === "focus") {
            focus = "focus";
          }
          return html`<li class="states">
            <span class="focusedOrNot-title">${focusedOrNot}:</span> ${checkedStates.map(
              checked => {
                if (typeof focusState[focusedOrNot] === "undefined") return undefined;
                const length = focusState[focusedOrNot].length;

                return focusState[focusedOrNot].map((state, index) => {
                  let last = false;
                  if (index === length - 1) {
                    last = true;
                  }
                  const lastStyles = last ? `grid-column: -1` : "";

                  return Component.render?.(
                      {
                        checked,
                        class: `${state} ${focus}`,
                        color: args.color,
                        disabled: state === "disabled",
                        singleInputName: "storybook-demo",
                        state,
                        style: lastStyles,
                        text: state,
                        singleInputValue: args.singleInputValue,
                      },
                      {} as any,
                    ) ?? ""
                });
              },
            )}
          </li>`;
        }),
      )}
    </ol>
  </li>`;
};

export const Example: StoryObj<GroupArgs> = {
  render: args => {
    return html`
      <kobber-checkbox-group inputs-common-name="${ifDefined(args.inputsCommonName)}" orientation="${ifDefined(args.orientation)}" type="${ifDefined(args.type)}" hierarchical-checkboxbox-label="${ifDefined(args.hierarchicalCheckboxLabel)}">
        <p slot="label">${args.label}</p>
        ${
          Component.render?.(
            {
              text: "Skjønnlitteratur",
              singleInputValue: "fiction",
              state: "idle",
            },
            {} as any,
          ) ?? ""
        }
        ${
          Component.render?.(
            {
              text: "Sakprosa",
              singleInputValue: "non-fiction",
              state: "idle",
              checked: "unchecked",
              disabled: true,
            },
            {} as any,
          ) ?? ""
        }
        ${
          Component.render?.(
            {
              text: "Barnebøker",
              singleInputValue: "childrens-books",
              state: "idle",
              checked: "checked",
            },
            {} as any,
          ) ?? ""
        }
      </kobber-checkbox-group>
    `;
  },
  args: {
    hierarchicalCheckboxLabel: "Alle",
    inputsCommonName: "categories",
    label: "Kategori",
    orientation: "vertical",
    type: "hierarchical",
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
    inputsCommonName: {
      name: "name",
      table: {
        category: "Developers' info",
      },
    },
  },
};

export const Component: StoryObj<InputArgs> = {
  render: args => {
    return html`
      <kobber-checkbox-input 
        class="${ifDefined(args.class)}"
        name="${ifDefined(args.singleInputName)}"
        .value="${args.singleInputValue}"
        color="${ifDefined(args.color)}" 
        style="${ifDefined(args.style)}" 
        checked=${ifDefined(args.checked)}
        ?disabled=${args.disabled}
      >
        ${args.text}
      </kobber-checkbox-input>
    `;
  },
  argTypes: {
    checked: {
      control: "inline-radio",
      options: checkedStates,
    },
    color: {
      control: "inline-radio",
      options: checkboxColors,
    },
    singleInputName: {
      name: "name",
      table: {
        category: "Developers' info",
      },
    },
    singleInputValue: {
      name: "value",
      table: {
        category: "Developers' info",
      },
    },
  },
  args: {
    checked: "checked",
    color: "success",
    disabled: false,
    singleInputName: "studentoption",
    singleInputValue: "week-total-score",
    text: "Vis ukas totalpoeng",
  },
};
