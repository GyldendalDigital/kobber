import { navBarApi } from "@gyldendal/kobber-components-poc/api/navBar";
import { NavBar } from "@gyldendal/kobber-components-poc/react/navBar";
import type { Meta, StoryObj } from "@storybook/react";
import { reactDecorator } from "../../integrations/storybook/reactDecorator";

type Args = Parameters<typeof navBarApi>[0];

const meta: Meta<Args> = {
  title: "Examples/NavBar",
  decorators: [reactDecorator],
};

export default meta;

type Story = StoryObj<Args>;

const content = () => (
  <>
    <div>⬅️</div>
    <div style={{ flexGrow: 1 }}>Tittel</div>
    <div>⚡❌✔️♻️</div>
  </>
);

export const ApiStory: Story = {
  render: ({ isContextual }: Args) => {
    const api = navBarApi({ isContextual });
    return <div className={api.root.className}>{content()}</div>;
  },
  args: { isContextual: false },
};

export const ReactStory: Story = {
  render: ({ isContextual }: Args) => {
    return (
      <NavBar isContextual={isContextual} className="custom-class">
        {content()}
      </NavBar>
    );
  },
  args: { isContextual: false },
};
