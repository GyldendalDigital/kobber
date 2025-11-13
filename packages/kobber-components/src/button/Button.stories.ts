import type { Meta, StoryObj } from "@storybook/web-components-vite";
import {
  defaultButtonColorLevels,
  defaultButtonColorThemes,
  defaultButtonColorVariants,
  defaultButtonName,
} from "./default-button/Button.core";
import "./default-button/Button";
import "./ui-button/UiButton";
import "./theme-button/ThemeButton";
import "../text/heading/Heading";
import "../theme-context-provider/ThemeContext";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { init as initComponents } from "../base/init";
import "@gyldendal/kobber-icons/web-components";
import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { iconsList } from "@gyldendal/kobber-icons/symbols/kobber-icons-lists.ts";
import type { IconType } from "@gyldendal/kobber-icons/symbols/kobber-icons-types.ts";
import { ifDefined } from "lit/directives/if-defined.js";
import { html, unsafeStatic } from "lit/static-html.js";
import {
  themeButtonColorLevels,
  themeButtonColorThemes,
  themeButtonColorVariants,
} from "./theme-button/ThemeButton.core";
import { uiButtonColorThemes, uiButtonColorVariants } from "./ui-button/UiButton.core";

initComponents();
initIcons();

const states = ["idle", "hover", "active", "focus", "disabled"] as const;

const buttonIconSettings = ["none", "left", "right", "only"] as const;

const allButtonTypes = ["button", "ui-button", "theme-button"] as const;
const allButtonColorThemes = [
  ...defaultButtonColorThemes,
  ...uiButtonColorThemes,
  ...themeButtonColorThemes,
];
const allButtonColorLevels = [...defaultButtonColorLevels, ...themeButtonColorLevels];
const allButtonColorVariants = [
  ...defaultButtonColorVariants,
  ...uiButtonColorVariants,
  ...themeButtonColorVariants,
];

interface Args {
  text: string;
  state: (typeof states)[number];
  icon?: IconType;
  iconPosition: (typeof buttonIconSettings)[number];
  link: boolean;
  componentType?: (typeof allButtonTypes)[number];
  colorTheme?: (typeof allButtonColorThemes)[number];
  colorLevel?: (typeof allButtonColorLevels)[number];
  colorVariant?: (typeof allButtonColorVariants)[number];
}

const meta: Meta<Args> = {
  title: "Base/Button",
  component: defaultButtonName,
  argTypes: {
    componentType: {
      options: allButtonTypes,
      control: { type: "inline-radio" },
    },
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
    text: "Button",
    state: states[0],
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
    componentType: "button",
  },
  render: args =>
    renderColorLevels(
      args,
      defaultButtonColorThemes,
      defaultButtonColorVariants,
      defaultButtonColorLevels,
    ),
};

export const UiButtons: StoryObj<Args> = {
  parameters: {
    controls: {
      exclude: /^(?!.*(icon|link)).*/g,
    },
  },
  args: {
    componentType: "ui-button",
  },
  render: args => renderColorLevels(args, uiButtonColorThemes, uiButtonColorVariants, []),
};

export const ThemeButtons: StoryObj<Args> = {
  parameters: {
    controls: {
      exclude: /^(?!.*(icon|link)).*/g,
    },
  },
  args: {
    componentType: "theme-button",
  },
  render: args =>
    renderColorLevels(
      args,
      themeButtonColorThemes,
      themeButtonColorVariants,
      themeButtonColorLevels,
    ),
};

const renderColorLevels = (
  args: Args,
  colorThemes: Args["colorTheme"][],
  colorVariants: Args["colorVariant"][],
  colorLevels: Args["colorLevel"][],
) => {
  if (colorLevels.length === 0) {
    return renderThemeAndVariantColors(args, colorThemes, colorVariants);
  }

  return html`${colorLevels.flatMap(colorLevel => {
    args = { ...args, colorLevel };
    return html`<div class="level-group">
        <kobber-heading level="h1" size="medium">
          color-level: ${colorLevel}
        </kobber-heading>
      ${renderThemeAndVariantColors(args, colorThemes, colorVariants)}</div>`;
  })}`;
};

const renderThemeAndVariantColors = (
  args: Args,
  colorThemes: Args["colorTheme"][],
  colorVariants: Args["colorVariant"][],
) => {
  return html`${colorThemes.flatMap(
    colorTheme => html`<div class="wrapper-variant">
      <kobber-heading level="h2" size="medium" style="grid-area: theme;">color-theme: ${colorTheme}</kobber-heading>
      ${colorVariants.flatMap((colorVariant, index) => {
        args = { ...args, colorTheme, colorVariant };
        if (
          isValidPropCombination(
            component[args.componentType ?? "button"],
            args.colorTheme,
            args.colorVariant,
            args.colorLevel,
          )
        ) {
          return html`<span class="group-title" style="grid-area: variant-${index};">color-variant: ${colorVariant}</span>
            <div class="wrapper-buttons" style="grid-area: button-group-${index};">
              <div style="grid-area: buttons-iconRight-${index};">
                ${states.map(state => renderButton({ ...args, state, text: state }))}
              </div>
              <div style="grid-area: buttons-${index};">
                ${states.map(state => renderButton({ ...args, state, text: state, iconPosition: "none" }))}
              </div>
              <div style="grid-area: buttons-iconOnly-${index};">
                ${states.map(state => renderButton({ ...args, text: state, iconPosition: "only" }))}
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
    componentType,
    colorLevel,
    colorTheme,
    colorVariant,
    state,
    icon,
    iconPosition,
    text,
    link,
  } = args;

  const tag = unsafeStatic(`kobber-${componentType ?? "button"}`);

  return html`
<${tag}
  class="${state}" 
  color-theme="${ifDefined(colorTheme)}" 
  color-level="${ifDefined(colorLevel)}" 
  color-variant="${ifDefined(colorVariant)}" 
  aria-label="${iconPosition === "only" ? text : ""}"
  ?disabled=${state === "disabled"}
  ?icon-first=${iconPosition === "left"}
  href=${link ? "#" : undefined}
  target=${link ? "_blank" : undefined}
>
  ${iconPosition === "only" ? "" : unsafeStatic(text)}
  ${icon !== undefined && iconPosition !== "none" ? html`<${unsafeStatic(icon)} slot='icon' />` : ""}
</${tag}>
`;
};

const isValidPropCombination = (
  buttonTokens: any,
  colorTheme: Args["colorTheme"],
  colorVariant: Args["colorVariant"],
  colorLevel?: Args["colorLevel"],
) => {
  if (!buttonTokens) {
    return false;
  }

  if (!colorTheme) {
    return false;
  }

  if (!colorVariant) {
    return false;
  }

  const backgroundColor = colorLevel
    ? buttonTokens.background?.color?.[colorTheme]?.[colorLevel]?.[colorVariant]
    : buttonTokens.background?.color?.[colorTheme]?.[colorVariant];

  const borderColor = colorLevel
    ? buttonTokens.border?.color?.[colorTheme]?.[colorLevel]?.[colorVariant]
    : buttonTokens.border?.color?.[colorTheme]?.[colorVariant];

  if (typeof backgroundColor?.fallback === "string" || typeof borderColor?.active === "string") {
    return true;
  }

  return false;
};
