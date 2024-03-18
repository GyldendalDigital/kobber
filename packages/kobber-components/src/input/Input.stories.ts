import type { Meta, StoryObj } from "@storybook/web-components"

const state = ["hover", "active", "focus", "disabled", "default"]

const meta: Meta = {
    component: "kobber-input",
    tags: ["autodocs"],
    argTypes: {
        state: {
            options: state,
            control: { type: "select" }
        }
    },
    decorators: [
        (Story, context) => `
      <kobber-theme-context theme-id=${context.globals.theme}>
          ${Story()}
      </kobber-theme-context>
    `
    ]
}

export default meta
type Story = StoryObj

export const Input: Story = {
    args: {
        label: "Input label",
        placeholder: "Input placeholder",
        errorMessage: "Error message",
        state: state[4],
        hasError: false
    },
    render: args => `
      <kobber-input state=${args.state}>${args.label}</kobber-input>
  `
}
