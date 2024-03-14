import type { Meta, StoryObj } from "@storybook/web-components";

const colors = ["default", "info", "positive", "negative"];

const levels = ["primary", "secondary", "ghost"];

const states = ["idle", "hover", "focus", "active", "disabled"];

const meta: Meta = {
  component: "kobber-button",
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: colors,
      control: { type: "select" },
    },
    level: {
      options: levels,
      control: { type: "select" },
    },
  },
  decorators: [
    (Story, context) => `
    <kobber-theme-context theme-id=${context.globals.theme}>
      ${Story()}
    </kobber-theme-context>
    `
  ],
};

export default meta;
type Story = StoryObj;

export const Button: Story = {
  args: {
    text: "Button text",
    color: colors[0],
    level: levels[0],
  },
  render: (args) => `
    <kobber-button color=${args.color} level=${args.level}>${args.text}</kobber-button>
  `,
};


export const Buttons: Story = {
  args: {
    text: "Button text",
  },
  render: (args) => {
    const colorRow = ["", ...colors];

    return `
    <div style="display: grid; gap: 30px; grid-template-columns: repeat(${colorRow.length}, 1fr); text-align: center; margin-bottom: 10px;">
      ${colorRow.map(color => `<b>${color}</b>`).join("")}
    </div>

    <div style="display: grid; gap: 30px; grid-template-columns: repeat(${colorRow.length}, 1fr);">
      ${levels.map((level) => colorRow.map((color, colorIndex) =>
      colorIndex === 0 ?
        `<div style="display: flex; flex-direction: column; align-items: end; gap: 10px">${states.map((state, stateIndex) => `<div style="padding: 10px;">${stateIndex === 0 ? `<b>${level}</b> ${state}` : state}</div>`).join("")}</div>` :
        `<div style="display: grid; gap: 10px; grid-template-rows: repeat(${colors.length}, 1fr); justify-content: center;">${states.map((state) =>
          `<kobber-button color=${color} level=${level} class=${state} ${state === "disabled" ? state : ""}>${args.text}</kobber-button>`).join("")}
        </div>`).join("")).join("")}
    </div>
  `;
  },
};