import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "./radio-input/RadioInput";
import "./radio-group/RadioGroup";
import { primitives } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { type GroupProps, type InputProps, inputColors, radioInputName } from "./Radio.core";
import "../text/heading/Heading";
import "../theme-context-provider/ThemeContext";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { init as initComponents } from "../base/init";

initComponents();

const states: { [key: string]: string[] }[] = [
  { "not focus": ["idle", "hover", "active", "disabled"] },
  { focus: ["idle", "hover", "active"] },
] as const;

interface InputArgs extends InputProps {
  class?: string
  state?: string;
  style?: string; 
}

interface GroupArgs extends GroupProps {}

const meta: Meta<InputArgs> = {
  title: "Base/Inputs/Radio",
  component: radioInputName,
};
export default meta;

export const Listing: StoryObj<InputArgs> = {
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
        ${inputColors.map(color =>
          renderColor({
            color,
            value: "storybook-demo",
          }),
        )}
        </ol>
    `;
  },
};

const renderColor = (args: InputArgs) => {
  const checkedOrNot = [false, true];

  if (!args.color) {
    return;
  }

  return html`<li>${args.color}
  <ol class="focusedOrNot">${states.map(focusState =>
    Object.keys(focusState).map(key => {
      let focus = "";
      const focusedOrNot = key;
      if (focusedOrNot === "focus") {
        focus = "focus";
      }
      return html`<li class="states"><span class="focusedOrNot-title">${focusedOrNot}:</span> ${checkedOrNot.map(
        checked => {
          if (typeof focusState[focusedOrNot] === "undefined") {
            return html``;}
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
              children: state,
              class: `${state} ${focus}`,
              disabled: state === "disabled",
              state,
              style: lastStyles,
              value: state,
            },
            {} as any,
          ) ?? ""
          }); 
        })}</li>`
      }))}</ol></li>`;
}

export const Example: StoryObj<GroupArgs> = {
  render: args => {
    return html`
      <kobber-radio-group 
        current-value="${ifDefined(args.currentValue)}"
        orientation="${ifDefined(args.orientation)}"
        inputs-common-name="storybook-radio-group"
      >
      <p slot="label">
        ${args.label}
      </p>
      
      ${Component.render?.(
          {
            value: "hardcover",
            state: "idle",
            children: html`Innbundet – <em style="text-wrap: nowrap">kr 2 339,-</em>`,
          },
          {} as any,
        ) ?? ""
      }

      ${Component.render?.(
          {
            value: "pocket",
            state: "disabled",
            children: html`Pocket – <em style="text-wrap: nowrap">kr 339,-</em><p class="alert">Utsolgt</p>`,
            disabled: true,
          },
          {} as any,
        ) ?? ""
      }
      
      ${Component.render?.(
          {
            checked: true,
            value: "ebook",
            state: "idle",
            children: html`Ebok (med label som er så lang <br /> at den går over flere linjer) – <em style="text-wrap: nowrap">kr 39,-</em>`,
          },
          {} as any,
        ) ?? ""
      }

      ${Component.render?.(
          {
            value: "audiobook",
            state: "idle",
            children: html`Lydbok – <em style="text-wrap: nowrap">kr 339,-</em>`,
          },
          {} as any,
        ) ?? ""
      }

      </kobber-radio-group>
    `;
  },
  argTypes: {
    currentValue: {
      name: "Current Value (value on load - change requires refresh)",
      control: "inline-radio",
      options: ["hardcover", "ebook", "audiobook"],
      table: {
        category: "Extras",
      },
    },
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    currentValue: "ebook",
    label: html`Formater (ref <a href="https://en.wikipedia.org/wiki/Paperback">Wikipedia</a>):`,
    orientation: "horizontal",
  },
};

export const Component: StoryObj<InputArgs> = {
  render: args => {
    return html`
      <kobber-radio-input 
        .value="${args.value}" 
        ?checked="${args.checked}" 
        class="${ifDefined(args.class)}"
        color="${ifDefined(args.color)}" 
        ?disabled="${args.disabled}"
        style="${ifDefined(args.style)}" 
        >
          ${args.children}
      </kobber-radio-input>
    `;
  },
  argTypes: {
    color: {
      options: inputColors,
      control: { type: "radio" },
    },
    value: {
      table: {
        category: "Developers' info",
      },
    },
  },
  args: {
    color: inputColors[0],
    value: "radio-input-value",
    children: "Radio",
    checked: false,
    disabled: false,
  },
};
