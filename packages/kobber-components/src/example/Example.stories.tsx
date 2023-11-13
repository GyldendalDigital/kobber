import { Example } from "./Example";
import { Meta, StoryObj } from "@storybook/react";

/** JSDoc på story */
export const Primary: Story = {
  args: {
    message: "En triviell beskjed uten bakgrunnsfarge",
  },
};

export const Secondary: Story = {
  args: {
    message: "En viktig beskjed med bakgrunnsfarge!",
    backgroundColor: "violet"
  },
};

/** CREATING NEW STORIES
 * - Copy paste the rest of this file
 * - Replace Example with your component
 */
const C = Example;
type T = typeof C;
type M = Meta<T>;
type Story = StoryObj<T>;

/** JSDoc på metadata */
export default {
  component: C,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies M;
