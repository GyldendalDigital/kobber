import type { Meta, StoryObj } from "@storybook/web-components-vite";
import {
  ButtonColorLevel,
  ButtonProps,
  ButtonColorTheme,
  ButtonColorVariant,
  buttonName,
  ButtonType,
  buttonColorVariants,
  buttonColorLevels,
  buttonColorThemes,
  buttonTypes,
} from "./Button.core";
import "./Button";
import "../text/heading/Heading";
import "../theme-context-provider/ThemeContext";
import { init as initComponents } from "../base/init";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import "@gyldendal/kobber-icons/web-components";
import { IconType } from "@gyldendal/kobber-icons/symbols/kobber-icons-types.ts";
import { iconsList } from "@gyldendal/kobber-icons/symbols/kobber-icons-lists.ts";
import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
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
  },
  args: {
    iconPosition: "right",
    link: false,
    icon: "kobber-arrow_right",
  },
  decorators: [
    (Story, context) => `
      <style>
        .wrapper-variant {
          display: grid;
          grid-template-columns: 8em repeat(15, 1fr);
          padding: 0.5rem 1rem;
          gap: 0.5rem;
          border-radius: 0 0 1rem 1rem;
          align-items: center;

          small {
           min-width: 7rem;
          }
        }
      </style>
    <kobber-theme-context theme-id=${context.globals.theme}>
      ${Story()}
    </kobber-theme-context>
    `,
  ],
};

export default meta;

export const Button: StoryObj<Args> = {
  args: {
    text: "Button <em>text</em>",
    colorTheme: allButtonColorThemes[0],
    colorLevel: allButtonColorLevels[0],
    colorVariant: allButtonColorVariants[0],
    state: states[0],
    fullWidth: false,
    type: "button",
  },
  render: args => renderButton(args),
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
    return colorLevels
      .flatMap(colorLevel => {
        args = { ...args, colorLevel };
        return `<div>${colorLevel}
      ${renderThemeAndVariantColors(args)}</div>`;
      })
      .join("");
  }
  return renderThemeAndVariantColors(args);
};

const renderThemeAndVariantColors = (args: Args) => {
  const colorThemes = buttonColorThemes[args.type];
  const colorVariants = buttonColorVariants[args.type];

  return colorThemes
    .flatMap(
      colorTheme => `
      ${colorVariants
        .flatMap(colorVariant => {
          args = { ...args, colorTheme, colorVariant };
          if (isValidPropCombination(args.type, component, args.colorTheme, args.colorVariant, args.colorLevel)) {
            return `<div class="wrapper-variant">${colorTheme} ${colorVariant}
              ${states.map(state => renderButton({ ...args, state, text: state })).join("")}
              ${states.map(state => renderButton({ ...args, state, text: state, iconPosition: "none" })).join("")}
              ${states.map(state => renderButton({ ...args, state })).join("")}
            </div>`;
          }
          return;
        })
        .join("")}`,
    )
    .join("");
};

const renderButton = (args: Args) => {
  const { type, colorLevel, colorTheme, colorVariant, state, icon, iconPosition, text, link, fullWidth } = args;

  return `
<kobber-button 
  class="${state}" 
  color-theme="${colorTheme}" 
  color-level="${colorLevel}" 
  color-variant="${colorVariant}" 
  type="${type ? type : "button"}"
  aria-label="#"
  ${state === "disabled" ? "disabled" : ""} 
  ${iconPosition === "left" ? "icon-first" : ""} 
  ${fullWidth ? "full-width" : ""} 
  ${link ? "href='#' target='_blank'" : ""}>
  ${text ? text : ""}
  ${icon !== undefined && iconPosition !== "none" ? `<${icon} slot='icon' />` : ""}
</kobber-button>
`;
};
