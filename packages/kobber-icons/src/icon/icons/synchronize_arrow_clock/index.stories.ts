import type { Args, Meta, StoryObj } from "@storybook/web-components";
import ".";

const meta: Meta = {
	title: "Icon/Icons",
	component: "icon-synchronize_arrow_clock",
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

export const synchronize_arrow_clock: Story = {
	render: (args: Args) => `
		<icon-synchronize_arrow_clock
			aria-label="${args.ariaLabel}"
		/>
	`,
};
