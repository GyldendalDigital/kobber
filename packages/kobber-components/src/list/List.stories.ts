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
  },
  decorators: [
    (story, storyContext) => `
    <div class="${storyContext.globals.theme}">
      ${story()}
    </div>`,
  ],
} satisfies Meta;

export const List: StoryObj = {
  args: {
    direction: "vertical",
    itemTextPrefix: "Item",
    itemCount: 3,
  },
  render: args => `
    <kobber-list direction=${args.direction}>
      ${[...Array(args.itemCount).keys()]
        .map(i => `<kobber-list-item>${args.itemTextPrefix} ${i + 1}</kobber-list-item>`)
        .join("")}
    </kobber-list>
  `,
};
