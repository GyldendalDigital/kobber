import type { Meta, StoryObj } from "@storybook/web-components";
import { customElementName } from "./List";

export default {
  component: customElementName,
  argTypes: {
    direction: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
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

export const List: StoryObj = {
  args: {
    direction: "vertical",
    itemTextPrefix: "Item",
    itemCount: 3,
    icon: "none",
  },
  render: args => `
    <kobber-wiki-list direction=${args.direction}>
      ${[...Array(args.itemCount).keys()]
        .map(
          i =>
            `<kobber-wiki-list-item>${args.itemTextPrefix} ${i + 1} ${getNamedSlot(args.icon)}</kobber-wiki-list-item>`,
        )
        .join("")}
    </kobber-wiki-list>
  `,
};

const getNamedSlot = (icon: string) =>
  icon === "lock" ? `<icon-lock_locked slot="icon" />` : icon === "label" ? `<small slot="icon">kommer</small>` : "";
