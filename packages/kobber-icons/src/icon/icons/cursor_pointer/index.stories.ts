import type { Args, Meta, StoryObj } from "@storybook/web-components";
import ".";

const meta: Meta = {
	title: "Icon/Icons",
	component: "icon-cursor_pointer",
	args: {
		ariaLabel: "",
	},
	decorators: [
		(story, storyContext) => `
			<div class="${storyContext.globals.theme}">
				${story()}
			</div>
		`,
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const cursor_pointer: Story = {
	render: (args: Args) => `
		<icon-cursor_pointer
			aria-label="${args.ariaLabel}"
		/>
	`,
};
