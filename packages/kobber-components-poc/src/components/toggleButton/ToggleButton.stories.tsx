import { toggleButtonApi } from "@gyldendal/kobber-components-poc/api/toggleButton";
import type { Meta, StoryObj } from "@storybook/react";
import { reactDecorator } from "../../integrations/storybook/reactDecorator";

type Args = Parameters<typeof toggleButtonApi>[0];

const meta: Meta<Args> = {
  title: "Examples/ToggleButton",
  decorators: [reactDecorator],
};

export default meta;

type Story = StoryObj<Args>;

const render = ({ isActive }: Args) => {
  const api = toggleButtonApi({ isActive });
  return (
    <button type="button" className={api.root.className}>
      Button
    </button>
  );
};

export const AspectRatioStory: Story = {
  render,
  name: "Api example",
  args: { isActive: false },
};
