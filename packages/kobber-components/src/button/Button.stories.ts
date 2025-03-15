import type { Meta, StoryObj } from "@storybook/web-components";
import { primitives } from "@gyldendal/kobber-base/themes/default/tokens";
import {
  ButtonProps,
  buttonDefaultColors,
  buttonDefaultLevels,
  buttonDefaultProps,
  buttonDefaultVariants,
  buttonName,
  buttonThemeColors,
  buttonThemeLevels,
  buttonThemeVariants,
  buttonUiColors,
  buttonUiVariants,
} from "./Button.core";
import "./Button";
import "../text/heading/Heading";
import "../utils/theme-context";

const states = ["idle", "hover", "active", "focus", "disabled"] as const;

const buttonIconSettings = ["none", "right", "left"] as const;

interface Args extends ButtonProps {
  text?: string;
  state: (typeof states)[number];
  icon: (typeof buttonIconSettings)[number];
  link: boolean;
}

const buttonColors = [...buttonDefaultColors, ...buttonUiColors, ...buttonThemeColors];
const buttonVariants = [...buttonDefaultVariants, ...buttonUiVariants, ...buttonThemeVariants];
const buttonLevels = [...buttonDefaultLevels, ...buttonThemeLevels];

const meta: Meta<Args> = {
  title: "Button",
  component: buttonName,
  argTypes: {
    variant: {
      options: buttonDefaultProps,
      control: { type: "radio" },
    },
    state: {
      options: states,
      control: { type: "select" },
    },
    icon: {
      options: buttonIconSettings,
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
    variant: buttonDefaultProps[0],
    state: states[0],
    icon: buttonIconSettings[1],
    link: false,
    fullWidth: false,
  },
  parameters: {
    layout: "centered",
  },
  render: args =>
    args.fullWidth
      ? `fixed container for previewing full width button
      <div style="padding: 2rem; width: 80vw; border: 1px solid grey;">${renderButton(args)}</div>`
      : renderButton(args),
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

        kobber-heading {
          text-transform: capitalize;
        }

        .wrapper-theme {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .wrapper-color {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .wrapper-level {
          display: flex;
          flex-direction: column;
          border: 1px solid ${primitives.color.wine[250]};
          border-radius: 1rem;
          margin-bottom: 1rem;
        }

        .wrapper-variant {
          display: flex;
          padding: 0.5rem 1rem;
          gap: 0.5rem;
          border-radius: 0 0 1rem 1rem;
          align-items: center;

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
        ${buttonDefaultProps.map(variant => renderVariant({ ...args, variant })).join("")}
      </div>
    `;
  },
};

// // carmine, aubergine
// const renderColor = (args: Args) => `
// <div class="wrapper-color">
//   <kobber-heading variant="heading small" title="Kode: color, Figma: theme">${args.color}</kobber-heading>
//   ${buttonLevels.map(level => renderLevel({ ...args, level })).join("")}
// </div>
// `;

// // primary, secondary
// const renderLevel = (args: Args) => {
//   const { color, level } = args;

//   if (level === "secondary" && (color === "success" || color === "informative" || color === "warning")) {
//     return;
//   }

//   return `
// <kobber-heading variant="title small" title="Level">${level}</kobber-heading>
// <div class="wrapper-level">
//   ${buttonVariants.map(variant => renderVariant({ ...args, variant })).join("")}
// </div>
// `;
// };

// main, supplemental
const renderVariant = (args: Args) => {
  const variant = args.variant;

  return `<div class="wrapper-variant">
<small title="Variant">${variant}</small>
  ${states.map(state => renderButton({ ...args, state, text: state })).join("")}
  ${states.map(state => renderButton({ ...args, state, text: state, icon: "none" })).join("")}
  ${states.map(state => renderButton({ ...args, state })).join("")}
</div>`;
};

const renderButton = (args: Args) => {
  const {  variant, state, icon, text, link, fullWidth } = args;

  return `
<kobber-button 
  class="${state}" 
  variant="${variant}" 
  ${state === "disabled" ? "disabled" : ""} 
  ${icon === "left" ? "iconFirst" : ""} 
  ${fullWidth ? "fullWidth" : ""} 
  ${link ? "href='#' target='_blank'" : ""}
  aria-label="optional button label">
  ${text ? text : ""}
  ${icon !== "none" ? "<icon-arrow_right slot='icon' />" : ""}
</kobber-button>
`;
};
