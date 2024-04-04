import type { Meta, StoryObj } from "@storybook/web-components";
import { customElementName } from "./Badge";

const brandColors = [
  {
    color: "#0093d2",
    title: "Multi",
  },
  {
    color: "#f49900",
    title: "Refleks",
  },
  {
    color: "#000000",
    title: "Magasin",
  },
];

const backgroundColors = brandColors.map(({ color }) => color);
const circleColors = brandColors.map(({ color }) => color);

const meta: Meta = {
  component: customElementName,
  tags: ["autodocs"],
  argTypes: {
    textColor: {
      control: { type: "color", presetColors: ["#ffffff", "#000000"] },
    },
    backgroundColor: {
      control: { type: "color", presetColors: brandColors },
    },
    circleColor: {
      control: { type: "color", presetColors: brandColors },
    },
  },
};

export default meta;
type Story = StoryObj;

type Props = Partial<typeof args>;
const args = {
  text: "Badge text",
  textColor: "#000000",
  backgroundColor: backgroundColors[0],
  circleColor: null as string | null,
};

const render = ({ text, textColor, backgroundColor, circleColor }: Props) => `
  <${customElementName} 
    text-color="${textColor}"
    background-color="${backgroundColor}"
    circle-color=${circleColor}>
    ${text}
  </${customElementName}>
`;

export const Badge: Story = {
  args,
  render,
};

export const Badges: Story = {
  args,
  render: ({ text }) => `
    <div>
      <p>With circle color</p>
      <div style="display: flex; gap: 10px; justify-content: space-between;">
        ${circleColors.map(circleColor => render({ text, circleColor })).join("")}
      </div>
        
      <p>With background color</p>
      <div style="display: flex; gap: 10px; justify-content: space-between;">
        ${backgroundColors.map(backgroundColor => render({ text, backgroundColor })).join("")}
      </div>
    </div>
  `,
};
