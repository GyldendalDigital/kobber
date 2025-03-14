import { getIconNames } from ".";

export const makeStory = (symbol: SVGSymbolElement) => {
  const iconNames = getIconNames(symbol.id);

  return `import type { Args, Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Icon/Icons",
  component: "${symbol.id}",
  parameters: {
    layout: 'centered',
  },
  args: {
    ariaLabel: "",
    size: "regular",
  },
  argTypes: {
    size: { control: "inline-radio", options: ["small", "regular", "big"] },
  },
  decorators: [
    (story, storyContext) => \`
      <div class="\${storyContext.globals.theme}">
        \${story()}
      </div>
    \`,
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ${iconNames.unprefixed}: Story = {
  render: (args: Args) => \`
    <${symbol.id} aria-label="\${args.ariaLabel}" size="\${args.size}" />
  \`,
};
`;
};
