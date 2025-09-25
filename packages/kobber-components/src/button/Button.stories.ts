import type { Meta, StoryObj } from "@storybook/web-components-vite";
import {
  type ButtonColorLevel,
  type ButtonColorTheme,
  type ButtonColorVariant,
  type ButtonProps,
  type ButtonType,
  buttonColorLevels,
  buttonColorThemes,
  buttonColorVariants,
  buttonName,
  buttonTypes,
} from "./Button.core";
import "./Button";
import "../text/heading/Heading";
import "../theme-context-provider/ThemeContext";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { init as initComponents } from "../base/init";
import "@gyldendal/kobber-icons/web-components";
import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { iconsList } from "@gyldendal/kobber-icons/symbols/kobber-icons-lists.ts";
import type { IconType } from "@gyldendal/kobber-icons/symbols/kobber-icons-types.ts";
import { html, unsafeStatic } from "lit/static-html.js";
import { isValidPropCombination } from "../base/internal/buttonUtils";

initComponents();
initIcons();

const states = ["idle", "hover", "active", "focus", "disabled"] as const;

const buttonIconSettings = ["none", "left", "right"] as const;

const allButtonColorThemes = [
  ...buttonColorThemes.button,
  ...buttonColorThemes["ui-button"],
  ...buttonColorThemes["theme-button"],
];

const allButtonColorLevels = [
  ...buttonColorLevels.button,
  ...buttonColorLevels["ui-button"],
  ...buttonColorLevels["theme-button"],
];

const allButtonColorVariants = [
  ...buttonColorVariants.button,
  ...buttonColorVariants["ui-button"],
  ...buttonColorVariants["theme-button"],
];
interface Args extends ButtonProps {
  text?: string;
  state: (typeof states)[number];
  icon?: IconType;
  iconPosition: (typeof buttonIconSettings)[number];
  link: boolean;
  type: ButtonType;
  colorLevel: ButtonColorLevel;
  colorTheme: ButtonColorTheme;
  colorVariant: ButtonColorVariant;
}

const meta: Meta<Args> = {
  title: "Base/Button",
  component: buttonName,
  argTypes: {
    colorTheme: {
      options: allButtonColorThemes,
      control: { type: "inline-radio" },
    },
    colorLevel: {
      options: allButtonColorLevels,
      control: { type: "inline-radio" },
    },
    colorVariant: {
      options: allButtonColorVariants,
      control: { type: "inline-radio" },
    },
    state: {
      name: "State (only disabled should be used as attribute, the others are only for storybook use)",
      options: states,
      control: { type: "inline-radio" },
    },
    type: {
      options: buttonTypes,
      control: { type: "inline-radio" },
    },
    iconPosition: {
      options: buttonIconSettings,
      control: { type: "inline-radio" },
    },
    icon: {
      options: iconsList,
      control: { type: "select" },
    },
    text: {
      name: "Text (do not leave angle brackets open)",
    },
  },
  args: {
    iconPosition: "right",
    link: false,
    icon: "kobber-arrow_right",
  },
  decorators: [
    (story, _) => html`
      <style>
      .level-group {
        display: flex;
        flex-direction: column;
        gap: 1em;
      }
      .wrapper-variant {
        display: grid;
        grid-template-columns: 7em auto;
        grid-template-areas: 
          "theme theme"
          "variant-0 button-group-0"
          "variant-1 button-group-1";
        align-items: center;

        small {
         min-width: 7rem;
        }
      }
      .wrapper-buttons {
        display: grid;
        grid-template-columns: 33em 26em 14em;
        grid-template-areas: 
          "buttons-iconRight-0 buttons-0 buttons-iconOnly-0"
          "buttons-iconRight-1 buttons-1 buttons-iconOnly-1";
        padding: 0.5rem 1rem;
        gap: 0.5rem;
        border-radius: 0 0 1rem 1rem;
        align-items: center;

        small {
         min-width: 7rem;
        }
      }
    </style>
    ${story()}
    `,
  ],
};

export default meta;

