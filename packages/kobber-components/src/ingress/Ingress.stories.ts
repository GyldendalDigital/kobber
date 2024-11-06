import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "In development 🧪/Ingress",
  component: "kobber-ingress",
  tags: ["autodocs"],
  decorators: [
    (Story, context) => `
    <script>const clickHandler = () => console.log('clicked')</script>
    <kobber-theme-context theme-id=${context.globals.theme}>
      ${Story()}
    </kobber-theme-context>
    `,
  ],
};

export default meta;
type Story = StoryObj;

export const ArticleLayout: Story = {
  args: {},
};
