import type { Meta, StoryObj } from "@storybook/web-components";
import { primitives } from "@gyldendal/kobber-base/themes/default/tokens";
import { buttonColors, buttonVariants, buttonLevels, ButtonProps, hasSupplementalAlt } from "./Button.core";
import "./Button";
import "../utils/theme-context";

const states = ["idle", "hover", "active", "focus", "disabled"] as const;

type ButtonIcon = "none" | "right" | "left";

interface Args extends ButtonProps {
  text?: string;
  state: (typeof states)[number];
  icon: ButtonIcon;
  link: boolean;
}

const meta: Meta<Args> = {
  title: "In development 🧪/Button",
  component: "kobber-button",
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
    link: {
      control: { type: "boolean" },
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

export const Button: StoryObj<Args> = {
  args: {
    text: "Button text",
    color: meta.argTypes?.color?.options?.[0],
    variant: buttonVariants[0],
    level: buttonLevels[0],
    state: states[0],
    icon: "right",
    link: false,
  },
  render: args => renderButton(args),
};

export const Buttons: StoryObj<Args> = {
  parameters: {
    layout: "none",
    controls: {
      exclude: /^(?!.*(icon|link)).*/g,
    },
  },
  args: {
    icon: "right",
    link: false,
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
        ${buttonColors.map(color => renderColor({ ...args, color })).join("")}
      </div>
    `;
  },
};

// carmine, aubergine
const renderColor = (args: Args) => `
<div class="wrapper-color">
  ${buttonLevels.map(level => renderLevel({ ...args, level })).join("")}
</div>
`;

// primary, secondary
const renderLevel = (args: Args) => {
  const { color, level } = args;

  if (level === "secondary" && (color === "success" || color === "informative" || color === "warning")) {
    return;
  }

  return `<div class="wrapper-level">${buttonVariants
    .map(variant => renderVariant({ ...args, variant }))
    .join("")}</div>`;
};

// main, supplemental
const renderVariant = (args: Args) => {
  const { color, variant, level } = args;

  if (!variant || (variant === "supplemental alt" && !hasSupplementalAlt(color))) {
    return;
  }

  return `<div class="wrapper-variant ${variant.replace(" ", "-")} ${level}">
<small>${color}<br />${variant}<br />${level}</small>
  ${states.map(state => renderButton({ ...args, state, text: state })).join("")}
  ${states.map(state => renderButton({ ...args, state, text: state, icon: "none" })).join("")}
  ${states.map(state => renderButton({ ...args, state })).join("")}
</div>`;
};

const renderButton = (args: Args) => {
  const { color, variant, level, state, icon, text, link } = args;

  return `
<kobber-button 
  class="${state}" 
  color="${color}" 
  variant="${variant}" 
  level="${level}" 
  ${state === "disabled" ? "disabled" : ""} 
  ${icon === "left" ? "iconFirst" : ""} 
  ${link ? "href='#' target='_blank'" : undefined}"
  aria-label="optional button label">
  ${text ? text : ""}
  ${icon !== "none" ? "<icon-arrow_right slot='icon' />" : ""}
</kobber-button>
`;
};
