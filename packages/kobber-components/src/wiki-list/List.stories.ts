import type { Meta, StoryObj } from "@storybook/web-components";
import { customElementName } from "./List";

export default {
  title: "wiki/list",
  component: customElementName,
  argTypes: {
    orientation: {
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
    active: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
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
    orientation: "vertical",
    itemTextPrefix: "Item",
    itemCount: 3,
    icon: "none",
    active: false,
    disabled: false,
  },
  render: args => `
    <div style="width: 200px">
      <kobber-wiki-list orientation=${args.orientation}>
        ${[...Array(args.itemCount).keys()]
          .map(
            i =>
              `<kobber-wiki-list-item ${args.active ? "active" : ""} ${args.disabled ? "disabled" : ""}>${args.itemTextPrefix} ${i + 1} ${getNamedSlot(args.icon)}</kobber-wiki-list-item>`,
          )
          .join("")}
      </kobber-wiki-list>
    </div>
  `,
};

const getNamedSlot = (icon: string) =>
  icon === "lock"
    ? `<icon-lock_locked slot="icon" />`
    : icon === "label"
      ? `<small slot="icon" style="color:red;font-size:10px">kommer</small>`
      : "";
