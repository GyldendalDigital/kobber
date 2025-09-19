import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { textBlockThemes, textBlockThemeVariants } from "./TextBlock.core";
import "./TextBlock";
import "../badge-icon/BadgeIcon";
import "../text/heading/Heading";
import { html } from "lit";
import "../theme-context-provider/ThemeContext";
import "@gyldendal/kobber-icons/web-components";
import { init as initComponents } from "../base/init";
import { init as initIcons } from "@gyldendal/kobber-icons/init";

initComponents();
initIcons();

const meta: Meta = {
  component: "kobber-textBlock",
  title: "Text Block",
  argTypes: {
    textBlockTheme: {
      options: textBlockThemes,
      control: { type: "inline-radio" },
    },
    textBlockThemeVariant: {
      options: textBlockThemeVariants,
      control: { type: "inline-radio" },
    },
  },
  decorators: [
    (Story, context) => html`
      <kobber-theme-context theme-id=${context.globals.theme}> ${Story()} </kobber-theme-context>
    `,
  ],
};

export default meta;
type Story = StoryObj;

export const TextBlock: Story = {
  args: {
    textBlockTheme: textBlockThemes[0],
    textBlockThemeVariant: textBlockThemeVariants[0],
  },
  render: args => html`
    <kobber-text-block color-theme="${args.textBlockTheme}" color-theme-variant="${args.textBlockThemeVariant}">
      <kobber-badge-icon color-variant="${args.textBlockTheme}" slot="badge">
        <kobber-pencil slot="icon"></kobber-pencil>
        Badge text
      </kobber-badge-icon>
      <kobber-heading>Kobber</kobber-heading>
      <h1>Variant: ${args.textBlockTheme}</h1>
      <p>Title</p>
      <p>Body text here.</p>
      <ol>
        <li>Pkt 1.</li>
        <li>Pkt 2.</li>
      </ol>
    </kobber-text-block>
  `,
};
