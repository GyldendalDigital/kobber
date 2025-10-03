import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { accordionName, type AccordionProps } from "./Accordion.core";
import "../accordion/Accordion";
import { init as initComponents } from "../base/init";
import { html } from "lit";

initComponents();

interface Args extends AccordionProps {
  title: string;
  accordionCount: number;
  itemText: string;
  itemCount: number;
  icon: "none" | "lock" | "label";
}

export default {
  title: "kobber.gyldendal.no/Accordion",
  component: accordionName,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    accordionCount: {
      control: { type: "range", min: 1, max: 10 },
    },
    itemText: {
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
    (story, _) => html`
    <div style="display: flex; flex-direction: column; align-items: center;">
        ${story()}
    </div>`,
  ],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<Args>;

export const Accordion: StoryObj<Args> = {
  args: {
    title: "Accordion",
    accordionCount: 2,
    itemText: "Item",
    itemCount: 3,
    icon: "none",
  },
  render: args =>
    html`${[...Array(args.accordionCount).keys()].map((_, i) => getAccordion(args, i))}`,
};

const getAccordion = (args: StoryObj["args"], i: number) =>
  args
    ? html`
    <kobber-accordion title="${`${args.title} ${i + 1}`}">
      ${[...Array(args.itemCount).keys()].map(i => getSlot(args, i))}
    </kobber-accordion>
`
    : html``;

const getSlot = (args: StoryObj["args"], i: number) => {
  if (!args) return "";

  return html`
      <kobber-list-item>
        ${args.itemText} ${i + 1}${getIconSlot(args.icon)}
      </kobber-list-item>
      `;
};

const getIconSlot = (icon: string) =>
  icon === "lock"
    ? html` <kobber-lock_locked slot="icon" />`
    : icon === "label"
      ? html` <small slot="icon" style="color:red">kommer</small>`
      : "";
