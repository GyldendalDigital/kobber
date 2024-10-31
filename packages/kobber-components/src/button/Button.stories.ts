import type { Meta, StoryObj } from "@storybook/web-components";
import { ButtonBackgroundColor, ButtonIconSettings, ButtonVariant } from "./Button.types";
import "./Button";
import * as tokens from "@gyldendal/kobber-base/themes/default/tokens";

const colors = Object.keys(tokens.component.button.background.color) as ButtonBackgroundColor[];
const variants: ButtonVariant[] = ["main", "supplemental"]; //, "supplemental alt"];
const levels = ["primary", "secondary"];
const states = ["idle", "hover", "active", "focus", "disabled"];

const meta: Meta = {
  title: "In development 🧪/Button",
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
    state: {
      options: states,
      control: { type: "select" },
    },
    icon: {
      options: ["none", "left", "right"],
      control: { type: "radio" },
    },
  },
  decorators: [
    (Story, context) => `
    <script>const clickHandler = () => console.log('clicked')</script>
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
    state: states[0],
    icon: "right",
  },
  render: args => renderButton(args.color, args.variant, args.level, args.state, args.icon, args.text),
};

export const Buttons: Story = {
  parameters: {
    layout: "none",
    controls: {
      exclude: /^(?!.*(icon)).*/g,
    },
  },
  args: {
    icon: "none",
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

      ${[renderTheme("Button themes", colors, args.icon)].join("<br /><br />")}
    `;
  },
};

const renderTheme = (themeName: string, themes: ButtonBackgroundColor[], iconSettings: ButtonIconSettings) => {
  return `
  <h2>${themeName}</h2>
  <div class="wrapper-theme">
  ${themes.map(theme => renderColor(theme, iconSettings)).join("")}
    </div>`;
};

const renderColor = (color: ButtonBackgroundColor, iconSettings: ButtonIconSettings) => `
<h3>${color}</h3>
<div class="wrapper-color">
${levels
  .map(
    level =>
      `<div class="wrapper-level"><h4>${level}</h4>${Object.keys(tokens.component.button.background.color[color] ?? [])
        .map(variant => renderVariant(color, variant, level, iconSettings))
        .join("")}</div>`,
  )
  .join("")}
</div>
`;

const renderVariant = (
  color: string,
  variant: string,
  level: string,
  iconSettings: ButtonIconSettings,
) => `<div class="wrapper-variant ${variant} ${level}">
<span>${variant}</span>
  ${states.map(state => renderButton(color, variant, level, state, iconSettings)).join("")}
</div>`;

const renderButton = (
  color: string,
  variant: string,
  level: string,
  state: string,
  iconSettings: ButtonIconSettings,
  text?: string,
) => {
  console.log({ color, variant, level, state, iconSettings });
  return `
<kobber-button color="${color}" variant="${variant}" level="${level}" class="${state}" ${state === "disabled" ? "disabled" : ""} 
  iconSettings=${iconSettings} onclick="clickHandler()" aria-label="button label">
  ${text ?? state}
  <icon-arrow_right slot="icon" />
</kobber-button>
`;
};
