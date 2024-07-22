import type { Args, Meta, StoryObj } from "@storybook/web-components";
import ".";

const meta: Meta = {
	title: "Icon/Icons",
	component: "icon-synchronize__arrows__square",
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

export const synchronize__arrows__square: Story = {
	render: (args: Args) => `
		<icon-synchronize__arrows__square
			aria-label="${args.ariaLabel}"
		/>
	`,
};
