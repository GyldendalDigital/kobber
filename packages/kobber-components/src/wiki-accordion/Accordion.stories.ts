import type { Meta, StoryObj } from "@storybook/web-components";
import { customElementName } from "./Accordion";

export default {
  title: "wiki/accordion",
  component: customElementName,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    itemTextPrefix: {
      control: { type: "text" },
    },
    itemCount: {
      control: { type: "range", min: 0, max: 20 },
    },
    icon: {
      options: ["none", "lock", "label"],
      control: { type: "select" },
    },
  },
  decorators: [
    (Story, context) => `
    <kobber-theme-context theme-id=${context.globals.theme}>
      ${Story()}
    </kobber-theme-context>`,
  ],
} satisfies Meta;

export const Accordion: StoryObj = {
  parameters: {
    layout: "none",
  },
  args: {
    title: "Trekkspilltittel",
    itemTextPrefix: "Item",
    itemCount: 3,
    icon: "none",
  },
  render: args => `
    <kobber-wiki-accordion title="${args.title}">
      ${[...Array(args.itemCount).keys()]
        .map(
          i =>
            `<kobber-wiki-list-item>${args.itemTextPrefix} ${i + 1} ${getNamedSlot(args.icon)}</kobber-wiki-list-item>`,
        )
        .join("")}
    </kobber-wiki-accordion>
    <kobber-wiki-accordion title="${args.title} 2">
      ${[...Array(args.itemCount).keys()]
        .map(
          i =>
            `<kobber-wiki-list-item>${args.itemTextPrefix} ${i + 1} ${getNamedSlot(args.icon)}</kobber-wiki-list-item>`,
        )
        .join("")}
    </kobber-wiki-accordion>
  `,
};

const getNamedSlot = (icon: string) =>
  icon === "lock"
    ? `<icon-lock_locked slot="icon" />`
    : icon === "label"
      ? `<small slot="icon" style="color:red">kommer</small>`
      : "";