export const Button: StoryObj<Args> = {
  args: {
    text: "Button text",
    colorTheme: allButtonColorThemes[0],
    colorLevel: allButtonColorLevels[0],
    colorVariant: allButtonColorVariants[0],
    state: states[0],
    fullWidth: false,
    type: "button",
  },
  render: args => renderButton(args),
  decorators: [
    story => html`
    <style>
      .narrow-cointainer {
        display: flex;
      }
      .wide-sibling {
        flex-grow: 1;
      }
    </style>
    <div class="narrow-cointainer">
      ${story()}
      <div class="wide-sibling"></div>
    </div>
    `,
  ],
};

export const Buttons: StoryObj<Args> = {
  parameters: {
    controls: {
      exclude: /^(?!.*(icon|link)).*/g,
    },
  },
  args: {
    type: "button",
  },
  render: args => renderAllColors(args),
};

export const UiButtons: StoryObj<Args> = {
  parameters: {
    controls: {
      exclude: /^(?!.*(icon|link)).*/g,
    },
  },
  args: {
    type: "ui-button",
  },
  render: args => renderAllColors(args),
};

export const ThemeButtons: StoryObj<Args> = {
  parameters: {
    controls: {
      exclude: /^(?!.*(icon|link)).*/g,
    },
  },
  args: {
    type: "theme-button",
  },
  render: args => renderAllColors(args),
};

const renderAllColors = (args: Args) => {
  const colorLevels = buttonColorLevels[args.type];

  if (colorLevels.length > 0) {
    return html`${colorLevels.flatMap(colorLevel => {
      args = { ...args, colorLevel };
      return html`<div class="level-group">
        <kobber-heading level="h1" size="medium">color-level: ${colorLevel}</kobber-heading>
      ${renderThemeAndVariantColors(args)}</div>`;
    })}`;
  }
  return renderThemeAndVariantColors(args);
};

const renderThemeAndVariantColors = (args: Args) => {
  const colorThemes = buttonColorThemes[args.type];
  const colorVariants = buttonColorVariants[args.type];

  return html`${colorThemes.flatMap(
    colorTheme => html`<div class="wrapper-variant">
      <kobber-heading level="h2" size="medium" style="grid-area: theme;">color-theme: ${colorTheme}</kobber-heading>
      ${colorVariants.flatMap((colorVariant, index) => {
        args = { ...args, colorTheme, colorVariant };
        if (
          isValidPropCombination(
            args.type,
            component,
            args.colorTheme,
            args.colorVariant,
            args.colorLevel,
          )
        ) {
          return html`<span class="group-title" style="grid-area: variant-${index};">color-variant: ${colorVariant}</span>
            <div class="wrapper-buttons" style="grid-area: button-group-${index};">
              <div style="grid-area: buttons-iconRight-${index};">
                ${states.map(state => renderButton({ ...args, state, text: state })).join("")}
              </div>
              <div style="grid-area: buttons-${index};">
                ${states.map(state => renderButton({ ...args, state, text: state, iconPosition: "none" })).join("")}
              </div>
              <div style="grid-area: buttons-iconOnly-${index};">
                ${states.map(state => renderButton({ ...args, state })).join("")}
              </div>
            </div>`;
        } else {
          return html``;
        }
      })}</div>`,
  )}`;
};

const renderButton = (args: Args) => {
  const {
    type,
    colorLevel,
    colorTheme,
    colorVariant,
    state,
    icon,
    iconPosition,
    text,
    link,
    fullWidth,
  } = args;

  return html`
<kobber-button 
  class="${state}" 
  color-theme="${colorTheme}" 
  color-level="${colorLevel}" 
  color-variant="${colorVariant}" 
  type="${type ? type : "button"}"
  aria-label="#"
  ?disabled=${state === "disabled"}
  ?icon-first=${iconPosition === "left"}
  ?full-width=${fullWidth}
  href=${link ? "#" : undefined}
  target=${link ? "_blank" : undefined}
>
  ${text ? text : ""}
  ${icon !== undefined && iconPosition !== "none" ? html`<${unsafeStatic(icon)} slot='icon' />` : ""}
</kobber-button>
`;
};
