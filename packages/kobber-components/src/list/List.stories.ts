import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { ListOrientations, type ListProps, listName } from "./List.core";
import "./List";
import "../theme-context-provider/ThemeContext";
import { html } from "lit";
import { init as initComponents } from "../base/init";

initComponents();

const states = ["idle", "hover", "active", "focus", "disabled"] as const;

const buttonIconSettings = ["none", "lock", "label"] as const;

interface Args extends ListProps {
  itemText?: string;
  itemCount: number;
  icon: (typeof buttonIconSettings)[number];
}

export default {
  title: "kobber.gyldendal.no/List",
  component: listName,
  argTypes: {
    orientation: {
      options: ListOrientations,
      control: { type: "select" },
    },
    itemCount: {
      control: { type: "range", min: 0, max: 20 },
    },
    icon: {
      options: buttonIconSettings,
      control: { type: "select" },
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<Args>;

export const List: StoryObj<Args> = {
  args: {
    itemText: "List item",
    itemCount: 3,
    orientation: "vertical",
    icon: "none",
  },
  render: args =>
    html`
      <kobber-list orientation=${args.orientation}>
        ${[...Array(args.itemCount).keys()].map(
          i =>
            html`
            <kobber-list-item>
              ${args.itemText} ${i + 1} ${getNamedSlot(args.icon)}
            </kobber-list-item>
            `,
        )}
      </kobber-list>
      `,
};

export const Lists: StoryObj<Args> = {
  args: {
    itemText: "",
    orientation: "vertical",
    icon: "none",
  },
  render: args => html`
      <kobber-list orientation=${args.orientation}>
        ${states.map(
          state => html`
          <kobber-list-item ${state} class="${state}">
            ${args.itemText || state} ${getNamedSlot(args.icon)}
          </kobber-list-item>
          `,
        )}
      </kobber-list>
  `,
};

const getNamedSlot = (icon: string) =>
  icon === "lock"
    ? html`<kobber-lock_locked slot="icon" />`
    : icon === "label"
      ? html`<small slot="icon" style="color:red;font-size:10px">kommer</small>`
      : "";
