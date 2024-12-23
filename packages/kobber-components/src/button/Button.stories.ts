import type { Meta, StoryObj } from "@storybook/web-components";
import { primitives } from "@gyldendal/kobber-base/themes/default/tokens";
import { buttonColors, buttonVariants, buttonLevels, ButtonColor, ButtonVariant, ButtonLevel } from "./Button.core";
import "./Button";
import "../utils/theme-context";

const states = ["idle", "hover", "active", "focus", "disabled"];

type ButtonIconPosition = undefined | "right" | "left";

const meta: Meta = {
  title: "In development 🧪/Button",
  component: "kobber-button",
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: buttonColors,
      control: { type: "select" },
    },
    variant: {
      options: buttonVariants,
      control: { type: "radio" },
    },
    level: {
      options: buttonLevels,
      control: { type: "radio" },
    },
    state: {
      options: states,
      control: { type: "select" },
    },
    icon: {
      options: ["left", "right"],
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
    variant: buttonVariants[0],
    level: buttonLevels[0],
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
    icon: "right",
  },
  render: args => {
    return `
      <style>
        :root {
          padding: 0.5rem;
        }

        .wrapper-theme {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .wrapper-color {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .wrapper-level {
          display: flex;
          flex-direction: column;
          border: 1px solid ${primitives.color.wine[250]};
          border-radius: 1rem;
        }

        .wrapper-variant {
          display: flex;
          padding: 0.5rem 1rem;
          gap: 0.5rem;
          border-radius: 0 0 1rem 1rem;

          &:first-of-type {
            padding-top: 1rem;
          }

          &:last-of-type {
            padding-bottom: 1rem;
          }

          &.supplemental.secondary {
            color: white;
            background-color:${primitives.color.wine[850]};
          }

          &.supplemental-alt.secondary {
            display: none;
          }

          small {
           min-width: 7rem;
          }
        }
      </style>

      <div class="wrapper-theme">
        ${buttonColors.map(color => renderColor(color, args.icon)).join("")}
      </div>
    `;
  },
};

// carmine, aubergine
const renderColor = (color: ButtonColor, iconPosition: ButtonIconPosition) => `
<div class="wrapper-color">
${buttonLevels.map(level => renderLevel(color, level, iconPosition)).join("")}
</div>
`;

// primary, secondary
const renderLevel = (color: ButtonColor, level: ButtonLevel, iconPosition: ButtonIconPosition) => {
  if (level === "secondary" && (color === "success" || color === "informative" || color === "warning")) {
    return;
  }
  return `<div class="wrapper-level">${buttonVariants
    .map(variant => renderVariant(color, variant, level, iconPosition))
    .join("")}</div>`;
};

// main, supplemental
const renderVariant = (
  color: ButtonColor,
  variant: ButtonVariant,
  level: ButtonLevel,
  iconPosition: ButtonIconPosition,
) => {
  // @ts-ignore
  if (variant === "supplemental alt") {
    return;
  }

  return `<div class="wrapper-variant ${variant.replace(" ", "-")} ${level}">
<small>${color}<br />${variant}<br />${level}</small>
  ${states.map(state => renderButton(color, variant, level, state, iconPosition)).join("")}
  ${states.map(state => renderIconOnlyButton(color, variant, level, state)).join("")}
</div>`;
};

const renderButton = (
  color: string,
  variant: string,
  level: string,
  state: string,
  iconPosition: ButtonIconPosition,
  text?: string,
) => {
  return `
<kobber-button class="${state}" color="${color}" variant="${variant}" level="${level}" 
  ${state === "disabled" ? "disabled" : ""} ${iconPosition === "left" ? "iconFirst" : ""} 
  onclick="clickHandler()" aria-label="optional button label">
  ${text ?? state}
  <icon-arrow_right slot="icon" />
</kobber-button>
`;
};

const renderIconOnlyButton = (color: string, variant: string, level: string, state: string) => {
  return `
<kobber-button class="${state}" color="${color}" variant="${variant}" level="${level}" 
${state === "disabled" ? "disabled" : ""} 
   onclick="clickHandler()" aria-label="required button label">
  <icon-arrow_right slot="icon" />
</kobber-button>
`;
};
