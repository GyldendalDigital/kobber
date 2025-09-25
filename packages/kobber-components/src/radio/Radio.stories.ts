import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "./radio-input/RadioInput";
import "./radio-group/RadioGroup";
import { primitives } from "@gyldendal/kobber-base/themes/default/tokens.js";
import { type GroupProps, type InputProps, inputColorThemes, radioInputName } from "./Radio.core";
import "../text/heading/Heading";
import "../theme-context-provider/ThemeContext";
import { html } from "lit";
import { init as initComponents } from "../base/init";

initComponents();

const formats = ["hardcover", "pocket", "ebook", "audiobook"] as const;
const states: { [key: string]: string[] }[] = [
  { "not focus": ["idle", "hover", "active", "disabled"] },
  { focus: ["idle", "hover", "active"] },
] as const;

const helpTextElement = html`<p slot="help-text">
  Vi anbefaler <em>lydbok</em> (ref <a href="https://vg.no">VG</a>).
</p>`;

interface Args extends InputProps {
  text: string;
  state: string;
  link: boolean;
  currentValue: (typeof formats)[number];
  direction: GroupProps["direction"];
  showHelpText: boolean;
  showLabel: boolean;
}

const meta: Meta<Args> = {
  title: "Base/Inputs/Radio",
  component: radioInputName,
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
        ${inputColorThemes.map(colorTheme =>
          renderColorTheme({
            colorTheme,
            state: "idle",
            text: "idle",
            link: false,
            currentValue: args.currentValue,
            direction: args.direction,
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
  const checkedOrNot = [false, true];

  if (!colorTheme) {
    return;
  }

  return html`<li>${colorTheme}
  <ol class="focusedOrNot">${states.map(focusState =>
    Object.keys(focusState).map(key => {
      let focus = "";
      const focusedOrNot = key;
      if (focusedOrNot === "focus") {
        focus = "focus";
      }
      return html`<li class="states"><span class="focusedOrNot-title">${focusedOrNot}:</span> ${checkedOrNot.map(
        checked => {
          if (typeof focusState[focusedOrNot] === "undefined") return html``;
          const length = focusState[focusedOrNot].length;

          return html`${focusState[focusedOrNot].map((state, index) => {
            let last = false;
            if (index === length - 1) {
              last = true;
            }
            return renderButton({ ...args, focus, state, text: state, checked, last });
          })}`;
        },
      )}
          </li>`;
    }),
  )}
  </ol></li>`;
};

const renderButton = (
  args: Args & {
    focus: string;
    checked: boolean;
    last: boolean;
  },
) => {
  const { colorTheme, focus, state, text, link, checked, last } = args;
  const className = `${focus} ${state}`;
  const lastStyles = last ? `grid-column: -1` : "";
  return html`
<kobber-radio-input 
  style="${lastStyles}"
  class="${className}" 
  colorTheme="${colorTheme}" 
  ?checked=${checked === true}
  ?disabled=${state === "disabled"}
  href="${link ? "#" : ""}">
  ${text}
</kobber-radio-input>
`;
};

export const GNOExample: StoryObj<Args> = {
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
        <p slot="label">
          Formater (ref <a href="https://en.wikipedia.org/wiki/Paperback">Wikipedia</a>):
        </p>
        
          <kobber-radio-input value="hardcover" ${args.link ? `href="#format-innbundet"` : ""}
             color-theme="${args.colorTheme}"><div>Innbundet – <em style="text-wrap: nowrap">kr 2 339,-</em></div></kobber-radio-input
          >
          <kobber-radio-input value="pocket" ${args.link ? `href="#format-pocket"` : ""} disabled
             color-theme="${args.colorTheme}"><div>Pocket – <em style="text-wrap: nowrap">kr 339,-</em><p class="alert">Utsolgt</p></div></kobber-radio-input
          >
          <kobber-radio-input value="ebook" ${args.link ? `href="#format-ebok"` : ""}
             color-theme="${args.colorTheme}"><div>Ebok (med label som er så lang <br />
            at den går over flere linjer) – <em style="text-wrap: nowrap">kr 39,-</em></div></kobber-radio-input
          >
          <kobber-radio-input value="audiobook" ${args.link ? `href="#format-lydbok"` : ""}
             color-theme="${args.colorTheme}"><div>Lydbok – <em style="text-wrap: nowrap">kr 339,-</em></div></kobber-radio-input
          >
          ${args.showHelpText ? helpTextElement : ""}
        </kobber-radio-group>
      </div>
    `;
  },
  argTypes: {
    colorTheme: {
      name: "color-theme (visible only in hover and active states)",
      options: inputColorThemes,
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
    colorTheme: inputColorThemes[0],
  },
};

export const SkolestudioExamples: StoryObj<Args> = {
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
          <kobber-radio-input value="no-bm" color-theme="${args.colorTheme}">Bokmål</kobber-radio-input>
          <kobber-radio-input value="no-nn" color-theme="${args.colorTheme}">Nynorsk</kobber-radio-input>
        </kobber-radio-group>

        <kobber-radio-group direction="horizontal" current-value="level11-13">
        <p slot="label">Trinn</p>
          <kobber-radio-input value="level1-7" color-theme="${args.colorTheme}">1.–7. trinn</kobber-radio-input>
          <kobber-radio-input value="level8-10" color-theme="${args.colorTheme}">8.–10. trinn</kobber-radio-input>
          <kobber-radio-input value="level11-13" color-theme="${args.colorTheme}">VG1–VG3</kobber-radio-input>
        </kobber-radio-group>
      </div>
    `;
  },
  argTypes: {
    colorTheme: {
      name: "color-theme (visible only in hover and active states)",
      options: inputColorThemes,
      control: { type: "radio" },
    },
  },
  args: {
    colorTheme: inputColorThemes[0],
  },
  parameters: {
    actions: {
      handles: ["input"],
    },
  },
};
