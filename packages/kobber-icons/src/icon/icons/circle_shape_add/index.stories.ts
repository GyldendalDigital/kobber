import type { Args, Meta, StoryObj } from "@storybook/web-components";
import ".";

const meta: Meta = {
	title: "Icon/Icons",
	component: "icon-circle_shape_add",
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

export const circle_shape_add: Story = {
	render: (args: Args) => `
		<icon-circle_shape_add
			aria-label="${args.ariaLabel}"
		/>
	`,
};
