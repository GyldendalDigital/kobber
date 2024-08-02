import type { Args, Meta, StoryObj } from "@storybook/web-components";
import ".";

const meta: Meta = {
	title: "Icon/Icons",
	component: "icon-folder_bookmark",
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

export const folder_bookmark: Story = {
	render: (args: Args) => `
		<icon-folder_bookmark
			aria-label="${args.ariaLabel}"
		/>
	`,
};
