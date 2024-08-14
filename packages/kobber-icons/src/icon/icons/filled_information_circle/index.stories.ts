import type { Args, Meta, StoryObj } from "@storybook/web-components";
import ".";

const meta: Meta = {
	title: "Icon/Icons",
	component: "icon-filled_information_circle",
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

export const filled_information_circle: Story = {
	render: (args: Args) => `
		<icon-filled_information_circle
			aria-label="${args.ariaLabel}"
		/>
	`,
};
