import type { Meta, StoryObj } from "@storybook/web-components";
import { ButtonVariant } from "./Button.types";
import "./Button";
import * as tokens from "@gyldendal/kobber-base/themes/default/tokens";

const brandColors = Object.keys(tokens.semantics.color.brand);
const uiColors = Object.keys(tokens.semantics.color.ui);
const themeColors = Object.keys(tokens.semantics.color.theme);

const colors = [...brandColors, ...uiColors, ...themeColors];
const variants: ButtonVariant[] = ["main", "supplemental"]; //, "supplemental alt"];
const levels = ["primary", "secondary"];

const meta: Meta = {
  component: "kobber-button",
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: colors,
      control: { type: "select" },
    },
    variant: {
      options: variants,
      control: { type: "radio" },
    },
    level: {
      options: levels,
      control: { type: "radio" },
    },
  },
  decorators: [
    (Story, context) => `
    <kobber-theme-context theme-id=${context.globals.theme}>
      ${Story()}
    </kobber-theme-context>
    `,
  ],
};

export default meta;
type Story = StoryObj;

export const Button: Story = {
  args: {
    text: "Button text",
    color: meta.argTypes?.color?.options?.[0],
    variant: variants[0],
    level: levels[0],
  },
  render: args => `
    <kobber-button color="${args.color}" variant="${args.variant}" level="${args.level}">${args.text}</kobber-button>
  `,
};

const states = ["idle", "hover", "active", "focus", "disabled"];

export const Buttons: Story = {
  parameters: {
    layout: "none",
    controls: {
      exclude: /.*/g,
    },
  },
  render: args => {
    return `
      <style>
      h1,h2,h3,h4 {
         margin-bottom: 0;
           text-transform: capitalize;
      }

        .wrapper-theme {
          display: flex;
          flex-direction: column;
        }

        .wrapper-color {
          display: flex;
          gap: 30px;
        }

        .wrapper-level {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .wrapper-variant {
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 16px;
          padding: 7px 20px;

          &.supplemental.secondary {
            color: white;
            background-color:${tokens.primitives.color.wine[850]};
          }

          span {
           min-width:120px;
          }
        }
      </style>

      ${[renderTheme("Brands", brandColors), renderTheme("UI", uiColors), renderTheme("Themes", themeColors)].join("<br /><br />")}
    `;
  },
};

const renderTheme = (themeName: string, themes: string[]) => {
  return `
  <h2>${themeName}</h2>
  <div class="wrapper-theme">
  ${themes.map(theme => renderColor(theme)).join("")}
    </div>`;
};

const renderColor = (color: string) => `
<h3>${color}</h3>
<div class="wrapper-color">
${levels
  .map(
    level =>
      `<div class="wrapper-level"><h4>${level}</h4>${Object.keys(
        tokens.component.button.background.color.primary[color] ?? [],
      )
        .map(variant => renderVariant(color, variant, level))
        .join("")}</div>`,
  )
  .join("")}
</div>
`;

const renderVariant = (
  color: string,
  variant: string,
  level: string,
) => `<div class="wrapper-variant ${variant} ${level}">
<span>${variant}</span>
  ${states.map(state => renderButton(color, variant, level, state)).join("")}
</div>`;

const renderButton = (color: string, variant: string, level: string, state: string) =>
  `<kobber-button color="${color}" variant="${variant}" level="${level}" class="${state}" ${state === "disabled" ? "disabled" : ""}>${state}</kobber-button>`;
