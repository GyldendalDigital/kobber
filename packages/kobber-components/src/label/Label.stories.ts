import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./Label";
import { labelName, LabelProps, labelSizes, labelThemes, labelVariants } from "./Label.core";

interface Args extends LabelProps {
  text?: string;
}

const meta: Meta = {
  title: "Label",
  component: labelName,
  decorators: [
    (Story, context) => html`<kobber-theme-context theme-id=${context.globals.theme}>${Story()}</kobber-theme-context>`,
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Label: StoryObj<Args> = {
  argTypes: {
    size: {
      options: labelSizes,
      control: { type: "select" },
    },
    theme: {
      options: labelThemes,
      control: { type: "select" },
    },
    variant: {
      options: labelVariants,
      control: { type: "select" },
    },
    showStatusCircle: {
      control: { type: "boolean" },
    },
  },
  args: {
    text: "Label",
    size: "medium",
    theme: "aubergine",
    variant: "main",
    showStatusCircle: true,
    disabled: false,
  },
  render: args => {
    return html`${renderLabel(args)}`;
  },
};

const renderLabel = (args: Args) => {
  const { size, text, theme, variant, showStatusCircle, disabled } = args;

  return html` <kobber-label
    size=${size}
    theme=${theme}
    variant=${variant}
    ?showStatusCircle=${showStatusCircle}
    aria-label="Hello world"
    disabled=${disabled}
  >
    ${text}
  </kobber-label>`;
};
