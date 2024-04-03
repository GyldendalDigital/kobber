import type { Meta, StoryObj } from "@storybook/web-components";
import { customElementName } from "./ListVertical";
import "./ListHorizontal";

export default {
  component: customElementName,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (story, storyContext) => `
    <div 
      style="display: grid; grid-template-columns: repeat(3, 200px)"
      class="${storyContext.globals.theme}"
    >
      ${story()}
    </div>`,
  ],
} satisfies Meta;

export const ListVertical: StoryObj = {
  args: {},
  render: () => `
    <kobber-list-vertical>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </kobber-list-vertical>
  `,
};

export const ListHorizontal: StoryObj = {
  args: {},
  render: () => `
    <kobber-list-horizontal>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </kobber-list-horizontal>
  `,
};
