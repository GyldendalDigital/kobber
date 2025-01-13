import type { Meta, StoryObj } from "@storybook/web-components";
import { listName, ListProps } from "./List.core";
import "./List";
import "../utils/theme-context";

const states = ["idle", "hover", "active", "focus", "disabled"] as const;

const buttonIconSettings = ["none", "lock", "label"] as const;

interface Args extends ListProps {
  text?: string;
  icon: (typeof buttonIconSettings)[number];
}

export default {
  title: "kobber.gyldendal.no/List",
  component: listName,
  argTypes: {
    orientation: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
    icon: {
      options: buttonIconSettings,
      control: { type: "select" },
    },
  },
  decorators: [
    (Story, context) => `
    <kobber-theme-context theme-id=${context.globals.theme}>
      ${Story()}
    </kobber-theme-context>`,
  ],
} satisfies Meta<Args>;

export const List: StoryObj<Args> = {
  args: {
    text: "",
    orientation: "vertical",
    icon: "none",
  },
  render: args => `
    <div style="width: 200px">
      <kobber-list orientation=${args.orientation}>
        ${states
          .map(
            state =>
              `<kobber-list-item ${state} class="${state}">${args.text || state} ${getNamedSlot(args.icon)}</kobber-list-item>`,
          )
          .join("")}
      </kobber-list>
    </div>
  `,
};

const getNamedSlot = (icon: string) =>
  icon === "lock"
    ? `<icon-lock_locked slot="icon" />`
    : icon === "label"
      ? `<small slot="icon" style="color:red;font-size:10px">kommer</small>`
      : "";
