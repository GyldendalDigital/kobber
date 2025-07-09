import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { ButtonProps, buttonDefaultProps, buttonName, buttonThemeProps, buttonUiProps } from "./Button.core";
import "./Button";
import "../text/heading/Heading";
import "../theme-context-provider/ThemeContext";
import { init as initComponents } from "../base/init";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import "@gyldendal/kobber-icons/web-components";

initComponents();
initIcons();

const states = ["idle", "hover", "active", "focus", "disabled"] as const;

const buttonIconSettings = ["none", "right", "left"] as const;

interface Args extends ButtonProps {
  text?: string;
  state: (typeof states)[number];
  icon: (typeof buttonIconSettings)[number];
  link: boolean;
}

const buttonProps = [...buttonDefaultProps, ...buttonUiProps, ...buttonThemeProps];

const meta: Meta<Args> = {
  component: buttonName,
  argTypes: {
    variant: {
      options: buttonProps,
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
      <style>
        .wrapper-variant {
          display: flex;
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
        Primary
        ${buttonDefaultProps
          .filter(variant => variant.includes("primary"))
          .map(variant => renderVariant({ ...args, variant }))
          .join("")}
        
        <br />
        Secondary
        ${buttonDefaultProps
          .filter(variant => variant.includes("secondary"))
          .map(variant => renderVariant({ ...args, variant }))
          .join("")}

        <br />
        Tertiary
        ${buttonDefaultProps
          .filter(variant => variant.includes("tertiary"))
          .map(variant => renderVariant({ ...args, variant }))
          .join("")}
    `;
  },
};

export const UiButtons: StoryObj<Args> = {
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
      ${buttonUiProps.map(variant => renderVariant({ ...args, variant })).join("")}
    `;
  },
};

export const ThemeButtons: StoryObj<Args> = {
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
        Primary
        ${buttonThemeProps
          .filter(variant => variant.includes("primary"))
          .map(variant => renderVariant({ ...args, variant }))
          .join("")}
        
        <br />
        Secondary
        ${buttonThemeProps
          .filter(variant => variant.includes("secondary"))
          .map(variant => renderVariant({ ...args, variant }))
          .join("")}
    `;
  },
};

const renderVariant = (args: Args) => {
  return `<div class="wrapper-variant">
<small title="Variant">${args.variant?.replaceAll("-", "<br />")}</small>
  ${states.map(state => renderButton({ ...args, state, text: state })).join("")}
  ${states.map(state => renderButton({ ...args, state, text: state, icon: "none" })).join("")}
  ${states.map(state => renderButton({ ...args, state })).join("")}
</div>`;
};

const renderButton = (args: Args) => {
  const { variant, state, icon, text, link, fullWidth } = args;

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
  ${icon !== "none" ? "<kobber-arrow_right slot='icon' />" : ""}
</kobber-button>
`;
};
