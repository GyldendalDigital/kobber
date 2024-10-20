import type { Meta, StoryObj } from "@storybook/web-components";
import { customElementName } from "./Accordion";
import "../button/Button";

export default {
  title: "wiki/accordion",
  component: customElementName,
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
    itemElementType: {
      options: ["none", "link", "button"],
      control: { type: "select" },
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
    <script>const clickHandler = () => console.log('clicked')</script>
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
    title: "Accordion",
    accordionCount: 2,
    itemText: "Item",
    itemElementType: "link",
    itemCount: 3,
    icon: "none",
  },
  render: args => [...Array(args.accordionCount).keys()].map((_, i) => getAccordion(args, i)).join(""),
};

const getAccordion = (args: StoryObj["args"], i: number) =>
  args &&
  `
<kobber-wiki-accordion title="${args.title + " " + (i + 1)}">
      ${[...Array(args.itemCount).keys()].map(i => getSlot(args, i)).join("")}
    </kobber-wiki-accordion>
`;

const getSlot = (args: StoryObj["args"], i: number) => {
  if (!args) return "";

  if (args.itemElementType === "link") {
    return (
      args &&
      `<kobber-wiki-list-item><a href="#">${args.itemText} ${i + 1} ${getNamedSlot(args.icon)}</a></kobber-wiki-list-item>`
    );
  }

  if (args.itemElementType === "button") {
    return (
      args &&
      `<kobber-wiki-list-item><kobber-button onclick="clickHandler()">${args.itemText} ${i + 1} ${getNamedSlot(args.icon)}</kobber-button></kobber-wiki-list-item>`
    );
  }

  return `<p>${args.itemText} ${i + 1} ${getNamedSlot(args.icon)}</p>`;
};

const getNamedSlot = (icon: string) =>
  icon === "lock"
    ? `<icon-lock_locked slot="icon" />`
    : icon === "label"
      ? `<small slot="icon" style="color:red">kommer</small>`
      : "";
