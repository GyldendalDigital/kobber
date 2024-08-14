import type { Args, Meta, StoryObj } from "@storybook/web-components";
import ".";

const meta: Meta = {
	title: "Icon/Icons",
	component: "icon-form_checked",
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

export const form_checked: Story = {
	render: (args: Args) => `
		<icon-form_checked
			aria-label="${args.ariaLabel}"
		/>
	`,
};
