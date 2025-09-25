import { getIconNames } from ".";

export const makeStory = (symbol: SVGSymbolElement) => {
  const iconNames = getIconNames(symbol.id);

  return `import type { Args, Meta, StoryObj } from "@storybook/web-components";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import "@gyldendal/kobber-icons/web-components";
import { html } from "lit";

initIcons();

const meta: Meta = {
  title: "Icon/Icons",
  component: "${symbol.id}",
  parameters: {
    layout: 'centered',
  },
  args: {
    ariaLabel: "",
    size: "medium",
  },
  argTypes: {
    size: { control: "inline-radio", options: ["small", "medium", "large"] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ${iconNames.unprefixed}: Story = {
  render: (args: Args) => html\`<${symbol.id} aria-label="\${args.ariaLabel}" size="\${args.size}" />\`,
};
`;
};
