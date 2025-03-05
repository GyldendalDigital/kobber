import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
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
type Story = StoryObj;

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
  },
  args: {
    text: "Label",
    size: "medium",
    theme: "aubergine",
    variant: "main",
  },
  render: args => {
    return html`<div
      style="background-color:rgb(244, 244, 244); width: 500px; display: flex; align-items: center; justify-content: center; border-radius: 0.5rem; padding: 5rem;"
    >
      ${renderLabel(args)}
    </div>`;
  },
};

export const Variants: Story = {
  render: args => {
    return html`<style>
        :root {
        }
      </style>
      <ol>
        <li>Hello</li>
      </ol> `;
  },
};

const renderLabel = (args: Args) => {
  const { size, text, theme, variant } = args;

  return html` <kobber-label size=${size} theme=${theme} variant=${variant} aria-label="label aria-label">
    ${text}
  </kobber-label>`;
};
