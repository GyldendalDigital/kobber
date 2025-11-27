import { AspectRatio } from "@gyldendal/kobber-components-poc/react/aspectRatio";
import type { Meta, StoryObj } from "@storybook/react";
import { reactDecorator } from "../../integrations/storybook/reactDecorator";

type Args = { aspectRatio: string };

const meta: Meta<Args> = {
  title: "Compatibility/AspectRatio",
  argTypes: {
    aspectRatio: {
      name: "aspect-ratio",
    },
  },
  decorators: [reactDecorator],
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<Args>;

const render = (args: Args) => (
  <>
    <style>
      {`
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  width: 400px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #444;
  color: white;
}
  `}
    </style>
    <div className="center">
      <div className="container">
        <AspectRatio aspectRatio={args.aspectRatio}>
          <div className="content">{args.aspectRatio}</div>
        </AspectRatio>
      </div>
    </div>
  </>
);

export const AspectRatioStory: Story = {
  render,
  name: "AspectRatio",
  args: { aspectRatio: "16/9" },
};
