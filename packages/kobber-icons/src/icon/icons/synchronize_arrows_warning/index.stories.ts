import type { Args, Meta, StoryObj } from "@storybook/web-components";
import ".";

const meta: Meta = {
	title: "Icon/Icons",
	component: "icon-synchronize_arrows_warning",
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

export const synchronize_arrows_warning: Story = {
	render: (args: Args) => `
		<icon-synchronize_arrows_warning
			aria-label="${args.ariaLabel}"
		/>
	`,
};
